---
comments: True
layout: post
title: CTE Nonprofit Partnership Action Plans — T3 Community Impact Projects
description: Detailed technical action plans for partnering with three Poway-area nonprofits through CTE-driven CS solutions
author: Akhil Kulkarni
permalink: /cte/nonprofit-action-plans
categories: [CTE, Community, Projects]
---

<style>
/* ── Reset & Base ─────────────────────────────────────────── */
.cte-blog * { box-sizing: border-box; }
.cte-blog { font-family: system-ui, -apple-system, sans-serif; color: #111827; line-height: 1.65; }

/* ── Hero ─────────────────────────────────────────────────── */
.cte-hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1e40af 100%);
  color: #ffffff;
  border-radius: 16px;
  padding: 3rem 2.5rem 2.5rem;
  margin-bottom: 2.5rem;
  position: relative;
  overflow: hidden;
}
.cte-hero::before {
  content: '';
  position: absolute;
  top: -60px; right: -60px;
  width: 240px; height: 240px;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
}
.cte-hero h1 {
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 0.75rem;
  color: #ffffff;
  line-height: 1.2;
}
.cte-hero p { font-size: 1.05rem; margin: 0 0 1.5rem; color: #cbd5e1; max-width: 680px; }
.hero-team {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.hero-pill {
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.25);
  color: #ffffff;
  border-radius: 999px;
  padding: 0.3rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
}
.hero-stat-row {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.15);
}
.hero-stat { text-align: center; }
.hero-stat .num { font-size: 1.8rem; font-weight: 800; color: #60a5fa; }
.hero-stat .lbl { font-size: 0.75rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; }

/* ── Project Card ─────────────────────────────────────────── */
.proj-card {
  border-radius: 14px;
  margin-bottom: 3rem;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  border: 1px solid #e2e8f0;
}
.proj-header {
  padding: 1.6rem 2rem;
  color: #ffffff;
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
}
.proj-icon {
  width: 52px; height: 52px;
  border-radius: 12px;
  background: rgba(255,255,255,0.2);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.6rem;
  flex-shrink: 0;
}
.proj-header-text h2 {
  font-size: 1.4rem;
  font-weight: 800;
  margin: 0 0 0.2rem;
  color: #ffffff;
}
.proj-header-text p { margin: 0; font-size: 0.9rem; color: rgba(255,255,255,0.85); }

/* Project accent colors */
.accent-blue  { background: linear-gradient(135deg, #1e3a8a, #2563eb); }
.accent-green { background: linear-gradient(135deg, #14532d, #16a34a); }
.accent-purple{ background: linear-gradient(135deg, #4c1d95, #7c3aed); }
.border-blue  { border-top: 4px solid #2563eb; }
.border-green { border-top: 4px solid #16a34a; }
.border-purple{ border-top: 4px solid #7c3aed; }

.proj-body { padding: 2rem; background: #ffffff; }

/* ── Info Row ─────────────────────────────────────────────── */
.info-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}
.info-chip {
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 0.4rem 0.85rem;
  font-size: 0.82rem;
  color: #334155;
  font-weight: 500;
}
.info-chip strong { color: #0f172a; }

/* ── Section Label ────────────────────────────────────────── */
.section-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #64748b;
  margin: 2rem 0 0.75rem;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid #f1f5f9;
}

/* ── Problem / Solution split ─────────────────────────────── */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}
@media (max-width: 680px) { .two-col { grid-template-columns: 1fr; } }
.ps-box {
  border-radius: 10px;
  padding: 1.1rem 1.25rem;
}
.ps-box.problem { background: #fef2f2; border: 1px solid #fecaca; }
.ps-box.solution { background: #f0fdf4; border: 1px solid #bbf7d0; }
.ps-box h4 { margin: 0 0 0.5rem; font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
.ps-box.problem h4 { color: #dc2626; }
.ps-box.solution h4 { color: #16a34a; }
.ps-box p { margin: 0; font-size: 0.9rem; color: #1e293b; }

/* ── Tech Tags ────────────────────────────────────────────── */
.tag-row { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.75rem 0 1.5rem; }
.tech-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  border-radius: 6px;
  padding: 0.3rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #ffffff;
}
.tag-blue   { background: #2563eb; }
.tag-green  { background: #16a34a; }
.tag-purple { background: #7c3aed; }
.tag-slate  { background: #475569; }
.tag-teal   { background: #0d9488; }
.tag-rose   { background: #e11d48; }
.tag-amber  { background: #b45309; }
.tag-indigo { background: #4338ca; }

/* ── Architecture SVG wrapper ─────────────────────────────── */
.arch-wrap {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1rem;
  margin: 1rem 0 1.5rem;
  overflow-x: auto;
  text-align: center;
}
.arch-wrap svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }

/* ── Phase Timeline ───────────────────────────────────────── */
.phase-timeline { margin: 0.75rem 0 1.5rem; }
.phase-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: flex-start;
}
.phase-num {
  width: 36px; height: 36px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 0.85rem;
  color: #ffffff;
  flex-shrink: 0;
  margin-top: 2px;
}
.phase-blue   { background: #2563eb; }
.phase-green  { background: #16a34a; }
.phase-purple { background: #7c3aed; }
.phase-content {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 0.85rem 1.1rem;
  flex: 1;
}
.phase-content h4 { margin: 0 0 0.35rem; font-size: 0.95rem; font-weight: 700; color: #0f172a; }
.phase-content p  { margin: 0; font-size: 0.87rem; color: #374151; line-height: 1.6; }

/* ── Work Split ───────────────────────────────────────────── */
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 0.75rem 0 0;
}
@media (max-width: 700px) { .team-grid { grid-template-columns: 1fr; } }
.member-card {
  border-radius: 10px;
  padding: 1rem 1.1rem;
  border: 1px solid #e2e8f0;
  background: #ffffff;
}
.member-card .avatar {
  width: 40px; height: 40px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.6rem;
}
.av-blue   { background: #2563eb; }
.av-green  { background: #16a34a; }
.av-purple { background: #7c3aed; }
.av-blue2  { background: #0891b2; }
.av-green2 { background: #059669; }
.av-purp2  { background: #9333ea; }
.member-card h4 { margin: 0 0 0.5rem; font-size: 0.95rem; font-weight: 700; color: #0f172a; }
.member-card ul { margin: 0; padding-left: 1.1rem; }
.member-card ul li { font-size: 0.82rem; color: #374151; margin-bottom: 0.2rem; }

/* ── Summary Table ────────────────────────────────────────── */
.summary-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 0.9rem;
}
.summary-table th {
  background: #0f172a;
  color: #ffffff;
  padding: 0.75rem 1rem;
  text-align: left;
  font-weight: 700;
}
.summary-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e2e8f0;
  color: #1e293b;
  vertical-align: top;
}
.summary-table tr:nth-child(even) td { background: #f8fafc; }
.summary-table tr:hover td { background: #f0f9ff; }

/* ── Next Steps ───────────────────────────────────────────── */
.next-steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem 0;
}
@media (max-width: 680px) { .next-steps-grid { grid-template-columns: 1fr; } }
.ns-card {
  border-radius: 12px;
  padding: 1.25rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}
.ns-card .ns-icon { font-size: 1.8rem; margin-bottom: 0.5rem; }
.ns-card h4 { margin: 0 0 0.4rem; font-size: 0.95rem; font-weight: 700; color: #0f172a; }
.ns-card p  { margin: 0; font-size: 0.83rem; color: #475569; }
.ns-blue   { background: #eff6ff; border-color: #bfdbfe; }
.ns-green  { background: #f0fdf4; border-color: #bbf7d0; }
.ns-purple { background: #faf5ff; border-color: #e9d5ff; }

.quote-block {
  background: #f8fafc;
  border-left: 4px solid #2563eb;
  border-radius: 0 10px 10px 0;
  padding: 1rem 1.5rem;
  margin: 2rem 0 0;
  color: #1e293b;
  font-style: italic;
  font-size: 1rem;
}
.quote-block strong { font-style: normal; color: #64748b; font-size: 0.85rem; display: block; margin-top: 0.4rem; }
</style>

<div class="cte-blog">

<!-- ═══════════ HERO ═══════════ -->
<div class="cte-hero">
  <h1>CTE Nonprofit Partnership<br>Action Plans</h1>
  <p>Third Trimester community impact projects — building technical prototypes for three Poway-area nonprofits, then reaching out for first engagements by end of trimester.</p>
  <div class="hero-team">
    <span class="hero-pill">&#128100; Akhil</span>
    <span class="hero-pill">&#128100; Moiz</span>
    <span class="hero-pill">&#128100; Neil</span>
  </div>
  <div class="hero-stat-row">
    <div class="hero-stat"><div class="num">3</div><div class="lbl">Nonprofits</div></div>
    <div class="hero-stat"><div class="num">4</div><div class="lbl">Weeks / Project</div></div>
    <div class="hero-stat"><div class="num">3</div><div class="lbl">Team Members</div></div>
    <div class="hero-stat"><div class="num">T3</div><div class="lbl">Trimester</div></div>
  </div>
</div>

<!-- ═══════════ PROJECT 1: DSA-SD ═══════════ -->
<div class="proj-card border-blue">
  <div class="proj-header accent-blue">
    <div class="proj-icon">&#128737;</div>
    <div class="proj-header-text">
      <h2>Deputy Sheriffs' Association of San Diego</h2>
      <p>Safety Services &bull; Member Support &bull; Community Liaison &bull; Poway, CA 92064</p>
    </div>
  </div>
  <div class="proj-body">

    <div class="info-row">
      <span class="info-chip"><strong>Contact:</strong> cvelarde@dsasd.org</span>
      <span class="info-chip"><strong>Phone:</strong> (858) 486-9009</span>
      <span class="info-chip"><strong>Address:</strong> 13881 Danielson St., Poway</span>
      <span class="info-chip"><strong>Site:</strong> dsasd.org</span>
    </div>

    <div class="two-col">
      <div class="ps-box problem">
        <h4>&#9888; Problem</h4>
        <p>No centralized digital tool exists for deputies or community members to access wellness resources, navigate benefits, or submit non-emergency tips. Both internal member services and public safety engagement face friction from manual, fragmented processes.</p>
      </div>
      <div class="ps-box solution">
        <h4>&#10003; Solution</h4>
        <p>A full-stack <strong>Deputy Wellness &amp; Community Safety Portal</strong> — a role-based web app serving deputies (private benefit dashboard) and the public (safety tip submission + resource hub) through a single unified system.</p>
      </div>
    </div>

    <div class="section-label">Tech Stack</div>
    <div class="tag-row">
      <span class="tech-tag tag-blue">React.js</span>
      <span class="tech-tag tag-slate">Flask / FastAPI</span>
      <span class="tech-tag tag-teal">PostgreSQL</span>
      <span class="tech-tag tag-rose">JWT Auth</span>
      <span class="tech-tag tag-indigo">Tailwind CSS</span>
      <span class="tech-tag tag-amber">SQLAlchemy ORM</span>
      <span class="tech-tag tag-slate">Render / Railway</span>
      <span class="tech-tag tag-blue">bcrypt</span>
    </div>

    <div class="section-label">System Architecture</div>
    <div class="arch-wrap">
      <svg width="740" height="320" viewBox="0 0 740 320" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
        <!-- Background -->
        <rect width="740" height="320" rx="10" fill="#f8fafc"/>

        <!-- ── Column headers ── -->
        <text x="100" y="28" text-anchor="middle" font-size="11" font-weight="700" fill="#64748b">USERS</text>
        <text x="300" y="28" text-anchor="middle" font-size="11" font-weight="700" fill="#64748b">FRONTEND</text>
        <text x="480" y="28" text-anchor="middle" font-size="11" font-weight="700" fill="#64748b">BACKEND API</text>
        <text x="650" y="28" text-anchor="middle" font-size="11" font-weight="700" fill="#64748b">DATABASE</text>

        <!-- Dividers -->
        <line x1="200" y1="10" x2="200" y2="310" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4,3"/>
        <line x1="390" y1="10" x2="390" y2="310" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4,3"/>
        <line x1="570" y1="10" x2="570" y2="310" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4,3"/>

        <!-- ── User: Deputy/Member ── -->
        <rect x="20" y="50" width="155" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="97" y="71" text-anchor="middle" font-size="12" font-weight="700" fill="#1e3a8a">&#128274; Deputy / Member</text>
        <text x="97" y="88" text-anchor="middle" font-size="10" fill="#1e40af">Authenticated user</text>

        <!-- ── User: Public ── -->
        <rect x="20" y="130" width="155" height="50" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="97" y="151" text-anchor="middle" font-size="12" font-weight="700" fill="#14532d">&#128101; Community / Public</text>
        <text x="97" y="168" text-anchor="middle" font-size="10" fill="#166534">Anonymous visitor</text>

        <!-- ── User: Admin ── -->
        <rect x="20" y="210" width="155" height="50" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="97" y="231" text-anchor="middle" font-size="12" font-weight="700" fill="#78350f">&#9881; DSA Admin</text>
        <text x="97" y="248" text-anchor="middle" font-size="10" fill="#92400e">Staff role</text>

        <!-- ── Frontend: Member Dashboard ── -->
        <rect x="215" y="44" width="160" height="62" rx="8" fill="#2563eb"/>
        <text x="295" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Member Dashboard</text>
        <text x="295" y="84" text-anchor="middle" font-size="10" fill="#bfdbfe">Benefits · Resources · Events</text>
        <text x="295" y="98" text-anchor="middle" font-size="9" fill="#93c5fd">React.js SPA · Tailwind CSS</text>

        <!-- ── Frontend: Public Portal ── -->
        <rect x="215" y="124" width="160" height="62" rx="8" fill="#16a34a"/>
        <text x="295" y="148" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Public Safety Portal</text>
        <text x="295" y="164" text-anchor="middle" font-size="10" fill="#bbf7d0">Tip Submission · Resources</text>
        <text x="295" y="178" text-anchor="middle" font-size="9" fill="#86efac">React Router · Public Route</text>

        <!-- ── Frontend: Admin Panel ── -->
        <rect x="215" y="204" width="160" height="62" rx="8" fill="#d97706"/>
        <text x="295" y="228" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Admin Panel</text>
        <text x="295" y="244" text-anchor="middle" font-size="10" fill="#fef3c7">Tip Queue · Event Manager</text>
        <text x="295" y="258" text-anchor="middle" font-size="9" fill="#fde68a">/admin Protected Route</text>

        <!-- ── Backend: Flask API ── -->
        <rect x="405" y="80" width="150" height="130" rx="8" fill="#1e293b"/>
        <text x="480" y="105" text-anchor="middle" font-size="11" font-weight="700" fill="#f8fafc">Flask REST API</text>
        <text x="480" y="122" text-anchor="middle" font-size="9" fill="#94a3b8">JWT Auth · bcrypt</text>
        <rect x="415" y="130" width="130" height="20" rx="4" fill="#334155"/>
        <text x="480" y="144" text-anchor="middle" font-size="9" fill="#cbd5e1">POST /auth/login</text>
        <rect x="415" y="154" width="130" height="20" rx="4" fill="#334155"/>
        <text x="480" y="168" text-anchor="middle" font-size="9" fill="#cbd5e1">GET  /resources</text>
        <rect x="415" y="178" width="130" height="20" rx="4" fill="#334155"/>
        <text x="480" y="192" text-anchor="middle" font-size="9" fill="#cbd5e1">POST /tips</text>

        <!-- ── Database ── -->
        <rect x="585" y="80" width="140" height="130" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="655" y="102" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">PostgreSQL</text>
        <text x="655" y="118" text-anchor="middle" font-size="9" fill="#64748b">SQLAlchemy ORM</text>
        <rect x="595" y="126" width="120" height="16" rx="3" fill="#dbeafe"/>
        <text x="655" y="138" text-anchor="middle" font-size="9" fill="#1e40af">members</text>
        <rect x="595" y="146" width="120" height="16" rx="3" fill="#dcfce7"/>
        <text x="655" y="158" text-anchor="middle" font-size="9" fill="#14532d">resources</text>
        <rect x="595" y="166" width="120" height="16" rx="3" fill="#fef3c7"/>
        <text x="655" y="178" text-anchor="middle" font-size="9" fill="#78350f">tips</text>
        <rect x="595" y="186" width="120" height="16" rx="3" fill="#fce7f3"/>
        <text x="655" y="198" text-anchor="middle" font-size="9" fill="#831843">events</text>

        <!-- ── Arrows: Users → Frontend ── -->
        <line x1="175" y1="75" x2="215" y2="75" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowB)"/>
        <line x1="175" y1="155" x2="215" y2="155" stroke="#16a34a" stroke-width="2" marker-end="url(#arrowG)"/>
        <line x1="175" y1="235" x2="215" y2="235" stroke="#d97706" stroke-width="2" marker-end="url(#arrowA)"/>

        <!-- ── Arrows: Frontend → API ── -->
        <line x1="375" y1="85" x2="405" y2="120" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrowB)"/>
        <line x1="375" y1="155" x2="405" y2="155" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrowG)"/>
        <line x1="375" y1="235" x2="405" y2="185" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrowA)"/>

        <!-- ── Arrow: API → DB ── -->
        <line x1="555" y1="145" x2="585" y2="145" stroke="#475569" stroke-width="2" marker-end="url(#arrowS)"/>

        <!-- Markers -->
        <defs>
          <marker id="arrowB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#2563eb"/>
          </marker>
          <marker id="arrowG" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#16a34a"/>
          </marker>
          <marker id="arrowA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#d97706"/>
          </marker>
          <marker id="arrowS" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#475569"/>
          </marker>
        </defs>

        <!-- Security note -->
        <rect x="20" y="285" width="700" height="24" rx="6" fill="#fef2f2" stroke="#fecaca" stroke-width="1"/>
        <text x="370" y="301" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="600">&#128274; Security: bcrypt hashing · JWT expiry · Input sanitization · Rate-limiting on /tips · Env vars for secrets</text>
      </svg>
    </div>

    <div class="section-label">4-Week Action Plan</div>
    <div class="phase-timeline">
      <div class="phase-item">
        <div class="phase-num phase-blue">1</div>
        <div class="phase-content">
          <h4>Week 1 — Research &amp; Design</h4>
          <p>Study DSA-SD's current website and identify digital gaps. Wireframe the public and member-facing UIs in Figma. Draft the PostgreSQL schema (<code>members</code>, <code>resources</code>, <code>tips</code>, <code>events</code>). Write a README with project scope and data model decisions.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-blue">2</div>
        <div class="phase-content">
          <h4>Week 2 — Core Backend</h4>
          <p>Scaffold Flask API. Implement JWT auth flow (register, login, token refresh). Set up SQLAlchemy ORM models. Build <code>/resources</code>, <code>/tips</code>, and <code>/events</code> CRUD endpoints with proper HTTP status codes, error handling, and input sanitization.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-blue">3</div>
        <div class="phase-content">
          <h4>Week 3 — Frontend Build</h4>
          <p>Bootstrap React SPA. Implement public landing page with safety tip submission form. Build authenticated member dashboard (benefit lookup, resource cards, event feed). Connect components to backend via Axios. Add client-side form validation and error feedback UI.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-blue">4</div>
        <div class="phase-content">
          <h4>Week 4 — Admin Panel, Testing &amp; Outreach</h4>
          <p>Build protected <code>/admin</code> route with DSA-specific login. Add tip moderation queue and event posting interface. Write pytest unit tests for all API routes. Deploy frontend to GitHub Pages + backend to Render. Prepare demo deck and draft outreach email to cvelarde@dsasd.org.</p>
        </div>
      </div>
    </div>

    <div class="section-label">Work Split</div>
    <div class="team-grid">
      <div class="member-card">
        <div class="avatar av-blue">A</div>
        <h4>Akhil</h4>
        <ul>
          <li>Flask API scaffold &amp; routing</li>
          <li>JWT auth &amp; bcrypt hashing</li>
          <li>SQLAlchemy database models</li>
          <li>Render/Railway deployment</li>
          <li>API documentation (OpenAPI)</li>
        </ul>
      </div>
      <div class="member-card">
        <div class="avatar av-blue2">M</div>
        <h4>Moiz</h4>
        <ul>
          <li>React SPA architecture</li>
          <li>Public landing page</li>
          <li>Safety tip submission form</li>
          <li>Component library (Tailwind)</li>
          <li>Axios API integration</li>
        </ul>
      </div>
      <div class="member-card">
        <div class="avatar av-blue" style="background:#1d4ed8">N</div>
        <h4>Neil</h4>
        <ul>
          <li>Member dashboard UI</li>
          <li>Admin panel &amp; moderation queue</li>
          <li>Integration testing (pytest)</li>
          <li>Figma wireframes</li>
          <li>Outreach to DSA contact</li>
        </ul>
      </div>
    </div>

  </div>
</div>

<!-- ═══════════ PROJECT 2: COMMUNITY FOOD CONNECTION ═══════════ -->
<div class="proj-card border-green">
  <div class="proj-header accent-green">
    <div class="proj-icon">&#127858;</div>
    <div class="proj-header-text">
      <h2>The Community Food Connection</h2>
      <p>Food Distribution &bull; Volunteer Coordination &bull; 1,200+ Families/Week &bull; Poway, CA 92064</p>
    </div>
  </div>
  <div class="proj-body">

    <div class="info-row">
      <span class="info-chip"><strong>Contact:</strong> tcfconnection@gmail.com</span>
      <span class="info-chip"><strong>Phone:</strong> (858) 751-4613</span>
      <span class="info-chip"><strong>Address:</strong> 14047 Twin Peaks Rd, Bldg C, Poway</span>
      <span class="info-chip"><strong>Open:</strong> Mon / Wed / Fri, 3–6 PM</span>
      <span class="info-chip"><strong>Output:</strong> ~76,000 lbs food/month</span>
    </div>

    <div class="two-col">
      <div class="ps-box problem">
        <h4>&#9888; Problem</h4>
        <p>Despite 150+ volunteers and 1,200+ families/week, coordination is largely manual. Volunteer scheduling, inventory tracking, and family intake are fragmented with no unified digital system — leading to over/understaffing, food waste, and no demand forecasting capability.</p>
      </div>
      <div class="ps-box solution">
        <h4>&#10003; Solution</h4>
        <p>A mobile-first <strong>Volunteer &amp; Inventory Management Web App</strong> — digitizing shift sign-up, food stock logging (with Google Sheets export), anonymous QR-code family check-in, and a demand forecast dashboard for distribution planning.</p>
      </div>
    </div>

    <div class="section-label">Tech Stack</div>
    <div class="tag-row">
      <span class="tech-tag tag-green">Vue.js</span>
      <span class="tech-tag tag-slate">Flask</span>
      <span class="tech-tag tag-teal">PostgreSQL</span>
      <span class="tech-tag tag-green">Google Sheets API</span>
      <span class="tech-tag tag-amber">SendGrid Email API</span>
      <span class="tech-tag tag-slate">Python qrcode lib</span>
      <span class="tech-tag tag-indigo">Chart.js</span>
      <span class="tech-tag tag-rose">scikit-learn (stretch)</span>
    </div>

    <div class="section-label">System Architecture</div>
    <div class="arch-wrap">
      <svg width="740" height="360" viewBox="0 0 740 360" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
        <rect width="740" height="360" rx="10" fill="#f0fdf4"/>

        <!-- ── Top row: Actor boxes ── -->
        <!-- Volunteer -->
        <rect x="20" y="30" width="140" height="50" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="90" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#14532d">&#128100; Volunteer</text>
        <text x="90" y="68" text-anchor="middle" font-size="10" fill="#166534">Mobile browser</text>

        <!-- Staff -->
        <rect x="190" y="30" width="140" height="50" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
        <text x="260" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#713f12">&#128203; Food Bank Staff</text>
        <text x="260" y="68" text-anchor="middle" font-size="10" fill="#854d0e">Desktop admin view</text>

        <!-- Family -->
        <rect x="360" y="30" width="140" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
        <text x="430" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#1e3a8a">&#128106; Family</text>
        <text x="430" y="68" text-anchor="middle" font-size="10" fill="#1e40af">QR scan at door</text>

        <!-- External Services -->
        <rect x="550" y="30" width="165" height="50" rx="8" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5"/>
        <text x="632" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#581c87">&#128231; External Services</text>
        <text x="632" y="68" text-anchor="middle" font-size="10" fill="#6b21a8">SendGrid · Google Sheets</text>

        <!-- ── Middle layer: Modules ── -->
        <!-- Shift Scheduler -->
        <rect x="20" y="130" width="160" height="70" rx="8" fill="#16a34a"/>
        <text x="100" y="155" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Shift Scheduler</text>
        <text x="100" y="170" text-anchor="middle" font-size="9" fill="#bbf7d0">Sign-up · Roster View</text>
        <text x="100" y="185" text-anchor="middle" font-size="9" fill="#bbf7d0">Mon/Wed/Fri slots</text>

        <!-- Inventory Tracker -->
        <rect x="200" y="130" width="160" height="70" rx="8" fill="#ca8a04"/>
        <text x="280" y="155" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Inventory Tracker</text>
        <text x="280" y="170" text-anchor="middle" font-size="9" fill="#fef9c3">Category Logging</text>
        <text x="280" y="185" text-anchor="middle" font-size="9" fill="#fef9c3">Low-stock Alerts</text>

        <!-- QR Check-in -->
        <rect x="380" y="130" width="160" height="70" rx="8" fill="#2563eb"/>
        <text x="460" y="155" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">QR Family Check-in</text>
        <text x="460" y="170" text-anchor="middle" font-size="9" fill="#bfdbfe">Anonymous ID Only</text>
        <text x="460" y="185" text-anchor="middle" font-size="9" fill="#bfdbfe">No PII Stored</text>

        <!-- Admin Dashboard -->
        <rect x="560" y="130" width="160" height="70" rx="8" fill="#0d9488"/>
        <text x="640" y="155" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Admin Dashboard</text>
        <text x="640" y="170" text-anchor="middle" font-size="9" fill="#ccfbf1">Visitor Count · Roster</text>
        <text x="640" y="185" text-anchor="middle" font-size="9" fill="#ccfbf1">Inventory Levels</text>

        <!-- ── Flask API center bar ── -->
        <rect x="20" y="245" width="700" height="45" rx="8" fill="#1e293b"/>
        <text x="370" y="263" text-anchor="middle" font-size="11" font-weight="700" fill="#f8fafc">Flask REST API</text>
        <text x="150" y="281" text-anchor="middle" font-size="9" fill="#94a3b8">POST /shifts/signup</text>
        <text x="310" y="281" text-anchor="middle" font-size="9" fill="#94a3b8">POST /inventory/log</text>
        <text x="460" y="281" text-anchor="middle" font-size="9" fill="#94a3b8">GET /checkin/qr/:id</text>
        <text x="620" y="281" text-anchor="middle" font-size="9" fill="#94a3b8">GET /admin/dashboard</text>

        <!-- ── DB row ── -->
        <!-- PostgreSQL -->
        <rect x="20" y="310" width="310" height="38" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="175" y="325" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">PostgreSQL — volunteers · shifts · inventory_logs · families (anon)</text>
        <text x="175" y="340" text-anchor="middle" font-size="9" fill="#64748b">SQLAlchemy ORM · No PII constraint enforced at schema level</text>

        <!-- Google Sheets -->
        <rect x="345" y="310" width="200" height="38" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
        <text x="445" y="325" text-anchor="middle" font-size="10" font-weight="700" fill="#14532d">Google Sheets Export</text>
        <text x="445" y="340" text-anchor="middle" font-size="9" fill="#166534">Staff-familiar read-only export</text>

        <!-- Chart/Forecast -->
        <rect x="560" y="310" width="160" height="38" rx="8" fill="#faf5ff" stroke="#9333ea" stroke-width="1.5"/>
        <text x="640" y="325" text-anchor="middle" font-size="10" font-weight="700" fill="#581c87">Demand Forecast</text>
        <text x="640" y="340" text-anchor="middle" font-size="9" fill="#7e22ce">Chart.js + Linear Regression</text>

        <!-- ── Connecting lines: actors → modules ── -->
        <line x1="100" y1="80" x2="100" y2="130" stroke="#16a34a" stroke-width="2" marker-end="url(#arrG2)"/>
        <line x1="260" y1="80" x2="280" y2="130" stroke="#ca8a04" stroke-width="2" marker-end="url(#arrA2)"/>
        <line x1="430" y1="80" x2="460" y2="130" stroke="#2563eb" stroke-width="2" marker-end="url(#arrB2)"/>
        <line x1="632" y1="80" x2="640" y2="130" stroke="#9333ea" stroke-width="2" marker-end="url(#arrP2)"/>

        <!-- modules → API -->
        <line x1="100" y1="200" x2="100" y2="245" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrG2)"/>
        <line x1="280" y1="200" x2="280" y2="245" stroke="#ca8a04" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrA2)"/>
        <line x1="460" y1="200" x2="460" y2="245" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrB2)"/>
        <line x1="640" y1="200" x2="640" y2="245" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrT2)"/>

        <!-- API → DBs -->
        <line x1="175" y1="290" x2="175" y2="310" stroke="#475569" stroke-width="1.5" marker-end="url(#arrS2)"/>
        <line x1="445" y1="290" x2="445" y2="310" stroke="#475569" stroke-width="1.5" marker-end="url(#arrS2)"/>
        <line x1="640" y1="290" x2="640" y2="310" stroke="#475569" stroke-width="1.5" marker-end="url(#arrS2)"/>

        <defs>
          <marker id="arrG2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#16a34a"/></marker>
          <marker id="arrA2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#ca8a04"/></marker>
          <marker id="arrB2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#2563eb"/></marker>
          <marker id="arrP2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#9333ea"/></marker>
          <marker id="arrT2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0d9488"/></marker>
          <marker id="arrS2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#475569"/></marker>
        </defs>
      </svg>
    </div>

    <div class="section-label">4-Week Action Plan</div>
    <div class="phase-timeline">
      <div class="phase-item">
        <div class="phase-num phase-green">1</div>
        <div class="phase-content">
          <h4>Week 1 — Discovery &amp; Schema Design</h4>
          <p>Email tcfconnection@gmail.com to map current workflows and pain points. Document the full distribution day lifecycle: intake → sorting → distribution → closeout. Design PostgreSQL schema for <code>volunteers</code>, <code>shifts</code>, <code>inventory_logs</code>, and <code>families</code> (anonymous IDs only). Create Figma mockups for volunteer and staff views.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-green">2</div>
        <div class="phase-content">
          <h4>Week 2 — Volunteer Shift Scheduler</h4>
          <p>Build shift management Flask backend (create, sign up, cancel shifts). Integrate SendGrid for confirmation and reminder emails. Build Vue.js shift calendar with open/filled slot indicators and real-time availability. Test with the Mon/Wed/Fri 3–6 PM distribution schedule as sample data.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-green">3</div>
        <div class="phase-content">
          <h4>Week 3 — Inventory Tracker &amp; Family Check-in</h4>
          <p>Build food category logging UI (produce, canned, dairy, dry goods) with weight/unit input and running totals. Implement low-stock threshold alerts on admin dashboard. Generate QR codes via Python's <code>qrcode</code> library for anonymous family check-in. Wire check-in count to admin dashboard to show today's visitor total. Export data to Google Sheets via Sheets API for staff familiarity.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-green">4</div>
        <div class="phase-content">
          <h4>Week 4 — Forecast Module, Mobile Polish &amp; Demo</h4>
          <p>Add a demand forecast chart (Chart.js + simple linear regression on historical check-in data via scikit-learn) to predict high-demand distribution days. Polish mobile responsiveness for on-site phone use. Generate a shareable demo URL. Write a one-page feature summary for outreach to food bank coordinator.</p>
        </div>
      </div>
    </div>

    <div class="section-label">Work Split</div>
    <div class="team-grid">
      <div class="member-card">
        <div class="avatar av-green">A</div>
        <h4>Akhil</h4>
        <ul>
          <li>Flask API &amp; database models</li>
          <li>Google Sheets API integration</li>
          <li>QR code generation logic</li>
          <li>Anonymous family ID system</li>
          <li>Backend unit tests</li>
        </ul>
      </div>
      <div class="member-card">
        <div class="avatar av-green2">M</div>
        <h4>Moiz</h4>
        <ul>
          <li>Vue.js frontend architecture</li>
          <li>Volunteer scheduling UI</li>
          <li>Shift calendar component</li>
          <li>SendGrid email integration</li>
          <li>Mobile-responsive layout</li>
        </ul>
      </div>
      <div class="member-card">
        <div class="avatar av-green" style="background:#15803d">N</div>
        <h4>Neil</h4>
        <ul>
          <li>Inventory logging UI</li>
          <li>Family check-in flow (QR)</li>
          <li>Admin dashboard &amp; alerts</li>
          <li>Demand forecast chart (Chart.js)</li>
          <li>Nonprofit outreach &amp; demo prep</li>
        </ul>
      </div>
    </div>

  </div>
</div>

<!-- ═══════════ PROJECT 3: DOING EXCEPTIONAL DEEDS ═══════════ -->
<div class="proj-card border-purple">
  <div class="proj-header accent-purple">
    <div class="proj-icon">&#127941;</div>
    <div class="proj-header-text">
      <h2>Doing Exceptional Deeds</h2>
      <p>Youth Mental Health &amp; Sports &bull; Ages 5–15 &bull; Bridging Wellness &amp; Athletics &bull; San Diego, CA 92127</p>
    </div>
  </div>
  <div class="proj-body">

    <div class="info-row">
      <span class="info-chip"><strong>Contact:</strong> gtaylor@doingexceptionaldeeds.org</span>
      <span class="info-chip"><strong>Phone:</strong> (619) 745-3230</span>
      <span class="info-chip"><strong>Address:</strong> 10325 Craftsman Way #301, San Diego</span>
      <span class="info-chip"><strong>Ages Served:</strong> 5–15</span>
    </div>

    <div class="two-col">
      <div class="ps-box problem">
        <h4>&#9888; Problem</h4>
        <p>Youth progress, milestone achievements, and mental wellness check-ins across sports programs are tracked informally. Coaches have no systematic way to spot kids who need extra support, and parents have no visibility into their child's growth journey over time.</p>
      </div>
      <div class="ps-box solution">
        <h4>&#10003; Solution</h4>
        <p>A secure <strong>Youth Progress Tracker &amp; Coach Dashboard</strong> — with emoji-based mood check-ins, gamified milestone badges, role-based portals for coaches and parents, and a COPPA-aware data model that stores no PII for minors.</p>
      </div>
    </div>

    <div class="section-label">Tech Stack</div>
    <div class="tag-row">
      <span class="tech-tag tag-purple">React.js</span>
      <span class="tech-tag tag-slate">Flask</span>
      <span class="tech-tag tag-teal">PostgreSQL</span>
      <span class="tech-tag tag-rose">JWT (Role-Based)</span>
      <span class="tech-tag tag-indigo">Chart.js</span>
      <span class="tech-tag tag-purple">SVG Badge Components</span>
      <span class="tech-tag tag-amber">SQLAlchemy ORM</span>
      <span class="tech-tag tag-slate">COPPA-aware design</span>
    </div>

    <div class="section-label">System Architecture</div>
    <div class="arch-wrap">
      <svg width="740" height="370" viewBox="0 0 740 370" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
        <rect width="740" height="370" rx="10" fill="#faf5ff"/>

        <!-- ── Actors ── -->
        <!-- Youth -->
        <rect x="20" y="30" width="130" height="55" rx="8" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.5"/>
        <text x="85" y="54" text-anchor="middle" font-size="12" font-weight="700" fill="#4c1d95">&#128103; Youth</text>
        <text x="85" y="70" text-anchor="middle" font-size="10" fill="#6d28d9">Ages 5–15</text>
        <text x="85" y="82" text-anchor="middle" font-size="9" fill="#7c3aed">Emoji check-in</text>

        <!-- Coach -->
        <rect x="170" y="30" width="130" height="55" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
        <text x="235" y="54" text-anchor="middle" font-size="12" font-weight="700" fill="#1e1b4b">&#127947; Coach</text>
        <text x="235" y="70" text-anchor="middle" font-size="10" fill="#3730a3">Program leader</text>
        <text x="235" y="82" text-anchor="middle" font-size="9" fill="#4338ca">JWT role: coach</text>

        <!-- Parent -->
        <rect x="320" y="30" width="130" height="55" rx="8" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
        <text x="385" y="54" text-anchor="middle" font-size="12" font-weight="700" fill="#831843">&#128106; Parent</text>
        <text x="385" y="70" text-anchor="middle" font-size="10" fill="#9d174d">Guardian access</text>
        <text x="385" y="82" text-anchor="middle" font-size="9" fill="#db2777">JWT role: parent</text>

        <!-- Privacy note box -->
        <rect x="475" y="30" width="240" height="55" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="595" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#b91c1c">&#128274; COPPA-Aware Design</text>
        <text x="595" y="66" text-anchor="middle" font-size="9" fill="#dc2626">No youth PII stored · Anonymous participant IDs</text>
        <text x="595" y="78" text-anchor="middle" font-size="9" fill="#dc2626">No 3rd-party analytics · Minimal data retention</text>

        <!-- ── Frontend modules ── -->
        <!-- Check-in UI -->
        <rect x="20" y="140" width="140" height="65" rx="8" fill="#7c3aed"/>
        <text x="90" y="163" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Emoji Check-in</text>
        <text x="90" y="178" text-anchor="middle" font-size="9" fill="#ddd6fe">3 emoji questions</text>
        <text x="90" y="192" text-anchor="middle" font-size="9" fill="#ddd6fe">No text input required</text>

        <!-- Coach dashboard -->
        <rect x="180" y="140" width="155" height="65" rx="8" fill="#4338ca"/>
        <text x="257" y="163" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Coach Dashboard</text>
        <text x="257" y="178" text-anchor="middle" font-size="9" fill="#c7d2fe">Color-coded wellness status</text>
        <text x="257" y="192" text-anchor="middle" font-size="9" fill="#c7d2fe">Streaks · Flagged kids</text>

        <!-- Parent portal -->
        <rect x="355" y="140" width="155" height="65" rx="8" fill="#db2777"/>
        <text x="432" y="163" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Parent Portal</text>
        <text x="432" y="178" text-anchor="middle" font-size="9" fill="#fce7f3">Badge progress · Sessions</text>
        <text x="432" y="192" text-anchor="middle" font-size="9" fill="#fce7f3">Positive coach notes only</text>

        <!-- Badge Engine -->
        <rect x="530" y="140" width="185" height="65" rx="8" fill="#0d9488"/>
        <text x="622" y="163" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Gamification Engine</text>
        <text x="622" y="178" text-anchor="middle" font-size="9" fill="#ccfbf1">SVG Badge components</text>
        <text x="622" y="192" text-anchor="middle" font-size="9" fill="#ccfbf1">Streak thresholds · Chart.js</text>

        <!-- ── Flask API ── -->
        <rect x="20" y="258" width="695" height="48" rx="8" fill="#1e293b"/>
        <text x="357" y="276" text-anchor="middle" font-size="11" font-weight="700" fill="#f8fafc">Flask REST API — Role-Based JWT Auth</text>
        <text x="115" y="296" text-anchor="middle" font-size="9" fill="#94a3b8">POST /checkin</text>
        <text x="260" y="296" text-anchor="middle" font-size="9" fill="#94a3b8">GET /coach/participants</text>
        <text x="415" y="296" text-anchor="middle" font-size="9" fill="#94a3b8">GET /parent/child/:id</text>
        <text x="580" y="296" text-anchor="middle" font-size="9" fill="#94a3b8">POST /badges/award</text>

        <!-- ── PostgreSQL ── -->
        <rect x="20" y="320" width="695" height="38" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="357" y="335" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">PostgreSQL — participants (anon) · checkins · badges · sessions · coach_notes (internal only)</text>
        <text x="357" y="350" text-anchor="middle" font-size="9" fill="#64748b">SQLAlchemy ORM · Role-enforced row-level access · JWT expiry checked on every request</text>

        <!-- Arrows: actors → modules -->
        <line x1="85" y1="85" x2="90" y2="140" stroke="#7c3aed" stroke-width="2" marker-end="url(#arrPu)"/>
        <line x1="235" y1="85" x2="257" y2="140" stroke="#4338ca" stroke-width="2" marker-end="url(#arrIn)"/>
        <line x1="385" y1="85" x2="432" y2="140" stroke="#db2777" stroke-width="2" marker-end="url(#arrPk)"/>
        <line x1="595" y1="85" x2="622" y2="140" stroke="#0d9488" stroke-width="2" marker-end="url(#arrTe)"/>

        <!-- Arrows: modules → API -->
        <line x1="90" y1="205" x2="90" y2="258" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrPu)"/>
        <line x1="257" y1="205" x2="257" y2="258" stroke="#4338ca" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrIn)"/>
        <line x1="432" y1="205" x2="432" y2="258" stroke="#db2777" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrPk)"/>
        <line x1="622" y1="205" x2="622" y2="258" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#arrTe)"/>

        <!-- Arrow: API → DB -->
        <line x1="357" y1="306" x2="357" y2="320" stroke="#475569" stroke-width="2" marker-end="url(#arrSl)"/>

        <defs>
          <marker id="arrPu" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#7c3aed"/></marker>
          <marker id="arrIn" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#4338ca"/></marker>
          <marker id="arrPk" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#db2777"/></marker>
          <marker id="arrTe" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0d9488"/></marker>
          <marker id="arrSl" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#475569"/></marker>
        </defs>
      </svg>
    </div>

    <div class="section-label">4-Week Action Plan</div>
    <div class="phase-timeline">
      <div class="phase-item">
        <div class="phase-num phase-purple">1</div>
        <div class="phase-content">
          <h4>Week 1 — Research, Privacy Design &amp; UX</h4>
          <p>Research COPPA guidelines for digital platforms serving minors under 13. Email DED to understand current program tracking methods. Define badge taxonomy (e.g., "3-Session Streak," "Team Player," "Brave Opener"). Design Figma wireframes for coach dashboard and parent portal with COPPA constraints in mind. Draft PostgreSQL schema with no PII fields for youth.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-purple">2</div>
        <div class="phase-content">
          <h4>Week 2 — Auth, Core Models &amp; Check-in API</h4>
          <p>Scaffold Flask API. Implement role-based JWT auth with separate token scopes for <code>coach</code> and <code>parent</code> roles. Build SQLAlchemy models for <code>participants</code>, <code>checkins</code>, <code>sessions</code>, and <code>badges</code>. Build the emoji check-in endpoint with strict input validation (only valid emoji IDs accepted). Seed database with anonymized mock participants for testing.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-purple">3</div>
        <div class="phase-content">
          <h4>Week 3 — Dashboards, Badge Engine &amp; Parent Portal</h4>
          <p>Build coach dashboard in React — participant list with green/yellow/red wellness color-coding based on check-in responses, participation streaks, and a flagged-participant queue. Implement badge award logic on backend (triggered by streak thresholds). Render SVG badge components on frontend. Build parent portal showing badge timeline, upcoming sessions, and positive coach notes.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-purple">4</div>
        <div class="phase-content">
          <h4>Week 4 — Privacy Audit, Chart.js Visuals &amp; Outreach</h4>
          <p>Run a full privacy audit: confirm no PII leaks between role views, verify JWT expiry enforcement, check that no sensitive data persists in browser localStorage. Add Chart.js participation trend charts to the coach dashboard. Create a live demo with anonymized data. Draft outreach email to gtaylor@doingexceptionaldeeds.org with demo link and one-page summary.</p>
        </div>
      </div>
    </div>

    <div class="section-label">Work Split</div>
    <div class="team-grid">
      <div class="member-card">
        <div class="avatar av-purple">A</div>
        <h4>Akhil</h4>
        <ul>
          <li>Flask API &amp; role-based JWT</li>
          <li>Badge award logic (backend)</li>
          <li>PostgreSQL schema design</li>
          <li>COPPA compliance review</li>
          <li>Privacy audit checklist</li>
        </ul>
      </div>
      <div class="member-card">
        <div class="avatar av-purp2">M</div>
        <h4>Moiz</h4>
        <ul>
          <li>React frontend architecture</li>
          <li>Coach dashboard UI</li>
          <li>Emoji check-in component</li>
          <li>Wellness color-coding logic</li>
          <li>Chart.js participation graphs</li>
        </ul>
      </div>
      <div class="member-card">
        <div class="avatar av-purple" style="background:#6d28d9">N</div>
        <h4>Neil</h4>
        <ul>
          <li>Parent portal UI</li>
          <li>SVG badge components</li>
          <li>Gamification display &amp; timeline</li>
          <li>Figma wireframes &amp; UX polish</li>
          <li>Nonprofit outreach &amp; demo</li>
        </ul>
      </div>
    </div>

  </div>
</div>

<!-- ═══════════ SUMMARY ═══════════ -->
<div class="section-label" style="margin-top:2.5rem;">Project Summary</div>
<table class="summary-table">
  <thead>
    <tr>
      <th>Nonprofit</th>
      <th>Core Solution</th>
      <th>Key Technologies</th>
      <th>Primary Impact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Deputy Sheriffs' Association</strong></td>
      <td>Wellness &amp; Safety Portal</td>
      <td>React, Flask, JWT, PostgreSQL, Tailwind</td>
      <td>Centralizes member benefits + enables community safety tip submission</td>
    </tr>
    <tr>
      <td><strong>Community Food Connection</strong></td>
      <td>Volunteer &amp; Inventory App</td>
      <td>Vue.js, Flask, Google Sheets API, QR Code, SendGrid</td>
      <td>Digitizes 150+ volunteer operations &amp; 76,000 lbs/month food distribution</td>
    </tr>
    <tr>
      <td><strong>Doing Exceptional Deeds</strong></td>
      <td>Youth Progress Tracker</td>
      <td>React, Flask, JWT (roles), Chart.js, SVG Badges</td>
      <td>Tracks youth wellness &amp; milestones with COPPA-safe gamified dashboards</td>
    </tr>
  </tbody>
</table>

<!-- ═══════════ NEXT STEPS ═══════════ -->
<div class="section-label" style="margin-top:2rem;">Next Steps</div>
<div class="next-steps-grid">
  <div class="ns-card ns-blue">
    <div class="ns-icon">&#128187;</div>
    <h4>Weeks 1–4: Build</h4>
    <p>Execute the 4-phase action plans for each project. Each member works their assigned modules in parallel across all three prototypes.</p>
  </div>
  <div class="ns-card ns-green">
    <div class="ns-icon">&#128231;</div>
    <h4>End of Trimester: Outreach</h4>
    <p>Send each nonprofit a demo link, a one-page project summary, and a meeting request. Neil leads outreach for all three organizations.</p>
  </div>
  <div class="ns-card ns-purple">
    <div class="ns-icon">&#128640;</div>
    <h4>CSA / CS Honors: Scale</h4>
    <p>Pick up the strongest engagement and develop it into a production-ready application with direct nonprofit collaboration.</p>
  </div>
</div>

<div class="quote-block">
  "We want to create prototypes and then reach out for first engagements by the end of the Trimester. Then we could pick up these projects in CSA or CS Honors."
  <strong>— CTE Initiative Goal, T3 2026</strong>
</div>

</div>
