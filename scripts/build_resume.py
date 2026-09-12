"""Build the downloadable resume from Kerk's original resume template."""

from __future__ import annotations

from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile
import hashlib
import shutil
import sys
import tempfile

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_TAB_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor


DEFAULT_TEMPLATE = Path("/Users/KERK_Zhi_Sheng/Downloads/Resume - Kerk Zhi Sheng.docx")
EXPECTED_TEMPLATE_SHA256 = "dac8d03db16337fc2a712d4b21697bedb7641ab6476f0d0202f11cbeea9e702f"
DEFAULT_OUTPUT = Path("public/Kerk_Zhi_Sheng_Resume.docx")
PRESERVE_PARTS = {
    "[Content_Types].xml",
    "_rels/.rels",
    "customXML/_rels/item1.xml.rels",
    "customXML/item1.xml",
    "customXML/itemProps1.xml",
    "word/_rels/document.xml.rels",
    "word/_rels/fontTable.xml.rels",
    "word/fontTable.xml",
    "word/fonts/NotoSansSymbols-bold.ttf",
    "word/fonts/NotoSansSymbols-regular.ttf",
    "word/footer1.xml",
    "word/footer2.xml",
    "word/footer3.xml",
    "word/header1.xml",
    "word/header2.xml",
    "word/header3.xml",
    "word/media/image1.png",
    "word/numbering.xml",
    "word/settings.xml",
    "word/styles.xml",
    "word/theme/theme1.xml",
}


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def clear_after_header(doc: Document) -> None:
    """Keep the source name, rule, contact row, and spacer; replace the body."""
    body = doc._element.body
    section_properties = body.sectPr
    children = list(body)
    for child in children[3:]:
        if child is not section_properties:
            body.remove(child)


def set_run(run, *, bold: bool | None = None, size: float = 11.2) -> None:
    run.font.name = "Times New Roman"
    run.font.size = Pt(size)
    run.font.color.rgb = RGBColor(0, 0, 0)
    if bold is not None:
        run.bold = bold


def set_body_paragraph(paragraph, *, after: float = 3, keep_next: bool = False) -> None:
    paragraph.paragraph_format.space_before = Pt(0)
    paragraph.paragraph_format.space_after = Pt(after)
    paragraph.paragraph_format.line_spacing = 1.05
    paragraph.paragraph_format.keep_with_next = keep_next
    paragraph.paragraph_format.widow_control = True


def add_section_heading(doc: Document, label: str) -> None:
    paragraph = doc.add_paragraph()
    paragraph.paragraph_format.space_before = Pt(9)
    paragraph.paragraph_format.space_after = Pt(5)
    paragraph.paragraph_format.line_spacing = 1.05
    paragraph.paragraph_format.keep_with_next = True
    run = paragraph.add_run(label.upper())
    set_run(run, bold=True, size=11.5)
    run.underline = True


def add_header_row(doc: Document, label: str, dates: str) -> None:
    paragraph = doc.add_paragraph()
    set_body_paragraph(paragraph, after=2, keep_next=True)
    paragraph.paragraph_format.tab_stops.add_tab_stop(Inches(7.15), WD_TAB_ALIGNMENT.RIGHT)
    label_run = paragraph.add_run(label)
    set_run(label_run, bold=True, size=11.2)
    paragraph.add_run("\t")
    date_run = paragraph.add_run(dates)
    set_run(date_run, bold=True, size=11.2)


def add_plain_paragraph(doc: Document, text: str, *, after: float = 4) -> None:
    paragraph = doc.add_paragraph()
    set_body_paragraph(paragraph, after=after)
    paragraph.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    set_run(paragraph.add_run(text), size=11.0)


def add_numbering(paragraph, *, num_id: int = 4, level: int = 0) -> None:
    paragraph_properties = paragraph._p.get_or_add_pPr()
    numbering_properties = paragraph_properties.find(qn("w:numPr"))
    if numbering_properties is None:
        numbering_properties = OxmlElement("w:numPr")
        paragraph_properties.insert(0, numbering_properties)
    level_node = OxmlElement("w:ilvl")
    level_node.set(qn("w:val"), str(level))
    num_node = OxmlElement("w:numId")
    num_node.set(qn("w:val"), str(num_id))
    numbering_properties.append(level_node)
    numbering_properties.append(num_node)


def add_bullet(doc: Document, text: str, *, after: float = 3.5, bold_lead: str | None = None) -> None:
    paragraph = doc.add_paragraph()
    set_body_paragraph(paragraph, after=after)
    paragraph.paragraph_format.left_indent = Inches(0.25)
    paragraph.paragraph_format.first_line_indent = Inches(-0.25)
    paragraph.alignment = WD_ALIGN_PARAGRAPH.LEFT
    add_numbering(paragraph, num_id=4, level=0)
    if bold_lead:
        lead = paragraph.add_run(bold_lead)
        set_run(lead, bold=True, size=11.0)
    set_run(paragraph.add_run(text), size=11.0)


def restore_preserve_only_parts(reference: Path, generated: Path) -> None:
    """Restore template-owned package parts byte-for-byte after python-docx saves."""
    with ZipFile(reference) as reference_zip, ZipFile(generated) as generated_zip:
        generated_parts = {name: generated_zip.read(name) for name in generated_zip.namelist()}
        for part in PRESERVE_PARTS:
            generated_parts[part] = reference_zip.read(part)

    with tempfile.NamedTemporaryFile(suffix=".docx", delete=False) as handle:
        temporary_path = Path(handle.name)
    try:
        with ZipFile(temporary_path, "w", ZIP_DEFLATED) as output_zip:
            for name, data in generated_parts.items():
                output_zip.writestr(name, data)
        shutil.move(temporary_path, generated)
    finally:
        temporary_path.unlink(missing_ok=True)


def build_resume(output_path: Path, template_path: Path = DEFAULT_TEMPLATE) -> None:
    if not template_path.exists():
        raise FileNotFoundError(f"Resume template not found: {template_path}")
    template_hash = sha256(template_path)
    if template_hash != EXPECTED_TEMPLATE_SHA256:
        raise ValueError(f"Template changed unexpectedly: {template_hash}")

    output_path.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(template_path, output_path)
    doc = Document(output_path)
    clear_after_header(doc)

    contact = doc.paragraphs[1]
    contact.paragraph_format.space_after = Pt(3)
    contact.paragraph_format.tab_stops.add_tab_stop(Inches(3.0), WD_TAB_ALIGNMENT.LEFT)
    contact.text = "Email: zhishengkerk@gmail.com\tMobile: +65 8188 7419"
    for run in contact.runs:
        set_run(run, size=11.2)

    add_section_heading(doc, "Education")
    add_header_row(doc, "National University of Singapore (NUS)", "Aug 2018 to May 2022")
    add_bullet(doc, "Bachelor of Engineering, Industrial and Systems Engineering")

    add_section_heading(doc, "Work Experience")
    add_header_row(doc, "GovTech  |  Data and AI Engineer", "2024 to Present")
    add_plain_paragraph(
        doc,
        "I design and ship internal AI products from the data model through to the operating workflow. Two applications are in production today, with more progressing through user acceptance testing.",
        after=4,
    )
    for bullet in [
        "Built a channel-agnostic multi-agent triage platform with configurable pipelines, knowledge-base matching, confidence thresholds, automated replies, human escalation, and auditable state.",
        "Designed an AI-enabled workspace that combines ticket proposals, Kanban workflows, configurable agent profiles, permission boundaries, and cross-workspace operations.",
        "Applied data engineering principles to production readiness through intentional schemas, dependable persistence, traceable agent decisions, and maintainable integration boundaries.",
        "Developed an internal real-time pose-detection engine with MediaPipe, together with operational dashboards and Databricks pipelines for production workflows.",
        "Presented an internal Databricks brown-bag session on Genie agents and Genie Code, and participated in internal forums and hackathons to share practical AI adoption patterns.",
    ]:
        add_bullet(doc, bullet)

    add_header_row(doc, "Micron Technology  |  Data Science Engineer", "Jun 2022 to 2025")
    for bullet in [
        "Led supply-chain optimization work for tactical planning and planned-order firming, including improvements that delivered an additional 2-5% cost saving for assembly products while preserving order constraints.",
        "Built and maintained more than 40 data pipelines and automation flows, together with more than 60 trusted tables for optimization, planning reports, and raw-material health analysis.",
        "Led the Planned Order Firming migration to Snowflake and automated the end-to-end workflow, saving more than 80 hours each week.",
        "Scaled product-assembly re-entrance reporting across product groups, contributing a further 20 hours of weekly time savings.",
        "Directed equipment performance-to-model tracking and coordinated data engineers building reliable sources for model-accuracy analysis.",
    ]:
        add_bullet(doc, bullet)

    add_header_row(doc, "National University of Singapore  |  Research Intern", "May to Aug 2021")
    for bullet in [
        "Conducted a technology scan of PSA's operating context and assessed technologies with potential strategic value.",
        "Supported a Huawei warehouse-simulation project by refining entity-flow diagrams and defining grid-based path-mover behaviour.",
        "Implemented the XML backbone that translated warehouse process flows into the simulation model.",
    ]:
        add_bullet(doc, bullet)

    add_section_heading(doc, "Selected AI and Data Products")
    add_header_row(doc, "Multi-agent triage platform", "Production  |  Internal")
    add_bullet(
        doc,
        "Classifies unstructured requests, retrieves governed knowledge, scores confidence, and routes each case to an automated response or human review. Versioned knowledge and audit records keep decisions explainable and recoverable.",
    )
    add_header_row(doc, "AI workspace platform", "Production  |  Internal")
    add_bullet(
        doc,
        "Connects AI-assisted ticket proposals with Kanban operations and configurable agents. A durable relational model for workspaces, permissions, tickets, and events supports controlled growth.",
    )
    add_header_row(doc, "AI talent matching", "UAT  |  Internal")
    add_bullet(
        doc,
        "Pairs vector similarity with governed identity and role data so recommendations remain explainable and grounded in trusted records.",
    )
    add_header_row(doc, "Operational analytics platform", "UAT  |  Internal")
    add_bullet(
        doc,
        "Combines streaming data, anomaly detection, drill-down analysis, and audit trails with freshness checks, lineage, and reproducible transformations.",
    )

    add_section_heading(doc, "Certifications")
    add_bullet(doc, "Databricks Certified Data Engineer Associate, Credential 166618858, valid Nov 2025 to Nov 2027")
    add_bullet(doc, "DART AI for Cybersecurity Practitioners, earned 31 Aug 2026")
    add_bullet(doc, "AI Singapore AI for Industry® Literacy in AI, ID 32518583, earned 16 May 2021")

    add_section_heading(doc, "Skills")
    add_bullet(doc, "LLM orchestration, multi-agent systems, retrieval-augmented generation, and AI agents", bold_lead="AI systems: ")
    add_bullet(doc, "Databricks, Snowflake, PostgreSQL, NiFi, SQL, and ETL", bold_lead="Data platforms: ")
    add_bullet(doc, "TypeScript, React, Next.js, Node.js, and Docker", bold_lead="Product engineering: ")
    add_bullet(doc, "Python, Tableau, R, optimization, and simulation", bold_lead="Analytics: ")

    doc.save(output_path)
    restore_preserve_only_parts(template_path, output_path)


if __name__ == "__main__":
    destination = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_OUTPUT
    source = Path(sys.argv[2]) if len(sys.argv) > 2 else DEFAULT_TEMPLATE
    build_resume(destination, source)
