# 7 Dimensions of Understanding Assessment Framework
## Spreadsheet Reference Guide

---

## DIMENSION 1: TYPE of Knowledge

| Level | Type | Description | Examples | Assessment Method |
|-------|------|-------------|----------|-------------------|
| 1 | Factual | Terminology, specific details, isolated facts | "Photosynthesis means 'light-synthesis'"; "Paris is the capital of France" | Recognition, recall tests |
| 2 | Conceptual | Principles, theories, models, relationships | "Photosynthesis is part of the carbon cycle"; "Democracy requires separation of powers" | Explanation, concept mapping |
| 3 | Procedural | Methods, algorithms, techniques, how-to | "To solve for x, isolate the variable"; "Steps to write an essay" | Performance tasks, demonstrations |
| 4 | Metacognitive | Strategic knowledge, self-awareness about learning | "I learn math best when I draw diagrams first"; "I need to check my work for careless errors" | Self-reflection prompts, learning journals |
| 5 | Spatial | Navigation, locations, spatial relationships | "The library is two blocks north"; "The mitochondria is inside the cell membrane" | Map reading, spatial reasoning tasks |
| 6 | Motor/Skills | Physical coordination, techniques | "How to hold a basketball for shooting"; "Proper posture for playing violin" | Physical performance, technique demonstration |
| 7 | Habits/Attitudes | Dispositions, routines, values | "Always check your work"; "Approach problems systematically" | Behavioral observation, portfolio |

**LLM Judge Prompt Template:**
```
Classify knowledge type: [Factual/Conceptual/Procedural/Metacognitive/Spatial/Motor/Habits]
Student response: [INSERT]
Primary type: ___
Secondary types: ___
Evidence: [Quote]
```

---

## DIMENSION 2: DEPTH of Understanding

| Level | Label | Description | Can the student... | Quality Indicators |
|-------|-------|-------------|-------------------|-------------------|
| 0 | No idea | Complete unfamiliarity | Has never encountered concept | N/A |
| 1 | Heard of it | Recognition only | "I've heard that word before" | Recognition without understanding |
| 2 | Vague idea | Surface-level, incorrect/incomplete | Give rough description with errors | Some familiarity, misconceptions present |
| 3 | Basic understanding | Accurate but shallow | Define correctly, state main idea | Accuracy: Medium; Coherence: Low; Justification: Authority |
| 4 | Solid understanding | Accurate and connected | Understand relationships, can explain | Accuracy: High; Coherence: Medium; Justification: Examples |
| 5 | Deep/Principled | Understands underlying principles | Knows WHY, not just WHAT or HOW | Accuracy: High; Coherence: High; Justification: Reasoning |
| 6 | Expert/Integrated | Automatized, embodied knowledge | Uses fluently, integrated into thinking | Accuracy: High; Coherence: Very High; Justification: Principled |

**Quality Sub-Dimensions:**
- **Accuracy** (0-5): Free from misconceptions
- **Coherence** (0-5): Integrated into knowledge network (not isolated)
- **Justification Type**: Authority / Examples / Reasoning from principles

**LLM Judge Prompt Template:**
```
Rate understanding depth (0-6): ___
Accuracy (0-5): ___
Coherence (0-5): ___
Justification type: [Authority/Examples/Reasoning]
Evidence: [Quotes]
```

---

## DIMENSION 3: SPEED/EASE of Learning

### 3A. Learning Rate Metrics

| Metric | Formula | Interpretation |
|--------|---------|----------------|
| Expected trials | Student's average from previous similar concepts | Individual baseline |
| Actual trials | Count from current session | Observed performance |
| Learning surprise | (Expected - Actual) / Expected × 100% | Positive % = faster than expected |
| Progress velocity | Improvement rate per session/week | Acceleration indicator |

**Example Calculation:**
- Expected: 10 practice problems to master
- Actual: 4 problems to master  
- Learning surprise: (10-4)/10 = **60% faster than expected** ⚡

### 3B. Cognitive Effort/Ease Scale

| Level | Student Experience | Behavioral Indicators | Tutor Observation |
|-------|-------------------|----------------------|-------------------|
| 1 - Very difficult | High cognitive load, frustration | Many errors, long hesitations, gives up | Heavy scaffolding needed |
| 2 - Moderately difficult | Effortful but manageable | Some errors, needs hints, persists | Moderate support needed |
| 3 - Appropriate challenge | Flow state, optimal | Engaged, making progress, occasional errors | Minimal support needed |
| 4 - Easy | Low effort, natural | Few errors, quick processing, confident | Almost no support needed |
| 5 - Automatic | Effortless, unconscious | Fluent performance, no deliberation | No support needed, can help others |

**Sensitive Period Indicator Formula:**
```
IF learning_surprise > 40% AND effort_level >= 4 (Easy/Automatic)
THEN sensitive_period_flag = TRUE
```

**Data Collection:**
- Student self-report: "How hard are you working?" (1-5)
- Tutor observation: Effort level (1-5)
- System tracking: Trials to criterion, time on task

---

## DIMENSION 4: STABILITY of Understanding

| Level | Label | Retention Period | Interference Resistance | Rehearsal Needs |
|-------|-------|-----------------|------------------------|----------------|
| 1 | Fragile | Hours | Easily disrupted | Constant practice |
| 2 | Unstable | Days | Moderate vulnerability | Frequent review |
| 3 | Stable | Weeks | Some resistance | Occasional review |
| 4 | Durable | Months to years | High resistance | Minimal review |
| 5 | Permanent | Lifetime | Immune | No rehearsal needed (automatized) |

**Measurement Protocol:**
- **Immediate recall** (end of session): Baseline
- **24-hour delayed recall**: Test without warning
- **1-week delayed recall**: Retention test
- **1-month delayed recall**: Long-term durability
- **Interference test**: After learning related/conflicting concept, retest original

**LLM Prediction Prompt:**
```
Based on learning quality, predict stability: [Fragile/Unstable/Stable/Durable/Permanent]
Indicators: [Strong encoding, multiple retrievals, deep processing, emotional engagement]
Predicted retention at 1 week: ___%
Reasoning: [Why]
```

---

## DIMENSION 5: INTERCONNECTIVITY

| Level | Label | Description | Network Span | Spontaneous Connections |
|-------|-------|-------------|--------------|------------------------|
| 1 | Isolated | Single fact, no connections | None | 0 |
| 2 | Local connections | Links to directly related concepts | Within topic | 1-2 |
| 3 | Domain network | Integrated within subject domain | Across topics in subject | 3-5 |
| 4 | Cross-domain | Connections across subjects | Multiple subjects | 6-10 |
| 5 | Generative network | Can create novel connections | Novel applications | 10+ |

**Assessment Methods:**
- **Concept mapping**: Student creates visual network
- **Connection prompts**: "How does X relate to Y?"
- **Spontaneous connections**: Count during learning
- **Analogical reasoning**: Can create metaphors/analogies

**Example Coding:**
```
Student links photosynthesis to:
- Chlorophyll (local) ✓
- Cellular respiration (domain) ✓
- Solar panels (cross-domain) ✓
- Economic systems (generative) ✓

Level = 4 (Cross-domain)
Connection count = 4
```

**LLM Assessment Prompt:**
```
Connectivity level: [Isolated/Local/Domain/Cross-domain/Generative]
Connections made: [List with types]
Connection count: ___
Spontaneous vs prompted: ___
Evidence: [Quotes]
```

---

## DIMENSION 6: TRANSFERABILITY

| Level | Label | Context Type | Problem Novelty | Example |
|-------|-------|--------------|----------------|---------|
| 0 | No transfer | Identical to practice | Exact same problem | Can only solve textbook example 2.3 |
| 1 | Near transfer | Similar format, familiar elements | Similar problems, same format | Can solve problems 2.4-2.10 (same type) |
| 2 | Moderate transfer | Different format, same concept | Novel presentation, same domain | Can solve word problems (not just equations) |
| 3 | Far transfer | Novel application within domain | New problem type, same domain | Applies algebra to physics problems |
| 4 | Cross-domain | Different subject/domain | Across disciplines | Uses proportional reasoning in art, cooking, economics |
| 5 | Creative transfer | Invents new applications | Novel invention/insight | Creates new solution method never taught |

**Assessment Protocol:**
```
1. Teach concept in context A
2. Test in context A (baseline)
3. Test in context B (similar) → Near transfer
4. Test in context C (different format) → Moderate transfer
5. Test in context D (different domain) → Far/cross-domain
6. Open-ended: "How else could you use this?" → Creative transfer
```

**Scoring:**
- Success rate in each context
- Adaptation quality (errors, speed)
- Spontaneous vs. prompted transfer

---

## DIMENSION 7: EXPLAINABILITY

### 7A. Mastery Matrix

| | Cannot Do | Can Do (with errors) | Can Do (correctly) | Can Do (fluently) | Automatized |
|---|---|---|---|---|---|
| **Cannot Explain** | Novice (no mastery) | Emergent (partial tacit) | **TACIT KNOWLEDGE** | **EXPERT PARADOX** | **EXPERT** |
| **Can Explain Partially** | Declarative only (knows about) | Developing | Competent | Proficient (starting to automatize) | - |
| **Can Explain Clearly** | Knows theory only | Learning | **FULL MASTERY** | Advanced | - |
| **Can Teach Others** | Can explain but not do | Can demonstrate and explain | **TEACHING MASTERY** | **MASTER TEACHER** | **MASTER** |

### 7B. Classification System

| Code | Label | Verbal Mastery | Non-Verbal Mastery | Typical Stage |
|------|-------|---------------|-------------------|---------------|
| XX | No mastery | Cannot explain | Cannot do | Pre-learning |
| XD | Declarative only | Can explain | Cannot do | Early learning |
| DX | Tacit knowledge | Cannot explain | Can do | Proceduralized/Automatized (Dreyfus Expert) |
| DD | Full mastery | Can explain | Can do | Competent (Dreyfus) |
| DT | Teaching mastery | Can teach others | Can do | Advanced |
| DM | Master teacher | Expert articulation | Fluent performance | Master (overcame expert blind spot) |

### 7C. Dreyfus Model Mapping

| Dreyfus Stage | Verbal | Non-Verbal | Explainability Code | Key Feature |
|--------------|--------|------------|-------------------|-------------|
| Novice | Can state rules | Cannot perform | XX or XD | Rule-following |
| Advanced Beginner | Can explain partially | Can perform with errors | Partial D, Partial D | Situational recognition |
| Competent | Can explain clearly | Can perform correctly | DD | Deliberate planning |
| Proficient | **Harder to explain** | Performs fluently | Moving toward DX | Intuition-guided |
| Expert | **Cannot easily verbalize** | Automatized | **DX** | Tacit, "just knows" |
| Master Teacher | Can explain at multiple levels | Fluent | DM | Overcame expert blind spot |

**Assessment Questions:**
1. "Can you explain how you did that?" → Verbal mastery
2. "Can you do it again?" → Non-verbal mastery
3. "Can you teach this to a classmate?" → Teaching ability
4. "Why did you choose that approach?" → Metacognitive awareness

**LLM Assessment Prompt:**
```
Verbal mastery: [Cannot/Partial/Clear/Teaching/Expert]
Non-verbal mastery: [Cannot/Errors/Correct/Fluent/Automatic]
Classification code: [XX/XD/DX/DD/DT/DM]
Dreyfus stage estimate: [Novice/Advanced Beginner/Competent/Proficient/Expert]
Evidence: [Quotes from explanation + performance observations]
```

---

## COMPLETE ASSESSMENT PROTOCOL

### For Each Concept/Skill:

| Dimension | Data Collection Method | Timing | Assessor |
|-----------|----------------------|--------|----------|
| **1. Type** | Student response analysis | During learning | LLM + Human |
| **2. Depth** | Explanation quality + performance | During + post-session | LLM + Human |
| **3. Speed/Ease** | Trials count + self-report + observation | During session | System + Student + Tutor |
| **4. Stability** | Delayed recall tests | 24h, 1 week, 1 month | System |
| **5. Interconnectivity** | Connection prompts + concept maps | During + post-session | LLM + Human |
| **6. Transferability** | Varied problem types | Post-session + follow-up | System + Human |
| **7. Explainability** | Teach-back + explanation quality | During + post-session | LLM + Human |

---

## SCORING TEMPLATE (for spreadsheet data entry)

```
Concept: ________________
Date: ________________
Student ID: ________________

DIM 1 - TYPE: [Factual/Conceptual/Procedural/Metacognitive/Spatial/Motor/Habits]
DIM 2 - DEPTH: [0/1/2/3/4/5/6]
  └─ Accuracy: [0-5]
  └─ Coherence: [0-5]
  └─ Justification: [Authority/Examples/Reasoning]
  
DIM 3 - SPEED/EASE:
  └─ Expected trials: ___
  └─ Actual trials: ___
  └─ Learning surprise: ___%
  └─ Effort (student): [1-5]
  └─ Effort (tutor obs): [1-5]
  └─ Sensitive period flag: [Y/N]
  
DIM 4 - STABILITY: [Fragile/Unstable/Stable/Durable/Permanent]
  └─ Retention 24h: ___%
  └─ Retention 1wk: ___%
  └─ Retention 1mo: ___%
  
DIM 5 - INTERCONNECTIVITY: [Isolated/Local/Domain/Cross-domain/Generative]
  └─ Connection count: ___
  └─ Spontaneous: [Y/N]
  
DIM 6 - TRANSFERABILITY: [None/Near/Moderate/Far/Cross-domain/Creative]
  └─ Context tested: ________________
  └─ Success: [Y/N]
  
DIM 7 - EXPLAINABILITY: [XX/XD/DX/DD/DT/DM]
  └─ Verbal: [Cannot/Partial/Clear/Teaching/Expert]
  └─ Non-verbal: [Cannot/Errors/Correct/Fluent/Automatic]
  └─ Dreyfus stage: [Novice/Adv Beginner/Competent/Proficient/Expert]
```

---

## LITERATURE FOUNDATIONS

### Essential Citations by Dimension:

**Dimension 1 - Type:**
- Anderson & Krathwohl (2001) - Bloom's Knowledge Dimension
- Rittle-Johnson et al. (2015) - Conceptual vs procedural knowledge

**Dimension 2 - Depth:**
- Biggs & Collis (1982) - SOLO Taxonomy
- Webb (1997, 1999) - Depth of Knowledge
- Hess et al. (2009) - Cognitive Rigor Matrix

**Dimension 3 - Speed/Ease:**
- **Oudeyer, Gottlieb & Lopes (2016)** - Learning Progress Hypothesis ⭐
- VanLehn (2011) - Learning curves

**Dimension 4 - Stability:**
- Ebbinghaus (1885/1964) - Forgetting curve
- Bjork & Bjork (1992) - Desirable difficulties

**Dimension 5 - Interconnectivity:**
- Chi et al. (1981) - Expert-novice differences in knowledge organization
- Novak (2010) - Concept mapping

**Dimension 6 - Transferability:**
- Barnett & Ceci (2002) - When and where do we apply what we learn?
- Perkins & Salomon (1992) - Transfer of learning

**Dimension 7 - Explainability:**
- **Dreyfus & Dreyfus (1980, 2005)** - Skill acquisition model ⭐
- Chi et al. (1988) - Nature of expertise
- Feldon (2007) - Expert blind spot

---

## INTEGRATION WITH SCAFFOLD FRAMEWORK

### How Each Dimension Informs AI Behavior:

| Dimension | If LOW → AI Should... | If HIGH → AI Should... |
|-----------|---------------------|---------------------|
| **Depth** | Ask probing questions (Socratic) | Challenge with complex problems |
| **Speed/Ease** | Maintain support level | **SENSITIVE PERIOD!** Increase challenge, reduce scaffolding |
| **Stability** | Schedule spaced retrieval | Move to new material |
| **Interconnectivity** | Tissage (make explicit connections) | Encourage student-led connections |
| **Transferability** | Provide varied practice | Open-ended application tasks |
| **Explainability** | Prompt metacognition: "How did you...?" | Peer teaching opportunities |

---

## VALIDATION REQUIREMENTS

**For Master's Thesis:**
- Teacher validation: Which dimensions matter most?
- Student validation: What helps them learn?
- Expert review: Theoretical soundness

**For PhD:**
- Inter-rater reliability: Human vs LLM judges
- Predictive validity: Do dimensions predict learning outcomes?
- Sensitive period detection: Does Speed/Ease + other dimensions predict optimal windows?

---

*Framework Version: 1.0*  
*Date: January 2026*  
*Author: Olga Muss Laurenty*  
*Institution: Université de Neuchâtel*
