"""Build the downloadable resume used by the portfolio site."""

from pathlib import Path
import sys

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor


ACCENT = "0E7490"
INK = RGBColor(24, 24, 27)
MUTED = RGBColor(82, 82, 91)
SOFT = "F4F4F5"


def set_cell_shading(cell, fill: str) -> None:
    tc_pr = cell._tc.get_or_add_tcPr()
    shd = tc_pr.find(qn("w:shd"))
    if shd is None:
        shd = OxmlElement("w:shd")
        tc_pr.append(shd)
    shd.set(qn("w:fill"), fill)


def set_cell_margins(cell, top=90, start=120, bottom=90, end=120) -> None:
    tc = cell._tc
    tc_pr = tc.get_or_add_tcPr()
    tc_mar = tc_pr.first_child_found_in("w:tcMar")
    if tc_mar is None:
        tc_mar = OxmlElement("w:tcMar")
        tc_pr.append(tc_mar)
    for margin, value in (("top", top), ("start", start), ("bottom", bottom), ("end", end)):
        node = tc_mar.find(qn(f"w:{margin}"))
        if node is None:
            node = OxmlElement(f"w:{margin}")
            tc_mar.append(node)
        node.set(qn("w:w"), str(value))
        node.set(qn("w:type"), "dxa")


def set_table_borders(table, color="D4D4D8", size="4") -> None:
    tbl_pr = table._tbl.tblPr
    borders = tbl_pr.first_child_found_in("w:tblBorders")
    if borders is None:
        borders = OxmlElement("w:tblBorders")
        tbl_pr.append(borders)
    for edge in ("top", "left", "bottom", "right", "insideH", "insideV"):
        tag = f"w:{edge}"
        element = borders.find(qn(tag))
        if element is None:
            element = OxmlElement(tag)
            borders.append(element)
        element.set(qn("w:val"), "single")
        element.set(qn("w:sz"), size)
        element.set(qn("w:color"), color)


def add_bottom_rule(paragraph, color=ACCENT, size="10") -> None:
    p_pr = paragraph._p.get_or_add_pPr()
    p_bdr = p_pr.find(qn("w:pBdr"))
    if p_bdr is None:
        p_bdr = OxmlElement("w:pBdr")
        p_pr.append(p_bdr)
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), size)
    bottom.set(qn("w:space"), "5")
    bottom.set(qn("w:color"), color)
    p_bdr.append(bottom)


def add_section_heading(doc: Document, label: str) -> None:
    paragraph = doc.add_paragraph()
    paragraph.paragraph_format.space_before = Pt(8)
    paragraph.paragraph_format.space_after = Pt(5)
    paragraph.paragraph_format.keep_with_next = True
    run = paragraph.add_run(label.upper())
    run.font.name = "Aptos Display"
    run.font.size = Pt(11.5)
    run.font.bold = True
    run.font.color.rgb = INK
    run.font.letter_spacing = Pt(0.7)
    add_bottom_rule(paragraph)


def add_role_header(doc: Document, role: str, organisation: str, dates: str) -> None:
    table = doc.add_table(rows=1, cols=2)
    table.autofit = False
    table.columns[0].width = Inches(5.6)
    table.columns[1].width = Inches(1.45)
    left, right = table.rows[0].cells
    for cell in (left, right):
        set_cell_margins(cell, top=0, start=0, bottom=0, end=0)
        cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.TOP

    p = left.paragraphs[0]
    p.paragraph_format.space_after = Pt(0)
    p.paragraph_format.keep_with_next = True
    role_run = p.add_run(role)
    role_run.bold = True
    role_run.font.size = Pt(10.5)
    role_run.font.color.rgb = INK
    company_run = p.add_run(f"  |  {organisation}")
    company_run.font.size = Pt(9.4)
    company_run.font.color.rgb = MUTED

    p = right.paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p.paragraph_format.space_after = Pt(0)
    p.paragraph_format.keep_with_next = True
    run = p.add_run(dates)
    run.bold = True
    run.font.size = Pt(8.6)
    run.font.color.rgb = MUTED


def add_bullet(doc: Document, text: str, spacing=2.2) -> None:
    paragraph = doc.add_paragraph()
    paragraph.paragraph_format.left_indent = Inches(0.16)
    paragraph.paragraph_format.first_line_indent = Inches(-0.14)
    paragraph.paragraph_format.space_after = Pt(spacing)
    paragraph.paragraph_format.line_spacing = 1.08
    paragraph.add_run("• ").font.color.rgb = RGBColor.from_string(ACCENT)
    run = paragraph.add_run(text)
    run.font.size = Pt(8.8)
    run.font.color.rgb = MUTED


def add_compact_item(doc: Document, title: str, status: str, body: str) -> None:
    paragraph = doc.add_paragraph()
    paragraph.paragraph_format.space_after = Pt(3)
    paragraph.paragraph_format.keep_with_next = False
    title_run = paragraph.add_run(title)
    title_run.bold = True
    title_run.font.size = Pt(9)
    title_run.font.color.rgb = INK
    status_run = paragraph.add_run(f"  {status}  ")
    status_run.bold = True
    status_run.font.size = Pt(7.7)
    status_run.font.color.rgb = RGBColor.from_string(ACCENT)
    body_run = paragraph.add_run(body)
    body_run.font.size = Pt(8.6)
    body_run.font.color.rgb = MUTED


def build_resume(output_path: Path) -> None:
    doc = Document()
    section = doc.sections[0]
    section.page_width = Inches(8.27)
    section.page_height = Inches(11.69)
    section.top_margin = Inches(0.52)
    section.bottom_margin = Inches(0.48)
    section.left_margin = Inches(0.62)
    section.right_margin = Inches(0.62)

    normal = doc.styles["Normal"]
    normal.font.name = "Aptos"
    normal.font.size = Pt(9)
    normal.font.color.rgb = MUTED
    normal.paragraph_format.space_after = Pt(3)

    name = doc.add_paragraph()
    name.paragraph_format.space_after = Pt(1)
    name_run = name.add_run("KERK ZHI SHENG")
    name_run.font.name = "Aptos Display"
    name_run.font.size = Pt(25)
    name_run.font.bold = True
    name_run.font.color.rgb = INK

    title = doc.add_paragraph()
    title.paragraph_format.space_after = Pt(4)
    title_run = title.add_run("DATA & AI ENGINEER  ·  PRODUCTION AI PRODUCT BUILDER")
    title_run.font.name = "Aptos"
    title_run.font.size = Pt(9.3)
    title_run.font.bold = True
    title_run.font.color.rgb = RGBColor.from_string(ACCENT)

    contact = doc.add_paragraph()
    contact.paragraph_format.space_after = Pt(6)
    contact_run = contact.add_run(
        "Singapore  ·  +65 8188 7419  ·  zhishengkerk@gmail.com  ·  kerkzhisheng.com  ·  linkedin.com/in/kerk-zhi-sheng-59060a171"
    )
    contact_run.font.size = Pt(8.1)
    contact_run.font.color.rgb = MUTED
    add_bottom_rule(contact, color="D4D4D8", size="5")

    add_section_heading(doc, "Professional profile")
    profile = doc.add_paragraph()
    profile.paragraph_format.space_after = Pt(5)
    profile.paragraph_format.line_spacing = 1.12
    profile.add_run(
        "I am a data engineer who also builds AI products end to end. I turn internal operational problems into dependable systems by combining multi-agent workflows, full-stack delivery, and intentional database design. Two internal AI applications are in production today, with more progressing through UAT. I focus on the foundations that turn a convincing demo into a product people can rely on: durable state, governed data, traceable decisions, clear permissions, and maintainable integrations."
    )

    snapshot = doc.add_table(rows=1, cols=4)
    snapshot.autofit = False
    snapshot.width = Inches(7.03)
    set_table_borders(snapshot, color="E4E4E7", size="4")
    for cell, (value, label) in zip(
        snapshot.rows[0].cells,
        [
            ("2", "internal AI apps live"),
            ("40+", "data pipelines built"),
            ("100+", "hours saved weekly"),
            ("2-5%", "additional cost saving"),
        ],
    ):
        set_cell_shading(cell, SOFT)
        set_cell_margins(cell, top=95, start=115, bottom=95, end=115)
        p = cell.paragraphs[0]
        p.paragraph_format.space_after = Pt(0)
        value_run = p.add_run(value)
        value_run.bold = True
        value_run.font.size = Pt(13)
        value_run.font.color.rgb = INK
        p.add_run("\n")
        label_run = p.add_run(label)
        label_run.font.size = Pt(7.6)
        label_run.font.color.rgb = MUTED

    add_section_heading(doc, "Professional experience")
    add_role_header(doc, "Data & AI Engineer", "GovTech", "2024 to Present")
    for bullet in [
        "Ship internal AI products end to end, from data model and workflow design through deployment and adoption; two applications are live in production and additional systems are in UAT.",
        "Built a channel-agnostic multi-agent triage platform with configurable pipelines, knowledge-base matching, confidence thresholds, automated replies, human escalation, and auditable state.",
        "Designed an AI-enabled workspace combining ticket proposals, Kanban workflows, configurable agent profiles, permission boundaries, and cross-workspace operations.",
        "Apply production-readiness principles at the database layer: intentional schemas, dependable persistence, traceable agent decisions, clear ownership, and maintainable integration boundaries.",
        "Developed an internal real-time pose-detection engine with MediaPipe plus operational dashboards and Databricks pipelines for production workflows.",
        "Presented an internal Databricks brown-bag session on Genie agents and Genie Code, and participated in internal forums and hackathons to spread practical AI adoption patterns.",
    ]:
        add_bullet(doc, bullet)

    add_role_header(doc, "Data Science Engineer", "Micron Technology", "Jun 2022 to 2025")
    for bullet in [
        "Served as technical lead for supply-chain optimization initiatives supporting tactical planning and planned-order firming.",
        "Improved the tactical-planning optimizer to deliver an additional 2-5% cost saving for assembly products while satisfying order and operational constraints.",
        "Built and maintained 40+ data pipelines and automation flows plus 60+ trusted tables for optimization, planning reports, and raw-material health analysis.",
        "Led the Planned Order Firming migration to Snowflake and automated the end-to-end workflow, saving more than 80 hours each week.",
        "Scaled product-assembly re-entrance reporting across product groups, saving a further 20+ hours weekly; also led equipment performance-to-model reporting and model-accuracy data work.",
    ]:
        add_bullet(doc, bullet)

    add_section_heading(doc, "Earlier experience")
    add_role_header(doc, "Research Intern (C4NGP/C4NGL)", "National University of Singapore", "May to Aug 2021")
    for bullet in [
        "Conducted a technology scan of PSA’s operating context and assessed technologies with potential strategic value.",
        "Supported a Huawei warehouse-simulation project by refining entity-flow diagrams and defining grid-based path-mover behaviour.",
        "Implemented the XML backbone that translated warehouse process flows into the simulation model.",
    ]:
        add_bullet(doc, bullet)

    doc.add_page_break()

    add_section_heading(doc, "Selected AI & data products")
    add_compact_item(
        doc,
        "Multi-agent triage platform",
        "PRODUCTION · INTERNAL",
        "Classifies unstructured requests, retrieves governed knowledge, scores confidence, and routes to automated response or human review; versioned knowledge and audit records make decisions explainable and recoverable.",
    )
    add_compact_item(
        doc,
        "AI workspace platform",
        "PRODUCTION · INTERNAL",
        "Connects AI-assisted ticket proposals with Kanban operations and configurable agents; a durable relational model for workspaces, permissions, tickets, and events supports controlled scale.",
    )
    add_compact_item(
        doc,
        "Semantic talent matching",
        "UAT · INTERNAL",
        "Pairs vector similarity with governed relational identity and role data so recommendations remain explainable and grounded in trusted records.",
    )
    add_compact_item(
        doc,
        "Operational analytics platform",
        "UAT · INTERNAL",
        "Unifies streaming data, anomaly detection, drill-down analysis, and audit trails with freshness checks, lineage, and reproducible transformations.",
    )

    add_section_heading(doc, "Education")
    add_role_header(
        doc,
        "Bachelor of Engineering, Industrial and Systems Engineering",
        "National University of Singapore",
        "2018 to 2022",
    )
    education = doc.add_paragraph(
        "Operations research, stochastic optimization, simulation, machine learning, quality engineering, and product delivery. Academic work included fulfilment network optimization with Gurobi, RNN/LSTM airline analysis, and warehouse/shuttle simulation."
    )
    education.paragraph_format.space_after = Pt(3)
    education.runs[0].font.size = Pt(8.6)

    add_section_heading(doc, "Certifications")
    cert_table = doc.add_table(rows=3, cols=2)
    cert_table.autofit = False
    cert_table.columns[0].width = Inches(5.45)
    cert_table.columns[1].width = Inches(1.58)
    certs = [
        ("Databricks Certified Data Engineer Associate  ·  Credential 166618858", "Nov 2025 to Nov 2027"),
        ("DART: AI for Cybersecurity Practitioners", "Earned 31 Aug 2026"),
        ("AI Singapore: AI for Industry® Literacy in AI  ·  ID 32518583", "16 May 2021"),
    ]
    for row, (name_text, date_text) in zip(cert_table.rows, certs):
        for cell in row.cells:
            set_cell_margins(cell, top=35, start=0, bottom=35, end=0)
        left, right = row.cells
        left.paragraphs[0].add_run(name_text).bold = True
        left.paragraphs[0].runs[0].font.size = Pt(8.4)
        right.paragraphs[0].alignment = WD_ALIGN_PARAGRAPH.RIGHT
        right.paragraphs[0].add_run(date_text)
        right.paragraphs[0].runs[0].font.size = Pt(8)
        right.paragraphs[0].runs[0].font.color.rgb = MUTED

    add_section_heading(doc, "Technical capabilities")
    skills = doc.add_paragraph()
    skills.paragraph_format.space_after = Pt(0)
    skill_groups = [
        ("AI systems", "LLM orchestration, multi-agent systems, RAG, AI agents"),
        ("Data platforms", "Databricks, Snowflake, PostgreSQL, NiFi, SQL, ETL"),
        ("Product engineering", "TypeScript, React, Next.js, Node.js, Docker"),
        ("Analytics", "Python, Tableau, R, optimization, simulation"),
    ]
    for index, (label, values) in enumerate(skill_groups):
        label_run = skills.add_run(f"{label}: ")
        label_run.bold = True
        label_run.font.size = Pt(8.4)
        label_run.font.color.rgb = INK
        values_run = skills.add_run(values)
        values_run.font.size = Pt(8.4)
        values_run.font.color.rgb = MUTED
        if index < len(skill_groups) - 1:
            skills.add_run("   ·   ")

    footer = section.footer.paragraphs[0]
    footer.alignment = WD_ALIGN_PARAGRAPH.CENTER
    footer_run = footer.add_run("KERK ZHI SHENG  ·  RESUME")
    footer_run.font.name = "Aptos"
    footer_run.font.size = Pt(7)
    footer_run.font.color.rgb = RGBColor(161, 161, 170)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    doc.save(output_path)


if __name__ == "__main__":
    destination = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("public/resume.docx")
    build_resume(destination)
