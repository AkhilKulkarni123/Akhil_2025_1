---
comments: True
layout: post
title: AP CSP 2020 Practice Exam 1 - MCQ Review
description: A comprehensive review of my AP CSP MCQ performance — strengths, weaknesses, and improvement plan
author: Akhil Kulkarni
permalink: /apcsp/mcq-review
categories: [AP CSP]
---

<style>
  .score-card {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin: 20px 0;
  }
  .score-box {
    background: #1e1e1e;
    border: 1px solid #444;
    border-radius: 10px;
    padding: 18px 24px;
    text-align: center;
    flex: 1;
    min-width: 140px;
  }
  .score-box .label {
    color: #b6b6b6;
    font-size: 0.85em;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .score-box .value {
    color: #ffcc00;
    font-size: 2em;
    font-weight: bold;
    margin-top: 4px;
  }
  .score-box .value.green { color: #4caf50; }
  .score-box .value.red { color: #f44336; }

  .bar-container {
    margin: 8px 0;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .bar-label {
    color: #e8e8e8;
    min-width: 200px;
    font-size: 0.9em;
  }
  .bar-track {
    flex: 1;
    background: #333;
    border-radius: 6px;
    height: 22px;
    overflow: hidden;
  }
  .bar-fill {
    height: 100%;
    border-radius: 6px;
    transition: width 0.3s;
  }
  .bar-fill.green { background: linear-gradient(90deg, #388e3c, #4caf50); }
  .bar-fill.yellow { background: linear-gradient(90deg, #f9a825, #fdd835); }
  .bar-fill.red { background: linear-gradient(90deg, #c62828, #f44336); }
  .bar-stat {
    color: #b6b6b6;
    font-size: 0.85em;
    min-width: 90px;
    text-align: right;
  }

  .section-box {
    background: #1e1e1e;
    border-left: 4px solid #ffcc00;
    border-radius: 0 8px 8px 0;
    padding: 16px 20px;
    margin: 14px 0;
  }
  .section-box h4 { color: #ffcc00; margin-top: 0; }
  .section-box p, .section-box li { color: #d7cfbe; }

  .missed-q {
    background: #2a1a1a;
    border-left: 4px solid #f44336;
    border-radius: 0 8px 8px 0;
    padding: 16px 20px;
    margin: 14px 0;
  }
  .missed-q h4 { color: #f44336; margin-top: 0; }
  .missed-q p { color: #d7cfbe; }
  .missed-q .takeaway {
    background: #1e1e1e;
    border-radius: 6px;
    padding: 10px 14px;
    margin-top: 10px;
    color: #ffcc00;
    font-style: italic;
  }

  .plan-step {
    background: #1a2a1a;
    border-left: 4px solid #4caf50;
    border-radius: 0 8px 8px 0;
    padding: 14px 18px;
    margin: 10px 0;
  }
  .plan-step h4 { color: #4caf50; margin-top: 0; }
  .plan-step li { color: #d7cfbe; }

  .summary-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin: 16px 0;
  }
  .summary-item {
    background: #1e1e1e;
    border-radius: 8px;
    padding: 14px 18px;
    border: 1px solid #333;
  }
  .summary-item .s-label { color: #b6b6b6; font-size: 0.8em; text-transform: uppercase; }
  .summary-item .s-value { color: #e8e8e8; font-size: 1.05em; margin-top: 4px; }
</style>

## Score Overview

<div class="score-card">
  <div class="score-box">
    <div class="label">Score</div>
    <div class="value green">65 / 67</div>
  </div>
  <div class="score-box">
    <div class="label">Percentage</div>
    <div class="value green">97%</div>
  </div>
  <div class="score-box">
    <div class="label">Time Spent</div>
    <div class="value">1h 27m</div>
  </div>
  <div class="score-box">
    <div class="label">Missed</div>
    <div class="value red">2</div>
  </div>
</div>

---

## Performance by Big Idea

<div class="bar-container">
  <span class="bar-label">1 — Creative Development</span>
  <div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div>
  <span class="bar-stat">9/9 (100%)</span>
</div>
<div class="bar-container">
  <span class="bar-label">2 — Data</span>
  <div class="bar-track"><div class="bar-fill yellow" style="width:92%"></div></div>
  <span class="bar-stat">12/13 (92%)</span>
</div>
<div class="bar-container">
  <span class="bar-label">3 — Algorithms & Programming</span>
  <div class="bar-track"><div class="bar-fill yellow" style="width:96%"></div></div>
  <span class="bar-stat">25/26 (96%)</span>
</div>
<div class="bar-container">
  <span class="bar-label">4 — Computing Systems & Networks</span>
  <div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div>
  <span class="bar-stat">6/6 (100%)</span>
</div>
<div class="bar-container">
  <span class="bar-label">5 — Impact of Computing</span>
  <div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div>
  <span class="bar-stat">12/12 (100%)</span>
</div>

---

## Strengths

<div class="section-box">
  <h4>Debugging & Error Identification — Skill 4.C (8/8)</h4>
  <p>Correctly identified errors in every question involving off-by-one bugs, loop logic mistakes, and list traversal issues (Q16, Q24, Q39, Q54, Q58, Q64, Q66, Q67). Comfortable tracing code line-by-line — this is one of the most heavily tested skills on the AP exam.</p>
</div>

<div class="section-box">
  <h4>Procedures & Abstraction — Skill 4.B (6/6)</h4>
  <p>All questions on calling procedures, return values, and working with abstractions answered correctly (Q32, Q34, Q37, Q49, Q60, Q65). Solid understanding of parameters, return values, and generalizing repeated logic.</p>
</div>

<div class="section-box">
  <h4>Computing & Internet — Big Ideas 4 & 5 (18/18)</h4>
  <p>Perfect across all questions covering internet protocols, IPv6, network redundancy, cybersecurity (phishing, encryption, certificate authorities), digital divide, open source, Creative Commons, and crowdsourcing.</p>
</div>

<div class="section-box">
  <h4>Simulations & Randomness (5/5)</h4>
  <p>All simulation questions correct — flight simulations, spinner logic, coin flips, bacteria population models, and park foot traffic simulations.</p>
</div>

---

## Weaknesses — The 2 Missed Questions

Both missed questions share the same skill: **Skill 2.B — Determine the result or behavior of an algorithm or program.**

<div class="missed-q">
  <h4>Q11: Color Represented by Binary Triplet (Topic 2.1)</h4>
  <p>Required converting a binary RGB triplet to decimal, then mapping it to a color. Likely made an arithmetic error during manual binary-to-decimal conversion under time pressure.</p>
  <div class="takeaway">Takeaway: Need faster, more accurate binary-to-decimal conversions — especially for multi-value RGB problems.</div>
</div>

<div class="missed-q">
  <h4>Q23: Flowchart to Set Available (Topic 3.9)</h4>
  <p>Required tracing through a flowchart to determine a variable's final value. Spent only ~2 seconds on this — rushed through it and likely took the wrong branch at a decision point.</p>
  <div class="takeaway">Takeaway: Slow down on flowchart questions. Trace every branch carefully instead of eyeballing it.</div>
</div>

---

## Skill Breakdown

<div class="bar-container">
  <span class="bar-label">1.A — Collaboration</span>
  <div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div>
  <span class="bar-stat">2/2 (100%)</span>
</div>
<div class="bar-container">
  <span class="bar-label">1.B — Concepts in context</span>
  <div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div>
  <span class="bar-stat">6/6 (100%)</span>
</div>
<div class="bar-container">
  <span class="bar-label">1.C — Collab on solutions</span>
  <div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div>
  <span class="bar-stat">1/1 (100%)</span>
</div>
<div class="bar-container">
  <span class="bar-label">1.D — Evaluate solutions</span>
  <div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div>
  <span class="bar-stat">5/5 (100%)</span>
</div>
<div class="bar-container">
  <span class="bar-label">2.A — Algorithmic processes</span>
  <div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div>
  <span class="bar-stat">4/4 (100%)</span>
</div>
<div class="bar-container">
  <span class="bar-label" style="color:#f44336;font-weight:bold;">2.B — Code results (FOCUS)</span>
  <div class="bar-track"><div class="bar-fill red" style="width:83%"></div></div>
  <span class="bar-stat" style="color:#f44336;font-weight:bold;">10/12 (83%)</span>
</div>
<div class="bar-container">
  <span class="bar-label">4.A — Sequencing/selection/iteration</span>
  <div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div>
  <span class="bar-stat">1/1 (100%)</span>
</div>
<div class="bar-container">
  <span class="bar-label">4.B — Procedures & calls</span>
  <div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div>
  <span class="bar-stat">6/6 (100%)</span>
</div>
<div class="bar-container">
  <span class="bar-label">4.C — Error identification</span>
  <div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div>
  <span class="bar-stat">8/8 (100%)</span>
</div>
<div class="bar-container">
  <span class="bar-label">5.A — Program algorithms</span>
  <div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div>
  <span class="bar-stat">1/1 (100%)</span>
</div>
<div class="bar-container">
  <span class="bar-label">5.B — Knowledge from data</span>
  <div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div>
  <span class="bar-stat">7/7 (100%)</span>
</div>
<div class="bar-container">
  <span class="bar-label">5.D — Impact of data</span>
  <div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div>
  <span class="bar-stat">4/4 (100%)</span>
</div>
<div class="bar-container">
  <span class="bar-label">5.E — Legal & ethical factors</span>
  <div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div>
  <span class="bar-stat">3/3 (100%)</span>
</div>

---

## Improvement Plan

**Target: Skill 2.B — the only skill where I dropped points (10/12, 83%)**

<div class="plan-step">
  <h4>1. Daily Binary/Decimal Conversion Drills</h4>
  <ul>
    <li>5-10 quick binary-to-decimal conversions daily</li>
    <li>Focus on multi-value problems (RGB triplets) where three conversions are needed</li>
    <li>Memorize powers of 2: 128, 64, 32, 16, 8, 4, 2, 1</li>
  </ul>
</div>

<div class="plan-step">
  <h4>2. Slow Down on Flowchart Questions</h4>
  <ul>
    <li>Trace <em>every</em> branch on paper — never eyeball flowcharts</li>
    <li>Budget 30-60 seconds minimum for any flowchart question</li>
    <li>Practice with College Board's released flowchart questions</li>
  </ul>
</div>

<div class="plan-step">
  <h4>3. Timed Practice & Tracking</h4>
  <ul>
    <li>Complete more College Board practice exams under timed conditions</li>
    <li>Review every Skill 2.B question after each test — even ones I got right</li>
    <li>Track Skill 2.B accuracy over time to measure progress</li>
  </ul>
</div>

<div class="plan-step">
  <h4>4. Time Management on Exam Day</h4>
  <ul>
    <li>Budget ~1.5 min per question (100 min for 67 Qs, leaving 20 min review)</li>
    <li>Skip questions I'm stuck on and come back — don't burn 30+ min early</li>
    <li>Flag uncertain answers for end-of-exam review</li>
  </ul>
</div>

---

## Final Takeaways

<div class="summary-grid">
  <div class="summary-item">
    <div class="s-label">Overall Readiness</div>
    <div class="s-value" style="color:#4caf50;">Strong — 97% is well above the 5-score threshold</div>
  </div>
  <div class="summary-item">
    <div class="s-label">Biggest Strength</div>
    <div class="s-value">Error identification & debugging (Skill 4.C — 8/8)</div>
  </div>
  <div class="summary-item">
    <div class="s-label">Biggest Weakness</div>
    <div class="s-value" style="color:#f44336;">Algorithm/code tracing (Skill 2.B — 10/12)</div>
  </div>
  <div class="summary-item">
    <div class="s-label">Action Items</div>
    <div class="s-value">Daily binary drills, slow flowchart tracing, more timed practice</div>
  </div>
</div>

> **Bottom line:** The foundation is solid across all 5 Big Ideas. Targeted work on Skill 2.B — binary conversions and flowchart tracing — will close the small gap and push toward a perfect score.
