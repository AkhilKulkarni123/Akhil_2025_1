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
.cte-hero p { font-size: 1.05rem; margin: 0 0 1.5rem; color: #e2e8f0; max-width: 680px; }
.hero-team { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 1rem; }
.hero-pill {
  background: rgba(255,255,255,0.18);
  border: 1px solid rgba(255,255,255,0.3);
  color: #ffffff;
  border-radius: 999px;
  padding: 0.3rem 1rem;
  font-size: 0.9rem;
  font-weight: 700;
}
.hero-stat-row {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.2);
}
.hero-stat .num { font-size: 1.9rem; font-weight: 800; color: #93c5fd; }
.hero-stat .lbl { font-size: 0.75rem; color: #cbd5e1; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600; }

/* ── Key Points box ──────────────────────────────────────── */
.key-points {
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  border-left: 5px solid #0284c7;
  border-radius: 10px;
  padding: 1.1rem 1.4rem;
  margin: 1rem 0 1.5rem;
}
.key-points h4 { margin: 0 0 0.6rem; font-size: 0.85rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #0369a1; }
.key-points ul { margin: 0; padding-left: 1.3rem; }
.key-points ul li { font-size: 0.92rem; color: #0c4a6e; margin-bottom: 0.3rem; font-weight: 500; }
.kp-green  { background: #f0fdf4; border-color: #bbf7d0; border-left-color: #16a34a; }
.kp-green h4  { color: #15803d; }
.kp-green li  { color: #14532d; }
.kp-purple { background: #faf5ff; border-color: #e9d5ff; border-left-color: #7c3aed; }
.kp-purple h4 { color: #6d28d9; }
.kp-purple li { color: #3b0764; }

/* ── Project Card ─────────────────────────────────────────── */
.proj-card {
  border-radius: 14px;
  margin-bottom: 3.5rem;
  overflow: hidden;
  box-shadow: 0 4px 28px rgba(0,0,0,0.10);
  border: 1px solid #e2e8f0;
}
.proj-header {
  padding: 1.8rem 2rem;
  color: #ffffff;
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
}
.proj-number {
  width: 52px; height: 52px;
  border-radius: 12px;
  background: rgba(255,255,255,0.2);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem;
  font-weight: 900;
  color: #ffffff;
  flex-shrink: 0;
  border: 2px solid rgba(255,255,255,0.35);
}
.proj-header-text h2 {
  font-size: 1.45rem;
  font-weight: 800;
  margin: 0 0 0.25rem;
  color: #ffffff;
}
.proj-header-text p { margin: 0; font-size: 0.92rem; color: rgba(255,255,255,0.9); }

.accent-blue   { background: linear-gradient(135deg, #1e3a8a, #2563eb); }
.accent-green  { background: linear-gradient(135deg, #14532d, #16a34a); }
.accent-purple { background: linear-gradient(135deg, #4c1d95, #7c3aed); }
.border-blue   { border-top: 5px solid #2563eb; }
.border-green  { border-top: 5px solid #16a34a; }
.border-purple { border-top: 5px solid #7c3aed; }

.proj-body { padding: 2rem; background: #ffffff; }

/* ── Info Row ─────────────────────────────────────────────── */
.info-row { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
.info-chip {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 0.4rem 0.9rem;
  font-size: 0.83rem;
  color: #1e293b;
  font-weight: 500;
}
.info-chip strong { color: #0f172a; }

/* ── Section Label ────────────────────────────────────────── */
.section-label {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #475569;
  margin: 2rem 0 0.8rem;
  padding-bottom: 0.45rem;
  border-bottom: 2px solid #e2e8f0;
}

/* ── Problem / Solution split ─────────────────────────────── */
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 1.5rem; }
@media (max-width: 680px) { .two-col { grid-template-columns: 1fr; } }
.ps-box { border-radius: 10px; padding: 1.15rem 1.3rem; }
.ps-box.problem  { background: #fef2f2; border: 1.5px solid #fca5a5; }
.ps-box.solution { background: #f0fdf4; border: 1.5px solid #86efac; }
.ps-box h4 { margin: 0 0 0.55rem; font-size: 0.82rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; }
.ps-box.problem h4  { color: #b91c1c; }
.ps-box.solution h4 { color: #15803d; }
.ps-box p { margin: 0; font-size: 0.9rem; color: #1e293b; line-height: 1.6; }

/* ── Tech Tags ────────────────────────────────────────────── */
.tag-row { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.75rem 0 1.5rem; }
.tech-tag {
  display: inline-flex;
  align-items: center;
  border-radius: 6px;
  padding: 0.32rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.01em;
}
.tag-blue   { background: #1d4ed8; }
.tag-green  { background: #15803d; }
.tag-purple { background: #6d28d9; }
.tag-slate  { background: #334155; }
.tag-teal   { background: #0f766e; }
.tag-rose   { background: #be123c; }
.tag-amber  { background: #92400e; }
.tag-indigo { background: #3730a3; }
.tag-cyan   { background: #0e7490; }

/* ── Architecture SVG wrapper ─────────────────────────────── */
.arch-wrap {
  background: #f8fafc;
  border: 1.5px solid #cbd5e1;
  border-radius: 12px;
  padding: 1.2rem;
  margin: 1rem 0 1.75rem;
  overflow-x: auto;
  text-align: center;
}
.arch-wrap svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }

/* ── Phase Timeline ───────────────────────────────────────── */
.phase-timeline { margin: 0.75rem 0 1.5rem; }
.phase-item { display: flex; gap: 1rem; margin-bottom: 1rem; align-items: flex-start; }
.phase-num {
  min-width: 38px; height: 38px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 900; font-size: 0.85rem;
  color: #ffffff;
  flex-shrink: 0;
  margin-top: 3px;
}
.phase-blue   { background: #1d4ed8; }
.phase-green  { background: #15803d; }
.phase-purple { background: #6d28d9; }
.phase-content {
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  padding: 0.9rem 1.15rem;
  flex: 1;
}
.phase-content h4 { margin: 0 0 0.35rem; font-size: 0.95rem; font-weight: 800; color: #0f172a; }
.phase-content p  { margin: 0; font-size: 0.875rem; color: #1e293b; line-height: 1.65; }

/* ── Work Split ───────────────────────────────────────────── */
.team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 0.75rem 0 0; }
@media (max-width: 700px) { .team-grid { grid-template-columns: 1fr; } }
.member-card {
  border-radius: 10px;
  padding: 1.1rem 1.15rem;
  border: 1.5px solid #e2e8f0;
  background: #ffffff;
}
.member-card .avatar {
  width: 42px; height: 42px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 0.6rem;
}
.member-card .role-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-radius: 4px;
  padding: 2px 7px;
  margin-bottom: 0.55rem;
  color: #ffffff;
}
.member-card h4 { margin: 0 0 0.5rem; font-size: 0.95rem; font-weight: 800; color: #0f172a; }
.member-card ul { margin: 0; padding-left: 1.15rem; }
.member-card ul li { font-size: 0.83rem; color: #1e293b; margin-bottom: 0.25rem; line-height: 1.5; }

/* ── Summary Table ────────────────────────────────────────── */
.summary-table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem; }
.summary-table th {
  background: #0f172a;
  color: #ffffff;
  padding: 0.8rem 1rem;
  text-align: left;
  font-weight: 700;
  font-size: 0.85rem;
}
.summary-table td {
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #e2e8f0;
  color: #1e293b;
  vertical-align: top;
}
.summary-table tr:nth-child(even) td { background: #f8fafc; }

/* ── Next Steps ───────────────────────────────────────────── */
.next-steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1rem 0; }
@media (max-width: 680px) { .next-steps-grid { grid-template-columns: 1fr; } }
.ns-card { border-radius: 12px; padding: 1.4rem 1.25rem; border: 1.5px solid #e2e8f0; }
.ns-card .ns-step { font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem; }
.ns-card h4 { margin: 0 0 0.45rem; font-size: 1rem; font-weight: 800; color: #0f172a; }
.ns-card p  { margin: 0; font-size: 0.85rem; color: #374151; line-height: 1.6; }
.ns-blue   { background: #eff6ff; border-color: #bfdbfe; }
.ns-blue .ns-step   { color: #1d4ed8; }
.ns-green  { background: #f0fdf4; border-color: #bbf7d0; }
.ns-green .ns-step  { color: #15803d; }
.ns-purple { background: #faf5ff; border-color: #e9d5ff; }
.ns-purple .ns-step { color: #6d28d9; }

.quote-block {
  background: #f8fafc;
  border-left: 5px solid #1d4ed8;
  border-radius: 0 10px 10px 0;
  padding: 1.1rem 1.6rem;
  margin: 2.5rem 0 0;
  color: #1e293b;
  font-style: italic;
  font-size: 1rem;
  line-height: 1.7;
}
.quote-block strong { font-style: normal; color: #475569; font-size: 0.85rem; display: block; margin-top: 0.5rem; }
</style>

<div class="cte-blog">

<!-- ═══════════ HERO ═══════════ -->
<div class="cte-hero">
  <h1>CTE Nonprofit Partnership<br>Action Plans</h1>
  <p>Third Trimester community impact projects — building technical prototypes for three Poway-area nonprofits, with a 12-week development timeline and first engagements delivered by end of trimester.</p>
  <div class="hero-team">
    <span class="hero-pill">Akhil</span>
    <span class="hero-pill">Moiz</span>
    <span class="hero-pill">Neil</span>
  </div>
  <div class="hero-stat-row">
    <div class="hero-stat"><div class="num">3</div><div class="lbl">Nonprofits</div></div>
    <div class="hero-stat"><div class="num">12</div><div class="lbl">Weeks / Project</div></div>
    <div class="hero-stat"><div class="num">3</div><div class="lbl">Team Members</div></div>
    <div class="hero-stat"><div class="num">T3</div><div class="lbl">Trimester</div></div>
  </div>
</div>

<!-- ═══════════ PROJECT 1: DSA-SD ═══════════ -->
<div class="proj-card border-blue">
  <div class="proj-header accent-blue">
    <div class="proj-number">01</div>
    <div class="proj-header-text">
      <h2>Deputy Sheriffs' Association of San Diego</h2>
      <p>Safety Services &bull; Member Support &bull; Community Liaison &bull; 13881 Danielson St., Poway, CA 92064</p>
    </div>
  </div>
  <div class="proj-body">

    <div class="info-row">
      <span class="info-chip"><strong>Contact:</strong> cvelarde@dsasd.org</span>
      <span class="info-chip"><strong>Phone:</strong> (858) 486-9009</span>
      <span class="info-chip"><strong>Website:</strong> dsasd.org</span>
    </div>

    <div class="key-points">
      <h4>Key Points</h4>
      <ul>
        <li>The DSA-SD has no centralized digital platform — benefit information, wellness resources, and public tip submission are all fragmented or absent online.</li>
        <li>We will build a role-based full-stack web portal with separate authenticated views for deputies/members and a public-facing community safety page.</li>
        <li>The member dashboard will surface benefit navigation, mental health resources, and event notifications without requiring staff to update code manually.</li>
        <li>A public tip submission endpoint will use rate-limiting and input sanitization to safely accept non-emergency community tips, routed to an admin moderation queue.</li>
        <li>By end of trimester, we will deliver a live demo and outreach to the DSA contact — a foundation that can be expanded in CSA or CS Honors into a production system.</li>
      </ul>
    </div>

    <div class="two-col">
      <div class="ps-box problem">
        <h4>Problem</h4>
        <p>No centralized digital tool exists for deputies or community members to access wellness resources, navigate benefits, or submit non-emergency tips. Both internal member services and public safety engagement face friction from manual, fragmented processes.</p>
      </div>
      <div class="ps-box solution">
        <h4>Solution</h4>
        <p>A full-stack <strong>Deputy Wellness and Community Safety Portal</strong> — a role-based web application serving deputies (private benefit dashboard) and the public (safety tip submission and resource hub) through a single unified system.</p>
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
      <span class="tech-tag tag-cyan">bcrypt</span>
      <span class="tech-tag tag-green">pytest</span>
    </div>

    <div class="section-label">System Architecture</div>
    <div class="arch-wrap">
      <svg width="800" height="360" viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
        <rect width="800" height="360" rx="10" fill="#f0f6ff"/>

        <!-- Column headers -->
        <text x="107" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">USERS</text>
        <text x="320" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">FRONTEND (React.js)</text>
        <text x="535" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">BACKEND API (Flask)</text>
        <text x="717" y="26" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">DATABASE</text>

        <!-- Dividers -->
        <line x1="215" y1="12" x2="215" y2="345" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,3"/>
        <line x1="425" y1="12" x2="425" y2="345" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,3"/>
        <line x1="620" y1="12" x2="620" y2="345" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,3"/>

        <!-- User: Deputy/Member -->
        <rect x="22" y="50" width="165" height="54" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
        <text x="104" y="73" text-anchor="middle" font-size="12" font-weight="700" fill="#1e3a8a">Deputy / Member</text>
        <text x="104" y="90" text-anchor="middle" font-size="10" fill="#1e40af">Authenticated user</text>

        <!-- User: Public -->
        <rect x="22" y="135" width="165" height="54" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
        <text x="104" y="158" text-anchor="middle" font-size="12" font-weight="700" fill="#14532d">Community / Public</text>
        <text x="104" y="175" text-anchor="middle" font-size="10" fill="#166534">Anonymous visitor</text>

        <!-- User: Admin -->
        <rect x="22" y="220" width="165" height="54" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
        <text x="104" y="243" text-anchor="middle" font-size="12" font-weight="700" fill="#78350f">DSA Staff Admin</text>
        <text x="104" y="260" text-anchor="middle" font-size="10" fill="#92400e">Protected role</text>

        <!-- Frontend: Member Dashboard -->
        <rect x="228" y="44" width="175" height="66" rx="8" fill="#1d4ed8"/>
        <text x="315" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Member Dashboard</text>
        <text x="315" y="86" text-anchor="middle" font-size="10" fill="#bfdbfe">Benefits / Resources / Events</text>
        <text x="315" y="100" text-anchor="middle" font-size="9" fill="#93c5fd">React SPA — Tailwind CSS</text>

        <!-- Frontend: Public Portal -->
        <rect x="228" y="128" width="175" height="66" rx="8" fill="#15803d"/>
        <text x="315" y="154" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Public Safety Portal</text>
        <text x="315" y="170" text-anchor="middle" font-size="10" fill="#bbf7d0">Tip Submission / Resources</text>
        <text x="315" y="184" text-anchor="middle" font-size="9" fill="#86efac">React Router — Public Route</text>

        <!-- Frontend: Admin Panel -->
        <rect x="228" y="212" width="175" height="66" rx="8" fill="#b45309"/>
        <text x="315" y="238" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Admin Panel</text>
        <text x="315" y="254" text-anchor="middle" font-size="10" fill="#fef3c7">Tip Queue / Event Manager</text>
        <text x="315" y="268" text-anchor="middle" font-size="9" fill="#fde68a">/admin Protected Route</text>

        <!-- Backend: Flask API -->
        <rect x="438" y="80" width="165" height="155" rx="8" fill="#1e293b"/>
        <text x="520" y="106" text-anchor="middle" font-size="11" font-weight="700" fill="#f1f5f9">Flask REST API</text>
        <text x="520" y="122" text-anchor="middle" font-size="9" fill="#94a3b8">JWT Auth — bcrypt hashing</text>
        <rect x="448" y="131" width="145" height="21" rx="4" fill="#334155"/>
        <text x="520" y="146" text-anchor="middle" font-size="9" fill="#e2e8f0">POST  /auth/login</text>
        <rect x="448" y="156" width="145" height="21" rx="4" fill="#334155"/>
        <text x="520" y="171" text-anchor="middle" font-size="9" fill="#e2e8f0">GET   /resources</text>
        <rect x="448" y="181" width="145" height="21" rx="4" fill="#334155"/>
        <text x="520" y="196" text-anchor="middle" font-size="9" fill="#e2e8f0">POST  /tips</text>
        <rect x="448" y="206" width="145" height="21" rx="4" fill="#334155"/>
        <text x="520" y="221" text-anchor="middle" font-size="9" fill="#e2e8f0">GET   /admin/queue</text>

        <!-- Database -->
        <rect x="633" y="80" width="150" height="155" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="708" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">PostgreSQL</text>
        <text x="708" y="120" text-anchor="middle" font-size="9" fill="#475569">SQLAlchemy ORM</text>
        <rect x="643" y="130" width="130" height="18" rx="3" fill="#dbeafe"/>
        <text x="708" y="143" text-anchor="middle" font-size="9" fill="#1e3a8a">members</text>
        <rect x="643" y="152" width="130" height="18" rx="3" fill="#dcfce7"/>
        <text x="708" y="165" text-anchor="middle" font-size="9" fill="#14532d">resources</text>
        <rect x="643" y="174" width="130" height="18" rx="3" fill="#fef3c7"/>
        <text x="708" y="187" text-anchor="middle" font-size="9" fill="#78350f">tips</text>
        <rect x="643" y="196" width="130" height="18" rx="3" fill="#fce7f3"/>
        <text x="708" y="209" text-anchor="middle" font-size="9" fill="#831843">events</text>

        <!-- Arrows: Users to Frontend -->
        <line x1="187" y1="77" x2="228" y2="77" stroke="#1d4ed8" stroke-width="2" marker-end="url(#aB1)"/>
        <line x1="187" y1="161" x2="228" y2="161" stroke="#15803d" stroke-width="2" marker-end="url(#aG1)"/>
        <line x1="187" y1="245" x2="228" y2="245" stroke="#b45309" stroke-width="2" marker-end="url(#aA1)"/>

        <!-- Arrows: Frontend to API -->
        <line x1="403" y1="90" x2="438" y2="130" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#aB1)"/>
        <line x1="403" y1="161" x2="438" y2="161" stroke="#15803d" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#aG1)"/>
        <line x1="403" y1="245" x2="438" y2="200" stroke="#b45309" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#aA1)"/>

        <!-- Arrow: API to DB -->
        <line x1="603" y1="158" x2="633" y2="158" stroke="#475569" stroke-width="2" marker-end="url(#aS1)"/>

        <!-- Security banner -->
        <rect x="22" y="305" width="756" height="26" rx="6" fill="#fef2f2" stroke="#fca5a5" stroke-width="1"/>
        <text x="400" y="322" text-anchor="middle" font-size="10" fill="#b91c1c" font-weight="700">Security: bcrypt hashing — JWT expiry enforcement — Input sanitization on all fields — Rate-limiting on /tips — No secrets in version control</text>

        <defs>
          <marker id="aB1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#1d4ed8"/></marker>
          <marker id="aG1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#15803d"/></marker>
          <marker id="aA1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#b45309"/></marker>
          <marker id="aS1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#475569"/></marker>
        </defs>
      </svg>
    </div>

    <div class="section-label">12-Week Action Plan</div>
    <div class="phase-timeline">
      <div class="phase-item">
        <div class="phase-num phase-blue">1</div>
        <div class="phase-content">
          <h4>Weeks 1–2 — Research, Wireframing &amp; Schema Design</h4>
          <p>Study DSA-SD's existing website and identify all digital gaps. Conduct a stakeholder needs analysis by reviewing their service offerings for members vs. the public. Wireframe all three user views (deputy dashboard, public portal, admin panel) in Figma. Draft the PostgreSQL schema with tables for <code>members</code>, <code>resources</code>, <code>tips</code>, and <code>events</code>. Write a project README with scope, data model, and API contract decisions.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-blue">2</div>
        <div class="phase-content">
          <h4>Weeks 3–4 — Backend Foundation &amp; Authentication</h4>
          <p>Scaffold the Flask API with a modular blueprint structure. Implement the full JWT authentication flow — register, login, token refresh, and logout (token invalidation). Set up SQLAlchemy ORM models for all four tables. Configure bcrypt for password hashing. Establish environment variable management for secrets and write initial database migration scripts.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-blue">3</div>
        <div class="phase-content">
          <h4>Weeks 5–6 — Core API Endpoints</h4>
          <p>Build all CRUD REST endpoints for <code>/resources</code>, <code>/tips</code>, and <code>/events</code> with correct HTTP status codes and structured error responses. Implement rate-limiting middleware on the <code>/tips</code> POST endpoint using Flask-Limiter. Add input sanitization on all form-receiving endpoints. Write OpenAPI documentation for every route. Test all endpoints manually using Postman.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-blue">4</div>
        <div class="phase-content">
          <h4>Weeks 7–8 — React Frontend Build</h4>
          <p>Bootstrap the React SPA with React Router for role-based navigation. Build the public landing page with safety tip submission form and resource hub. Implement the authenticated member dashboard featuring benefit lookup cards, event feed, and resource directory. Connect all components to the backend via Axios with global error handling. Add client-side form validation with real-time feedback UI.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-blue">5</div>
        <div class="phase-content">
          <h4>Weeks 9–10 — Admin Panel &amp; Integration Testing</h4>
          <p>Build the protected <code>/admin</code> route with DSA-specific staff login. Add the tip moderation queue, event publishing interface, and resource management UI — all without requiring staff to modify code. Write pytest unit tests for all Flask API routes, targeting 80%+ coverage. Run end-to-end integration tests against the full stack. Fix any defects surfaced during testing.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-blue">6</div>
        <div class="phase-content">
          <h4>Weeks 11–12 — Deployment, Polish &amp; Outreach Prep</h4>
          <p>Deploy the React frontend to GitHub Pages and the Flask backend to Render or Railway with CI/CD via GitHub Actions. Conduct a final security review — confirm no credentials in version control, test JWT expiry, verify HTTPS enforcement. Polish responsive layout for mobile. Prepare a demo slide deck and live demo environment with sample data. Draft and send the first outreach email to cvelarde@dsasd.org.</p>
        </div>
      </div>
    </div>

    <div class="section-label">Work Split</div>
    <div class="team-grid">
      <div class="member-card">
        <div class="avatar" style="background:#1d4ed8">A</div>
        <span class="role-badge" style="background:#1d4ed8">Backend Lead</span>
        <h4>Akhil</h4>
        <ul>
          <li>Flask API scaffold and blueprint structure</li>
          <li>JWT authentication and bcrypt hashing</li>
          <li>SQLAlchemy database models and migrations</li>
          <li>Render/Railway deployment and CI/CD pipeline</li>
          <li>OpenAPI documentation</li>
        </ul>
      </div>
      <div class="member-card">
        <div class="avatar" style="background:#0891b2">M</div>
        <span class="role-badge" style="background:#0891b2">Frontend Lead</span>
        <h4>Moiz</h4>
        <ul>
          <li>React SPA architecture and routing</li>
          <li>Public landing page and tip submission form</li>
          <li>Tailwind CSS component library</li>
          <li>Axios API integration with error handling</li>
          <li>Client-side form validation</li>
        </ul>
      </div>
      <div class="member-card">
        <div class="avatar" style="background:#0f766e">N</div>
        <span class="role-badge" style="background:#0f766e">DevOps &amp; QA Lead</span>
        <h4>Neil</h4>
        <ul>
          <li>Admin panel and tip moderation queue UI</li>
          <li>pytest unit and integration tests</li>
          <li>Figma wireframes and design review</li>
          <li>Security audit and HTTPS verification</li>
          <li>Demo prep and outreach to cvelarde@dsasd.org</li>
        </ul>
      </div>
    </div>

  </div>
</div>

<!-- ═══════════ PROJECT 2: COMMUNITY FOOD CONNECTION ═══════════ -->
<div class="proj-card border-green">
  <div class="proj-header accent-green">
    <div class="proj-number">02</div>
    <div class="proj-header-text">
      <h2>The Community Food Connection</h2>
      <p>Food Distribution &bull; Volunteer Coordination &bull; 1,200+ Families/Week &bull; 14047 Twin Peaks Rd, Poway, CA 92064</p>
    </div>
  </div>
  <div class="proj-body">

    <div class="info-row">
      <span class="info-chip"><strong>Contact:</strong> tcfconnection@gmail.com</span>
      <span class="info-chip"><strong>Phone:</strong> (858) 751-4613</span>
      <span class="info-chip"><strong>Open:</strong> Mon / Wed / Fri, 3–6 PM</span>
      <span class="info-chip"><strong>Scale:</strong> ~76,000 lbs food/month</span>
    </div>

    <div class="key-points kp-green">
      <h4>Key Points</h4>
      <ul>
        <li>The Community Food Connection serves over 1,200 families per week with 150+ volunteers but coordinates entirely through manual methods — no software manages shift sign-ups, inventory counts, or family visit tracking.</li>
        <li>We will build a mobile-first web application because volunteers are primarily on their phones during distribution days (Mon/Wed/Fri, 3–6 PM).</li>
        <li>A QR-code-based anonymous family check-in system will replace paper sign-in sheets while storing zero PII — families receive only an anonymized ID, complying with privacy best practices.</li>
        <li>Google Sheets export via the Sheets API preserves staff familiarity while feeding a structured PostgreSQL backend for long-term data reliability.</li>
        <li>A demand forecasting module using linear regression on historical visit data will help staff proactively plan weekly food quantities and reduce waste from the 76,000+ lbs distributed each month.</li>
      </ul>
    </div>

    <div class="two-col">
      <div class="ps-box problem">
        <h4>Problem</h4>
        <p>Despite 150+ volunteers and 1,200+ families per week, coordination is manual. Volunteer scheduling, inventory tracking, and family intake records are fragmented across paper and ad-hoc tools — leading to understaffing, food waste, and no capacity for demand forecasting.</p>
      </div>
      <div class="ps-box solution">
        <h4>Solution</h4>
        <p>A mobile-first <strong>Volunteer and Inventory Management Web App</strong> — digitizing shift sign-up, food stock logging with Google Sheets export, anonymous QR-code family check-in, and a demand forecast dashboard for distribution planning on Mon/Wed/Fri.</p>
      </div>
    </div>

    <div class="section-label">Tech Stack</div>
    <div class="tag-row">
      <span class="tech-tag tag-green">Vue.js</span>
      <span class="tech-tag tag-slate">Flask</span>
      <span class="tech-tag tag-teal">PostgreSQL</span>
      <span class="tech-tag tag-cyan">Google Sheets API</span>
      <span class="tech-tag tag-amber">SendGrid Email API</span>
      <span class="tech-tag tag-slate">Python qrcode lib</span>
      <span class="tech-tag tag-indigo">Chart.js</span>
      <span class="tech-tag tag-rose">scikit-learn (stretch)</span>
      <span class="tech-tag tag-green">SQLAlchemy ORM</span>
    </div>

    <div class="section-label">System Architecture</div>
    <div class="arch-wrap">
      <svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
        <rect width="800" height="400" rx="10" fill="#f0fdf7"/>

        <!-- Actor boxes top row -->
        <!-- Volunteer -->
        <rect x="18" y="30" width="148" height="58" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
        <text x="92" y="55" text-anchor="middle" font-size="12" font-weight="700" fill="#14532d">Volunteer</text>
        <text x="92" y="71" text-anchor="middle" font-size="10" fill="#166534">Mobile browser</text>
        <text x="92" y="82" text-anchor="middle" font-size="9" fill="#15803d">Phone on-site</text>

        <!-- Staff -->
        <rect x="182" y="30" width="148" height="58" rx="8" fill="#fef9c3" stroke="#b45309" stroke-width="1.5"/>
        <text x="256" y="55" text-anchor="middle" font-size="12" font-weight="700" fill="#713f12">Food Bank Staff</text>
        <text x="256" y="71" text-anchor="middle" font-size="10" fill="#854d0e">Desktop admin view</text>
        <text x="256" y="82" text-anchor="middle" font-size="9" fill="#b45309">Inventory manager</text>

        <!-- Family -->
        <rect x="346" y="30" width="148" height="58" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
        <text x="420" y="55" text-anchor="middle" font-size="12" font-weight="700" fill="#1e3a8a">Family</text>
        <text x="420" y="71" text-anchor="middle" font-size="10" fill="#1e40af">QR scan at door</text>
        <text x="420" y="82" text-anchor="middle" font-size="9" fill="#1d4ed8">No login required</text>

        <!-- External -->
        <rect x="510" y="30" width="265" height="58" rx="8" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.5"/>
        <text x="642" y="55" text-anchor="middle" font-size="12" font-weight="700" fill="#4c1d95">External Services</text>
        <text x="642" y="71" text-anchor="middle" font-size="10" fill="#6d28d9">SendGrid (email) — Google Sheets API</text>
        <text x="642" y="82" text-anchor="middle" font-size="9" fill="#7c3aed">Confirmation emails — Staff-facing export</text>

        <!-- Middle: Modules row -->
        <!-- Shift Scheduler -->
        <rect x="18" y="145" width="168" height="72" rx="8" fill="#15803d"/>
        <text x="102" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Shift Scheduler</text>
        <text x="102" y="186" text-anchor="middle" font-size="9" fill="#dcfce7">Sign-up / Cancellation</text>
        <text x="102" y="200" text-anchor="middle" font-size="9" fill="#dcfce7">Mon / Wed / Fri slots</text>

        <!-- Inventory Tracker -->
        <rect x="202" y="145" width="168" height="72" rx="8" fill="#b45309"/>
        <text x="286" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Inventory Tracker</text>
        <text x="286" y="186" text-anchor="middle" font-size="9" fill="#fef9c3">Category logging by weight</text>
        <text x="286" y="200" text-anchor="middle" font-size="9" fill="#fef9c3">Low-stock threshold alerts</text>

        <!-- QR Check-in -->
        <rect x="386" y="145" width="168" height="72" rx="8" fill="#1d4ed8"/>
        <text x="470" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">QR Family Check-in</text>
        <text x="470" y="186" text-anchor="middle" font-size="9" fill="#bfdbfe">Anonymous ID only</text>
        <text x="470" y="200" text-anchor="middle" font-size="9" fill="#bfdbfe">Zero PII stored</text>

        <!-- Admin Dashboard -->
        <rect x="570" y="145" width="210" height="72" rx="8" fill="#0f766e"/>
        <text x="675" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Admin Dashboard + Forecast</text>
        <text x="675" y="186" text-anchor="middle" font-size="9" fill="#ccfbf1">Visitor count / Roster / Inventory</text>
        <text x="675" y="200" text-anchor="middle" font-size="9" fill="#ccfbf1">Demand forecast — Chart.js</text>

        <!-- Flask API bar -->
        <rect x="18" y="272" width="762" height="52" rx="8" fill="#1e293b"/>
        <text x="400" y="292" text-anchor="middle" font-size="11" font-weight="700" fill="#f1f5f9">Flask REST API</text>
        <text x="115" y="314" text-anchor="middle" font-size="9" fill="#94a3b8">POST /shifts/signup</text>
        <text x="285" y="314" text-anchor="middle" font-size="9" fill="#94a3b8">POST /inventory/log</text>
        <text x="455" y="314" text-anchor="middle" font-size="9" fill="#94a3b8">GET /checkin/qr/:id</text>
        <text x="645" y="314" text-anchor="middle" font-size="9" fill="#94a3b8">GET /admin/dashboard</text>

        <!-- DB row -->
        <rect x="18" y="340" width="360" height="42" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="198" y="357" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">PostgreSQL — SQLAlchemy ORM</text>
        <text x="198" y="373" text-anchor="middle" font-size="9" fill="#334155">volunteers — shifts — inventory_logs — families (anon IDs only)</text>

        <rect x="394" y="340" width="210" height="42" rx="8" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
        <text x="499" y="357" text-anchor="middle" font-size="10" font-weight="700" fill="#14532d">Google Sheets Export</text>
        <text x="499" y="373" text-anchor="middle" font-size="9" fill="#166534">Read-only staff-familiar format</text>

        <rect x="620" y="340" width="160" height="42" rx="8" fill="#faf5ff" stroke="#7c3aed" stroke-width="1.5"/>
        <text x="700" y="357" text-anchor="middle" font-size="10" font-weight="700" fill="#4c1d95">Demand Forecast</text>
        <text x="700" y="373" text-anchor="middle" font-size="9" fill="#6d28d9">Chart.js + Linear Regression</text>

        <!-- Arrows: actors to modules -->
        <line x1="92" y1="88" x2="102" y2="145" stroke="#15803d" stroke-width="2" marker-end="url(#aG2)"/>
        <line x1="256" y1="88" x2="286" y2="145" stroke="#b45309" stroke-width="2" marker-end="url(#aA2)"/>
        <line x1="420" y1="88" x2="470" y2="145" stroke="#1d4ed8" stroke-width="2" marker-end="url(#aB2)"/>
        <line x1="642" y1="88" x2="675" y2="145" stroke="#7c3aed" stroke-width="2" marker-end="url(#aP2)"/>

        <!-- Arrows: modules to API -->
        <line x1="102" y1="217" x2="102" y2="272" stroke="#15803d" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#aG2)"/>
        <line x1="286" y1="217" x2="286" y2="272" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#aA2)"/>
        <line x1="470" y1="217" x2="470" y2="272" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#aB2)"/>
        <line x1="675" y1="217" x2="675" y2="272" stroke="#0f766e" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#aT2)"/>

        <!-- Arrows: API to DBs -->
        <line x1="198" y1="324" x2="198" y2="340" stroke="#334155" stroke-width="1.5" marker-end="url(#aS2)"/>
        <line x1="499" y1="324" x2="499" y2="340" stroke="#334155" stroke-width="1.5" marker-end="url(#aS2)"/>
        <line x1="700" y1="324" x2="700" y2="340" stroke="#334155" stroke-width="1.5" marker-end="url(#aS2)"/>

        <defs>
          <marker id="aG2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#15803d"/></marker>
          <marker id="aA2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#b45309"/></marker>
          <marker id="aB2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#1d4ed8"/></marker>
          <marker id="aP2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#7c3aed"/></marker>
          <marker id="aT2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0f766e"/></marker>
          <marker id="aS2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#334155"/></marker>
        </defs>
      </svg>
    </div>

    <div class="section-label">12-Week Action Plan</div>
    <div class="phase-timeline">
      <div class="phase-item">
        <div class="phase-num phase-green">1</div>
        <div class="phase-content">
          <h4>Weeks 1–2 — Discovery, Workflow Mapping &amp; Schema</h4>
          <p>Contact tcfconnection@gmail.com to understand current pain points, volunteer sign-up methods, and food intake procedures. Document the full distribution day lifecycle: intake, sorting, distribution, closeout. Design a PostgreSQL schema with tables for <code>volunteers</code>, <code>shifts</code>, <code>inventory_logs</code>, and <code>families</code> — enforcing no PII in the families table at the schema level. Create Figma mockups for both the volunteer mobile view and the staff desktop view.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-green">2</div>
        <div class="phase-content">
          <h4>Weeks 3–4 — Backend Core: Shift &amp; Inventory Models</h4>
          <p>Scaffold the Flask API with blueprints for shifts, inventory, and check-in modules. Build SQLAlchemy models and run initial database migrations. Implement the shift creation, sign-up, and cancellation endpoints with proper conflict detection (no double-booking same volunteer slot). Integrate SendGrid for automated confirmation and reminder emails triggered on shift sign-up and 24 hours before distribution.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-green">3</div>
        <div class="phase-content">
          <h4>Weeks 5–6 — QR Check-in, Inventory Logging &amp; Sheets Export</h4>
          <p>Implement the anonymous family check-in system using Python's <code>qrcode</code> library to generate per-family QR codes that map to anonymized IDs — no name or contact info stored. Build the food category inventory logging endpoint supporting weight and unit-count inputs across categories (produce, canned, dairy, dry goods). Implement the Google Sheets API export so staff can view records in a familiar spreadsheet format.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-green">4</div>
        <div class="phase-content">
          <h4>Weeks 7–8 — Vue.js Frontend: Scheduler, Inventory &amp; Check-in UI</h4>
          <p>Build the Vue.js frontend with a mobile-first layout targeting phone screens used on-site. Implement the volunteer shift calendar with real-time open/filled slot indicators. Build the food category logging interface for staff with running totals and low-stock threshold warnings. Build the QR code family check-in flow — scanning a QR displays confirmation of check-in without revealing any family data to the screen.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-green">5</div>
        <div class="phase-content">
          <h4>Weeks 9–10 — Admin Dashboard, Forecast Module &amp; Testing</h4>
          <p>Build the unified admin dashboard displaying today's visitor count, inventory levels with color-coded low-stock alerts, and the full volunteer roster for the day. Implement the demand forecast chart using Chart.js visualization backed by a simple linear regression model (scikit-learn or pure NumPy) trained on historical visit-count data. Write pytest tests for all backend routes and run cross-device mobile responsiveness testing.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-green">6</div>
        <div class="phase-content">
          <h4>Weeks 11–12 — Deployment, Privacy Review &amp; Outreach</h4>
          <p>Deploy the application to a cloud host accessible on mobile without installation. Conduct a final privacy review confirming no PII in any database record, HTTPS enforced, and admin-only access controls on all records. Run a full simulation using the Mon/Wed/Fri 3–6 PM schedule as a test scenario. Generate a shareable demo link. Write a one-page feature summary and send outreach to the food bank coordinator.</p>
        </div>
      </div>
    </div>

    <div class="section-label">Work Split</div>
    <div class="team-grid">
      <div class="member-card">
        <div class="avatar" style="background:#0891b2">A</div>
        <span class="role-badge" style="background:#0891b2">DevOps &amp; Integration Lead</span>
        <h4>Akhil</h4>
        <ul>
          <li>Google Sheets API integration and sync logic</li>
          <li>QR code generation and anonymous ID system</li>
          <li>Cloud deployment and environment setup</li>
          <li>Privacy review and no-PII schema enforcement</li>
          <li>End-to-end integration tests</li>
        </ul>
      </div>
      <div class="member-card">
        <div class="avatar" style="background:#15803d">M</div>
        <span class="role-badge" style="background:#15803d">Backend Lead</span>
        <h4>Moiz</h4>
        <ul>
          <li>Flask API scaffold and blueprint structure</li>
          <li>SQLAlchemy models and database migrations</li>
          <li>Shift scheduling endpoints and conflict detection</li>
          <li>SendGrid email confirmation integration</li>
          <li>Inventory logging and low-stock alert logic</li>
        </ul>
      </div>
      <div class="member-card">
        <div class="avatar" style="background:#0f766e">N</div>
        <span class="role-badge" style="background:#0f766e">Frontend Lead</span>
        <h4>Neil</h4>
        <ul>
          <li>Vue.js frontend architecture</li>
          <li>Mobile-first volunteer shift calendar UI</li>
          <li>Inventory logging and admin dashboard</li>
          <li>QR check-in flow and demand forecast chart</li>
          <li>Cross-device responsiveness testing and outreach</li>
        </ul>
      </div>
    </div>

  </div>
</div>

<!-- ═══════════ PROJECT 3: DOING EXCEPTIONAL DEEDS ═══════════ -->
<div class="proj-card border-purple">
  <div class="proj-header accent-purple">
    <div class="proj-number">03</div>
    <div class="proj-header-text">
      <h2>Doing Exceptional Deeds</h2>
      <p>Youth Mental Health and Sports &bull; Ages 5–15 &bull; Bridging Wellness and Athletics &bull; San Diego, CA 92127</p>
    </div>
  </div>
  <div class="proj-body">

    <div class="info-row">
      <span class="info-chip"><strong>Contact:</strong> gtaylor@doingexceptionaldeeds.org</span>
      <span class="info-chip"><strong>Phone:</strong> (619) 745-3230</span>
      <span class="info-chip"><strong>Address:</strong> 10325 Craftsman Way #301, San Diego</span>
      <span class="info-chip"><strong>Ages Served:</strong> 5–15</span>
    </div>

    <div class="key-points kp-purple">
      <h4>Key Points</h4>
      <ul>
        <li>Doing Exceptional Deeds uses sports as a vehicle for mental health improvement in youth ages 5–15 — but participant progress and wellness trends are tracked informally with no software, making it impossible to identify who needs extra support.</li>
        <li>We will build a secure, COPPA-aware web application with two separate authenticated role views: a Coach Dashboard and a Parent Portal — neither of which shares data with the other inappropriately.</li>
        <li>The emoji-based mood check-in system requires no text input from youth and feeds color-coded wellness indicators (green/yellow/red) directly to the coach view without using clinical language.</li>
        <li>A gamification engine awards SVG milestone badges for attendance streaks, skill achievements, and positive behaviors — making progress tangible and motivating for young participants.</li>
        <li>All data is designed with COPPA compliance from the ground up: no PII for youth under 13, no third-party analytics, no sensitive data in browser localStorage, and minimal data retention policies enforced at the schema level.</li>
      </ul>
    </div>

    <div class="two-col">
      <div class="ps-box problem">
        <h4>Problem</h4>
        <p>Participant wellness check-ins and milestone tracking across sports programs are informal. Coaches have no systematic visibility into which youth may need follow-up support, and parents have no window into their child's growth over time — limiting both program effectiveness and family engagement.</p>
      </div>
      <div class="ps-box solution">
        <h4>Solution</h4>
        <p>A secure <strong>Youth Progress Tracker and Coach Dashboard</strong> — with emoji-based mood check-ins, gamified milestone badges, role-separated Coach and Parent portals, and a COPPA-aware data model that stores no PII for minors under any user role.</p>
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
      <span class="tech-tag tag-cyan">COPPA-aware design</span>
      <span class="tech-tag tag-green">pytest</span>
    </div>

    <div class="section-label">System Architecture</div>
    <div class="arch-wrap">
      <svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
        <rect width="800" height="400" rx="10" fill="#faf5ff"/>

        <!-- Actors -->
        <!-- Youth -->
        <rect x="18" y="28" width="148" height="64" rx="8" fill="#f3e8ff" stroke="#6d28d9" stroke-width="1.5"/>
        <text x="92" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#4c1d95">Youth</text>
        <text x="92" y="68" text-anchor="middle" font-size="10" fill="#5b21b6">Ages 5–15</text>
        <text x="92" y="82" text-anchor="middle" font-size="9" fill="#6d28d9">Emoji check-in only</text>

        <!-- Coach -->
        <rect x="182" y="28" width="148" height="64" rx="8" fill="#e0e7ff" stroke="#3730a3" stroke-width="1.5"/>
        <text x="256" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#1e1b4b">Coach</text>
        <text x="256" y="68" text-anchor="middle" font-size="10" fill="#312e81">Program leader</text>
        <text x="256" y="82" text-anchor="middle" font-size="9" fill="#3730a3">JWT role: coach</text>

        <!-- Parent -->
        <rect x="346" y="28" width="148" height="64" rx="8" fill="#fce7f3" stroke="#be185d" stroke-width="1.5"/>
        <text x="420" y="52" text-anchor="middle" font-size="12" font-weight="700" fill="#831843">Parent</text>
        <text x="420" y="68" text-anchor="middle" font-size="10" fill="#9d174d">Guardian access</text>
        <text x="420" y="82" text-anchor="middle" font-size="9" fill="#be185d">JWT role: parent</text>

        <!-- COPPA box -->
        <rect x="510" y="28" width="267" height="64" rx="8" fill="#fef2f2" stroke="#b91c1c" stroke-width="1.5"/>
        <text x="643" y="50" text-anchor="middle" font-size="11" font-weight="700" fill="#991b1b">COPPA-Aware Design</text>
        <text x="643" y="66" text-anchor="middle" font-size="9" fill="#b91c1c">No youth PII stored — Anonymous participant IDs</text>
        <text x="643" y="80" text-anchor="middle" font-size="9" fill="#b91c1c">No 3rd-party analytics — Minimal data retention</text>

        <!-- Module row -->
        <!-- Emoji Check-in -->
        <rect x="18" y="148" width="158" height="72" rx="8" fill="#6d28d9"/>
        <text x="97" y="173" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Emoji Check-in</text>
        <text x="97" y="189" text-anchor="middle" font-size="9" fill="#e9d5ff">3 questions per session</text>
        <text x="97" y="203" text-anchor="middle" font-size="9" fill="#e9d5ff">No text input required</text>

        <!-- Coach Dashboard -->
        <rect x="192" y="148" width="168" height="72" rx="8" fill="#3730a3"/>
        <text x="276" y="173" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Coach Dashboard</text>
        <text x="276" y="189" text-anchor="middle" font-size="9" fill="#c7d2fe">Color-coded wellness status</text>
        <text x="276" y="203" text-anchor="middle" font-size="9" fill="#c7d2fe">Streaks — Flagged participants</text>

        <!-- Parent Portal -->
        <rect x="376" y="148" width="168" height="72" rx="8" fill="#be185d"/>
        <text x="460" y="173" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Parent Portal</text>
        <text x="460" y="189" text-anchor="middle" font-size="9" fill="#fce7f3">Badge progress — Sessions</text>
        <text x="460" y="203" text-anchor="middle" font-size="9" fill="#fce7f3">Positive coach notes only</text>

        <!-- Badge + Chart -->
        <rect x="560" y="148" width="220" height="72" rx="8" fill="#0f766e"/>
        <text x="670" y="173" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Gamification + Analytics</text>
        <text x="670" y="189" text-anchor="middle" font-size="9" fill="#ccfbf1">SVG badge components</text>
        <text x="670" y="203" text-anchor="middle" font-size="9" fill="#ccfbf1">Chart.js participation trends</text>

        <!-- Flask API bar -->
        <rect x="18" y="277" width="762" height="54" rx="8" fill="#1e293b"/>
        <text x="400" y="298" text-anchor="middle" font-size="11" font-weight="700" fill="#f1f5f9">Flask REST API — Role-Based JWT Authentication</text>
        <text x="110" y="320" text-anchor="middle" font-size="9" fill="#94a3b8">POST /checkin</text>
        <text x="280" y="320" text-anchor="middle" font-size="9" fill="#94a3b8">GET /coach/participants</text>
        <text x="460" y="320" text-anchor="middle" font-size="9" fill="#94a3b8">GET /parent/child/:id</text>
        <text x="650" y="320" text-anchor="middle" font-size="9" fill="#94a3b8">POST /badges/award</text>

        <!-- DB bar -->
        <rect x="18" y="347" width="762" height="42" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="400" y="364" text-anchor="middle" font-size="10" font-weight="700" fill="#0f172a">PostgreSQL — SQLAlchemy ORM</text>
        <text x="400" y="380" text-anchor="middle" font-size="9" fill="#334155">participants (anon) — checkins — badges — sessions — coach_notes (internal only, never exposed to parent role)</text>

        <!-- Arrows: actors to modules -->
        <line x1="92" y1="92" x2="97" y2="148" stroke="#6d28d9" stroke-width="2" marker-end="url(#aPu3)"/>
        <line x1="256" y1="92" x2="276" y2="148" stroke="#3730a3" stroke-width="2" marker-end="url(#aIn3)"/>
        <line x1="420" y1="92" x2="460" y2="148" stroke="#be185d" stroke-width="2" marker-end="url(#aPk3)"/>
        <line x1="643" y1="92" x2="670" y2="148" stroke="#0f766e" stroke-width="2" marker-end="url(#aTe3)"/>

        <!-- Arrows: modules to API -->
        <line x1="97" y1="220" x2="97" y2="277" stroke="#6d28d9" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#aPu3)"/>
        <line x1="276" y1="220" x2="276" y2="277" stroke="#3730a3" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#aIn3)"/>
        <line x1="460" y1="220" x2="460" y2="277" stroke="#be185d" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#aPk3)"/>
        <line x1="670" y1="220" x2="670" y2="277" stroke="#0f766e" stroke-width="1.5" stroke-dasharray="4,2" marker-end="url(#aTe3)"/>

        <!-- Arrow: API to DB -->
        <line x1="400" y1="331" x2="400" y2="347" stroke="#334155" stroke-width="2" marker-end="url(#aSl3)"/>

        <defs>
          <marker id="aPu3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#6d28d9"/></marker>
          <marker id="aIn3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#3730a3"/></marker>
          <marker id="aPk3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#be185d"/></marker>
          <marker id="aTe3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0f766e"/></marker>
          <marker id="aSl3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#334155"/></marker>
        </defs>
      </svg>
    </div>

    <div class="section-label">12-Week Action Plan</div>
    <div class="phase-timeline">
      <div class="phase-item">
        <div class="phase-num phase-purple">1</div>
        <div class="phase-content">
          <h4>Weeks 1–2 — COPPA Research, Badge Design &amp; UX Planning</h4>
          <p>Research COPPA requirements for digital platforms serving children under 13, documenting all constraints before writing a single line of code. Email DED to understand their current program tracking and what coaches most need to see. Define the badge taxonomy (e.g., "3-Session Streak," "Team Player," "Brave Opener," "Consistent Effort"). Design Figma wireframes for both the coach dashboard and parent portal with role separation made explicit in the visual design.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-purple">2</div>
        <div class="phase-content">
          <h4>Weeks 3–4 — Backend Foundation: Auth &amp; Data Models</h4>
          <p>Scaffold the Flask API. Implement role-based JWT authentication with separate token scopes for <code>coach</code> and <code>parent</code> roles — a coach token cannot access parent-specific routes and vice versa. Build SQLAlchemy models for <code>participants</code> (anonymous IDs only), <code>checkins</code>, <code>sessions</code>, <code>badges</code>, and <code>coach_notes</code> (marked internal-only at the model level). Seed the database with anonymized mock participant data for development and testing.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-purple">3</div>
        <div class="phase-content">
          <h4>Weeks 5–6 — Check-in API, Badge Logic &amp; Coach Data Endpoints</h4>
          <p>Build the emoji check-in POST endpoint with strict input validation — only a predefined set of emoji IDs is accepted, rejecting all free-text input. Implement badge award logic on the backend with configurable streak thresholds (e.g., award "3-Session Streak" badge after 3 consecutive check-ins). Build the <code>GET /coach/participants</code> endpoint returning wellness color codes derived from rolling check-in averages. Confirm that <code>coach_notes</code> are never returned by any parent-role endpoint.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-purple">4</div>
        <div class="phase-content">
          <h4>Weeks 7–8 — React Frontend: Coach Dashboard &amp; Parent Portal</h4>
          <p>Build the React SPA with separate authenticated routing for coach and parent roles. Implement the coach dashboard: participant list with green/yellow/red wellness color-coding, participation streak indicators, session calendar, and a flagged-participants queue for those needing follow-up. Build the parent portal: child's badge progress timeline, upcoming session schedule, and coach notes displayed only in positive, non-clinical framing.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-purple">5</div>
        <div class="phase-content">
          <h4>Weeks 9–10 — SVG Badges, Chart.js Analytics &amp; Privacy Audit</h4>
          <p>Render the full badge collection as SVG components with earned/unearned visual states. Add a Chart.js participation trend chart to the coach dashboard showing session attendance over time. Conduct a full privacy audit: verify no PII leaks between roles by testing each endpoint with the opposing role's JWT token, test token expiry enforcement, confirm nothing sensitive in browser localStorage or session storage, and validate minimal data retention implementation.</p>
        </div>
      </div>
      <div class="phase-item">
        <div class="phase-num phase-purple">6</div>
        <div class="phase-content">
          <h4>Weeks 11–12 — Deployment, Accessibility Polish &amp; Outreach</h4>
          <p>Deploy the application with HTTPS enforced. Run a final accessibility review ensuring the check-in UI is usable by youth ages 5 and up — large tap targets, clear emoji visuals, no reading required. Create a live demo environment populated with fully anonymized participant data. Write a one-page project summary highlighting the COPPA-safe design and youth wellness features. Draft and send the outreach email to gtaylor@doingexceptionaldeeds.org with the demo link.</p>
        </div>
      </div>
    </div>

    <div class="section-label">Work Split</div>
    <div class="team-grid">
      <div class="member-card">
        <div class="avatar" style="background:#3730a3">A</div>
        <span class="role-badge" style="background:#3730a3">Frontend Lead</span>
        <h4>Akhil</h4>
        <ul>
          <li>React SPA architecture and routing</li>
          <li>Coach dashboard with wellness color-coding</li>
          <li>Parent portal UI and badge progress timeline</li>
          <li>Chart.js participation trend charts</li>
          <li>Accessibility review for youth usability</li>
        </ul>
      </div>
      <div class="member-card">
        <div class="avatar" style="background:#7c3aed">M</div>
        <span class="role-badge" style="background:#7c3aed">DevOps &amp; QA Lead</span>
        <h4>Moiz</h4>
        <ul>
          <li>COPPA compliance audit and documentation</li>
          <li>JWT role enforcement and penetration testing</li>
          <li>pytest coverage for all API routes</li>
          <li>Deployment with HTTPS and env var management</li>
          <li>Demo environment setup and outreach prep</li>
        </ul>
      </div>
      <div class="member-card">
        <div class="avatar" style="background:#6d28d9">N</div>
        <span class="role-badge" style="background:#6d28d9">Backend Lead</span>
        <h4>Neil</h4>
        <ul>
          <li>Flask API scaffold and role-based JWT auth</li>
          <li>SQLAlchemy models and COPPA schema design</li>
          <li>Emoji check-in and badge award logic</li>
          <li>Internal-only coach_notes enforcement</li>
          <li>Outreach email to gtaylor@doingexceptionaldeeds.org</li>
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
      <td>Wellness and Safety Portal</td>
      <td>React, Flask, JWT, PostgreSQL, Tailwind</td>
      <td>Centralizes member benefits and enables community safety tip submission via a secure, role-based portal</td>
    </tr>
    <tr>
      <td><strong>Community Food Connection</strong></td>
      <td>Volunteer and Inventory App</td>
      <td>Vue.js, Flask, PostgreSQL, Google Sheets API, SendGrid, QR Code</td>
      <td>Digitizes coordination for 150+ volunteers and 76,000+ lbs of food distributed monthly</td>
    </tr>
    <tr>
      <td><strong>Doing Exceptional Deeds</strong></td>
      <td>Youth Progress Tracker</td>
      <td>React, Flask, JWT (roles), Chart.js, SVG Badges, COPPA design</td>
      <td>Tracks youth wellness and milestones through gamified, privacy-safe coach and parent dashboards</td>
    </tr>
  </tbody>
</table>

<!-- ═══════════ ROLE ROTATION OVERVIEW ═══════════ -->
<div class="section-label" style="margin-top:2rem;">Team Role Rotation Across Projects</div>
<table class="summary-table">
  <thead>
    <tr>
      <th>Team Member</th>
      <th>Project 1 — DSA-SD</th>
      <th>Project 2 — Food Connection</th>
      <th>Project 3 — Doing Exceptional Deeds</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Akhil</strong></td>
      <td>Backend Lead</td>
      <td>DevOps and Integration Lead</td>
      <td>Frontend Lead</td>
    </tr>
    <tr>
      <td><strong>Moiz</strong></td>
      <td>Frontend Lead</td>
      <td>Backend Lead</td>
      <td>DevOps and QA Lead</td>
    </tr>
    <tr>
      <td><strong>Neil</strong></td>
      <td>DevOps and QA Lead</td>
      <td>Frontend Lead</td>
      <td>Backend Lead</td>
    </tr>
  </tbody>
</table>

<!-- ═══════════ NEXT STEPS ═══════════ -->
<div class="section-label" style="margin-top:2rem;">Next Steps</div>
<div class="next-steps-grid">
  <div class="ns-card ns-blue">
    <div class="ns-step">Step 1</div>
    <h4>Weeks 1–12: Build</h4>
    <p>Execute the six-phase action plans for all three projects in parallel. Each member rotates through backend, frontend, and DevOps roles across projects to build full-stack experience.</p>
  </div>
  <div class="ns-card ns-green">
    <div class="ns-step">Step 2</div>
    <h4>End of Trimester: Outreach</h4>
    <p>Deliver a live demo link and a one-page technical summary to each nonprofit contact. Request a first meeting to demonstrate the prototype and gather feedback on priorities for next steps.</p>
  </div>
  <div class="ns-card ns-purple">
    <div class="ns-step">Step 3</div>
    <h4>CSA / CS Honors: Scale</h4>
    <p>Pick up the most promising nonprofit engagement and grow the prototype into a production-ready application built in direct collaboration with the organization and its actual users.</p>
  </div>
</div>

<div class="quote-block">
  "We want to create prototypes and then reach out for first engagements by the end of the Trimester. Then we could pick up these projects in CSA or CS Honors."
  <strong>— CTE Initiative Goal, T3 2026</strong>
</div>

</div>
