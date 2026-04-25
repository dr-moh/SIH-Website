var QUESTIONS = [
  {"id": 1, "specialty": "General Surgery", "topic": "Critical Care", "question": "A 56-year-old female is admitted to the ICU with a diffuse axonal injury after a motor vehicle crash. Coffee ground material is coming from her orogastric tube. What is the best intervention to prevent stress gastritis in a patient who cannot take enteral feeds?", "options": {"A": "Enteral feeding", "B": "Oral sucralfate", "C": "Oral proton pump inhibitor (PPI)", "D": "Intravenous H₂ blocker", "E": "IV PPI drip"}, "answer": "D", "explanation": {"correct": "IV H₂ blocker is preferred when enteral access is not feasible. IV PPIs are costly so most centres favour IV H₂ antagonist as first line when the patient cannot take oral medications.", "A": "Enteral feeding is the best option when enteral access IS possible — but this patient cannot take enteral feeds.", "B": "Sucralfate is effective but interferes with absorption of antibiotics, warfarin, and phenytoin — a major disadvantage in ICU patients.", "C": "Oral PPI is ideal when enteral access is available, not in this case.", "E": "IV PPI drip is an alternative but is significantly more expensive than H₂ blockers with no proven superiority."}, "guideline": "ASHP Stress Ulcer Prophylaxis Guidelines 2022 — IV H₂ antagonist is preferred when enteral access is not available.", "takeaway": "Oral PPI is best when gut works. IV H₂ blocker when it doesn't. IV PPI only if H₂ fails or contraindicated."},
  {"id": 2, "specialty": "General Surgery", "topic": "Critical Care", "question": "A 64-year-old male with severe pancreatitis develops tense abdomen and anuria despite large-volume resuscitation. BP 120/60, HR 127. You suspect abdominal compartment syndrome. What is the primary mechanism of oliguria?", "options": {"A": "Extrinsic compression of kidneys reducing GFR", "B": "Elevated renal venous pressure reducing GFR", "C": "Decreased arterial flow to the kidney", "D": "Extrinsic compression of ureters causing obstructive renal failure", "E": "Compression of the bladder causing obstruction"}, "answer": "B", "explanation": {"correct": "ACS reduces GFR primarily via elevated renal venous pressure — not arterial compression or ureteric obstruction.", "A": "Direct parenchymal compression is not the primary mechanism — venous hypertension is.", "C": "Arterial flow reduction plays a minor role. Venous pressure elevation is the dominant mechanism.", "D": "Ureteric compression is not the mechanism in ACS — this is a common distractor.", "E": "Bladder compression may affect pressure measurement but does not cause the oliguria."}, "guideline": "WSACS Abdominal Compartment Syndrome Consensus 2013 — decompressive laparotomy indicated when end-organ dysfunction confirmed.", "takeaway": "ACS oliguria = elevated renal venous pressure. Decompressive laparotomy only when end-organ dysfunction present — not just elevated IAP."},
  {"id": 3, "specialty": "General Surgery", "topic": "Critical Care", "question": "An obese patient (BMI 50) underwent an 8-hour laparoscopic gastric bypass. 4 hours post-op, the nurse notes dark brown urine and rising creatinine (1.0 → 1.5). Which test confirms the diagnosis?", "options": {"A": "Renal ultrasound", "B": "Haptoglobin", "C": "Serum creatinine kinase", "D": "Complete blood count", "E": "Urine electrolytes"}, "answer": "C", "explanation": {"correct": "Serum CK is the diagnostic test for rhabdomyolysis — the cause here is prolonged compression of muscle against the operating table in a morbidly obese patient.", "A": "Renal ultrasound looks for obstruction, not rhabdomyolysis.", "B": "Haptoglobin detects haemolysis, not myoglobinuria.", "D": "CBC doesn't diagnose rhabdomyolysis.", "E": "Urine electrolytes assess pre-renal vs intrinsic renal failure — not rhabdomyolysis specifically."}, "guideline": "ACS Bariatric Surgery Guidelines — high suspicion for rhabdomyolysis in obese patients after prolonged procedures; CK should be checked if dark urine or oliguria develops.", "takeaway": "Obese patient + long procedure + dark urine = rhabdomyolysis until proven otherwise. Check CK immediately."},
  {"id": 4, "specialty": "General Surgery", "topic": "Critical Care", "question": "Treatment for rhabdomyolysis-induced acute renal failure includes all of the following EXCEPT:", "options": {"A": "Loop diuretics", "B": "Mannitol", "C": "Aggressive IV fluid resuscitation", "D": "Sodium bicarbonate (urine alkalinisation)", "E": "Serial basic metabolic panels"}, "answer": "A", "explanation": {"correct": "Loop diuretics acidify the urine — the opposite of what is needed. Alkaline urine prevents cast precipitation in nephrons.", "B": "Mannitol acts as an osmotic diuretic and free radical scavenger — appropriate in rhabdomyolysis.", "C": "Aggressive IV fluids to achieve 1.5–2 mL/kg/h urine output is the cornerstone of treatment.", "D": "Sodium bicarbonate alkalinises urine (target pH >6.5) to prevent myoglobin cast obstruction.", "E": "Serial BMPs monitor electrolytes, creatinine, and response to treatment — essential."}, "guideline": "KDIGO AKI Guidelines 2012 — maintain urine output >1–2 mL/kg/h; alkalinise urine; avoid loop diuretics as first line.", "takeaway": "Loop diuretics acidify urine — contraindicated in rhabdomyolysis. Use fluids, mannitol, and bicarb."},
  {"id": 5, "specialty": "General Surgery", "topic": "Critical Care", "question": "Contrast-induced AKI (CIAKI) — which of the following is TRUE?", "options": {"A": "It is the most common form of iatrogenic AKI in hospitalised patients", "B": "CIAKI is characterised by oliguria", "C": "Evidence of CIAKI occurs within 6–24h of contrast administration", "D": "Creatinine returns to normal within 1 month for most patients", "E": "1-year mortality associated with CIAKI is <5%"}, "answer": "A", "explanation": {"correct": "CIAKI is the most common cause of iatrogenic AKI in hospitalised patients — important exam fact.", "B": "CIAKI is a NON-oliguric injury — a key differentiator from other AKI causes.", "C": "Creatinine rise occurs at 48–72h, not 6–24h — another common distractor.", "D": "Creatinine returns to baseline in 7–10 days, not 1 month.", "E": "1-year mortality is 30% — NOT <5%. This is a high-stakes complication."}, "guideline": "ESUR Contrast Media Guidelines 2018 — hydration with 0.9% NaCl for 12h before and after is the only proven prevention.", "takeaway": "CIAKI = non-oliguric, creatinine rises at 48–72h, 30% 1-year mortality. Prevent with 0.9% saline 12h before and after."},
  {"id": 6, "specialty": "General Surgery", "topic": "Critical Care", "question": "Which intervention REDUCES the likelihood of contrast-induced AKI?", "options": {"A": "N-acetylcysteine administration before dye load", "B": "One-time prednisone 40mg before contrast", "C": "0.9% normal saline for 12h before and after contrast", "D": "0.45% normal saline for 12h before and after contrast", "E": "1L bolus of 0.9% saline at time of contrast"}, "answer": "C", "explanation": {"correct": "0.9% saline for 12h before and after contrast is the only proven intervention. RCTs confirm superiority over 0.45% saline and single bolus.", "A": "N-acetylcysteine has mixed evidence. Low cost and side-effect profile keep it in use by some authors but it is not definitively proven.", "B": "Steroids have no role in CIAKI prevention.", "D": "0.45% saline is inferior to 0.9% saline in RCTs.", "E": "A single bolus is inferior to prolonged 12h hydration before and after."}, "guideline": "ESUR 2018 — 0.9% NaCl 1mL/kg/h for 12h pre- and post-contrast is the standard of care.", "takeaway": "Hydration is the ONLY proven CIAKI prevention. Use 0.9% saline — not 0.45%, not a single bolus."},
  {"id": 7, "specialty": "General Surgery", "topic": "Bowel Obstruction", "question": "A 35-year-old man presents with a 3-day history of colicky abdominal pain now becoming constant. CT shows a closed-loop small bowel obstruction with no free gas. What is the most appropriate immediate management?", "options": {"A": "IV fluids and NG decompression, reassess in 24 hours", "B": "Emergency surgical exploration", "C": "Gastrografin follow-through and reassess", "D": "CT angiography to assess bowel vascularity", "E": "Colonoscopic decompression"}, "answer": "B", "explanation": {"correct": "Closed-loop obstruction is a surgical emergency. The isolated bowel segment has no decompressive outlet — ischaemia and perforation are imminent. Operate immediately.", "A": "Conservative management has NO role in closed-loop obstruction. Every hour increases ischaemia risk.", "C": "Gastrografin is used in adhesive SBO to predict resolution — not in closed-loop which needs surgery.", "D": "CT angiography delays surgery and is not the next step when clinical and CT diagnosis is already clear.", "E": "Colonoscopic decompression is for large bowel obstruction, not small bowel."}, "guideline": "WSES Small Bowel Obstruction Guidelines 2017 — closed-loop SBO is an absolute indication for emergency surgery.", "takeaway": "Closed-loop SBO = emergency laparotomy. No trial of conservative management. Every hour = more dead bowel."},
  {"id": 8, "specialty": "General Surgery", "topic": "Bowel Obstruction", "question": "A 70-year-old woman presents with adhesive small bowel obstruction, first episode, no signs of strangulation. CT confirms partial SBO. The MOST appropriate initial management is:", "options": {"A": "Immediate laparotomy", "B": "Gastrografin (water-soluble contrast) challenge and reassess at 24 hours", "C": "NG tube, IV fluids and observation for 72 hours", "D": "Laparoscopic adhesiolysis immediately", "E": "TPN and bowel rest for 5 days"}, "answer": "B", "explanation": {"correct": "Gastrografin challenge in adhesive partial SBO is both diagnostic and therapeutic. If contrast reaches colon within 24h, surgery can be avoided in 90% of cases.", "A": "Immediate laparotomy is not indicated in uncomplicated partial adhesive SBO — conservative management is first line.", "C": "Plain NG/fluids without a Gastrografin challenge delays diagnosis and prolongs hospital stay.", "D": "Laparoscopic adhesiolysis is an option if conservative management fails — not as first-line.", "E": "TPN and bowel rest for 5 days has no evidence base and delays decision-making."}, "guideline": "WSES 2017 — Gastrografin challenge recommended in adhesive SBO; reduces need for surgery and hospital stay.", "takeaway": "Adhesive partial SBO without strangulation = Gastrografin challenge first. Surgery only if it fails at 24h."},
  {"id": 9, "specialty": "HPB", "topic": "Choledocholithiasis", "question": "According to ASGE 2019 criteria, which of the following constitutes HIGH probability of choledocholithiasis and warrants direct ERCP without further imaging?", "options": {"A": "Dilated CBD on USS with bilirubin <4 μmol/L", "B": "CBD stone on USS AND bilirubin >4 mg/dL AND cholangitis", "C": "Elevated ALP with normal USS", "D": "Clinical cholangitis alone without USS confirmation", "E": "Gallstone pancreatitis with normal LFTs"}, "answer": "B", "explanation": {"correct": "ASGE HIGH probability criteria: CBD stone on USS OR bilirubin >4 mg/dL + dilated CBD + cholangitis OR ascending cholangitis. All three criteria = go directly to ERCP.", "A": "Dilated CBD alone without stone and bilirubin <4 is intermediate probability — needs EUS or MRCP first.", "C": "Elevated ALP alone is low probability — does not warrant direct ERCP.", "D": "Cholangitis is a strong predictor but USS confirmation or bilirubin >4 is also needed to meet HIGH probability criteria.", "E": "Gallstone pancreatitis with normal LFTs is intermediate — MRCP or EUS recommended first."}, "guideline": "ASGE 2019 Choledocholithiasis Guideline — HIGH probability: direct ERCP. Intermediate: EUS or MRCP. Low: no further biliary imaging.", "takeaway": "ASGE HIGH = CBD stone on USS + bilirubin >4 + dilated CBD or cholangitis → straight to ERCP. Do not delay."},
  {"id": 10, "specialty": "HPB", "topic": "Gallbladder", "question": "A 45-year-old woman undergoes laparoscopic cholecystectomy for symptomatic gallstones. Intraoperatively, the critical view of safety cannot be achieved. What is the safest next step?", "options": {"A": "Continue dissection aggressively until structures are identified", "B": "Convert to open cholecystectomy", "C": "Perform a fundus-first (top-down) dissection", "D": "Clip and divide what appears to be the cystic duct", "E": "Perform a subtotal cholecystectomy"}, "answer": "E", "explanation": {"correct": "When the critical view of safety cannot be achieved, subtotal cholecystectomy (leaving the posterior wall attached to the liver) is the safest bailout — avoids bile duct injury.", "A": "Aggressive dissection when planes are unclear is the leading cause of bile duct injury — never do this.", "B": "Open conversion does not guarantee clearer anatomy — subtotal cholecystectomy may still be needed.", "C": "Fundus-first dissection is a useful technique but still requires identifying the cystic duct-GB junction.", "D": "Clipping and dividing unidentified structures is the mechanism of most bile duct injuries."}, "guideline": "SAGES Safe Cholecystectomy Guidelines 2023 — if CVS not achieved: stop, get help, subtotal cholecystectomy, or convert.", "takeaway": "Cannot achieve CVS = STOP. Subtotal cholecystectomy is safer than pushing through unclear anatomy."},
  {"id": 11, "specialty": "Colorectal", "topic": "Colorectal Cancer", "question": "A 58-year-old presents with rectal bleeding for 3 months. Colonoscopy shows a 3cm polyp at 12cm from the anal verge. Histology: Haggitt level 4 malignant polyp. What is the recommended management?", "options": {"A": "Surveillance colonoscopy in 3 months", "B": "Formal oncological resection", "C": "Repeat endoscopic mucosal resection at 6 weeks", "D": "Adjuvant chemotherapy alone", "E": "Watch and wait with MRI surveillance"}, "answer": "B", "explanation": {"correct": "Haggitt level 4 = cancer invades the submucosa of the bowel wall (not just the stalk). LN metastasis risk up to 27% — endoscopic resection is inadequate. Formal resection mandatory.", "A": "Surveillance alone is not appropriate for Haggitt level 4 with high LN metastasis risk.", "C": "Repeat EMR has no role when Haggitt level 4 confirms deep submucosal invasion.", "D": "Chemotherapy alone without resection is not standard of care for resectable rectal cancer.", "E": "Watch and wait is only used in complete clinical response after neoadjuvant chemoradiotherapy in rectal cancer."}, "guideline": "ESGE 2017, SAGES 2025 — Haggitt level 4 with adverse histological features mandates formal surgical resection.", "takeaway": "Haggitt level 4 = surgery. Level 1–3 with clear margins = endoscopic resection may suffice. Know the levels."},
  {"id": 12, "specialty": "Colorectal", "topic": "Anorectal", "question": "A 35-year-old presents with severe perianal pain, swelling, and fever for 2 days. Examination reveals a tense, fluctuant, erythematous mass at the right anal verge. What is the correct management?", "options": {"A": "IV antibiotics for 5 days and review", "B": "MRI pelvis to map the abscess before treatment", "C": "Incision and drainage under local anaesthetic", "D": "Examination under anaesthesia and drainage", "E": "Seton insertion"}, "answer": "D", "explanation": {"correct": "Perianal abscess requires surgical drainage. EUA is preferred to adequately assess for fistula, supralevator extension, or horseshoe component — all missed under local.", "A": "Antibiotics alone do not drain an abscess — no role in primary treatment without drainage.", "B": "MRI is useful in complex/recurrent cases — not as first-line in a simple acute abscess with clear clinical diagnosis.", "C": "Local anaesthetic drainage is inadequate — inadequate relaxation, cannot assess fistula-in-ano.", "E": "Seton is for high fistula management — not for acute abscess drainage."}, "guideline": "ACPGBI/ASCRS 2023 — EUA and drainage is gold standard for perianal abscess. Assess for fistula-in-ano simultaneously.", "takeaway": "Perianal abscess = EUA and drain. Do not give antibiotics alone. Always look for fistula at the same sitting."},
  {"id": 13, "specialty": "Colorectal", "topic": "Fournier's Gangrene", "question": "A 62-year-old diabetic man presents with a 3-day history of scrotal pain, fever 39.2°C, and crepitus over the perineum. CT confirms gas tracking along fascial planes. FGSI score is 7. What is the MOST important immediate step?", "options": {"A": "IV broad-spectrum antibiotics and observe for 24 hours", "B": "Urgent urology referral for cystoscopy", "C": "Emergency surgical debridement", "D": "CT-guided drainage of the collection", "E": "Hyperbaric oxygen therapy"}, "answer": "C", "explanation": {"correct": "Fournier's Gangrene is a life-threatening necrotising fasciitis requiring emergency surgical debridement within hours. Antibiotics alone are insufficient — dead tissue must be excised.", "A": "Antibiotics are adjunctive but NOT the primary treatment. Delay to surgery = increased mortality.", "B": "Cystoscopy has no role in acute Fournier's management.", "D": "CT-guided drainage is completely inadequate — the necrotic fascial planes must be debrided widely.", "E": "Hyperbaric oxygen is an adjunct in specialist centres — not the immediate priority."}, "guideline": "WSES/SIS-E Necrotising Soft Tissue Infection Guidelines 2020 — emergency surgical debridement within 6-12 hours of diagnosis.", "takeaway": "Fournier's = emergency debridement NOW. FGSI >9 = >75% mortality. Every hour without surgery increases mortality."},
  {"id": 14, "specialty": "General Surgery", "topic": "PUD Perforation", "question": "A 45-year-old male presents with sudden-onset severe epigastric pain radiating to the back. Erect CXR shows free air under the diaphragm. He is haemodynamically stable. What is the definitive management?", "options": {"A": "IV PPI and NG drainage, observe for 24 hours", "B": "Emergency laparotomy with oversewing of the perforation and omental patch", "C": "Laparoscopic repair with omental patch", "D": "H. pylori eradication and serial abdominal X-rays", "E": "CT-guided drainage of peritoneal collection"}, "answer": "C", "explanation": {"correct": "Laparoscopic repair is now the standard of care for perforated PUD in haemodynamically stable patients — equivalent outcomes to open with faster recovery.", "A": "Conservative (Taylor) management is only considered in highly selected stable patients with sealed perforation — free air means active leak, needs surgery.", "B": "Open repair is appropriate when laparoscopic expertise is unavailable or patient is unstable.", "D": "H. pylori eradication is important AFTER repair — not the acute management.", "E": "CT-guided drainage is for contained collections — free perforation requires operative repair."}, "guideline": "WSES Perforated PUD Guidelines 2020 — laparoscopic repair is first-line in stable patients. Open repair when laparoscopic not available.", "takeaway": "Perforated PUD + stable = laparoscopic repair. Add H. pylori eradication postoperatively. Omental patch is standard."},
  {"id": 15, "specialty": "General Surgery", "topic": "Appendicitis", "question": "A 28-year-old male presents with a 24-hour history of RIF pain, fever 38.4°C, and guarding. WBC 16, CRP 95. Alvarado score 8. CT shows inflamed appendix 9mm diameter, no perforation, no abscess. Best management:", "options": {"A": "Antibiotics alone (non-operative management)", "B": "Emergency laparoscopic appendicectomy", "C": "Interval appendicectomy in 6 weeks", "D": "CT-guided drainage and interval appendicectomy", "E": "Open appendicectomy via Lanz incision"}, "answer": "B", "explanation": {"correct": "Alvarado ≥7 with CT confirmation of uncomplicated appendicitis — laparoscopic appendicectomy is the gold standard. Safe, effective, shorter recovery, less wound infection.", "A": "Antibiotic-only management is an option in uncomplicated appendicitis but has 20-40% failure and recurrence — surgery remains gold standard especially with Alvarado 8.", "C": "Interval appendicectomy is for appendiceal mass/abscess that settles with antibiotics — not acute uncomplicated appendicitis.", "D": "CT drainage is for perforation with organised abscess — not for this presentation.", "E": "Open approach is appropriate if laparoscopy not available — but laparoscopic is preferred in 2026."}, "guideline": "WSES Acute Appendicitis Guidelines 2023 — laparoscopic appendicectomy is first-line for uncomplicated appendicitis.", "takeaway": "Alvarado ≥7 + CT confirmation = laparoscopic appendicectomy. Know the Alvarado score. Antibiotics alone = 40% recurrence risk."},
  {"id": 16, "specialty": "Anesthesia", "topic": "Perioperative Care", "question": "A 24-year-old woman scheduled for elective cholecystectomy. Which is the BEST method for identifying a potential perioperative bleeding risk?", "options": {"A": "Platelet count", "B": "Complete history and physical examination", "C": "Bleeding time", "D": "Lee-White clotting time", "E": "Prothrombin time (PT)"}, "answer": "B", "explanation": {"correct": "A thorough history and physical examination remains the most sensitive and cost-effective screening tool for bleeding disorders — superior to any single laboratory test.", "A": "Platelet count alone misses platelet function disorders (e.g. von Willebrand disease).", "C": "Bleeding time is non-standardised and poor predictor of surgical bleeding — largely abandoned.", "D": "Lee-White clotting time is obsolete and non-specific.", "E": "PT alone misses platelet disorders and von Willebrand disease — inadequate as sole screening test."}, "guideline": "NICE/BSH Preoperative Testing Guidelines — routine coagulation screening is NOT recommended; targeted testing based on history.", "takeaway": "Bleeding risk = history first. Ask about: easy bruising, prolonged bleeding, family history, anticoagulant use. Then test selectively."},
  {"id": 17, "specialty": "Anesthesia", "topic": "Perioperative Care", "question": "A 24-year-old man in the ICU after severe head injury develops seizures on day 4. Urine output 500mL/24h. Na 115 mEq/L, serum osmolality 250 mOsm, urine osmolality 800 mOsm. The most likely cause is:", "options": {"A": "Administration of D5W and 0.33% normal saline", "B": "Syndrome of inappropriate ADH secretion (SIADH)", "C": "Decreased ADH secretion", "D": "Nasogastric suction", "E": "Renal insufficiency"}, "answer": "B", "explanation": {"correct": "SIADH: low serum Na + low serum osmolality + inappropriately high urine osmolality (>100 mOsm/kg) + normal renal/adrenal/thyroid function. Head injury is a classic cause.", "A": "Hypotonic fluid administration causes dilutional hyponatraemia — urine osmolality would be low, not 800.", "C": "Decreased ADH (DI) causes hypernatraemia and dilute urine — opposite picture.", "D": "NG suction causes hypokalaemic metabolic alkalosis — not hyponatraemia with high urine osmolality.", "E": "Renal insufficiency causes hypernatraemia with poor urine concentration — not this picture."}, "guideline": "Endocrine Society SIADH Guidelines 2022 — fluid restriction is first-line. Hypertonic saline for severe symptomatic hyponatraemia.", "takeaway": "SIADH = low Na + low serum osmolality + HIGH urine osmolality. Head injury = always think SIADH. Treat with fluid restriction."},
  {"id": 18, "specialty": "General Surgery", "topic": "Critical Care", "question": "An 82-year-old female with multiple prior abdominal surgeries undergoes 7-hour lysis of adhesions. Next day creatinine rises by 0.6 mg/dL and urine output is 10mL/h. All of the following are appropriate except:", "options": {"A": "Rule out outflow obstruction", "B": "Recheck haemoglobin", "C": "Calculate FeNa", "D": "Give IV fluid bolus", "E": "Start vasopressors for MAP goal 65 mmHg"}, "answer": "E", "explanation": {"correct": "Vasopressors are harmful in hypovolaemic AKI — they cause renal vasoconstriction and worsen ischaemic injury. IV fluids are the treatment, not vasopressors.", "A": "Urinary catheter blockage must be ruled out before assuming AKI — simple and important step.", "B": "Occult bleeding from the long case may be causing hypovolaemia — check Hb.", "C": "FeNa <1% confirms pre-renal AKI — the likely cause here; guides management.", "D": "IV fluid bolus is the primary treatment for hypovolaemic post-op AKI."}, "guideline": "KDIGO AKI Guidelines 2012 — IV fluid resuscitation is first-line for pre-renal AKI. Vasopressors only in septic shock context with adequate filling.", "takeaway": "Post-op AKI = fluids first, always. Vasopressors are not the treatment for hypovolaemic AKI — they make it worse."},
  {"id": 19, "specialty": "HPB", "topic": "Pancreatitis", "question": "A 55-year-old presents with acute pancreatitis. CT severity index is 6. What does this score indicate and what is the recommended management?", "options": {"A": "Mild pancreatitis — discharge with oral analgesia", "B": "Moderate-severe pancreatitis — early ERCP within 24 hours", "C": "Moderate-severe pancreatitis — aggressive IV resuscitation, HDU monitoring, nutrition support", "D": "Severe pancreatitis — immediate surgical necrosectomy", "E": "Severe pancreatitis — prophylactic antibiotics and CT-guided drainage"}, "answer": "C", "explanation": {"correct": "CT Severity Index 6 = moderate-severe pancreatitis (score 4-6). Management: aggressive fluid resuscitation (Ringer's lactate preferred), HDU monitoring, early enteral nutrition within 48h.", "A": "CTSI <3 = mild. Score 6 requires higher-level care.", "B": "ERCP is only indicated in pancreatitis with confirmed cholangitis or persistent biliary obstruction — not routinely.", "D": "Surgical necrosectomy is for infected necrosis that fails step-up drainage — not at diagnosis.", "E": "Prophylactic antibiotics are NOT recommended in acute pancreatitis per IAP/APA 2024 guidelines."}, "guideline": "IAP/APA Acute Pancreatitis Guidelines 2024 — Ringer's lactate 250–500mL/h initial resuscitation; early enteral nutrition; no prophylactic antibiotics.", "takeaway": "Acute pancreatitis = Ringer's lactate (not normal saline), early enteral nutrition, no prophylactic antibiotics. CTSI guides severity."},
  {"id": 20, "specialty": "General Surgery", "topic": "Hernias", "question": "A 67-year-old man presents to A&E with a painful, irreducible right inguinal hernia for 6 hours. He is vomiting and has a distended abdomen. What is the correct management?", "options": {"A": "Attempt manual reduction (taxis) and observe", "B": "IV morphine, head-down tilt and attempt taxis — if successful observe for 24 hours", "C": "Emergency inguinal hernia repair", "D": "CT abdomen to confirm content of hernia sac", "E": "NG decompression and IV fluids, then elective repair in 48 hours"}, "answer": "C", "explanation": {"correct": "Strangulated inguinal hernia with signs of obstruction (6 hours, vomiting, distension) requires emergency surgical repair. The bowel may already be ischaemic.", "A": "Taxis is contraindicated when there are signs of strangulation — you may reduce gangrenous bowel into the abdomen.", "B": "Taxis contraindicated in suspected strangulation regardless of analgesia technique.", "D": "CT may confirm contents but delays surgery — clinical diagnosis is sufficient in this scenario.", "E": "Conservative management is not appropriate when strangulation is suspected."}, "guideline": "EHS Hernia Guidelines 2018 — strangulated hernia with systemic signs = emergency surgery. Taxis contraindicated in strangulation.", "takeaway": "Irreducible hernia + systemic signs = strangulation = emergency surgery. Never attempt taxis when strangulation suspected."},
  {"id": 21, "specialty": "Plastic Surgery", "topic": "Basic Science", "question": "Which one of the following is true regarding collagen?", "options": {"A": "Its derivation is debated: Greek for 'strength' or Latin for 'strand'", "B": "Type 1 collagen is formed from three identical 'alpha' chains", "C": "Type 3 collagen is formed from two different 'alpha' chains", "D": "Every third amino acid is glycine; others usually proline/hydroxyproline", "E": "Collagen is stabilized by polymerization"}, "answer": "D", "explanation": {"correct": "Every third amino acid in collagen is glycine. This small amino acid allows the tight triple-helix structure to form. Proline and hydroxyproline are also highly prevalent.", "A": "Incorrect. The term 'collagen' is derived from the Greek 'kolla' (glue) and 'genos' (producing).", "B": "Type 1 collagen is a heterotrimer (two \u03b11 chains and one \u03b12 chain), not three identical chains.", "C": "Type 3 collagen is a homotrimer (three \u03b11 chains), not different chains.", "E": "Collagen is stabilized by cross-linking (covalent bonds), not simple polymerization."}, "guideline": "Standard Textbook of Plastic Surgery (Shokrollahi) — Basic Science Section.", "takeaway": "Collagen = Glycine every 3rd residue. Type 1 (Skin/Bone) is heterotrimer; Type 3 (Blood vessels/fetal skin) is homotrimer."},
  {"id": 22, "specialty": "Plastic Surgery", "topic": "Microsurgery", "question": "Regarding anticoagulants in microsurgery, which of the following is TRUE?", "options": {"A": "Heparin and antithrombin III have similar mechanisms of action", "B": "Low-molecular-weight heparin binds to antithrombin III and inhibits factor Xa", "C": "HIT is more frequent with fractionated LMWH than unfractionated heparin", "D": "Aspirin is contraindicated in patients younger than 12 years of age", "E": "Clopidogrel anticoagulation is pharmacologically reversible"}, "answer": "B", "explanation": {"correct": "LMWH (e.g., Enoxaparin) acts by binding to antithrombin III, which then inactivates Factor Xa. It has a more predictable response than unfractionated heparin.", "A": "Incorrect. Heparin is a catalyst that accelerates the action of antithrombin III; they are not similar in mechanism.", "C": "Incorrect. Heparin-induced thrombocytopenia (HIT) is MORE frequent with unfractionated heparin than with LMWH.", "D": "Aspirin is generally avoided in children due to Reye's syndrome, but 'contraindicated' is a strong term; it is used specifically in some pediatric cardiac/vascular cases. However, B is a more definitively true pharmacology statement.", "E": "Clopidogrel (Plavix) is an irreversible P2Y12 inhibitor. Its effects last for the life of the platelet (7-10 days)."}, "guideline": "ASPS/Microsurgery Consensus — Postoperative monitoring and anticoagulation protocols.", "takeaway": "LMWH = Factor Xa inhibition via AT-III. HIT is more common with unfractionated heparin. Aspirin/Clopidogrel are irreversible."},
  {"id": 23, "specialty": "Plastic Surgery", "topic": "Microsurgery", "question": "Which landmark publication related to free tissue transfer is correct?", "options": {"A": "First successful thumb replantation was by Komatsu and Tamai in 1967", "B": "First clinical series of free tissue transfers was by Nakayama in 1969", "C": "Cobbett performed the first successful free great toe-to-hand transfer in 1968", "D": "McLean and Buncke performed the first free omentum flap in 1971", "E": "None of the above is true"}, "answer": "C", "explanation": {"correct": "Cobbett (1968) performed the first successful free great toe-to-hand transfer, a milestone in reconstructive microsurgery.", "A": "Incorrect. Komatsu and Tamai performed the first thumb replantation in 1965 (published 1968).", "B": "Incorrect. Nakayama published a series of small vessel anastomoses in 1962.", "D": "Incorrect. McLean and Buncke performed the first free omentum flap in 1969 (published 1972).", "E": "Incorrect as C is true."}, "guideline": "History of Reconstructive Microsurgery — Landmark Trials and Cases.", "takeaway": "Cobbett (1968) = First toe-to-hand. Komatsu/Tamai (1965) = First thumb replant. Know your history."},
  {"id": 24, "specialty": "Plastic Surgery", "topic": "Transplantation", "question": "Concerning composite tissue allotransplantation (CTA), which of the following is TRUE?", "options": {"A": "Corticosteroids inhibit NF-κB and inflammatory cytokine production", "B": "Antithymocyte globulin (ATG) binds cell surface antigens and depletes T cells", "C": "Tacrolimus (FK 506) blocks IL-2 and may speed up nerve regrowth", "D": "Mycophenolate mofetil (MMF) prevents T-cell proliferation", "E": "All of the above"}, "answer": "E", "explanation": {"correct": "All statements are true regarding immunosuppression in CTA (e.g., face or hand transplants). Tacrolimus is notably studied for its neuroregenerative potential.", "A": "True. Steroids have broad anti-inflammatory effects via multiple pathways including NF-κB inhibition.", "B": "True. ATG is often used as induction therapy to 'reset' the immune system by depleting T cells.", "C": "True. Tacrolimus is a calcineurin inhibitor that blocks IL-2; it has also been shown to promote nerve regeneration in models.", "D": "True. MMF inhibits inosine monophosphate dehydrogenase, critical for T and B cell purine synthesis."}, "guideline": "ISCTFE / Plastic Surgery Transplantation Guidelines 2024.", "takeaway": "CTA requires multi-drug immunosuppression. Tacrolimus (FK506) = IL-2 block + nerve growth benefit."},
  {"id": 25, "specialty": "Plastic Surgery", "topic": "Reconstruction", "question": "In relation to free tissue transfer, which one of the following is TRUE?", "options": {"A": "The ALT flap is always based on the descending branch of the LCFA", "B": "The SIEA pedicle is absent in approximately 5% of cases", "C": "The skin paddle of the fibula flap is an unreliable indicator of bone blood supply", "D": "Some surgeons can perform microsurgery without a microscope", "E": "None of the above is true"}, "answer": "E", "explanation": {"correct": "None of the provided statements are strictly true. This reflects the anatomical variability and technical standards in microsurgery.", "A": "Incorrect. While common, the ALT can be based on the descending branch of the LCFA (Lateral Circumflex Femoral Artery), but it can also arise from other branches.", "B": "Incorrect. The Superficial Inferior Epigastric Artery (SIEA) is absent or too small in up to 30-40% of cases, not 5%.", "C": "Incorrect. The skin paddle of a fibula osteoseptocutaneous flap is generally a reliable indicator of bone perfusion.", "D": "Incorrect. Microsurgery, by definition, requires magnification (loupes or microscope).", "E": "All statements A-D are factually incorrect in their current phrasing."}, "guideline": "Mathes & Nahai Reconstructive Surgery — Flap Anatomy and Principles.", "takeaway": "ALT anatomy is variable (LCFA branches). SIEA is often absent (30%+). Fibula skin paddle = reliable bone indicator."}
,
{
  "id": 26,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "A 75-year-old farmer complained of a scaly, plaque-like skin lesion on his forearm with recent development of ulceration. Biopsy reveals invasive squamous carcinomas within actinic keratosis negative examination of axillary nodes. Definitive treatment is:",
  "options": {
    "A": "Local wound care until the ulcer heals; then wide excision and repair",
    "B": "Excision of the lesion with frozen section determined free margins and repair",
    "C": "Wide excision; split-thickness skin graft and axillary node dissection",
    "D": "Wide excision; split-thickness graft and radiation therapy",
    "E": "Wide excision; split-thickness graft and chemotherapy"
  },
  "answer": "B",
  "explanation": {
    "correct": "Squamous cell carcinoma (SCC) of the skin is generally slow-growing and has a low rate of metastasis. Actinically induced SCCs are less aggressive. The preferred treatment is wide local excision with frozen section control of the margins to ensure complete removal while preserving as much healthy tissue as possible.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 27,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "A 65-year-old light-complexioned male presents with a solitary scaly plaque-like lesion on his forearm present for many years. The lesion is 0.5 cm in diameter. Shave biopsy reveals intraepithelial squamous cell carcinoma (Bowen’s disease) incompletely excised. Further treatment includes:",
  "options": {
    "A": "Wide excision of the lesions and sentinel node biopsy",
    "B": "Referral for local radiation therapy",
    "C": "Excision and repair of this area, ensuring clear surgical margins",
    "D": "No further treatment indicated",
    "E": "Local application of 5-fluorouracil (5-FU) cream"
  },
  "answer": "C",
  "explanation": {
    "correct": "Bowen's disease is squamous cell carcinoma in situ (intraepithelial). Since it has the potential to become invasive, complete excision with clear margins is the standard of care. Other options like topical 5-FU or cryotherapy can be used but surgical excision provides the highest cure rate and histological confirmation of margins.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 28,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "A 45-year-old soccer player presents with a 6-month history of an ulcerative nodular lesion, 1.5 cm in diameter in the region of the right oral commissure. Biopsy reveals basal cell carcinoma. The preferred treatment is:",
  "options": {
    "A": "Mohs micrographic surgery and subsequent reconstruction",
    "B": "Excision with a clinical margin and local flap repair",
    "C": "Topical 5-FU",
    "D": "Local radiation therapy",
    "E": "Cryotherapy"
  },
  "answer": "A",
  "explanation": {
    "correct": "Basal cell carcinoma (BCC) is the most common skin cancer. Mohs micrographic surgery is specifically indicated for lesions in cosmetically or functionally sensitive areas (like the oral commissure, nose, or eyelids) and for recurrent or large lesions. It allows for the highest cure rate while maximizing tissue preservation.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 29,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Which of the following is TRUE of wound contraction?",
  "options": {
    "A": "It is less than 50% in most wounds.",
    "B": "It is characterized by formation and fixation of tissue around a joint.",
    "C": "It is less affected by excision of tissue from center of wound rather than at the periphery.",
    "D": "It is characterized by centripetal movement of the whole thickness of the surrounding skin.",
    "E": "It is experimentally less affected by excision of tissue from center of wound rather than at the periphery."
  },
  "answer": "E",
  "explanation": {
    "correct": "Wound contraction is the process of centripetal movement of the wound edges mediated by myofibroblasts. It is more affected by the presence of skin grafts (full-thickness inhibiting it more than split-thickness) and, experimentally, is less affected by central tissue excision compared to peripheral excision.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 30,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Which of the following is TRUE of skin grafts?",
  "options": {
    "A": "Split-thickness grafts contain the epidermis and all of the dermis.",
    "B": "Full-thickness grafts are more likely to survive than split-thickness grafts.",
    "C": "Split-thickness grafts inhibit wound contraction better than full-thickness grafts.",
    "D": "Full-thickness skin grafts inhibit wound contraction more than split-thickness grafts.",
    "E": "Split-thickness grafts are more aesthetic than full-thickness grafts."
  },
  "answer": "D",
  "explanation": {
    "correct": "Full-thickness skin grafts (FTSG) include the entire dermis and are more effective at inhibiting wound contraction than split-thickness skin grafts (STSG). However, STSGs have a higher 'take' rate because they require less revascularization.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 31,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "A 65-year-old patient undergoes an APR (abdominoperineal resection) for a low rectal cancer. The ileostomy should be:",
  "options": {
    "A": "Circular and 2–3 cm in height",
    "B": "Flush with the skin",
    "C": "Placed in the midline incision",
    "D": "Placed through the rectus muscle",
    "E": "Constructed without a maturation step"
  },
  "answer": "A",
  "explanation": {
    "correct": "A properly constructed ileostomy should be 'protruded' or 'budded' (Brooke ileostomy), ideally 2-3 cm in height, to allow the effluent (which contains caustic digestive enzymes) to drain directly into the appliance without contacting and irritating the surrounding skin.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 32,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "A 55-year-old patient undergoes a cholecystectomy for gallstones. The surgery is considered a 'clean-contaminated' wound. The expected infection rate is:",
  "options": {
    "A": "<2%",
    "B": "5%",
    "C": "10%",
    "D": "20%",
    "E": "30%"
  },
  "answer": "C",
  "explanation": {
    "correct": "Clean-contaminated wounds are those where a hollow viscus (respiratory, alimentary, or urinary tract) is entered under controlled conditions without significant spillage. The reported infection rate for such procedures is approximately 10%.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 33,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Which of the following describes a 'clean-contaminated' wound?",
  "options": {
    "A": "Entry into the intestinal or urinary tract without significant spillage",
    "B": "A wound with gross spillage from the GI tract",
    "C": "An old traumatic wound with retained necrotic tissue",
    "D": "A surgical incision in a 'clean' area like the breast",
    "E": "A wound involving a perforated viscus"
  },
  "answer": "A",
  "explanation": {
    "correct": "By definition, a clean-contaminated wound involves a controlled entry into a colonized tract (like the bowel or bladder) without unusual contamination or major breaks in technique.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 34,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "A 25-year-old man is brought to the ER with burns to his chest and arms. The burns are mottled red/white and have blistering. This is characteristic of:",
  "options": {
    "A": "First-degree burn",
    "B": "Superficial partial-thickness burn",
    "C": "Deep partial-thickness burn",
    "D": "Second-degree burn",
    "E": "Third-degree burn"
  },
  "answer": "D",
  "explanation": {
    "correct": "Second-degree (partial-thickness) burns involve the epidermis and varying depths of the dermis. They are characterized by pain, redness, and the formation of blisters.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 35,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "A 30-year-old woman sustained partial-thickness burns to her legs. Partial-thickness burns involve:",
  "options": {
    "A": "Epidermis only",
    "B": "Entire dermis",
    "C": "Subcutaneous fat",
    "D": "Epidermis and part of the dermis",
    "E": "Muscle and bone"
  },
  "answer": "D",
  "explanation": {
    "correct": "Partial-thickness burns (second-degree) extend through the epidermis into the dermis but do not destroy the entire depth of the dermis, allowing for spontaneous re-epithelialization from skin appendages.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 36,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Full-thickness burns are characterized by:",
  "options": {
    "A": "Involvement of the entire dermis",
    "B": "Severe pain and hypersensitivity",
    "C": "Blistering and weeping",
    "D": "Rapid healing without grafting",
    "E": "Minimal scarring"
  },
  "answer": "A",
  "explanation": {
    "correct": "Full-thickness (third-degree) burns involve the destruction of the entire epidermis and dermis. Because the nerve endings are destroyed, these burns are often anesthetic (painless) and typically require skin grafting for closure.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 37,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Following initial resuscitation of a burn patient using the Parkland formula, the patient remains oliguric. The next step should be:",
  "options": {
    "A": "Increase the rate of Ringer’s lactate infusion",
    "B": "Administer a bolus of albumin",
    "C": "Give intravenous furosemide",
    "D": "Change to normal saline",
    "E": "Start dopamine infusion"
  },
  "answer": "A",
  "explanation": {
    "correct": "The Parkland formula provides an estimate of fluid requirements. If urine output is inadequate (<0.5 mL/kg/h in adults), the rate of crystalloid (Ringer’s lactate) infusion should be increased. Diuretics should be avoided as they may further deplete intravascular volume.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 38,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "The definitive management of deep partial-thickness or full-thickness burns involves:",
  "options": {
    "A": "Tangential excision of eschar until bleeding is encountered",
    "B": "Waiting for the eschar to slough spontaneously",
    "C": "Application of wet-to-dry dressings only",
    "D": "Systemic antibiotics for all patients",
    "E": "Immediate grafting without debridement"
  },
  "answer": "A",
  "explanation": {
    "correct": "Tangential excision involves removing thin layers of the burn eschar until viable, bleeding tissue is reached. This reduces the risk of infection and prepares the wound bed for successful skin grafting.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 39,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "A 12-year-old boy has multiple skin lesions and is diagnosed with Neurofibromatosis type 1 (NF-1). This condition is associated with:",
  "options": {
    "A": "Autosomal recessive inheritance",
    "B": "Dermoid cysts",
    "C": "Optic nerve gliomas",
    "D": "AV malformations",
    "E": "Absence of malignant potential"
  },
  "answer": "C",
  "explanation": {
    "correct": "NF-1 (von Recklinghausen's disease) is an autosomal dominant disorder. Key features include café-au-lait spots, Lisch nodules, and an increased risk of tumors such as optic nerve gliomas and neurofibromas (which can undergo malignant transformation).",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 40,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Which of the following pigmented lesions has the highest risk of developing into melanoma?",
  "options": {
    "A": "Hutchinson's freckle",
    "B": "Common freckle (ephelis)",
    "C": "Congenital nevocellular nevi",
    "D": "Cherry hemangioma",
    "E": "Seborrheic keratosis"
  },
  "answer": "C",
  "explanation": {
    "correct": "Large congenital nevi (those >20 cm in predicted adult size) carry a significant lifetime risk (estimated at 5-10%) of developing into melanoma, often within the first decade of life.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 41,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Which is TRUE of basal cell carcinoma (BCC)?",
  "options": {
    "A": "It has a 15% rate of distant metastasis.",
    "B": "It is more common in dark-complexioned individuals.",
    "C": "It is the most common form of skin cancer.",
    "D": "It occurs only on the head and neck.",
    "E": "Topical 5-FU is the treatment of choice for all lesions."
  },
  "answer": "C",
  "explanation": {
    "correct": "BCC is the most frequent skin malignancy. While it is locally invasive and can cause significant tissue destruction, it almost never metastasizes (<0.1%). It is most common in fair-skinned individuals with chronic sun exposure.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 42,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "A melanoma reported as Clark Level I implies:",
  "options": {
    "A": "It is confined to the epidermis (in situ).",
    "B": "It involves the papillary dermis.",
    "C": "It fills the papillary dermis.",
    "D": "It involves the reticular dermis.",
    "E": "It has invaded the subcutaneous fat."
  },
  "answer": "A",
  "explanation": {
    "correct": "The Clark Level system describes the anatomical depth of invasion. Level I means the tumor is restricted to the epidermis (melanoma in situ). Level II involves the papillary dermis, and so on.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 43,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "A 49-year-old male presents with recurrent infections in the axillae and perianal region. The likely diagnosis is:",
  "options": {
    "A": "Paget’s disease",
    "B": "Furunculosis",
    "C": "Hidradenitis suppurativa",
    "D": "Crohn's disease",
    "E": "Cutaneous tuberculosis"
  },
  "answer": "C",
  "explanation": {
    "correct": "Hidradenitis suppurativa is a chronic inflammatory condition affecting the apocrine glands, typically in the axillae, groin, and perianal areas. It presents with recurrent abscesses, sinus tracts, and scarring.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 44,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "List the layers of skin from the most superficial to the deepest:",
  "options": {
    "A": "Basal, Granular, Prickle, Corneum",
    "B": "Corneum, Prickle, Granular, Basal",
    "C": "Corneum, Granular, Basal, Prickle",
    "D": "Corneum, Granular, Prickle, Basal",
    "E": "Basal, Prickle, Granular, Corneum"
  },
  "answer": "D",
  "explanation": {
    "correct": "The epidermal layers from superficial to deep are: Stratum corneum (horny layer), Stratum granulosum (granular layer), Stratum spinosum (prickle layer), and Stratum basale (basal layer).",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 45,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Gorlin's syndrome (Basal Cell Nevus Syndrome) is characterized by:",
  "options": {
    "A": "Autosomal recessive inheritance",
    "B": "Rib abnormalities such as splayed or bifid ribs",
    "C": "Absence of palmar pits",
    "D": "Onset only after age 50",
    "E": "Hyperparathyroidism"
  },
  "answer": "B",
  "explanation": {
    "correct": "Gorlin's syndrome is an autosomal dominant condition featuring multiple BCCs, odontogenic keratocysts, palmar/plantar pits, and skeletal anomalies like bifid ribs.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 46,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "A 35-year-old woman has a breast mass that disappears after aspiration of clear fluid. The diagnosis is:",
  "options": {
    "A": "Fibroadenoma",
    "B": "Fibrocystic disease",
    "C": "Breast cancer",
    "D": "Lipoma",
    "E": "Galactocele"
  },
  "answer": "B",
  "explanation": {
    "correct": "Fibrocystic change often presents with symptomatic cysts. Aspiration of clear or straw-colored fluid with complete resolution of the mass is diagnostic of a simple cyst.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 47,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "The most common benign breast tumor in young women is:",
  "options": {
    "A": "Breast cyst",
    "B": "Intraductal papilloma",
    "C": "Fibroadenoma",
    "D": "Phylloides tumor",
    "E": "Lipoma"
  },
  "answer": "C",
  "explanation": {
    "correct": "Fibroadenomas are common, rubbery, mobile, benign tumors typically found in women in their 20s and 30s.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 48,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Galactorrhea in a non-pregnant woman is most commonly associated with:",
  "options": {
    "A": "Fibroadenoma",
    "B": "Hyperparathyroidism",
    "C": "Pituitary adenoma",
    "D": "Mastitis",
    "E": "Breast cancer"
  },
  "answer": "C",
  "explanation": {
    "correct": "Hyperprolactinemia, often caused by a prolactin-secreting pituitary adenoma, is the most common organic cause of non-puerperal galactorrhea.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 49,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "A painful breast mass appearing several weeks after trauma with skin retraction is likely:",
  "options": {
    "A": "Inflammatory carcinoma",
    "B": "Hematoma",
    "C": "Abscess",
    "D": "Fat necrosis",
    "E": "Sclerosing adenosis"
  },
  "answer": "D",
  "explanation": {
    "correct": "Fat necrosis can mimic breast cancer by presenting as a firm, fixed mass with skin tethering/retraction following an injury.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 50,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Recurrent subareolar abscesses and draining tracts (Zuska’s disease) are best treated by:",
  "options": {
    "A": "Repeated I&D",
    "B": "Chronic antibiotics",
    "C": "Complete excision of the drainage tract and affected duct",
    "D": "Mastectomy",
    "E": "Warm compresses"
  },
  "answer": "C",
  "explanation": {
    "correct": "Zuska's disease involves squamous metaplasia of the lactiferous ducts. Simple drainage often fails; definitive cure requires excision of the entire fistula and the diseased duct.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 51,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "Mondor's disease of the breast refers to:",
  "options": {
    "A": "A malignant phylloides tumor",
    "B": "Lymphatic obstruction by cancer",
    "C": "Superficial thrombophlebitis",
    "D": "A fungal infection",
    "E": "Nipple inversion"
  },
  "answer": "C",
  "explanation": {
    "correct": "Mondor's disease is a benign, self-limiting superficial thrombophlebitis of the breast or chest wall veins, often appearing as a painful 'cord'.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 52,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "The most common cause of bloody nipple discharge is:",
  "options": {
    "A": "Intraductal papilloma",
    "B": "Paget's disease",
    "C": "Ductal carcinoma in situ",
    "D": "Fat necrosis",
    "E": "Fibrocystic disease"
  },
  "answer": "A",
  "explanation": {
    "correct": "While malignancy must be ruled out, a benign intraductal papilloma is the single most frequent cause of spontaneous bloody nipple discharge.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 53,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Management of fibrocystic changes with thickening but no discrete mass includes:",
  "options": {
    "A": "Immediate biopsy of all thickened areas",
    "B": "Bilateral mastectomy",
    "C": "Routine re-examination",
    "D": "MRI in all cases",
    "E": "Spot compression views of any suspicious mammographic areas"
  },
  "answer": "E",
  "explanation": {
    "correct": "Diffuse thickening without a dominant mass is managed with clinical follow-up and targeted imaging (mammography/ultrasound) if specific areas of concern are identified.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 54,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "Which mammographic finding is most likely to be benign?",
  "options": {
    "A": "Stellate mass",
    "B": "Fine pleomorphic calcifications",
    "C": "Coarse 'popcorn' calcifications",
    "D": "New architectural distortion",
    "E": "Skin thickening"
  },
  "answer": "C",
  "explanation": {
    "correct": "Coarse, 'popcorn-like' calcifications are characteristic of an involuting (calcifying) fibroadenoma and are benign.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 55,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "Which of the following is NOT a proven risk factor for breast cancer?",
  "options": {
    "A": "Smoking",
    "B": "Family history in a first-degree relative",
    "C": "Atypical ductal hyperplasia (ADH)",
    "D": "Increasing age",
    "E": "Early menarche"
  },
  "answer": "A",
  "explanation": {
    "correct": "While smoking is harmful, its status as an independent risk factor for breast cancer is less established than age, genetics, and hormonal exposure.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 56,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Estrogen receptor (ER) and Progesterone receptor (PR) status should be:",
  "options": {
    "A": "Checked only in patients over 50",
    "B": "Checked only if chemotherapy is planned",
    "C": "Checked only in metastatic disease",
    "D": "Determined in all cases of invasive breast carcinoma",
    "E": "Used only to predict recurrence, not treatment response"
  },
  "answer": "D",
  "explanation": {
    "correct": "Hormone receptor status is essential for all invasive breast cancers to guide adjuvant endocrine therapy decisions.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 57,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "In postmenopausal women with ER+ breast cancer, the most effective hormonal therapy is:",
  "options": {
    "A": "Tamoxifen",
    "B": "Raloxifene",
    "C": "Aromatase inhibitors",
    "D": "Progesterone",
    "E": "Estrogen"
  },
  "answer": "C",
  "explanation": {
    "correct": "Aromatase inhibitors (e.g., anastrozole, letrozole) have been shown to be superior to tamoxifen in postmenopausal women.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 58,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "The most important prognostic factor in breast cancer is:",
  "options": {
    "A": "Tumor size",
    "B": "Histological grade",
    "C": "Axillary lymph node status",
    "D": "ER/PR status",
    "E": "Patient age"
  },
  "answer": "C",
  "explanation": {
    "correct": "The presence and number of axillary lymph node metastases remain the single best predictor of overall survival and recurrence risk.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 59,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Which is TRUE of Ductal Carcinoma In Situ (DCIS)?",
  "options": {
    "A": "Approximately 30% of cases become invasive if untreated.",
    "B": "Comedo DCIS is less aggressive than non-comedo types.",
    "C": "It always requires a total mastectomy.",
    "D": "It commonly metastasizes to axillary nodes.",
    "E": "Radiotherapy is never indicated after lumpectomy."
  },
  "answer": "A",
  "explanation": {
    "correct": "DCIS is a non-invasive precursor. If left untreated, a significant percentage will progress to invasive ductal carcinoma.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 60,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "A finding of Lobular Carcinoma In Situ (LCIS) on biopsy means:",
  "options": {
    "A": "The patient needs a simple mastectomy.",
    "B": "The patient has an invasive cancer elsewhere in the breast.",
    "C": "The patient is at increased risk for invasive cancer in either breast.",
    "D": "It is a direct precursor that will become invasive at that site.",
    "E": "Radiation therapy is mandatory."
  },
  "answer": "C",
  "explanation": {
    "correct": "LCIS is considered a marker of increased risk rather than a direct precursor. The risk of invasive cancer is roughly equal for both breasts.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 61,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "Paget’s disease of the nipple is characterized by:",
  "options": {
    "A": "A benign skin rash",
    "B": "Association with underlying carcinoma",
    "C": "Rapid healing with topical steroids",
    "D": "Absence of nipple biopsy findings",
    "E": "Association with Paget's disease of the bone"
  },
  "answer": "B",
  "explanation": {
    "correct": "Paget’s disease presents as an eczematous change of the nipple and is almost always associated with an underlying DCIS or invasive cancer.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 62,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "A breast cancer patient with positive supraclavicular nodes is classified as:",
  "options": {
    "A": "Stage IIA",
    "B": "Stage IIIB",
    "C": "Stage IIIC",
    "D": "Stage IV",
    "E": "Stage IIB"
  },
  "answer": "C",
  "explanation": {
    "correct": "Supraclavicular lymph node involvement (N3) without distant visceral metastasis is Stage IIIC.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 63,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Anaphylaxis during sentinel lymph node biopsy is most likely caused by:",
  "options": {
    "A": "Radiocolloid",
    "B": "Local anesthetic",
    "C": "Isosulfan blue dye",
    "D": "Methylene blue",
    "E": "Latex"
  },
  "answer": "C",
  "explanation": {
    "correct": "Isosulfan blue (and sometimes methylene blue) can cause allergic reactions, including life-threatening anaphylaxis, in about 1% of patients.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 64,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Adjuvant treatment for a 5-mm tubular cancer (ER+/PR+) with negative nodes is:",
  "options": {
    "A": "Chemotherapy and radiation",
    "B": "Radiation only",
    "C": "Hormonal therapy only",
    "D": "Radiation and hormonal therapy (if lumpectomy was performed)",
    "E": "No adjuvant therapy required"
  },
  "answer": "D",
  "explanation": {
    "correct": "Standard care after breast-conserving surgery includes radiotherapy to reduce local recurrence and hormonal therapy for ER+ tumors.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 65,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "The best surgical option for multicentric DCIS with a suspicious axillary node is:",
  "options": {
    "A": "Lumpectomy",
    "B": "Modified Radical Mastectomy",
    "C": "Sentinel node biopsy alone",
    "D": "Radical Mastectomy",
    "E": "Wide local excision"
  },
  "answer": "B",
  "explanation": {
    "correct": "Multicentric disease usually requires mastectomy. If nodes are suspicious, an axillary dissection or clearance (making it a modified radical mastectomy) is indicated.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 66,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "The most frequent site of distant metastasis for breast cancer is:",
  "options": {
    "A": "Brain",
    "B": "Bone",
    "C": "Lung",
    "D": "Liver",
    "E": "Adrenal glands"
  },
  "answer": "B",
  "explanation": {
    "correct": "The skeleton (bone) is the most common site of distant spread for breast cancer.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 67,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Injury to the long thoracic nerve during axillary dissection causes:",
  "options": {
    "A": "Winging of the scapula",
    "B": "Loss of arm adduction",
    "C": "Numbness of the inner arm",
    "D": "Weakness of the latissimus dorsi",
    "E": "Wrist drop"
  },
  "answer": "A",
  "explanation": {
    "correct": "The long thoracic nerve innervates the serratus anterior; damage leads to 'winging' of the scapula when the patient pushes against a wall.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 68,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "Breast cancer during pregnancy is:",
  "options": {
    "A": "Always a reason for termination",
    "B": "Never treated with chemotherapy",
    "C": "The most common cancer diagnosed during pregnancy",
    "D": "Always ER positive",
    "E": "Treated with radiation in the first trimester"
  },
  "answer": "C",
  "explanation": {
    "correct": "Breast cancer is the most common malignancy during pregnancy. Treatment depends on the trimester; chemotherapy can often be given safely in the 2nd and 3rd trimesters.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 69,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "Routine follow-up after breast cancer treatment should always include:",
  "options": {
    "A": "Monthly tumor markers",
    "B": "Quarterly CT scans",
    "C": "Yearly bone scans",
    "D": "Regular clinical exams and yearly mammography",
    "E": "Semi-annual MRI"
  },
  "answer": "D",
  "explanation": {
    "correct": "Evidence-based follow-up focuses on history, physical examination, and annual mammography to detect local recurrence or a new primary.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 70,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "Submuscular placement of breast implants is preferred because:",
  "options": {
    "A": "It is less painful.",
    "B": "It prevents all capsule formation.",
    "C": "It allows better mammographic visualization of breast tissue.",
    "D": "It is cheaper.",
    "E": "It eliminates the risk of rupture."
  },
  "answer": "C",
  "explanation": {
    "correct": "Placing implants behind the pectoral muscle makes it easier for radiologists to visualize native breast tissue during screening mammography.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 71,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "What is the incidence of breast cancer in males?",
  "options": {
    "A": "<1% of all breast cancers",
    "B": "5%",
    "C": "10%",
    "D": "20%",
    "E": "50%"
  },
  "answer": "A",
  "explanation": {
    "correct": "Male breast cancer is rare, representing less than 1% of the total breast cancer cases.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 72,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Persistent, symptomatic gynecomastia in a young man is best managed by:",
  "options": {
    "A": "Total mastectomy",
    "B": "Radiation therapy",
    "C": "Endocrine workup and subcutaneous mastectomy",
    "D": "Observation for life",
    "E": "Daily aspirin"
  },
  "answer": "C",
  "explanation": {
    "correct": "Once a pathologic cause is ruled out, surgical correction (subcutaneous mastectomy) is the treatment for persistent, emotionally distressing gynecomastia.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 73,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "A large breast tumor with skin erosion and a favorable outlook is likely:",
  "options": {
    "A": "Medullary carcinoma",
    "B": "Cystosarcoma phyllodes (benign)",
    "C": "Scirrhous carcinoma",
    "D": "Inflammatory carcinoma",
    "E": "Paget's disease"
  },
  "answer": "B",
  "explanation": {
    "correct": "Phyllodes tumors can grow quite large and even ulcerate the skin, but most are benign or low-grade and have an excellent prognosis with wide local excision.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 74,
  "specialty": "General Surgery",
  "topic": "Skin & Soft Tissue",
  "question": "Infiltrating lobular carcinoma (ILC) differs from ductal carcinoma (IDC) in that ILC is:",
  "options": {
    "A": "Never bilateral",
    "B": "Always easier to see on mammography",
    "C": "More likely to be multifocal and bilateral",
    "D": "Always treated with mastectomy only",
    "E": "Less sensitive to hormones"
  },
  "answer": "C",
  "explanation": {
    "correct": "Lobular carcinomas are notably more likely than ductal cancers to be multifocal within the same breast and to occur in the contralateral breast.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
},
{
  "id": 75,
  "specialty": "Breast Surgery",
  "topic": "Breast Disease",
  "question": "An 'occult' primary breast cancer typically presents as:",
  "options": {
    "A": "A large palpable mass",
    "B": "Nipple discharge only",
    "C": "Axillary lymphadenopathy with no visible breast mass",
    "D": "Bone pain",
    "E": "Skin rash"
  },
  "answer": "C",
  "explanation": {
    "correct": "Occult primary breast cancer presents as metastatic disease (usually in the axillary nodes) where the primary tumor in the breast cannot be identified by physical exam or standard imaging.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery Clinical Cases MCQ's",
  "takeaway": "See explanation for key learning point."
}
,
{
  "id": 76,
  "specialty": "Trauma Surgery",
  "topic": "Diaphragmatic Rupture",
  "question": "A teenage boy falls from his bicycle and is run over by a truck. On arrival in the emergency room (ER), he is awake and alert and appears frightened but in no distress. The chest radiograph suggests an air-fluid level in the left lower lung field and the nasogastric tube seems to coil upward into the left chest. Which of the following is the next best step in his management?",
  "options": {
    "A": "Placement of a left chest tube",
    "B": "Thoracotomy",
    "C": "Laparotomy",
    "D": "Esophagogastroscopy",
    "E": "Diagnostic peritoneal lavage"
  },
  "answer": "C",
  "explanation": {
    "correct": "The pathognomonic finding of a nasogastric tube coiling in the left chest or an air-fluid level in the chest after blunt trauma indicates a diaphragmatic rupture. In the acute setting, laparotomy is the procedure of choice as it allows for inspection and repair of associated intra-abdominal injuries.",
    "A": "Placing a chest tube might injure the stomach or bowel herniated into the chest.",
    "B": "Thoracotomy is generally reserved for late-presenting diaphragmatic hernias or specific thoracic injuries.",
    "C": "Laparotomy is preferred in acute trauma to address both the diaphragm and potential intra-abdominal injuries.",
    "D": "Endoscopy is not indicated and could delay definitive surgical repair.",
    "E": "Diagnostic peritoneal lavage is unnecessary given the diagnostic radiologic findings."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "An air-fluid level in the chest and a coiling nasogastric tube are diagnostic of diaphragmatic rupture, requiring urgent laparotomy."
},
{
  "id": 77,
  "specialty": "Trauma Surgery",
  "topic": "Seatbelt Sign and Enteric Injury",
  "question": "A 10-year-old boy was the backseat belted passenger in a high-speed motor vehicle collision. On presentation to the ER, he is awake, alert, and hemodynamically stable. He is complaining of abdominal pain and has an ecchymosis on his anterior abdominal wall where the seatbelt was located. Which of the following is the best next step in his management?",
  "options": {
    "A": "Discharge him home without any other workup.",
    "B": "Discharge him home if his amylase level is normal.",
    "C": "Discharge him home if his abdominal plain films are negative for the presence of free air.",
    "D": "Discharge him home if an abdominal computed tomography (CT) scan is negative.",
    "E": "Observe him regardless of negative test results."
  },
  "answer": "E",
  "explanation": {
    "correct": "The 'seatbelt sign' (ecchymosis on the abdominal wall) is associated with a high risk of small bowel or mesenteric injuries. These injuries are often not immediately apparent on CT scans or plain films. Therefore, clinical observation is mandatory regardless of negative initial imaging.",
    "A": "Discharging without workup is unsafe due to high risk of occult injury.",
    "B": "Amylase is neither sensitive nor specific for bowel or mesenteric injury.",
    "C": "Free air may not be present early in small bowel perforations.",
    "D": "CT scans can miss early enteric injuries or mesenteric hematomas.",
    "E": "Serial clinical examinations are the most reliable way to detect evolving peritonitis from bowel injury."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "The presence of a seatbelt sign mandates observation for potential hollow viscus injury, even if initial CT imaging is negative."
},
{
  "id": 78,
  "specialty": "Trauma Surgery",
  "topic": "Rib Fracture Management",
  "question": "A 65-year-old man who smokes cigarettes and has chronic obstructive pulmonary disease falls and fractures the third, fourth, and fifth ribs in the left anterolateral chest. Chest x-ray is otherwise normal. Which of the following would be the most appropriate next step in his management?",
  "options": {
    "A": "Strapping the chest with adhesive tape",
    "B": "Admission to the hospital and treatment with oral analgesia",
    "C": "Tube thoracostomy",
    "D": "Placement of an epidural for pain management",
    "E": "Surgical fixation of the fractured ribs"
  },
  "answer": "D",
  "explanation": {
    "correct": "In patients with underlying lung disease (COPD) and multiple rib fractures, aggressive pain management is critical to prevent splinting, atelectasis, and pneumonia. Epidural analgesia is the gold standard as it provides superior pain relief without the respiratory depression associated with systemic opioids.",
    "A": "Strapping the chest restricts expansion and increases the risk of pneumonia.",
    "B": "Oral analgesia may be insufficient for a patient with COPD and multiple fractures.",
    "C": "A chest tube is only indicated if there is an associated pneumothorax or hemothorax.",
    "D": "Epidural anesthesia allows for effective coughing and pulmonary toilet.",
    "E": "Fixation is typically reserved for severe flail chest or failure to wean from ventilation."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Epidural analgesia is preferred for managing multiple rib fractures in patients with pre-existing pulmonary disease to prevent respiratory failure."
},
{
  "id": 79,
  "specialty": "Trauma Surgery",
  "topic": "Blunt Abdominal Trauma",
  "question": "A 36-year-old man who was hit by a car presents to the ER with hypotension. On examination, he has tenderness and bruising over his left lateral chest below the nipple. An ultrasound examination is performed and reveals free fluid in the abdomen. What is the most likely organ to have been injured in this patient?",
  "options": {
    "A": "Liver",
    "B": "Kidney",
    "C": "Spleen",
    "D": "Intestine",
    "E": "Pancreas"
  },
  "answer": "C",
  "explanation": {
    "correct": "The spleen is the most frequently injured organ in blunt abdominal trauma. Injury is particularly likely given the mechanism of left-sided chest impact and the presence of hemoperitoneum (free fluid on ultrasound).",
    "A": "The liver is common but usually associated with right-sided impact.",
    "B": "Kidney injuries are often retroperitoneal and might not show free intraperitoneal fluid.",
    "C": "Spleen injury is the most common source of hemoperitoneum in blunt trauma.",
    "D": "Hollow viscus injuries are less common than solid organ injuries in blunt trauma.",
    "E": "Pancreatic injuries are relatively rare and usually involve midline impact."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "The spleen is the most common organ injured in blunt abdominal trauma, often presenting with left-sided signs and hemoperitoneum."
},
{
  "id": 80,
  "specialty": "Trauma Surgery",
  "topic": "Vascular Injury Management",
  "question": "A 52-year-old man is pinned against a loading dock. The patient has a fractured femur, a pelvic fracture, a tender abdomen, and no pulses in the right foot. Angiography discloses a popliteal artery injury with obstruction. At surgery, the popliteal vein is also transected. His blood pressure is 85/60 mm Hg. Which of the following is the best management strategy for his vascular injuries?",
  "options": {
    "A": "Repair of the popliteal vein with simple closure",
    "B": "Repair of the popliteal vein with saphenous vein patch",
    "C": "Repair of the popliteal vein with a synthetic interposition graft",
    "D": "Ligation of the popliteal vein",
    "E": "Amputation of the right lower extremity above the knee"
  },
  "answer": "D",
  "explanation": {
    "correct": "In a hemodynamically unstable patient (BP 85/60) with multiple severe injuries (femur, pelvis, abdomen), 'damage control' principles apply. While venous repair is preferred in stable patients, ligation of the popliteal vein is the safest and fastest option in an unstable patient to prioritize survival over limb salvage.",
    "A": "Simple closure is not possible for a transected vein.",
    "B": "Patching requires time that an unstable patient does not have.",
    "C": "Interposition grafting is time-consuming and risks infection in trauma.",
    "D": "Venous ligation is acceptable in unstable patients; limb swelling can be managed later with fasciotomies if needed.",
    "E": "Amputation is a last resort and not indicated before attempting vascular control."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "In hemodynamically unstable trauma patients, venous ligation is an acceptable part of damage control surgery to expedite life-saving procedures."
},
{
  "id": 81,
  "specialty": "Trauma Surgery",
  "topic": "Hard Signs of Vascular Injury",
  "question": "A 27-year-old man sustains a single gunshot wound to the left thigh. In the ER, he is noted to have a large hematoma of his medial thigh. He complains of paresthesias in his left foot. On examination, there are weak pulses palpable distal to the injury and the patient is unable to move his foot. Which of the following is the most appropriate initial management of this patient?",
  "options": {
    "A": "Angiography",
    "B": "Immediate exploration and repair in the operating room",
    "C": "Fasciotomy of the anterior compartment of the calf",
    "D": "Observation for resolution of spasm",
    "E": "Local wound exploration at the bedside"
  },
  "answer": "B",
  "explanation": {
    "correct": "The patient has 'hard signs' of arterial injury: a large/expanding hematoma, weak distal pulses, and neurologic deficits (paresthesias, inability to move the foot). These signs mandate immediate operative exploration without wasting time on imaging like angiography.",
    "A": "Angiography would delay definitive repair in a patient with hard signs.",
    "B": "Immediate surgery is required to restore perfusion and prevent limb loss.",
    "C": "Fasciotomy may be needed after repair but is not the first step.",
    "D": "Observation is dangerous when hard signs of ischemia are present.",
    "E": "Local exploration is inadequate for evaluating deep vascular structures."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Hard signs of vascular injury (ischemia, expanding hematoma, thrill/bruit) mandate immediate operative exploration and repair."
},
{
  "id": 82,
  "specialty": "Trauma Surgery",
  "topic": "Tension Pneumothorax",
  "question": "A 25-year-old woman arrives in the ER following an automobile accident. She is acutely dyspneic with a respiratory rate of 60 breaths per minute. Breath sounds are markedly diminished on the right side. Which of the following is the best first step in the management of this patient?",
  "options": {
    "A": "Take a chest x-ray",
    "B": "Draw arterial blood for blood-gas determination",
    "C": "Decompress the right pleural space",
    "D": "Perform pericardiocentesis",
    "E": "Administer intravenous fluids"
  },
  "answer": "C",
  "explanation": {
    "correct": "The clinical triad of severe dyspnea, diminished breath sounds, and hemodynamic instability (implied by the severe distress) suggests tension pneumothorax. This is a clinical diagnosis that requires immediate needle decompression followed by chest tube placement.",
    "A": "Waiting for a chest x-ray can be fatal in tension pneumothorax.",
    "B": "ABGs delay treatment of a mechanical obstruction to ventilation and circulation.",
    "C": "Immediate decompression converts a tension pneumothorax to a simple one, relieving the pressure.",
    "D": "Pericardiocentesis is for cardiac tamponade, not pneumothorax.",
    "E": "Administering intravenous fluids won't help if the heart cannot fill due to high intrathoracic pressure."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Tension pneumothorax is a clinical diagnosis requiring immediate needle decompression; do not wait for radiologic confirmation."
},
{
  "id": 83,
  "specialty": "Trauma Surgery",
  "topic": "Penetrating Thoracoabdominal Trauma",
  "question": "A 17-year-old adolescent boy is stabbed in the left seventh intercostal space, midaxillary line. He presents to the ER with a heart rate of 86 beats per minute, blood pressure of 125/74 mm Hg, and oxygen saturation of 98%. Breath sounds are equal bilaterally. Which of the following is the most appropriate next step in his workup?",
  "options": {
    "A": "Local exploration of the wound",
    "B": "Left tube thoracostomy",
    "C": "Diagnostic laparoscopy",
    "D": "CT scan of the abdomen",
    "E": "Echocardiography"
  },
  "answer": "C",
  "explanation": {
    "correct": "Penetrating injuries between the nipple line (4th ICS) and the costal margin can involve both the chest and the abdomen (thoracoabdominal zone). There is a high risk of occult diaphragmatic injury, which is best evaluated by diagnostic laparoscopy in a stable patient.",
    "A": "Local exploration cannot determine if the diaphragm or peritoneum was breached.",
    "B": "A chest tube is not needed as breath sounds are equal and there is no pneumothorax.",
    "C": "Laparoscopy is the most sensitive tool for identifying small diaphragmatic lacerations.",
    "D": "CT scans frequently miss small diaphragmatic injuries from stabbings.",
    "E": "Echocardiography is for suspected cardiac injury (usually more medial wounds)."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Diagnostic laparoscopy is the gold standard for evaluating potential diaphragmatic injury in stable patients with thoracoabdominal penetrating trauma."
},
{
  "id": 84,
  "specialty": "Trauma Surgery",
  "topic": "Hormonal Response to Trauma",
  "question": "Your hospital is conducting an ongoing research study involving the hormonal response to trauma. Which of the following values are likely to be seen after a healthy 36-year-old man is hit by a bus and sustains a ruptured spleen and a lacerated small bowel?",
  "options": {
    "A": "Increased secretion of insulin",
    "B": "Increased secretion of thyroxine",
    "C": "Decreased secretion of vasopressin (ADH)",
    "D": "Decreased secretion of glucagon",
    "E": "Increased secretion of aldosterone"
  },
  "answer": "A",
  "explanation": {
    "correct": "While catecholamines initially suppress insulin, trauma and injury soon lead to a significant rise in plasma insulin levels, though peripheral insulin resistance often leads to hyperglycemia. Aldosterone and vasopressin levels also increase to maintain volume.",
    "A": "Insulin levels typically rise shortly after the initial injury phase.",
    "B": "Thyroid hormones (T3/T4) often decrease or stay stable (euthyroid sick syndrome).",
    "C": "Vasopressin (ADH) secretion increases to conserve water and maintain blood pressure.",
    "D": "Glucagon levels increase to promote gluconeogenesis and glycogenolysis.",
    "E": "Aldosterone increases to promote sodium and water retention."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Trauma induces a hypermetabolic state with increased levels of insulin, glucagon, catecholamines, aldosterone, and ADH."
},
{
  "id": 85,
  "specialty": "Trauma Surgery",
  "topic": "Bile Duct Injury Management",
  "question": "A 29-year-old man sustained a gunshot wound to the right upper quadrant. He is taken to the operating room and, after management of a liver injury, is found to have a complete transection of the common bile duct with significant tissue loss. Which of the following is the optimal surgical management of this patient's injury?",
  "options": {
    "A": "Choledochoduodenostomy",
    "B": "Loop choledochojejunostomy",
    "C": "Primary end-to-end anastomosis of the transected bile duct",
    "D": "Roux-en-Y choledochojejunostomy",
    "E": "Bridging of the injury with a T tube"
  },
  "answer": "D",
  "explanation": {
    "correct": "When there is significant tissue loss in a transected common bile duct, primary repair is impossible without tension. A Roux-en-Y choledochojejunostomy is the preferred biliary-enteric bypass to provide a tension-free, well-vascularized reconstruction.",
    "A": "Choledochoduodenostomy is rarely used in trauma due to risk of duodenal leak.",
    "B": "Loop reconstructions are more prone to tension and reflux than Roux-en-Y.",
    "C": "Primary repair with tissue loss leads to tension and inevitable stricture.",
    "D": "Roux-en-Y provides the most reliable long-term result for complex ductal injuries.",
    "E": "A T tube alone will not bridge a complete transection with tissue loss."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Complete bile duct transection with tissue loss is best managed with a Roux-en-Y choledochojejunostomy."
},
{
  "id": 86,
  "specialty": "Trauma Surgery",
  "topic": "Neck Trauma Exploration",
  "question": "You evaluate an 18-year-old man who sustained a right-sided cervical laceration during a gang fight. Which of the following is a relative, rather than an absolute, indication for neck exploration?",
  "options": {
    "A": "Expanding hematoma",
    "B": "Dysphagia",
    "C": "Dysphonia",
    "D": "Hemoptysis",
    "E": "Pneumothorax"
  },
  "answer": "E",
  "explanation": {
    "correct": "Absolute indications for neck exploration include airway distress (dysphonia, stridor), visceral injury (hemoptysis, dysphagia), and vascular injury (expanding hematoma). A pneumothorax requires a chest tube, but its presence alone is a relative indication for exploration depending on clinical judgment and other findings.",
    "A": "Expanding hematoma is an absolute sign of major vascular injury.",
    "B": "Dysphagia suggests esophageal or pharyngeal injury, an absolute indication.",
    "C": "Dysphonia suggests laryngeal or tracheal injury, an absolute indication.",
    "D": "Hemoptysis suggests injury to the aerodigestive tract, an absolute indication.",
    "E": "Pneumothorax mandates a chest tube but not necessarily an immediate neck exploration if the patient is otherwise stable."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Pneumothorax is a relative indication for neck exploration; focus on 'hard signs' like hematomas and aerodigestive symptoms."
},
{
  "id": 87,
  "specialty": "Trauma Surgery",
  "topic": "Duodenal Hematoma",
  "question": "Following blunt abdominal trauma, a 12-year-old girl develops upper abdominal pain, nausea, and vomiting. An upper gastrointestinal series reveals a total obstruction of the duodenum with a coiled spring appearance. In the absence of other suspected injuries, which of the following is the most appropriate management?",
  "options": {
    "A": "Gastrojejunostomy",
    "B": "Nasogastric suction and observation",
    "C": "Duodenal resection",
    "D": "TPN to increase the size of the retroperitoneal fat pad",
    "E": "Duodenojejunostomy"
  },
  "answer": "B",
  "explanation": {
    "correct": "Duodenal hematomas result from blunt trauma and often cause proximal bowel obstruction. Most resolve spontaneously with conservative management, including nasogastric suction and nutritional support, over a period of 1-3 weeks.",
    "A": "Surgical bypass is unnecessary as most hematomas resolve.",
    "B": "Initial management is almost always nonoperative observation.",
    "C": "Resection is overly aggressive for a self-limiting hematoma.",
    "D": "Fat pads are not the issue; the hematoma itself causes the intramural obstruction.",
    "E": "Surgery is reserved for patients who fail to resolve after several weeks of observation."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "The majority of duodenal hematomas should be managed conservatively with nasogastric suction and observation."
},
{
  "id": 88,
  "specialty": "Trauma Surgery",
  "topic": "Blunt Carotid Dissection",
  "question": "A 45-year-old man presents after a high-speed collision. He has a seatbelt sign across his neck and an ecchymosis. A CT angiogram shows a left carotid dissection. He is neurologically intact. What is the next step in his management?",
  "options": {
    "A": "Antiplatelet therapy",
    "B": "Systemic anticoagulation with heparin",
    "C": "Neck exploration and left carotid artery repair",
    "D": "Neck exploration and left intra-extracranial bypass",
    "E": "Angiography and left carotid artery stenting"
  },
  "answer": "B",
  "explanation": {
    "correct": "The standard treatment for blunt carotid artery injuries (dissections) in the absence of contraindications is systemic anticoagulation (heparin) to prevent thromboembolic stroke. If anticoagulation is contraindicated, antiplatelet therapy is the second-line option.",
    "A": "Antiplatelet therapy is used if anticoagulation is contraindicated.",
    "B": "Heparin is the preferred initial treatment for stable dissections.",
    "C": "Surgery is difficult and usually reserved for accessible injuries or failures of medical therapy.",
    "D": "Bypass is a complex procedure not indicated for a stable dissection.",
    "E": "Stenting may be used for enlarging pseudoaneurysms but is not first-line."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Systemic anticoagulation is the primary treatment for blunt carotid artery dissections in neurologically stable patients."
},
{
  "id": 89,
  "specialty": "Trauma Surgery",
  "topic": "Increased Intracranial Pressure",
  "question": "An 18-year-old man was assaulted and sustained significant head and facial trauma. Which of the following is the most common initial manifestation of increased intracranial pressure?",
  "options": {
    "A": "Change in level of consciousness",
    "B": "Ipsilateral pupillary dilation",
    "C": "Contralateral pupillary dilation",
    "D": "Hemiparesis",
    "E": "Hypertension"
  },
  "answer": "A",
  "explanation": {
    "correct": "A change in the level of consciousness (lethargy, confusion, or irritability) is the most sensitive and earliest clinical sign of increasing intracranial pressure (ICP).",
    "A": "Mental status changes precede more dramatic signs like pupillary dilation.",
    "B": "Ipsilateral dilation is a later sign indicating uncal herniation.",
    "C": "Contralateral dilation is even rarer and later.",
    "D": "Hemiparesis indicates focal compression and is a late finding.",
    "E": "Hypertension (part of Cushing's triad) is a late and often pre-terminal sign."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Altered mental status is the most common and earliest manifestation of rising intracranial pressure."
},
{
  "id": 90,
  "specialty": "Trauma Surgery",
  "topic": "ICP Management",
  "question": "A 28-year-old man is brought to the ER for a severe head injury. On examination, his right pupil is dilated. Which of the following is the most appropriate method for initially reducing his intracranial pressure?",
  "options": {
    "A": "Elevation of the head of the bed",
    "B": "Saline-furosemide infusion",
    "C": "Mannitol infusion",
    "D": "Intravenous dexamethasone",
    "E": "Hyperventilation"
  },
  "answer": "E",
  "explanation": {
    "correct": "Hyperventilation is the fastest method to reduce ICP. It causes hypocapnia, which leads to cerebral vasoconstriction and a rapid decrease in intracranial blood volume. However, its effect is short-lived.",
    "A": "Head elevation helps but is not as rapid or potent as hyperventilation.",
    "B": "Diuretics are used but act more slowly than hyperventilation.",
    "C": "Mannitol is effective but takes slightly longer to work than hyperventilation.",
    "D": "Steroids are ineffective for trauma-induced cerebral edema.",
    "E": "Reducing PaCO2 to 30-35 mmHg provides immediate (within minutes) reduction in ICP."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Hyperventilation is the most rapid clinical intervention to lower intracranial pressure in an emergency."
},
{
  "id": 91,
  "specialty": "Trauma Surgery",
  "topic": "Uncal Herniation",
  "question": "A 45-year-old man was involved in a high-speed collision. In the ER, he is noted to have a left dilated pupil that responds only sluggishly. What is the pathophysiology of his dilated pupil?",
  "options": {
    "A": "Infection within the cavernous sinus",
    "B": "Herniation of the uncal process of the temporal lobe",
    "C": "Laceration of the corpus callosum by the falx cerebri",
    "D": "Occult damage to the superior cervical ganglion",
    "E": "Compression of the oculomotor nerve by the posterior cerebral artery"
  },
  "answer": "B",
  "explanation": {
    "correct": "A dilated pupil in the setting of head trauma is usually due to uncal herniation. The uncal process of the temporal lobe herniates through the tentorium, compressing the ipsilateral oculomotor (III) nerve.",
    "A": "Cavernous sinus issues usually cause multiple nerve palsies and are rare in acute trauma.",
    "B": "Uncal herniation is the classic mechanism for a 'blown' pupil in trauma.",
    "C": "Corpus callosum injury doesn't cause pupillary dilation.",
    "D": "Sympathetic damage causes Horner's syndrome (constricted pupil).",
    "E": "Compression of the CN III is the mechanism, but it's by the uncus, not usually the PCA alone."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "An ipsilateral dilated pupil in a head-injured patient is pathognomonic for uncal herniation and oculomotor nerve compression."
},
{
  "id": 92,
  "specialty": "Trauma Surgery",
  "topic": "Flail Chest",
  "question": "A 31-year-old man exhibits multiple palpable rib fractures and paradoxical movement of the right side of the chest. Chest x-ray shows no pneumothorax. Which of the following is the most appropriate initial management?",
  "options": {
    "A": "Intubation and mechanical ventilation",
    "B": "Stabilization of the chest wall with sandbags",
    "C": "Stabilization with towel clips",
    "D": "Immediate operative stabilization",
    "E": "Pain control, chest physiotherapy, and close observation"
  },
  "answer": "E",
  "explanation": {
    "correct": "Modern management of flail chest emphasizes aggressive pain control and pulmonary physiotherapy ('internal stabilization') to allow the patient to breathe and cough effectively. Intubation is reserved for those with respiratory failure or severe associated injuries.",
    "A": "Routine prophylactic intubation for flail chest is no longer recommended.",
    "B": "Sandbags restrict chest wall expansion and worsen atelectasis.",
    "C": "External fixators like towel clips are outdated and increase infection risk.",
    "D": "Surgical fixation is only indicated if the patient fails conservative management.",
    "E": "Effective analgesia and pulmonary toilet are the mainstays of flail chest treatment."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Management of flail chest focuses on analgesia and pulmonary hygiene rather than routine mechanical ventilation."
},
{
  "id": 93,
  "specialty": "Trauma Surgery",
  "topic": "Peripheral Nerve Injury",
  "question": "A 30-year-old man is stabbed in the arm. There is no evidence of vascular injury, but he cannot flex his three radial digits. Which of the following structures has he most likely injured?",
  "options": {
    "A": "Flexor pollicis longus and flexor digitus medius tendons",
    "B": "Radial nerve",
    "C": "Median nerve",
    "D": "Thenar and digital nerves at the wrist",
    "E": "Ulnar nerve"
  },
  "answer": "C",
  "explanation": {
    "correct": "The inability to flex the thumb, index, and middle fingers (the 'radial' digits of the hand) indicates a median nerve injury, which supplies the flexors of these digits in the forearm.",
    "A": "Tendon injuries could cause this, but nerve injury is more likely after a stab wound with this pattern.",
    "B": "Radial nerve injury causes wrist drop (extensor deficit).",
    "C": "The median nerve is responsible for flexion of the first three digits.",
    "D": "Distal nerve injury at the wrist wouldn't cause loss of forearm-based long flexors.",
    "E": "Ulnar nerve injury affects the 4th and 5th digits and intrinsic hand muscles."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Loss of flexion in the radial digits (thumb, index, middle) is characteristic of a proximal median nerve injury."
},
{
  "id": 94,
  "specialty": "Trauma Surgery",
  "topic": "Carbon Monoxide Poisoning",
  "question": "A 36-year-old fireman begins complaining of a throbbing headache and dizziness. His carboxyhemoglobin (COHb) level is found to be 31%. Which of the following is the most appropriate next step in his treatment?",
  "options": {
    "A": "Begin an immediate exchange transfusion.",
    "B": "Transfer the patient to a hyperbaric oxygen chamber.",
    "C": "Begin bicarbonate infusion.",
    "D": "Administer 100% oxygen by mask.",
    "E": "Perform flexible bronchoscopy."
  },
  "answer": "D",
  "explanation": {
    "correct": "The first-line treatment for carbon monoxide poisoning is 100% oxygen by mask. This reduces the half-life of COHb from 5 hours to about 60-90 minutes. Hyperbaric oxygen is considered for higher levels (>40%) or severe neurologic symptoms.",
    "A": "Exchange transfusion is not a standard treatment for CO poisoning.",
    "B": "Hyperbaric oxygen is usually reserved for COHb >40% or severe symptoms (coma/seizures).",
    "C": "Bicarbonate is not indicated for isolated CO poisoning.",
    "D": "100% oxygen should be started immediately.",
    "E": "Bronchoscopy is for evaluating inhalation injury but doesn't treat CO poisoning."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "The immediate treatment for symptomatic carbon monoxide poisoning is 100% oxygen by face mask."
},
{
  "id": 95,
  "specialty": "Trauma Surgery",
  "topic": "Cardiogenic Shock",
  "question": "A 75-year-old man undergoes a right hemicolectomy and becomes hypotensive with depressed mental status on the second postoperative day. A central venous catheter demonstrates a central venous pressure of 18 mm Hg. Which of the following is the most appropriate initial management strategy?",
  "options": {
    "A": "Additional liter fluid bolus",
    "B": "Inotropic support",
    "C": "Mechanical circulatory support with IABP",
    "D": "Cardiac catheterization",
    "E": "Heart transplant"
  },
  "answer": "B",
  "explanation": {
    "correct": "The combination of hypotension and high central venous pressure (CVP 18) suggests cardiogenic shock (pump failure). The initial management is to improve contractility with inotropic support (e.g., dobutamine or dopamine) once adequate volume is ensured.",
    "A": "Further fluids will worsen the failure in a patient with high CVP.",
    "B": "Inotropes are the first-line pharmacologic treatment for pump failure.",
    "C": "IABP is reserved for patients refractory to inotropic support.",
    "D": "Catheterization may be needed later but doesn't provide immediate hemodynamic stabilization.",
    "E": "Heart transplant is not an acute management strategy for postoperative shock."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "In cardiogenic shock (low BP, high CVP), inotropic support is the primary treatment after ensuring adequate preload."
}
,
{
  "id": 96,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 74-year-old woman is admitted with upper gastrointestinal (GI) bleeding. She is started on H2 blockers, but experiences another bleeding episode. Endoscopy documents diffuse gastric ulcerations. Omeprazole is added to the H2 antagonists as a therapeutic approach to the management of acute gastric and duodenal ulcers. Which of the following is the mechanism of action of omeprazole?",
  "options": {
    "A": "Blockage of the breakdown of mucosa-damaging metabolites of nonsteroidal anti-inflammatory drugs (NSAIDs)",
    "B": "Provision of a direct cytoprotective effect",
    "C": "Buffering of gastric acids",
    "D": "Inhibition of parietal cell hydrogen potassium ATPase (adenosine triphosphatase)",
    "E": "Inhibition of gastrin release and parietal cell acid production"
  },
  "answer": "D",
  "explanation": {
    "correct": "Omeprazole (Prilosec) irreversibly inhibits the hydrogen-potassium-ATPase (proton pump) in the secretory canaliculus of the gastric parietal cell. This blocks the last step in the acid-secretory process. Omeprazole's duration of action exceeds 24 hours, and doses of 20 to 30 mg/day inhibit more than 90% of 24-hour acid secretion.",
    "A": "",
    "B": "",
    "C": "",
    "D": "Irreversibly inhibits the H+/K+ ATPase pump.",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Omeprazole is a proton pump inhibitor that irreversibly inhibits the H+/K+ ATPase in gastric parietal cells, blocking the final step of acid secretion."
},
{
  "id": 97,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 35-year-old woman presents with frequent and multiple areas of cutaneous ecchymosis. Workup demonstrates a platelet count of 15,000/μL, evaluation of the bone marrow reveals a normal number of megakaryocytes, and ultrasound examination demonstrates a normal-sized spleen. Based on the exclusion of other causes of thrombocytopenia, she is given a diagnosis of immune (idiopathic) thrombocytopenic purpura (ITP). Which of the following is the most appropriate treatment upon diagnosis?",
  "options": {
    "A": "Expectant management with close follow-up of platelet counts",
    "B": "Immediate platelet transfusion to increase platelet counts to greater than 50,000/μL",
    "C": "Glucocorticoid therapy",
    "D": "Intravenous immunoglobulin (IVIG) therapy",
    "E": "Referral to surgery for laparoscopic splenectomy"
  },
  "answer": "C",
  "explanation": {
    "correct": "Initial medical treatment for ITP usually consists of glucocorticoids (prednisone 1 mg/kg per day). Splenectomy is indicated for patients who fail to respond to medical therapy or those with contraindications to steroid use.",
    "A": "Only for asymptomatic patients with higher counts.",
    "B": "Usually not indicated unless life-threatening bleeding occurs.",
    "C": "Standard first-line medical therapy.",
    "D": "Used for rapid increase but not the standard initial therapy.",
    "E": "Reserved for medical failures."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Glucocorticoids are the first-line treatment for symptomatic ITP."
},
{
  "id": 98,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 59-year-old woman presents with right lower quadrant pain, nausea, and vomiting. She undergoes an uncomplicated laparoscopic appendectomy. Postoperatively, the pathology reveals a 2.5-cm mucinous adenocarcinoma with lymphatic invasion. Staging workup, including colonoscopy, chest x-ray, and computed tomography (CT) scan of the abdomen and pelvis, is negative. Which of the following is the most appropriate next step in her management?",
  "options": {
    "A": "No further intervention at this time; follow-up every 6 months for 2 years",
    "B": "Chemotherapy alone",
    "C": "Neoadjuvant chemotherapy followed by right hemicolectomy",
    "D": "Ileocecectomy",
    "E": "Right hemicolectomy"
  },
  "answer": "E",
  "explanation": {
    "correct": "Appendiceal adenocarcinoma should be treated with a formal right hemicolectomy, especially if the tumor is larger than 2 cm or shows lymphatic invasion, as it behaves similarly to colon cancer.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": "Standard of care for appendiceal adenocarcinoma > 2 cm."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Appendiceal adenocarcinoma larger than 2 cm requires a formal right hemicolectomy."
},
{
  "id": 99,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 41-year-old man complains of regurgitation of saliva and of undigested food. An esophagram reveals a dilated esophagus and a bird's-beak deformity. Manometry shows a hypertensive lower esophageal sphincter with failure to relax with deglutition. Which of the following is the safest and most effective treatment of this condition?",
  "options": {
    "A": "Medical treatment with sublingual nitroglycerin, nitrates, or calcium-channel blockers",
    "B": "Repeated bougie dilations",
    "C": "Injections of botulinum toxin directly into the lower esophageal sphincter",
    "D": "Dilation with a Gruntzig-type (volume-limited, pressure-control) balloon",
    "E": "Surgical esophagomyotomy"
  },
  "answer": "E",
  "explanation": {
    "correct": "Surgical esophagomyotomy (Heller myotomy) is the most effective long-term treatment for achalasia, providing relief in 90-95% of patients. While balloon dilation is also effective, myotomy is often preferred for long-term results.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": "Most definitive and effective treatment."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Heller myotomy is the most effective treatment for achalasia."
},
{
  "id": 100,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 32-year-old man with a 3-year history of ulcerative colitis (UC) presents for discussion for surgical intervention. The patient is otherwise healthy and does not have evidence of rectal dysplasia. Which of the following is the most appropriate elective operation for this patient?",
  "options": {
    "A": "Total proctocolectomy with end ileostomy",
    "B": "Total proctocolectomy with ileal pouch-anal anastomosis and diverting ileostomy",
    "C": "Total proctocolectomy with ileal pouch-anal anastomosis, anal mucosectomy, and diverting ileostomy",
    "D": "Total abdominal colectomy with ileal-rectal anastomosis",
    "E": "Total abdominal colectomy with end ileostomy and very low Hartmann"
  },
  "answer": "B",
  "explanation": {
    "correct": "Total proctocolectomy with ileal pouch-anal anastomosis (IPAA) is the procedure of choice for elective surgery in UC. It removes all diseased mucosa while preserving fecal continence.",
    "A": "",
    "B": "Standard elective procedure for UC.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Total proctocolectomy with IPAA is the preferred elective surgical treatment for ulcerative colitis."
},
{
  "id": 101,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 39-year-old previously healthy male is hospitalized for 2 weeks with epigastric pain radiating to his back, nausea, and vomiting. Initial laboratory values revealed an elevated amylase level consistent with acute pancreatitis. Five weeks following discharge, he complains of early satiety, epigastric pain, and fevers. On presentation, his temperature is 38.9°C (102°F) and his heart rate is 120 beats per minute; his WBC count is 24,000/mm3 and his amylase level is normal. He undergoes a CT scan demonstrating a 6 cm by 6 cm rim-enhancing fluid collection in the body of the pancreas. Which of the following would be the most definitive management of the fluid collection?",
  "options": {
    "A": "Antibiotic therapy alone",
    "B": "CT-guided aspiration with repeat imaging in 2 to 3 days",
    "C": "Antibiotics and CT-guided aspiration with repeat imaging in 2 to 3 days",
    "D": "Antibiotics and percutaneous catheter drainage",
    "E": "Surgical internal drainage of the fluid collection with a cyst-gastrostomy or Roux-en-Y cyst-jejunostomy"
  },
  "answer": "D",
  "explanation": {
    "correct": "The patient most likely has an infected pancreatic pseudocyst. Pseudocysts are nonepithelialized fluid collections that can present 4 to 6 weeks after acute pancreatitis. Treatment for infected pseudocysts includes percutaneous catheter drainage and antibiotics.",
    "A": "",
    "B": "",
    "C": "",
    "D": "Standard of care for infected pseudocysts.",
    "E": "Surgical drainage is for non-infected symptomatic pseudocysts."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Infected pancreatic pseudocysts require percutaneous drainage and antibiotic therapy."
},
{
  "id": 102,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A previously healthy 79-year-old woman presents with early satiety and abdominal fullness. CT scan of the abdomen reveals a cystic lesion in the body and tail of the pancreas. CT-guided aspiration demonstrates an elevated carcinoembryonic antigen (CEA) level. Which of the following is the most appropriate treatment option for this patient?",
  "options": {
    "A": "Observation with repeat imaging in 3 months",
    "B": "Alcohol ablation of the cyst",
    "C": "Surgical resection",
    "D": "Internal drainage of the cyst",
    "E": "Percutaneous catheter drainage"
  },
  "answer": "C",
  "explanation": {
    "correct": "This patient likely has a cystadenocarcinoma of the pancreas. An elevated CEA level in the cyst fluid is highly suggestive of malignancy, necessitating surgical resection.",
    "A": "",
    "B": "",
    "C": "Mandatory for suspected malignancy.",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Pancreatic cystic lesions with elevated CEA levels should be surgically resected due to the high risk of malignancy."
},
{
  "id": 103,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "According to the United Ostomy Association Data Registry, which of the following is the most frequent serious complication of end colostomies?",
  "options": {
    "A": "Parastomal hernia",
    "B": "Prolapse",
    "C": "Skin irritation",
    "D": "Stenosis",
    "E": "Perforation"
  },
  "answer": "A",
  "explanation": {
    "correct": "Parastomal hernia is the most frequent serious complication of end colostomies, occurring when the stoma is placed lateral to the rectus muscle.",
    "A": "Most frequent serious complication.",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Parastomal hernia is the most common serious complication associated with end colostomies."
},
{
  "id": 104,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 62-year-old man presents with painless jaundice and weight loss. A CT scan reveals a 3-cm mass in the head of the pancreas. Which of the following is most appropriate to evaluate for a pancreatic mass?",
  "options": {
    "A": "Abdominal series (three x-rays)",
    "B": "PET scan",
    "C": "Endoscopic retrograde cholangiopancreatography (ERCP)",
    "D": "Helical contrast-enhanced CT scan",
    "E": "Esophagogastroduodenoscopy (EGD)"
  },
  "answer": "D",
  "explanation": {
    "correct": "Helical contrast-enhanced CT is the primary and most appropriate modality for evaluating pancreatic masses, offering high sensitivity for detection and staging.",
    "A": "",
    "B": "",
    "C": "",
    "D": "Gold standard for initial evaluation.",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Contrast-enhanced helical CT is the imaging of choice for evaluating and staging pancreatic adenocarcinoma."
},
{
  "id": 105,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 62-year-old man with a history of peptic ulcer disease presents with sudden onset of severe abdominal pain. Physical examination reveals a rigid, board-like abdomen. An upright chest x-ray shows free air under the diaphragm. Which of the following is the most appropriate management?",
  "options": {
    "A": "Simple closure with an omental patch",
    "B": "Antrectomy and truncal vagotomy",
    "C": "Pyloroplasty and truncal vagotomy",
    "D": "Highly selective vagotomy",
    "E": "Observation and antibiotics"
  },
  "answer": "A",
  "explanation": {
    "correct": "In cases of acute perforation of a peptic ulcer, simple closure with an omental patch (Graham patch) is the standard and most appropriate initial surgical management.",
    "A": "Treatment of choice for acute perforation.",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "An omental (Graham) patch is the standard surgical treatment for a perforated peptic ulcer."
},
{
  "id": 106,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 45-year-old man with a history of chronic peptic ulcer disease undergoes a truncal vagotomy and antrectomy with a Billroth II reconstruction for gastric outlet obstruction. Six weeks after surgery, he returns, complaining of postprandial weakness, sweating, light-headedness, crampy abdominal pain, and diarrhea. Which of the following would be the best initial management strategy?",
  "options": {
    "A": "Treatment with a long-acting somatostatin analog",
    "B": "Dietary advice and counseling that symptoms will probably abate within 3 months of surgery",
    "C": "Dietary advice and counseling that symptoms will probably not abate but are not dangerous",
    "D": "Workup for neuroendocrine tumor (eg, carcinoid)",
    "E": "Preparation for revision to Roux-en-Y gastrojejunostomy"
  },
  "answer": "B",
  "explanation": {
    "correct": "This patient has dumping syndrome, a common complication of Billroth II reconstruction. Initial management focuses on dietary modifications and reassurance, as symptoms often resolve over time.",
    "A": "Reserved for refractory cases.",
    "B": "Correct initial step.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Dumping syndrome is primarily managed with dietary changes and usually improves spontaneously within months."
},
{
  "id": 107,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 60-year-old male patient with hepatitis C with a previous history of variceal bleeding is admitted to the hospital with hematemesis. His blood pressure is 80/60 mm Hg, physical examination reveals splenomegaly and ascites, and initial hematocrit is 25%. Prior to endoscopy, which of the following is the best initial management of the patient?",
  "options": {
    "A": "Administration of intravenous octreotide",
    "B": "Administration of a β-blocker (eg, propranolol)",
    "C": "Measurement of prothrombin time and transfusion with cryoglobulin if elevated",
    "D": "Empiric transfusion of platelets given splenomegaly",
    "E": "Gastric and esophageal balloon tamponade (Sengstaken-Blakemore tube)"
  },
  "answer": "A",
  "explanation": {
    "correct": "Intravenous octreotide is the best initial pharmacological treatment to reduce portal pressure and control acute variceal bleeding prior to endoscopic intervention.",
    "A": "First-line medical therapy.",
    "B": "Used for prophylaxis, not acute bleeding.",
    "C": "",
    "D": "",
    "E": "Reserved for massive bleeding refractory to other measures."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Octreotide is the primary pharmacological agent used to manage acute variceal hemorrhage."
},
{
  "id": 108,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 32-year-old alcoholic with end-stage liver disease has been admitted to the hospital 3 times for bleeding esophageal varices. He has undergone banding and sclerotherapy on each occasion, and the last time he required a balloon tamponade for control. Which of the following is the best treatment option for this patient?",
  "options": {
    "A": "A repeat trial of medical therapy",
    "B": "An elective portacaval shunt",
    "C": "A transjugular intrahepatic portosystemic shunt (TIPS)",
    "D": "Propranolol to decrease the portal pressure",
    "E": "A Warren shunt"
  },
  "answer": "C",
  "explanation": {
    "correct": "TIPS is indicated for patients with refractory variceal bleeding that fails medical and endoscopic therapy, often serving as a bridge to transplantation.",
    "A": "",
    "B": "",
    "C": "Treatment of choice for refractory bleeding.",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "TIPS is the standard treatment for variceal bleeding refractory to endoscopic therapy."
},
{
  "id": 109,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 52-year-old woman is admitted to the hospital with a 1-day history of right upper quadrant pain, nausea, and vomiting. She had a previous history of a duodenal ulcer. Her pulse is 120 beats per minute and her blood pressure is 100/60 mm Hg. Physical examination reveals a rigid abdomen. An upright chest x-ray reveals free air under the diaphragm. Which of the following is the best surgical option?",
  "options": {
    "A": "A repeat trial of medical therapy",
    "B": "Local excision of the ulcer",
    "C": "Highly selective vagotomy",
    "D": "Partial gastrectomy with vagotomy and Billroth I reconstruction",
    "E": "Vagotomy and pyloroplasty"
  },
  "answer": "E",
  "explanation": {
    "correct": "For stable patients with chronic peptic ulcer disease and perforation, a definitive procedure like vagotomy and pyloroplasty is an appropriate surgical option.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": "Definitive surgical option for chronic PUD with perforation."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Definitive ulcer-reducing surgery may be considered for perforated ulcers in patients with a chronic history of disease."
},
{
  "id": 110,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 45-year-old man was discovered to have a hepatic flexure colon cancer during a colonoscopy for anemia requiring transfusions. Upon exploration of his abdomen in the operating room, an unexpected discontinuous 3-cm metastasis is discovered in the edge of the right lobe of the liver. Which of the following is the most appropriate management of this patient?",
  "options": {
    "A": "A diverting ileostomy should be performed and further imaging obtained",
    "B": "Right hemicolectomy",
    "C": "Right hemicolectomy with local resection of the liver metastasis",
    "D": "Closure of the abdomen followed by chemotherapy",
    "E": "Right hemicolectomy with postoperative radiation therapy to the liver"
  },
  "answer": "C",
  "explanation": {
    "correct": "Synchronous liver metastases from colon cancer can be resected during the primary operation if they are solitary, peripheral, and the patient is stable.",
    "A": "",
    "B": "",
    "C": "Correct management for resectable synchronous metastasis.",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Small, peripheral liver metastases discovered during colon cancer surgery should be resected simultaneously."
},
{
  "id": 111,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 42-year-old man with no history of use of NSAIDs presents with recurrent gastritis. The patient was diagnosed and treated for Helicobacter pylori 6 months ago. Which of the following tests provides the least invasive method to document eradication of the infection?",
  "options": {
    "A": "Serology testing for H. pylori",
    "B": "Carbon-labeled urea breath test",
    "C": "Rapid urease assay",
    "D": "Histologic evaluation of gastric mucosa",
    "E": "Culturing of gastric mucosa"
  },
  "answer": "B",
  "explanation": {
    "correct": "The urea breath test is the most accurate noninvasive test to confirm H. pylori eradication. Serology is not useful for this purpose as antibodies persist.",
    "A": "Inaccurate for confirming eradication.",
    "B": "Gold standard noninvasive test.",
    "C": "Invasive (requires endoscopy).",
    "D": "Invasive.",
    "E": "Invasive."
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "The urea breath test is the preferred noninvasive method for confirming H. pylori eradication."
},
{
  "id": 112,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 22-year-old college student notices a bulge in his right groin. It is accentuated with coughing, but is easily reducible. Which of the following hernias follows the path of the spermatic cord within the cremaster muscle?",
  "options": {
    "A": "Femoral",
    "B": "Direct inguinal",
    "C": "Indirect inguinal",
    "D": "Spigelian",
    "E": "Interparietal"
  },
  "answer": "C",
  "explanation": {
    "correct": "Indirect hernias enter the inguinal canal via the internal ring and follow the path of the spermatic cord within the cremaster muscle fibers.",
    "A": "",
    "B": "Medial to the cord, through Hesselbach's triangle.",
    "C": "Follows the cord.",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Indirect inguinal hernias follow the spermatic cord through the inguinal canal."
},
{
  "id": 113,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "An 80-year-old man with history of symptomatic cholelithiasis presents with signs and symptoms of a small-bowel obstruction. Which of the following findings would provide the most help in ascertaining the diagnosis?",
  "options": {
    "A": "Coffee-grounds aspirate from the stomach",
    "B": "Pneumobilia",
    "C": "A leukocyte count of 40,000/mL",
    "D": "A pH of 7.5, PCO2 of 50 kPa, and paradoxically acid urine",
    "E": "A palpable mass in the pelvis"
  },
  "answer": "B",
  "explanation": {
    "correct": "Pneumobilia (air in the biliary tree) is a classic finding in gallstone ileus, indicating a cholecystoenteric fistula.",
    "A": "",
    "B": "Diagnostic for gallstone ileus in SBO.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "The presence of pneumobilia in a patient with small bowel obstruction is pathognomonic for gallstone ileus."
},
{
  "id": 114,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 42-year-old man has bouts of intermittent crampy abdominal pain and rectal bleeding. Colonoscopy is performed and demonstrates multiple hamartomatous polyps. Which of the following is the most likely diagnosis?",
  "options": {
    "A": "Ulcerative colitis",
    "B": "Villous adenomas",
    "C": "Familial polyposis",
    "D": "Peutz-Jeghers syndrome",
    "E": "Crohn colitis"
  },
  "answer": "D",
  "explanation": {
    "correct": "Peutz-Jeghers syndrome is characterized by mucocutaneous pigmentation and multiple hamartomatous polyps throughout the gastrointestinal tract.",
    "A": "",
    "B": "",
    "C": "Adenomatous polyps, not hamartomas.",
    "D": "Characteristic hamartomatous polyps.",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Multiple hamartomatous GI polyps are the hallmark of Peutz-Jeghers syndrome."
},
{
  "id": 115,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 70-year-old woman has nausea, vomiting, abdominal distention, and episodic crampy midabdominal pain. She has a long history of cholelithiasis and her abdominal radiograph reveals a spherical density in the RLQ. Which of the following is the definitive treatment for this patient’s bowel obstruction?",
  "options": {
    "A": "Ileocolectomy",
    "B": "Cholecystectomy",
    "C": "Ileotomy and extraction",
    "D": "Nasogastric (NG) tube decompression",
    "E": "Intravenous antibiotics"
  },
  "answer": "C",
  "explanation": {
    "correct": "In gallstone ileus, the primary and definitive treatment for the bowel obstruction is enterolithotomy (ileotomy and stone extraction).",
    "A": "",
    "B": "May be done later, but not the primary treatment for the obstruction.",
    "C": "Standard treatment for obstruction.",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Enterolithotomy is the required emergency treatment for small bowel obstruction caused by a gallstone."
},
{
  "id": 116,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 62-year-old man was hospitalized with diverticulitis and a pelvis abscess. After percutaneous drainage and treatment with antibiotics, the pain and fluid collection resolve. Which of the following is the most appropriate next step in this patient’s management?",
  "options": {
    "A": "Expectant management with sigmoid resection if symptoms recur",
    "B": "Cystoscopy to evaluate for a fistula",
    "C": "Sigmoid resection with end colostomy and rectal pouch (Hartmann procedure)",
    "D": "Sigmoid resection with primary anastomosis",
    "E": "Long-term suppressive antibiotic therapy"
  },
  "answer": "D",
  "explanation": {
    "correct": "Following recovery from complicated diverticulitis (e.g., with abscess), an elective sigmoid resection with primary anastomosis is generally recommended to prevent recurrence.",
    "A": "",
    "B": "",
    "C": "For emergency/unstable patients.",
    "D": "Preferred elective approach.",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Complicated diverticulitis managed nonoperatively requires elective sigmoid resection to prevent future episodes."
},
{
  "id": 117,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 29-year-old woman complains of postprandial RUQ pain and fatty food intolerance. Ultrasound reveals no gallstones or sludge. Which of the following represents the best management option?",
  "options": {
    "A": "Avoidance of fatty foods and reexamination in 6 months",
    "B": "Repeat ultrasound immediately",
    "C": "Treatment with ursodeoxycholic acid",
    "D": "CCK-HIDA scan to evaluate for biliary dyskinesia",
    "E": "Laparoscopic cholecystectomy for acalculous cholecystitis"
  },
  "answer": "D",
  "explanation": {
    "correct": "In patients with biliary symptoms but no stones on ultrasound, a HIDA scan with CCK stimulation is the next step to diagnose biliary dyskinesia.",
    "A": "",
    "B": "",
    "C": "",
    "D": "Next diagnostic step.",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "CCK-HIDA scan is used to evaluate gallbladder ejection fraction in suspected biliary dyskinesia."
},
{
  "id": 118,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 47-year-old asymptomatic woman is incidentally found to have a 5-mm polyp and no stones in her gallbladder on ultrasound. Which of the following is the best management option?",
  "options": {
    "A": "Aspiration of the gallbladder",
    "B": "Observation with repeat ultrasound examinations",
    "C": "Laparoscopic cholecystectomy",
    "D": "Open cholecystectomy with frozen section",
    "E": "En bloc resection"
  },
  "answer": "B",
  "explanation": {
    "correct": "Small (< 10 mm) asymptomatic gallbladder polyps are common and can be followed with serial imaging to monitor for growth.",
    "A": "",
    "B": "Standard for polyps < 10 mm.",
    "C": "Only if > 10 mm or symptomatic.",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Asymptomatic gallbladder polyps smaller than 10 mm can be safely observed with serial ultrasound."
},
{
  "id": 119,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 48-year-old woman develops sudden RLQ pain while playing tennis. Examination shows tenderness and a mass in the abdominal wall that persists during muscle contraction. Which of the following is the most likely diagnosis?",
  "options": {
    "A": "Acute appendicitis",
    "B": "Cecal carcinoma",
    "C": "Hematoma of the rectus sheath",
    "D": "Torsion of an ovarian cyst",
    "E": "Cholecystitis"
  },
  "answer": "C",
  "explanation": {
    "correct": "Rectus sheath hematoma often follows sudden physical exertion. The persistence of the mass with muscle contraction (Fothergill's sign) distinguishes it from an intra-abdominal mass.",
    "A": "",
    "B": "",
    "C": "Fits the clinical signs.",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Rectus sheath hematoma is a clinical mimic of appendicitis characterized by a persistent mass upon muscle contraction."
},
{
  "id": 120,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal",
  "question": "A 32-year-old man from Mexico presents with RUQ pain and fevers. CT shows a liver fluid collection and serology is positive for Entamoeba histolytica. Which of the following is the best initial management?",
  "options": {
    "A": "Treatment with antiamebic drugs",
    "B": "Percutaneous drainage",
    "C": "Marsupialization",
    "D": "Surgical drainage",
    "E": "Liver resection"
  },
  "answer": "A",
  "explanation": {
    "correct": "Amebic liver abscesses respond excellently to medical therapy with metronidazole. Drainage is rarely required unless there is a high risk of rupture.",
    "A": "Primary treatment.",
    "B": "Usually not required initially.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Medical management with metronidazole is the first-line treatment for amebic liver abscesses."
}
,
{
  "id": 121,
  "specialty": "General Surgery",
  "topic": "Endocrine",
  "question": "A 45-year-old woman complains of nervousness, sweating, tremulousness, and weight loss. A thyroid scan exhibits a single 'hot' nodule with suppression of the rest of the gland. Which of the following is the most likely diagnosis?",
  "options": {
    "A": "Hypersecreting adenoma",
    "B": "Graves disease",
    "C": "Lateral aberrant thyroid",
    "D": "Papillary carcinoma",
    "E": "Medullary carcinoma"
  },
  "answer": "A",
  "explanation": {
    "correct": "The thyroid scan showing a single hot nodule with suppression of the surrounding thyroid tissue is characteristic of a hyperfunctioning toxic adenoma (Plummer's disease). Graves disease would show diffuse uptake throughout the gland.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "A hot nodule on thyroid scan in a thyrotoxic patient suggests a hyperfunctioning adenoma."
},
{
  "id": 122,
  "specialty": "General Surgery",
  "topic": "Endocrine",
  "question": "A patient with mild skin pigmentation presents with sudden abdominal pain, fever, and hypotension (BP 88/58). Laboratory results show glucose 55 mg/dL, sodium 119 mEq/L, and potassium 6.2 mEq/L. Which of the following is the definitive treatment?",
  "options": {
    "A": "10% dextrose infusion",
    "B": "Bicarbonate",
    "C": "Hypertonic saline",
    "D": "Corticosteroids",
    "E": "Vasopressors"
  },
  "answer": "D",
  "explanation": {
    "correct": "The presentation of hypotension, skin pigmentation, hypoglycemia, hyponatremia, and hyperkalemia is classic for acute adrenal crisis (Addisonian crisis). Immediate administration of corticosteroids is the definitive treatment.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Adrenal crisis presents with hypotension and electrolyte imbalance; it requires immediate steroid replacement."
},
{
  "id": 123,
  "specialty": "General Surgery",
  "topic": "Endocrine",
  "question": "A patient develops progressive neck swelling, stridor, and difficulty breathing several hours after a completion thyroidectomy. After successful intubation, what is the most appropriate next step?",
  "options": {
    "A": "Neck exploration and parathyroidectomy",
    "B": "Administration of IV calcium",
    "C": "Administration of IV steroids",
    "D": "Reopening of the wound",
    "E": "Observation in the ICU"
  },
  "answer": "D",
  "explanation": {
    "correct": "Postoperative hematoma after thyroid surgery is a surgical emergency. Even if the airway is secured by intubation, the wound must be reopened to evacuate the clot and control any ongoing bleeding.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Progressive neck swelling and stridor after thyroidectomy indicate a postoperative hematoma requiring immediate evacuation."
},
{
  "id": 124,
  "specialty": "General Surgery",
  "topic": "Endocrine",
  "question": "A 28-year-old woman presents with galactorrhea and amenorrhea. MRI reveals a 5-mm pituitary lesion. What is the best initial management?",
  "options": {
    "A": "Transsphenoidal resection",
    "B": "Bromocriptine",
    "C": "Radiation therapy",
    "D": "Observation",
    "E": "Bilateral adrenalectomy"
  },
  "answer": "B",
  "explanation": {
    "correct": "For microprolactinomas (<10 mm), medical management with dopamine agonists (e.g., bromocriptine or cabergoline) is the first-line treatment and is often highly effective.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Dopamine agonists are the first-line treatment for prolactinomas."
},
{
  "id": 125,
  "specialty": "General Surgery",
  "topic": "Endocrine",
  "question": "In a patient with confirmed primary hyperparathyroidism, what is the primary purpose of performing a technetium-99m sestamibi scan?",
  "options": {
    "A": "To confirm the diagnosis of hyperparathyroidism",
    "B": "To differentiate between hyperplasia and adenoma",
    "C": "To localize the parathyroid glands before surgery",
    "D": "To determine the need for surgery",
    "E": "To screen for MEN syndromes"
  },
  "answer": "C",
  "explanation": {
    "correct": "Sestamibi scans are used as a preoperative localization tool to identify hyperfunctioning parathyroid tissue, allowing for a more targeted surgical approach. They are not used for initial diagnosis.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Sestamibi scan is a localization tool, not a diagnostic test for hyperparathyroidism."
},
{
  "id": 126,
  "specialty": "General Surgery",
  "topic": "Endocrine",
  "question": "A 60-year-old man presents with necrolytic migratory erythema, weight loss, and mild diabetes mellitus. CT scan shows a mass in the tail of the pancreas. What is the most likely diagnosis?",
  "options": {
    "A": "Insulinoma",
    "B": "Glucagonoma",
    "C": "Gastrinoma",
    "D": "VIPoma",
    "E": "Somatostatinoma"
  },
  "answer": "B",
  "explanation": {
    "correct": "The combination of necrolytic migratory erythema (a characteristic rash), diabetes, and a pancreatic islet cell tumor is diagnostic of a glucagonoma.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Glucagonoma presents with necrolytic migratory erythema and diabetes."
},
{
  "id": 127,
  "specialty": "General Surgery",
  "topic": "Endocrine",
  "question": "A 40-year-old woman with Cushingoid features has elevated urinary free cortisol. The cortisol levels are suppressed by high-dose dexamethasone but not by low-dose dexamethasone. What is the most likely source?",
  "options": {
    "A": "Adrenal adenoma",
    "B": "Adrenal carcinoma",
    "C": "Ectopic ACTH production",
    "D": "Pituitary adenoma",
    "E": "Exogenous steroid use"
  },
  "answer": "D",
  "explanation": {
    "correct": "Cushing disease (pituitary source) is typically suppressed by high-dose dexamethasone. Adrenal tumors and ectopic ACTH production (e.g., small cell lung cancer) do not typically show suppression with high-dose dexamethasone.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Cortisol suppression by high-dose dexamethasone indicates a pituitary source (Cushing disease)."
},
{
  "id": 128,
  "specialty": "General Surgery",
  "topic": "Endocrine",
  "question": "Which of the following thyroid malignancies is associated with the best long-term prognosis?",
  "options": {
    "A": "Papillary carcinoma",
    "B": "Follicular carcinoma",
    "C": "Medullary carcinoma",
    "D": "Anaplastic carcinoma",
    "E": "Thyroid lymphoma"
  },
  "answer": "A",
  "explanation": {
    "correct": "Papillary thyroid carcinoma is the most common thyroid cancer and carries the best prognosis, with 10-year survival rates over 90% in most patients.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Papillary thyroid carcinoma has the best prognosis among common thyroid cancers."
},
{
  "id": 129,
  "specialty": "General Surgery",
  "topic": "Endocrine",
  "question": "The presence of psammoma bodies on fine-needle aspiration (FNA) of a thyroid nodule is most suggestive of which diagnosis?",
  "options": {
    "A": "Follicular carcinoma",
    "B": "Papillary carcinoma",
    "C": "Medullary carcinoma",
    "D": "Anaplastic carcinoma",
    "E": "Hurthle cell carcinoma"
  },
  "answer": "B",
  "explanation": {
    "correct": "Psammoma bodies (concentric calcifications) are a classic histological finding in papillary thyroid carcinoma and are highly suggestive of the diagnosis.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Psammoma bodies are pathognomonic for papillary thyroid cancer."
},
{
  "id": 130,
  "specialty": "General Surgery",
  "topic": "Endocrine",
  "question": "A patient with severe hypercalcemia (serum calcium 14 mg/dL) presents with lethargy and constipation. What is the most appropriate initial management?",
  "options": {
    "A": "Intravenous normal saline infusion",
    "B": "Thiazide diuretics",
    "C": "IV phosphorus",
    "D": "Mithramycin",
    "E": "Immediate surgery"
  },
  "answer": "A",
  "explanation": {
    "correct": "Severe hypercalcemia leads to dehydration and renal impairment. Aggressive hydration with normal saline is the first and most crucial step to restore volume and enhance urinary calcium excretion.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Saline hydration is the first step in managing hypercalcemic crisis."
},
{
  "id": 131,
  "specialty": "General Surgery",
  "topic": "Endocrine",
  "question": "Which of the following is a recognized indication for parathyroidectomy in a patient with primary hyperparathyroidism?",
  "options": {
    "A": "Age over 60",
    "B": "Mild fatigue",
    "C": "Recurrent nephrolithiasis",
    "D": "Serum calcium 10.5 mg/dL",
    "E": "Normal bone mineral density"
  },
  "answer": "C",
  "explanation": {
    "correct": "Symptomatic primary hyperparathyroidism, such as that manifesting with kidney stones (nephrolithiasis), is a definitive indication for surgical intervention.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Nephrolithiasis is an indication for surgery in primary hyperparathyroidism."
},
{
  "id": 132,
  "specialty": "General Surgery",
  "topic": "Endocrine",
  "question": "A pregnant woman in her second trimester is diagnosed with papillary thyroid carcinoma. What is the most appropriate management?",
  "options": {
    "A": "Immediate total thyroidectomy",
    "B": "Termination of pregnancy",
    "C": "Radioactive iodine treatment",
    "D": "Suppression therapy and surgery after delivery",
    "E": "Total thyroidectomy during the second trimester"
  },
  "answer": "E",
  "explanation": {
    "correct": "If surgery for thyroid cancer is required during pregnancy, it is safest to perform it during the second trimester. Alternatively, for low-risk papillary cancer, surgery can often be delayed until postpartum.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Thyroid surgery in pregnancy is best performed in the second trimester."
},
{
  "id": 133,
  "specialty": "General Surgery",
  "topic": "Endocrine",
  "question": "A 65-year-old woman with Hashimoto thyroiditis presents with a rapidly enlarging thyroid mass and obstructive symptoms. What is the most likely diagnosis?",
  "options": {
    "A": "Papillary carcinoma",
    "B": "Follicular carcinoma",
    "C": "Medullary carcinoma",
    "D": "Anaplastic carcinoma",
    "E": "Thyroid lymphoma"
  },
  "answer": "E",
  "explanation": {
    "correct": "Thyroid lymphoma is highly associated with underlying Hashimoto thyroiditis and typically presents as a rapidly growing mass in an older patient.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Hashimoto thyroiditis is a risk factor for thyroid lymphoma."
},
{
  "id": 134,
  "specialty": "General Surgery",
  "topic": "Endocrine",
  "question": "Medullary thyroid carcinoma originates from which of the following cell types?",
  "options": {
    "A": "Follicular cells",
    "B": "Parafollicular C cells",
    "C": "Hurthle cells",
    "D": "Lymphocytes",
    "E": "Fibroblasts"
  },
  "answer": "B",
  "explanation": {
    "correct": "Medullary thyroid carcinoma arises from the parafollicular C cells, which are neuroendocrine cells that secrete calcitonin.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "MTC originates from calcitonin-secreting C cells."
},
{
  "id": 135,
  "specialty": "General Surgery",
  "topic": "Endocrine",
  "question": "Multiple Endocrine Neoplasia Type 2A (MEN 2A) is characterized by which of the following combinations?",
  "options": {
    "A": "Pituitary, Parathyroid, Pancreas",
    "B": "Medullary thyroid cancer, Pheochromocytoma, Parathyroid hyperplasia",
    "C": "Medullary thyroid cancer, Pheochromocytoma, Mucosal neuromas",
    "D": "Papillary thyroid cancer, Adrenal adenoma, Pituitary adenoma",
    "E": "Gastrinoma, Insulinoma, Parathyroid adenoma"
  },
  "answer": "B",
  "explanation": {
    "correct": "MEN 2A (Sipple syndrome) includes medullary thyroid carcinoma, pheochromocytoma, and parathyroid hyperplasia. MEN 2B also includes mucosal neuromas and marfanoid habitus.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "MEN 2A consists of MTC, Pheochromocytoma, and Hyperparathyroidism."
},
{
  "id": 136,
  "specialty": "General Surgery",
  "topic": "Vascular",
  "question": "A 64-year-old man presents with a 5-minute episode of blindness in the right eye (amaurosis fugax). What is the most appropriate initial diagnostic test?",
  "options": {
    "A": "Carotid duplex ultrasound",
    "B": "Aspirin administration",
    "C": "Head CT",
    "D": "Carotid endarterectomy",
    "E": "Warfarin therapy"
  },
  "answer": "A",
  "explanation": {
    "correct": "Amaurosis fugax is a transient ischemic event caused by emboli from the carotid artery. Carotid duplex ultrasound is the best initial screening test to evaluate for carotid stenosis.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Amaurosis fugax is a classic symptom of carotid artery disease."
},
{
  "id": 137,
  "specialty": "General Surgery",
  "topic": "Vascular",
  "question": "A 60-year-old asymptomatic man is found to have a 6-cm pulsatile infraumbilical abdominal mass. What is the most appropriate management?",
  "options": {
    "A": "Observation",
    "B": "Elective repair",
    "C": "CT scan every 6 months",
    "D": "Beta-blocker therapy",
    "E": "Arteriogram"
  },
  "answer": "B",
  "explanation": {
    "correct": "For abdominal aortic aneurysms (AAA), a diameter of 5.5 cm or greater in men is a standard indication for elective surgical or endovascular repair due to the risk of rupture.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "AAA > 5.5 cm in men warrants repair."
},
{
  "id": 138,
  "specialty": "General Surgery",
  "topic": "Vascular",
  "question": "A patient presents with a cold, pale, and pulseless left foot with sudden onset of pain. He has an irregular heart rate of 110 bpm. What is the most appropriate first step in management?",
  "options": {
    "A": "Systemic heparinization",
    "B": "Arteriogram",
    "C": "Embolectomy",
    "D": "Thrombolysis",
    "E": "Fasciotomy"
  },
  "answer": "A",
  "explanation": {
    "correct": "The patient has acute limb ischemia, likely due to an embolus from atrial fibrillation. The immediate first step is systemic anticoagulation with heparin to prevent further clot propagation and stabilize the situation.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Immediate heparinization is the first step in managing acute arterial occlusion."
},
{
  "id": 139,
  "specialty": "General Surgery",
  "topic": "Vascular",
  "question": "A patient reports calf pain after walking two blocks that is relieved by rest. His ankle-brachial index (ABI) is 0.6. What is the most appropriate initial treatment?",
  "options": {
    "A": "Bypass surgery",
    "B": "Supervised walking program",
    "C": "Angioplasty",
    "D": "Sympathectomy",
    "E": "Amputation"
  },
  "answer": "B",
  "explanation": {
    "correct": "Stable intermittent claudication is best managed initially with a supervised exercise program, risk factor modification, and smoking cessation.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Exercise is the first-line treatment for stable claudication."
},
{
  "id": 140,
  "specialty": "General Surgery",
  "topic": "Vascular",
  "question": "Which of the following is the most common site of atherosclerotic occlusive disease in the lower extremities?",
  "options": {
    "A": "Aorta",
    "B": "Common iliac artery",
    "C": "Superficial femoral artery",
    "D": "Popliteal artery",
    "E": "Tibial artery"
  },
  "answer": "C",
  "explanation": {
    "correct": "The superficial femoral artery (SFA), particularly at the level of the adductor (Hunter's) canal, is the most common site of arterial stenosis and occlusion in patients with peripheral arterial disease.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "SFA at the adductor canal is the most frequent site of atherosclerosis."
},
{
  "id": 141,
  "specialty": "General Surgery",
  "topic": "Vascular",
  "question": "A 70-year-old man presents with sudden, severe back pain, hypotension, and a pulsatile abdominal mass. What is the most likely diagnosis?",
  "options": {
    "A": "Acute pancreatitis",
    "B": "Perforated ulcer",
    "C": "Ruptured abdominal aortic aneurysm",
    "D": "Mesenteric ischemia",
    "E": "Renal colic"
  },
  "answer": "C",
  "explanation": {
    "correct": "The classic triad of back or abdominal pain, hypotension, and a pulsatile mass is highly suggestive of a ruptured abdominal aortic aneurysm (AAA), a surgical emergency.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Ruptured AAA presents with a classic triad of pain, hypotension, and a pulsatile mass."
},
{
  "id": 142,
  "specialty": "General Surgery",
  "topic": "Vascular",
  "question": "A patient with chronic varicose veins develops a non-healing ulcer just above the medial malleolus. What is the most likely underlying cause?",
  "options": {
    "A": "Arterial insufficiency",
    "B": "Chronic venous insufficiency",
    "C": "Diabetic neuropathy",
    "D": "Marjolin ulcer",
    "E": "Lymphedema"
  },
  "answer": "B",
  "explanation": {
    "correct": "Ulcers located over the medial malleolus in the setting of chronic venous changes (hyperpigmentation, varicose veins) are typical for venous stasis ulcers resulting from chronic venous insufficiency.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Medial malleolar ulcers are characteristic of venous stasis disease."
},
{
  "id": 143,
  "specialty": "General Surgery",
  "topic": "Vascular",
  "question": "A young male smoker presents with digital ischemia and a history of migratory superficial thrombophlebitis. What is the most likely diagnosis?",
  "options": {
    "A": "Raynaud disease",
    "B": "Buerger disease (Thromboangiitis obliterans)",
    "C": "Takayasu arteritis",
    "D": "Polyarteritis nodosa",
    "E": "Scleroderma"
  },
  "answer": "B",
  "explanation": {
    "correct": "Buerger disease is a non-atherosclerotic inflammatory vasculitis closely linked to tobacco use, often presenting with small-vessel ischemia and superficial vein involvement in young smokers.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Buerger disease should be suspected in young smokers with digital ischemia."
},
{
  "id": 144,
  "specialty": "General Surgery",
  "topic": "Vascular",
  "question": "What is the non-invasive diagnostic test of choice for a patient with suspected deep vein thrombosis (DVT) of the lower extremity?",
  "options": {
    "A": "D-dimer assay",
    "B": "Venous duplex ultrasound",
    "C": "Venography",
    "D": "CT angiogram",
    "E": "MRI"
  },
  "answer": "B",
  "explanation": {
    "correct": "Venous duplex ultrasound is the first-line, non-invasive imaging modality for diagnosing DVT due to its high accuracy and ease of use.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Duplex ultrasound is the gold standard for DVT diagnosis."
},
{
  "id": 145,
  "specialty": "General Surgery",
  "topic": "Vascular",
  "question": "A patient with thoracic outlet syndrome (TOS) presents with a cyanotic 'blue toe'. This is most likely the result of distal embolization from which source?",
  "options": {
    "A": "Venous thrombosis",
    "B": "Subclavian artery aneurysm",
    "C": "Raynaud phenomenon",
    "D": "Reflex sympathetic dystrophy",
    "E": "Nerve compression"
  },
  "answer": "B",
  "explanation": {
    "correct": "Arterial TOS can cause post-stenotic dilation or aneurysm formation in the subclavian artery, which can shed emboli that travel distally and cause digit ischemia (blue toe syndrome).",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Arterial TOS can lead to subclavian artery aneurysms and distal emboli."
},
{
  "id": 146,
  "specialty": "General Surgery",
  "topic": "Vascular",
  "question": "What is the most common cause of renovascular hypertension in the general population?",
  "options": {
    "A": "Fibromuscular dysplasia",
    "B": "Atherosclerosis",
    "C": "Renal artery aneurysm",
    "D": "Embolism",
    "E": "Vasculitis"
  },
  "answer": "B",
  "explanation": {
    "correct": "Atherosclerotic renal artery stenosis is the most common cause of renovascular hypertension, particularly in older patients. Fibromuscular dysplasia is more common in younger women.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Atherosclerosis is the leading cause of renovascular hypertension."
},
{
  "id": 147,
  "specialty": "General Surgery",
  "topic": "Vascular",
  "question": "A 75-year-old man with diffuse atherosclerosis presents with severe postprandial abdominal pain and significant weight loss. What is the most likely diagnosis?",
  "options": {
    "A": "Chronic cholecystitis",
    "B": "Chronic mesenteric ischemia",
    "C": "Peptic ulcer disease",
    "D": "Pancreatic cancer",
    "E": "Crohn disease"
  },
  "answer": "B",
  "explanation": {
    "correct": "Chronic mesenteric ischemia (intestinal angina) presents with pain after eating, which leads to fear of food and subsequent weight loss in patients with extensive vascular disease.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Postprandial pain and weight loss are hallmarks of chronic mesenteric ischemia."
},
{
  "id": 148,
  "specialty": "General Surgery",
  "topic": "Vascular",
  "question": "Which of the following systemic complications is most likely to result from a large, long-standing arteriovenous (AV) fistula?",
  "options": {
    "A": "High-output heart failure",
    "B": "Systemic hypotension",
    "C": "Reflex bradycardia",
    "D": "Decreased pulse pressure",
    "E": "Venous insufficiency"
  },
  "answer": "A",
  "explanation": {
    "correct": "Large AV fistulas bypass the high-resistance capillary beds, increasing venous return and stroke volume, which can eventually lead to high-output heart failure.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Large AV fistulas can cause high-output heart failure."
},
{
  "id": 149,
  "specialty": "General Surgery",
  "topic": "Vascular",
  "question": "A patient develops bloody diarrhea several days after undergoing an aortobifemoral bypass for AAA. What is the most likely diagnosis?",
  "options": {
    "A": "Pseudomembranous colitis",
    "B": "Ischemic colitis",
    "C": "Diverticulitis",
    "D": "Aortoenteric fistula",
    "E": "Stress ulcer"
  },
  "answer": "B",
  "explanation": {
    "correct": "Ischemic colitis is a recognized complication of aortic surgery, typically resulting from sacrifice or occlusion of the inferior mesenteric artery during the procedure.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Ischemic colitis is a serious complication following aortic reconstruction."
},
{
  "id": 150,
  "specialty": "General Surgery",
  "topic": "Vascular",
  "question": "Which of the following is considered the most effective method for preventing pulmonary embolism in high-risk surgical patients?",
  "options": {
    "A": "Aspirin",
    "B": "Sequential compression devices",
    "C": "Early ambulation",
    "D": "Low-dose heparin or LMWH",
    "E": "IVC filter"
  },
  "answer": "D",
  "explanation": {
    "correct": "Pharmacological prophylaxis with low-dose heparin or low-molecular-weight heparin (LMWH) is the most effective proven strategy for preventing venous thromboembolism in high-risk patients.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Surgery PreTest 13th Ed",
  "takeaway": "Chemical prophylaxis is superior for VTE prevention in high-risk patients."
}
,
{
  "id": 151,
  "specialty": "Plastic Surgery",
  "topic": "Collagen",
  "question": "Which one of the following is true regarding collagen?",
  "options": {
    "A": "Its derivation is debated: either from the Greek for 'strength' or the Latin for 'strand'.",
    "B": "Type 1 collagen is formed from three identical 'alpha' chains.",
    "C": "Type 3 collagen is formed from two different 'alpha' chains.",
    "D": "Every third amino acid in collagen is glycine, the others usually being proline and hydroxyproline.",
    "E": "Collagen is stabilized by polymerization."
  },
  "answer": "D",
  "explanation": {
    "correct": "Every third amino acid in collagen is glycine. This allows the three alpha chains to pack tightly into a triple helix.",
    "A": "The word collagen is derived from the Greek word 'kolla', meaning glue.",
    "B": "Type 1 collagen is composed of two identical alpha1 chains and one alpha2 chain.",
    "C": "Type 3 collagen is composed of three identical alpha1 chains.",
    "D": "This is correct.",
    "E": "Collagen is stabilized by intra- and inter-chain cross-links, not polymerization."
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Glycine is essential for the triple helix structure of collagen."
},
{
  "id": 152,
  "specialty": "Plastic Surgery",
  "topic": "Anticoagulants",
  "question": "With regards to anticoagulants in microsurgery:",
  "options": {
    "A": "Heparin and antithrombin III have similar mechanisms of action.",
    "B": "Fondaparinux and dalteparin are factor Xa-specific.",
    "C": "Unfractionated heparin has a higher proportion of anti-Factor Xa activity than anti-thrombin activity.",
    "D": "The antiplatelet drug aspirin is contraindicated in patients younger than 16 years of age.",
    "E": "Heparin-induced thrombocytopenia is pharmacologically desirable."
  },
  "answer": "B",
  "explanation": {
    "correct": "Fondaparinux and dalteparin (a low-molecular-weight heparin) primarily inhibit Factor Xa.",
    "A": "Heparin acts by binding to and activating antithrombin III.",
    "B": "This is correct.",
    "C": "Unfractionated heparin has a 1:1 ratio of anti-Xa to anti-IIa activity; LMWH has a higher ratio of anti-Xa activity.",
    "D": "Aspirin is contraindicated in children due to the risk of Reye's syndrome, but the age threshold is specifically relevant to its use as an anti-inflammatory/antipyretic.",
    "E": "HIT is a serious complication, not desirable."
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "LMWH and Fondaparinux are more selective for Factor Xa than unfractionated heparin."
},
{
  "id": 153,
  "specialty": "Plastic Surgery",
  "topic": "Free Tissue Transfer History",
  "question": "Which excellence publication had been contributed to free tissue transfer is correct?",
  "options": {
    "A": "Komatsu and Tamai performed the first successful great toe-to-hand transfer in humans in 1968.",
    "B": "Nakayama published the first clinical series of free tissue transfers in 1964.",
    "C": "Cobbett performed the first successful free great toe-to-hand transfer in humans in 1968.",
    "D": "McLean and Buncke performed the first free omentum flap in 1971.",
    "E": "None of the above is true."
  },
  "answer": "C",
  "explanation": {
    "correct": "Cobbett is credited with the first successful free great toe-to-hand transfer in 1968.",
    "A": "Komatsu and Tamai performed the first successful limb replantation in 1965.",
    "B": "Nakayama reported free intestinal transfers in 1964, but Cobbett's toe transfer is the landmark for 'tissue transfer' in this context.",
    "C": "This is correct.",
    "D": "McLean and Buncke performed the first free omentum flap in 1969.",
    "E": "N/A"
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "John Cobbett performed the first successful toe-to-hand transfer in 1968."
},
{
  "id": 154,
  "specialty": "Plastic Surgery",
  "topic": "Wound Healing",
  "question": "Which of the following is correct regarding the fetal environment and wound healing?",
  "options": {
    "A": "Fetal wounds heal with significant scarring.",
    "B": "Fetal skin is rich in hyaluronic acid.",
    "C": "Fetal fibroblast migration is slower than in adults.",
    "D": "Fetal wounds exhibit a high inflammatory response.",
    "E": "Fetal collagen is predominantly Type 1."
  },
  "answer": "B",
  "explanation": {
    "correct": "Fetal wounds heal without scarring. The fetal environment is high in hyaluronic acid, which facilitates cell migration and regeneration.",
    "A": "Fetal wounds heal scarlessly.",
    "B": "This is correct.",
    "C": "Fetal fibroblasts migrate faster.",
    "D": "Fetal wounds have minimal inflammation.",
    "E": "Fetal skin has a higher ratio of Type 3 collagen."
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Hyaluronic acid is a key component of scarless fetal wound healing."
},
{
  "id": 155,
  "specialty": "Plastic Surgery",
  "topic": "Local Anesthetics",
  "question": "Regarding lidocaine toxicity:",
  "options": {
    "A": "The maximum dose of lidocaine with epinephrine is 3 mg/kg.",
    "B": "Early signs of toxicity include seizures.",
    "C": "Lidocaine is an ester-type local anesthetic.",
    "D": "The maximum dose of plain lidocaine is 4.5 mg/kg.",
    "E": "Toxicity primarily affects the renal system."
  },
  "answer": "D",
  "explanation": {
    "correct": "The maximum safe dose of plain lidocaine is 4.5 mg/kg (up to 7 mg/kg with epinephrine).",
    "A": "Maximum dose with epinephrine is 7 mg/kg.",
    "B": "Early signs are circumoral numbness and metallic taste; seizures are later.",
    "C": "Lidocaine is an amide.",
    "D": "This is correct.",
    "E": "Toxicity primarily affects the CNS and cardiovascular systems."
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Max dose of plain lidocaine is 4.5 mg/kg."
},
{
  "id": 156,
  "specialty": "Plastic Surgery",
  "topic": "Flap Classification",
  "question": "A Mathes and Nahai Type 2 muscle flap is characterized by:",
  "options": {
    "A": "One dominant vascular pedicle.",
    "B": "One dominant and several minor pedicles.",
    "C": "Two dominant pedicles.",
    "D": "Segmental vascular pedicles.",
    "E": "One dominant and one minor pedicle."
  },
  "answer": "B",
  "explanation": {
    "correct": "Type 2 muscle flaps have one dominant pedicle and several minor pedicles (e.g., gracilis, vastus lateralis).",
    "A": "Type 1.",
    "B": "This is correct.",
    "C": "Type 3.",
    "D": "Type 4.",
    "E": "Type 5 (one dominant and several segmental)."
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Mathes and Nahai Type 2 flaps have a dominant pedicle and minor ones."
},
{
  "id": 157,
  "specialty": "Plastic Surgery",
  "topic": "Hand Anatomy",
  "question": "The primary blood supply to the scaphoid bone is from:",
  "options": {
    "A": "The radial artery entering the proximal pole.",
    "B": "The ulnar artery entering the distal pole.",
    "C": "The radial artery entering the dorsal ridge.",
    "D": "The anterior interosseous artery.",
    "E": "The superficial palmar arch."
  },
  "answer": "C",
  "explanation": {
    "correct": "80% of the blood supply to the scaphoid enters the dorsal ridge from the radial artery and flows retrograde to the proximal pole.",
    "A": "Supply is retrograde, not direct to the proximal pole.",
    "B": "",
    "C": "This is correct.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Scaphoid blood supply is retrograde from the dorsal ridge."
},
{
  "id": 158,
  "specialty": "Plastic Surgery",
  "topic": "Nerve Regeneration",
  "question": "Wallerian degeneration refers to:",
  "options": {
    "A": "The recovery phase of a nerve after neuropraxia.",
    "B": "The breakdown of the axon distal to a site of injury.",
    "C": "The proliferation of Schwann cells in the proximal stump.",
    "D": "The formation of a neuroma.",
    "E": "Retrograde axonal transport."
  },
  "answer": "B",
  "explanation": {
    "correct": "Wallerian degeneration is the process where the axon and its myelin sheath distal to the site of injury disintegrate.",
    "A": "",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Wallerian degeneration occurs distal to a nerve injury."
},
{
  "id": 159,
  "specialty": "Plastic Surgery",
  "topic": "Tendon Repair",
  "question": "In the hand, Zone 2 (no man's land) refers to the area between:",
  "options": {
    "A": "The DIP joint and the insertion of the FDP.",
    "B": "The MCP joint and the middle of the middle phalanx.",
    "C": "The wrist and the start of the A1 pulley.",
    "D": "The carpal tunnel and the mid-palm.",
    "E": "The distal edge of the A1 pulley and the insertion of the FDS."
  },
  "answer": "E",
  "explanation": {
    "correct": "Zone 2 extends from the A1 pulley to the insertion of the flexor digitorum superficialis (FDS). It is notorious for adhesions after repair.",
    "A": "Zone 1.",
    "B": "Approximation of Zone 2.",
    "C": "Zone 3.",
    "D": "Zone 4.",
    "E": "This is correct."
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Zone 2 of the flexor tendons is between the A1 pulley and FDS insertion."
},
{
  "id": 160,
  "specialty": "Plastic Surgery",
  "topic": "Dupuytren's Contracture",
  "question": "The primary cell type involved in Dupuytren's contracture is:",
  "options": {
    "A": "Fibroblast.",
    "B": "Myofibroblast.",
    "C": "Adipocyte.",
    "D": "Chondrocyte.",
    "E": "Macrophage."
  },
  "answer": "B",
  "explanation": {
    "correct": "The myofibroblast is the key cell responsible for the contraction of the palmar fascia in Dupuytren's disease.",
    "A": "Fibroblasts differentiate into myofibroblasts.",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Myofibroblasts drive the contracture in Dupuytren's disease."
},
{
  "id": 161,
  "specialty": "Plastic Surgery",
  "topic": "Brachial Plexus Injuries",
  "question": "The most frequent lesion found in obstetrical brachial plexus injuries involves:",
  "options": {
    "A": "All cervical roots.",
    "B": "Only C8 and T1.",
    "C": "Only C6 and C7.",
    "D": "Upper plexus C5, C6 and C7.",
    "E": "Only C5."
  },
  "answer": "D",
  "explanation": {
    "correct": "Erb's palsy (upper plexus injury) is the most common form of obstetric brachial plexus injury, typically involving C5, C6, and sometimes C7.",
    "A": "This is less common (pan-plexus injury).",
    "B": "This is Klumpke's palsy, which is rare in obstetrics.",
    "C": "C5 is almost always involved.",
    "D": "This is correct.",
    "E": "C6 is also typically involved."
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Upper plexus lesions are the most common in obstetrical brachial plexus palsy."
},
{
  "id": 162,
  "specialty": "Plastic Surgery",
  "topic": "Carpal Tunnel Syndrome",
  "question": "Which nerve is compressed in carpal tunnel syndrome?",
  "options": {
    "A": "Ulnar nerve.",
    "B": "Radial nerve.",
    "C": "Median nerve.",
    "D": "Posterior interosseous nerve.",
    "E": "Musculocutaneous nerve."
  },
  "answer": "C",
  "explanation": {
    "correct": "The median nerve is compressed as it passes through the carpal tunnel under the transverse carpal ligament.",
    "A": "Compressed in Guyon's canal.",
    "B": "Compressed in the radial tunnel.",
    "C": "This is correct.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Carpal tunnel syndrome involves median nerve compression at the wrist."
},
{
  "id": 163,
  "specialty": "Plastic Surgery",
  "topic": "Skin Grafts",
  "question": "Inosculation during skin graft take refers to:",
  "options": {
    "A": "Passive absorption of nutrients by the graft.",
    "B": "Alignment and connection of host and graft capillaries.",
    "C": "Growth of new blood vessels into the graft.",
    "D": "Adhesion of the graft to the wound bed.",
    "E": "Contraction of the graft."
  },
  "answer": "B",
  "explanation": {
    "correct": "Inosculation is the second stage of graft take (around day 2-3), where graft and host capillaries align and fuse.",
    "A": "Plasmatic imbibition.",
    "B": "This is correct.",
    "C": "Angiogenesis (revascularization).",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Inosculation is the 'kissing' of host and graft blood vessels."
},
{
  "id": 164,
  "specialty": "Plastic Surgery",
  "topic": "Melanoma",
  "question": "The most important prognostic factor for a primary melanoma is:",
  "options": {
    "A": "Clark level.",
    "B": "Breslow thickness.",
    "C": "Presence of ulceration.",
    "D": "Age of the patient.",
    "E": "Anatomical site."
  },
  "answer": "B",
  "explanation": {
    "correct": "Breslow thickness (measured in millimeters) is the most significant predictor of survival and metastatic potential in primary melanoma.",
    "A": "Less accurate than Breslow.",
    "B": "This is correct.",
    "C": "Secondary prognostic factor.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Breslow thickness is the gold standard for melanoma staging."
},
{
  "id": 165,
  "specialty": "Plastic Surgery",
  "topic": "Burn Resuscitation",
  "question": "The Parkland formula for fluid resuscitation in burns is:",
  "options": {
    "A": "2 mL x kg x %TBSA.",
    "B": "3 mL x kg x %TBSA.",
    "C": "4 mL x kg x %TBSA.",
    "D": "5 mL x kg x %TBSA.",
    "E": "6 mL x kg x %TBSA."
  },
  "answer": "C",
  "explanation": {
    "correct": "The Parkland formula calculates the 24-hour crystalloid requirement as 4 mL per kilogram per percent total body surface area burned.",
    "A": "",
    "B": "",
    "C": "This is correct.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Parkland formula uses 4 mL/kg/%TBSA for burn resuscitation."
},
{
  "id": 166,
  "specialty": "Plastic Surgery",
  "topic": "Craniofacial Surgery",
  "question": "Which suture is involved in sagittal synostosis (scaphocephaly)?",
  "options": {
    "A": "Coronal suture.",
    "B": "Lambdoid suture.",
    "C": "Sagittal suture.",
    "D": "Metopic suture.",
    "E": "Squamosal suture."
  },
  "answer": "C",
  "explanation": {
    "correct": "Sagittal synostosis results from premature closure of the sagittal suture, leading to a long, narrow head (scaphocephaly).",
    "A": "Plagiocephaly/brachycephaly.",
    "B": "Posterior plagiocephaly.",
    "C": "This is correct.",
    "D": "Trigonocephaly.",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Sagittal synostosis is the most common single-suture synostosis."
},
{
  "id": 167,
  "specialty": "Plastic Surgery",
  "topic": "Rhinoplasty",
  "question": "The keystone area of the nose is the junction between:",
  "options": {
    "A": "The nasal bones and the upper lateral cartilages.",
    "B": "The upper lateral and lower lateral cartilages.",
    "C": "The septum and the nasal bones.",
    "D": "The tip and the alae.",
    "E": "The radix and the glabella."
  },
  "answer": "A",
  "explanation": {
    "correct": "The keystone area is the critical structural overlap between the bony vault (nasal bones) and the cartilaginous vault (upper lateral cartilages).",
    "A": "This is correct.",
    "B": "Scroll area.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "The keystone area provides structural support to the middle vault of the nose."
},
{
  "id": 168,
  "specialty": "Plastic Surgery",
  "topic": "Breast Reconstruction",
  "question": "The primary blood supply to a TRAM (Transverse Rectus Abdominis Myocutaneous) flap is from the:",
  "options": {
    "A": "Superior epigastric artery.",
    "B": "Inferior epigastric artery.",
    "C": "Superficial circumflex iliac artery.",
    "D": "Intercostal arteries.",
    "E": "Lumbar arteries."
  },
  "answer": "A",
  "explanation": {
    "correct": "In a pedicled TRAM flap, the superior epigastric artery provides the primary blood supply (though the inferior is more dominant in DIEP/Free TRAM).",
    "A": "Correct for pedicled TRAM.",
    "B": "Dominant for DIEP/Free TRAM.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Superior epigastric artery supplies the pedicled TRAM flap."
},
{
  "id": 169,
  "specialty": "Plastic Surgery",
  "topic": "Liposuction",
  "question": "The 'super-wet' technique of liposuction involves an infiltrate-to-aspirate ratio of:",
  "options": {
    "A": "1:1.",
    "B": "2:1.",
    "C": "3:1.",
    "D": "4:1.",
    "E": "5:1."
  },
  "answer": "A",
  "explanation": {
    "correct": "The super-wet technique uses approximately 1 mL of infiltrate for every 1 mL of aspirate expected.",
    "A": "This is correct.",
    "B": "Tumescent (2-3:1).",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Super-wet liposuction uses a 1:1 infiltrate ratio."
},
{
  "id": 170,
  "specialty": "Plastic Surgery",
  "topic": "Cleft Lip",
  "question": "The Millard rotation-advancement technique is primarily used for:",
  "options": {
    "A": "Cleft palate repair.",
    "B": "Unilateral cleft lip repair.",
    "C": "Bilateral cleft lip repair.",
    "D": "Alveolar bone grafting.",
    "E": "Velopharyngeal insufficiency."
  },
  "answer": "B",
  "explanation": {
    "correct": "The Millard technique is the most widely used procedure for repairing unilateral cleft lips.",
    "A": "",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Millard repair is the gold standard for unilateral cleft lip."
},
{
  "id": 171,
  "specialty": "Plastic Surgery",
  "topic": "Filler Substances",
  "question": "Of the following filler substances, which is correctly matched with its trade name?",
  "options": {
    "A": "Hyaluronic acid and Sculptra®.",
    "B": "Hydroxyapatite and Radiesse®.",
    "C": "Acellular cadaveric dermis and Zyderm®.",
    "D": "Large particle hyaluronic acid and Bioalcamid®.",
    "E": "None of the above."
  },
  "answer": "B",
  "explanation": {
    "correct": "Radiesse is composed of calcium hydroxyapatite microspheres.",
    "A": "Sculptra is poly-L-lactic acid.",
    "B": "This is correct.",
    "C": "Zyderm is bovine collagen; Alloderm is acellular cadaveric dermis.",
    "D": "Bioalcamid is a polyalkylimide gel.",
    "E": "N/A"
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Radiesse is the trade name for calcium hydroxyapatite filler."
},
{
  "id": 172,
  "specialty": "Plastic Surgery",
  "topic": "Facelift",
  "question": "The SMAS (Superficial Musculo-Aponeurotic System) is continuous superiorly with the:",
  "options": {
    "A": "Platysma.",
    "B": "Galea aponeurotica.",
    "C": "Temporal fascia.",
    "D": "Orbicularis oculi.",
    "E": "Masseteric fascia."
  },
  "answer": "B",
  "explanation": {
    "correct": "The SMAS layer in the face is continuous with the galea aponeurotica of the scalp and the platysma of the neck.",
    "A": "Inferiorly.",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "SMAS is a continuous fibro-muscular layer of the head and neck."
},
{
  "id": 173,
  "specialty": "Plastic Surgery",
  "topic": "Pressure Sores",
  "question": "A Grade 3 pressure sore is defined as:",
  "options": {
    "A": "Non-blanching erythema.",
    "B": "Partial-thickness skin loss.",
    "C": "Full-thickness skin loss involving subcutaneous tissue but not fascia.",
    "D": "Exposure of muscle and bone.",
    "E": "Necrosis of the dermis only."
  },
  "answer": "C",
  "explanation": {
    "correct": "Grade 3 involves full-thickness skin loss with damage to subcutaneous tissue that may extend down to, but not through, underlying fascia.",
    "A": "Grade 1.",
    "B": "Grade 2.",
    "C": "This is correct.",
    "D": "Grade 4.",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Grade 3 pressure sores involve subcutaneous tissue."
},
{
  "id": 174,
  "specialty": "Plastic Surgery",
  "topic": "Microtia",
  "question": "The preferred age for autologous rib cartilage ear reconstruction is:",
  "options": {
    "A": "Birth.",
    "B": "2-3 years.",
    "C": "6-10 years.",
    "D": "Puberty.",
    "E": "Adulthood."
  },
  "answer": "C",
  "explanation": {
    "correct": "Ear reconstruction is typically performed around age 6-10, when there is sufficient costal cartilage to carve a framework and the opposite ear has reached near-adult size.",
    "A": "",
    "B": "",
    "C": "This is correct.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Costal cartilage ear reconstruction is done when the child is large enough for a donor site."
},
{
  "id": 175,
  "specialty": "Plastic Surgery",
  "topic": "Abdominoplasty",
  "question": "The most common complication after abdominoplasty is:",
  "options": {
    "A": "Pulmonary embolism.",
    "B": "Seroma.",
    "C": "Hematoma.",
    "D": "Skin necrosis.",
    "E": "Infection."
  },
  "answer": "B",
  "explanation": {
    "correct": "Seroma (fluid collection) is the most frequent complication following abdominoplasty, occurring in up to 10-15% of cases.",
    "A": "Serious but less common.",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Seroma is the most common postoperative issue in abdominoplasty."
},
{
  "id": 176,
  "specialty": "Plastic Surgery",
  "topic": "Botox",
  "question": "Botulinum toxin A acts by inhibiting the release of:",
  "options": {
    "A": "Dopamine.",
    "B": "Serotonin.",
    "C": "Acetylcholine.",
    "D": "Norepinephrine.",
    "E": "GABA."
  },
  "answer": "C",
  "explanation": {
    "correct": "Botox blocks the release of acetylcholine from the presynaptic terminal of the neuromuscular junction, causing chemical denervation.",
    "A": "",
    "B": "",
    "C": "This is correct.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Botox causes muscle paralysis by blocking acetylcholine release."
},
{
  "id": 177,
  "specialty": "Plastic Surgery",
  "topic": "Ptosis",
  "question": "The muscle responsible for elevating the upper eyelid is the:",
  "options": {
    "A": "Orbicularis oculi.",
    "B": "Levator palpebrae superioris.",
    "C": "Frontalis.",
    "D": "Corrugator supercilii.",
    "E": "Procerus."
  },
  "answer": "B",
  "explanation": {
    "correct": "The levator palpebrae superioris is the main elevator of the upper lid. Muller's muscle provides a secondary (sympathetic) elevation.",
    "A": "Closes the eye.",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Levator muscle damage or weakness causes ptosis."
},
{
  "id": 178,
  "specialty": "Plastic Surgery",
  "topic": "Suture Materials",
  "question": "Which of the following is a non-absorbable suture?",
  "options": {
    "A": "Vicryl (Polyglactin).",
    "B": "Monocryl (Poliglecaprone).",
    "C": "Prolene (Polypropylene).",
    "D": "PDS (Polydioxanone).",
    "E": "Catgut."
  },
  "answer": "C",
  "explanation": {
    "correct": "Prolene is a synthetic non-absorbable monofilament suture often used for skin closure and vascular repairs.",
    "A": "Absorbable.",
    "B": "Absorbable.",
    "C": "This is correct.",
    "D": "Absorbable.",
    "E": "Absorbable."
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Prolene is a widely used non-absorbable suture."
},
{
  "id": 179,
  "specialty": "Plastic Surgery",
  "topic": "Local Anesthetics",
  "question": "Bupivacaine (Marcaine) is preferred for long procedures because:",
  "options": {
    "A": "It has a very rapid onset.",
    "B": "It has a long duration of action.",
    "C": "It is less toxic than lidocaine.",
    "D": "It causes vasoconstriction.",
    "E": "It is an ester."
  },
  "answer": "B",
  "explanation": {
    "correct": "Bupivacaine has a longer duration of action (4-8 hours) compared to lidocaine (1-2 hours).",
    "A": "Slow onset.",
    "B": "This is correct.",
    "C": "More cardiotoxic.",
    "D": "",
    "E": "It is an amide."
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Bupivacaine provides prolonged local anesthesia."
},
{
  "id": 180,
  "specialty": "Plastic Surgery",
  "topic": "Gynaecomastia",
  "question": "According to the Simon classification, Grade 2b gynaecomastia is characterized by:",
  "options": {
    "A": "Minor enlargement with no skin redundancy.",
    "B": "Moderate enlargement with no skin redundancy.",
    "C": "Moderate enlargement with skin redundancy.",
    "D": "Marked enlargement with redundant skin (female appearance).",
    "E": "Unilateral enlargement only."
  },
  "answer": "C",
  "explanation": {
    "correct": "Simon Grade 2b is moderate breast enlargement with skin redundancy. Grade 2a has no redundancy.",
    "A": "Grade 1.",
    "B": "Grade 2a.",
    "C": "This is correct.",
    "D": "Grade 3.",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Simon classification guides surgical management of gynaecomastia."
},
{
  "id": 181,
  "specialty": "Plastic Surgery",
  "topic": "Basal Cell Carcinoma",
  "question": "Which histological subtype of BCC is considered most aggressive?",
  "options": {
    "A": "Nodular.",
    "B": "Superficial.",
    "C": "Morphoeic (Sclerosing).",
    "D": "Pigmented.",
    "E": "Cystic."
  },
  "answer": "C",
  "explanation": {
    "correct": "Morphoeic or sclerosing BCC has an infiltrative growth pattern and higher recurrence rates than nodular or superficial types.",
    "A": "Most common, less aggressive.",
    "B": "",
    "C": "This is correct.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Morphoeic BCC requires wider margins due to its infiltrative nature."
},
{
  "id": 182,
  "specialty": "Plastic Surgery",
  "topic": "Vascular Anomalies",
  "question": "The most common infantile vascular tumor is:",
  "options": {
    "A": "Port-wine stain.",
    "B": "Infantile haemangioma.",
    "C": "Arteriovenous malformation.",
    "D": "Venous malformation.",
    "E": "Lymphangioma."
  },
  "answer": "B",
  "explanation": {
    "correct": "Infantile haemangiomas are the most common benign tumors of infancy, characterized by rapid proliferation and eventual involution.",
    "A": "Capillary malformation.",
    "B": "This is correct.",
    "C": "High-flow malformation.",
    "D": "Low-flow malformation.",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Infantile haemangiomas typically follow a proliferation-involution cycle."
},
{
  "id": 183,
  "specialty": "Plastic Surgery",
  "topic": "Keloids",
  "question": "The primary histological difference between keloids and hypertrophic scars is:",
  "options": {
    "A": "Presence of inflammation.",
    "B": "Extension beyond the original wound margins.",
    "C": "Presence of thick, disorganized Type 1 collagen bundles.",
    "D": "Blood supply.",
    "E": "Rate of growth."
  },
  "answer": "C",
  "explanation": {
    "correct": "Keloids are characterized by thick, glassy, eosinophilic collagen bundles (Type 1 and 3) that are highly disorganized and extend beyond the original wound.",
    "A": "",
    "B": "Clinical difference.",
    "C": "This is correct.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Keloids feature disorganized, thick collagen bundles."
},
{
  "id": 184,
  "specialty": "Plastic Surgery",
  "topic": "Hand Fractures",
  "question": "A Bennett's fracture involves the:",
  "options": {
    "A": "Base of the 5th metacarpal.",
    "B": "Neck of the 5th metacarpal.",
    "C": "Base of the 1st metacarpal.",
    "D": "Distal phalanx of the thumb.",
    "E": "Scaphoid."
  },
  "answer": "C",
  "explanation": {
    "correct": "Bennett's fracture is an intra-articular fracture-dislocation at the base of the first metacarpal (thumb CMC joint).",
    "A": "Reverse Bennett's.",
    "B": "Boxer's fracture.",
    "C": "This is correct.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Bennett's fracture is a common thumb injury requiring stability."
},
{
  "id": 185,
  "specialty": "Plastic Surgery",
  "topic": "Nerve Compression",
  "question": "Wartenberg's syndrome involves compression of which nerve?",
  "options": {
    "A": "Median nerve.",
    "B": "Ulnar nerve.",
    "C": "Superficial radial nerve.",
    "D": "Posterior interosseous nerve.",
    "E": "Anterior interosseous nerve."
  },
  "answer": "C",
  "explanation": {
    "correct": "Wartenberg's syndrome is the entrapment of the sensory branch of the radial nerve (SRN) in the forearm, causing pain and paraesthesia.",
    "A": "",
    "B": "",
    "C": "This is correct.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Wartenberg's syndrome is a sensory neuropathy of the radial nerve."
},
{
  "id": 186,
  "specialty": "Plastic Surgery",
  "topic": "Hypospadias",
  "question": "The three components of hypospadias are:",
  "options": {
    "A": "Dorsal hood, chordee, and proximal urethral meatus.",
    "B": "Ventral hood, chordee, and distal urethral meatus.",
    "C": "Dorsal hood, penile curvature, and undescended testes.",
    "D": "Ventral hood, penile curvature, and inguinal hernia.",
    "E": "None of the above."
  },
  "answer": "A",
  "explanation": {
    "correct": "Hypospadias is characterized by a ventrally placed urethral meatus, ventral curvature (chordee), and a redundant dorsal foreskin (dorsal hood).",
    "A": "This is correct.",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Hypospadias involves meatal malposition, chordee, and foreskin anomalies."
},
{
  "id": 187,
  "specialty": "Plastic Surgery",
  "topic": "Breast Implants",
  "question": "Baker Grade 4 capsular contracture is defined as:",
  "options": {
    "A": "Soft breast, natural appearance.",
    "B": "Slightly firm, looks natural.",
    "C": "Firm, looks abnormal.",
    "D": "Hard, painful, and looks abnormal.",
    "E": "Ruptured implant."
  },
  "answer": "D",
  "explanation": {
    "correct": "Baker Grade 4 is the most severe form: the breast is hard, cold, painful, and distorted in appearance.",
    "A": "Grade 1.",
    "B": "Grade 2.",
    "C": "Grade 3.",
    "D": "This is correct.",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Baker classification system stages capsular contracture."
},
{
  "id": 188,
  "specialty": "Plastic Surgery",
  "topic": "Lasers",
  "question": "The principle of 'selective photothermolysis' relies on:",
  "options": {
    "A": "Wavelength, pulse duration, and energy density.",
    "B": "The color of the laser light only.",
    "C": "The type of skin being treated.",
    "D": "Total exposure time.",
    "E": "Laser power in Watts."
  },
  "answer": "A",
  "explanation": {
    "correct": "Selective photothermolysis uses specific wavelengths and pulse durations to target chromophores (like melanin or hemoglobin) without damaging surrounding tissue.",
    "A": "This is correct.",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Selective photothermolysis is the foundation of medical laser therapy."
},
{
  "id": 189,
  "specialty": "Plastic Surgery",
  "topic": "Head and Neck",
  "question": "The most common site for a branchial cleft cyst is:",
  "options": {
    "A": "First branchial cleft.",
    "B": "Second branchial cleft.",
    "C": "Third branchial cleft.",
    "D": "Fourth branchial cleft.",
    "E": "Thyroglossal duct."
  },
  "answer": "B",
  "explanation": {
    "correct": "95% of branchial cleft anomalies arise from the second branchial cleft, typically presenting along the anterior border of the sternocleidomastoid muscle.",
    "A": "Around the ear/parotid.",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Second branchial cleft cysts are the most common congenital neck masses."
},
{
  "id": 190,
  "specialty": "Plastic Surgery",
  "topic": "Microvascular Surgery",
  "question": "The 'no-reflow' phenomenon in microsurgery is primarily due to:",
  "options": {
    "A": "Arterial spasm.",
    "B": "Inadequate venous drainage.",
    "C": "Microvascular damage and intravascular thrombosis during ischaemia.",
    "D": "Hypothermia of the flap.",
    "E": "Poor surgical technique."
  },
  "answer": "C",
  "explanation": {
    "correct": "The no-reflow phenomenon occurs when blood fails to reperfuse the microcirculation of a flap after a period of ischaemia, despite a patent anastomosis.",
    "A": "",
    "B": "",
    "C": "This is correct.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "No-reflow is a consequence of prolonged ischaemia and reperfusion injury."
},
{
  "id": 191,
  "specialty": "Plastic Surgery",
  "topic": "Lower Limb Trauma",
  "question": "According to the Gustilo-Anderson classification, a Type 3b open fracture involves:",
  "options": {
    "A": "A clean wound < 1 cm.",
    "B": "Extensive soft tissue damage requiring a flap for coverage.",
    "C": "Associated arterial injury requiring repair.",
    "D": "Adequate soft tissue coverage of the bone.",
    "E": "Wound > 10 cm with no contamination."
  },
  "answer": "B",
  "explanation": {
    "correct": "Type 3b involves extensive soft tissue injury with periosteal stripping and exposure of bone, requiring plastic surgical intervention (flaps) for coverage.",
    "A": "Type 1.",
    "B": "This is correct.",
    "C": "Type 3c.",
    "D": "Type 3a.",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Gustilo 3b fractures mandate flap reconstruction."
},
{
  "id": 192,
  "specialty": "Plastic Surgery",
  "topic": "Mandible Fractures",
  "question": "The most common site of mandible fracture is the:",
  "options": {
    "A": "Symphysis.",
    "B": "Body.",
    "C": "Angle.",
    "D": "Condyle.",
    "E": "Ramus."
  },
  "answer": "D",
  "explanation": {
    "correct": "The condyle is the most frequent site of mandible fracture, often resulting from indirect forces.",
    "A": "",
    "B": "",
    "C": "Second most common.",
    "D": "This is correct.",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Condylar fractures are the most frequent mandibular injuries."
},
{
  "id": 193,
  "specialty": "Plastic Surgery",
  "topic": "Eyelid Anatomy",
  "question": "The Gray Line of the eyelid corresponds to the:",
  "options": {
    "A": "Meibomian gland orifices.",
    "B": "Muscle of Riolan.",
    "C": "Tarsal plate.",
    "D": "Orbicularis oculi muscle.",
    "E": "Lid margin epidermis."
  },
  "answer": "B",
  "explanation": {
    "correct": "The Gray Line is the surface manifestation of the muscle of Riolan (the most superficial part of the orbicularis oculi) and serves as an important landmark for eyelid surgery.",
    "A": "",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "The Gray Line divides the eyelid into anterior and posterior lamellae."
},
{
  "id": 194,
  "specialty": "Plastic Surgery",
  "topic": "Surgical Anatomy",
  "question": "The 'Danger Space' of the neck is located between:",
  "options": {
    "A": "The superficial and deep cervical fascia.",
    "B": "The alar and prevertebral fascia.",
    "C": "The carotid sheath and the trachea.",
    "D": "The platysma and the SCM.",
    "E": "The mandible and the hyoid."
  },
  "answer": "B",
  "explanation": {
    "correct": "The danger space is a potential space between the alar fascia and the prevertebral fascia, allowing infection to spread from the base of the skull to the diaphragm.",
    "A": "",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "The neck's danger space is a route for mediastinitis."
},
{
  "id": 195,
  "specialty": "Plastic Surgery",
  "topic": "Free Flap Monitoring",
  "question": "The most sensitive clinical sign of venous congestion in a free flap is:",
  "options": {
    "A": "Flap coolness.",
    "B": "Pale color.",
    "C": "Slow capillary refill.",
    "D": "Rapid capillary refill and dark/purple color.",
    "E": "Loss of Doppler signal."
  },
  "answer": "D",
  "explanation": {
    "correct": "Venous congestion presents with a dark, blue, or purple flap that has very rapid capillary refill and often 'bleeds blue' on prick testing.",
    "A": "General sign of poor perfusion.",
    "B": "Sign of arterial insufficiency.",
    "C": "Sign of arterial insufficiency.",
    "D": "This is correct.",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Rapid refill and purple hue are pathognomonic for venous flap failure."
},
{
  "id": 196,
  "specialty": "Plastic Surgery",
  "topic": "Skin Anatomy",
  "question": "The thickest layer of the epidermis is the:",
  "options": {
    "A": "Stratum basale.",
    "B": "Stratum spinosum.",
    "C": "Stratum granulosum.",
    "D": "Stratum lucidum.",
    "E": "Stratum corneum."
  },
  "answer": "B",
  "explanation": {
    "correct": "The stratum spinosum (prickle cell layer) is usually the thickest layer of the viable epidermis.",
    "A": "",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": "Can be thicker on palms/soles, but spinosum is generally the thickest viable layer."
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Stratum spinosum provides structural integrity to the skin."
},
{
  "id": 197,
  "specialty": "Plastic Surgery",
  "topic": "Orbital Fractures",
  "question": "A 'blow-out' fracture typically involves which orbital wall?",
  "options": {
    "A": "Lateral wall.",
    "B": "Roof.",
    "C": "Medial wall.",
    "D": "Floor.",
    "E": "C and D."
  },
  "answer": "E",
  "explanation": {
    "correct": "Blow-out fractures most commonly involve the orbital floor (weakest part) and/or the medial wall (lamina papyracea).",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": "This is correct."
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Orbital floor and medial wall are most susceptible to blow-out fractures."
},
{
  "id": 198,
  "specialty": "Plastic Surgery",
  "topic": "Facial Nerve",
  "question": "The marginal mandibular nerve lies superficial to which structure at the level of the mandible?",
  "options": {
    "A": "Facial artery.",
    "B": "Parotid gland.",
    "C": "Masseter muscle.",
    "D": "Platysma.",
    "E": "Sternocleidomastoid."
  },
  "answer": "A",
  "explanation": {
    "correct": "The marginal mandibular nerve crosses superficial to the facial artery and vein at the inferior border of the mandible.",
    "A": "This is correct.",
    "B": "",
    "C": "",
    "D": "It is deep to the platysma.",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "The facial artery is a landmark for the marginal mandibular nerve."
},
{
  "id": 199,
  "specialty": "Plastic Surgery",
  "topic": "Fat Grafting",
  "question": "Coleman's technique for fat grafting involves:",
  "options": {
    "A": "High-pressure suction.",
    "B": "Centrifugation of the harvested fat.",
    "C": "Washing the fat with saline only.",
    "D": "Immediate injection of large volumes.",
    "E": "Addition of steroids to the fat."
  },
  "answer": "B",
  "explanation": {
    "correct": "The Coleman technique involves low-pressure manual harvest, centrifugation at 3000 rpm for 3 minutes, and meticulous micro-injection of fat pearls.",
    "A": "Damages fat cells.",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Centrifugation is a key step in the Coleman fat grafting technique."
},
{
  "id": 200,
  "specialty": "Plastic Surgery",
  "topic": "Ear Reconstruction",
  "question": "The most common congenital ear deformity is:",
  "options": {
    "A": "Microtia.",
    "B": "Stahl's ear.",
    "C": "Prominent ear (bat ear).",
    "D": "Cryptotia.",
    "E": "Anotia."
  },
  "answer": "C",
  "explanation": {
    "correct": "Prominent ear (due to lack of antihelical folding or conchal excess) is the most frequent congenital ear anomaly.",
    "A": "",
    "B": "",
    "C": "This is correct.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Prominent ear is easily corrected with otoplasty."
},
{
  "id": 201,
  "specialty": "Plastic Surgery",
  "topic": "Fascial Layers",
  "question": "Colles' fascia is the continuation of which abdominal layer into the perineum?",
  "options": {
    "A": "Camper's fascia.",
    "B": "Scarpa's fascia.",
    "C": "Transversalis fascia.",
    "D": "Parietal peritoneum.",
    "E": "Linea alba."
  },
  "answer": "B",
  "explanation": {
    "correct": "Scarpa's fascia (the deep membranous layer of the superficial abdominal fascia) continues into the perineum as Colles' fascia.",
    "A": "",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Scarpa's and Colles' fascia are continuous layers."
},
{
  "id": 202,
  "specialty": "Plastic Surgery",
  "topic": "Hand Infections",
  "question": "Kanavel's signs are diagnostic of:",
  "options": {
    "A": "Paronychia.",
    "B": "Felon.",
    "C": "Flexor tenosynovitis.",
    "D": "Herpetic whitlow.",
    "E": "Septic arthritis."
  },
  "answer": "C",
  "explanation": {
    "correct": "Kanavel's four signs are: flexed position, fusiform swelling, tenderness along the sheath, and pain on passive extension.",
    "A": "",
    "B": "",
    "C": "This is correct.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Kanavel's signs indicate an emergency hand infection."
},
{
  "id": 203,
  "specialty": "Plastic Surgery",
  "topic": "Scar Revision",
  "question": "The primary goal of a Z-plasty is to:",
  "options": {
    "A": "Remove the scar completely.",
    "B": "Lengthen the scar in a specific direction.",
    "C": "Change the color of the scar.",
    "D": "Narrow the scar.",
    "E": "Flatten a keloid."
  },
  "answer": "B",
  "explanation": {
    "correct": "Z-plasty is used to lengthen a scar along its central limb and to reorient the scar into relaxed skin tension lines.",
    "A": "",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Z-plasty reorients and lengthens scars."
},
{
  "id": 204,
  "specialty": "Plastic Surgery",
  "topic": "Craniofacial",
  "question": "Crouzon syndrome is distinguished from Apert syndrome by the absence of:",
  "options": {
    "A": "Craniosynostosis.",
    "B": "Midface hypoplasia.",
    "C": "Syndactyly.",
    "D": "Exophthalmos.",
    "E": "Hydrocephalus."
  },
  "answer": "C",
  "explanation": {
    "correct": "Both syndromes involve craniosynostosis and midface hypoplasia, but Apert syndrome is specifically associated with complex 'mitten-hand' syndactyly.",
    "A": "",
    "B": "",
    "C": "This is correct.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Syndactyly is the hallmark difference between Apert and Crouzon."
},
{
  "id": 205,
  "specialty": "Plastic Surgery",
  "topic": "Breast Anatomy",
  "question": "Cooper's ligaments provide:",
  "options": {
    "A": "Blood supply to the nipple.",
    "B": "Innervation to the breast.",
    "C": "Structural support to the breast parenchyma.",
    "D": "Lymphatic drainage.",
    "E": "Milk duct protection."
  },
  "answer": "C",
  "explanation": {
    "correct": "Cooper's ligaments (suspensory ligaments) are fibrous bands that connect the dermis to the deep pectoral fascia, providing structural support.",
    "A": "",
    "B": "",
    "C": "This is correct.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Cooper's ligaments maintain the shape of the breast."
},
{
  "id": 206,
  "specialty": "Plastic Surgery",
  "topic": "Laser Physics",
  "question": "The active medium in a CO2 laser is:",
  "options": {
    "A": "A crystal.",
    "B": "A dye.",
    "C": "A gas.",
    "D": "A semiconductor.",
    "E": "A liquid."
  },
  "answer": "C",
  "explanation": {
    "correct": "The CO2 laser is a gas laser with a wavelength of 10,600 nm, primarily absorbed by water.",
    "A": "e.g. Ruby, Nd:YAG.",
    "B": "e.g. Pulsed Dye.",
    "C": "This is correct.",
    "D": "e.g. Diode.",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "CO2 lasers are high-power gas lasers used for cutting and ablation."
},
{
  "id": 207,
  "specialty": "Plastic Surgery",
  "topic": "Hair Transplant",
  "question": "The 'donor dominant' theory in hair transplantation states that:",
  "options": {
    "A": "The recipient site determines the growth of the hair.",
    "B": "The transplanted hair maintains its original growth characteristics.",
    "C": "Hair only grows if taken from the occipital region.",
    "D": "Large grafts grow better than small grafts.",
    "E": "Auto-transplantation is impossible."
  },
  "answer": "B",
  "explanation": {
    "correct": "Donor dominance, proposed by Orentreich, states that hair follicles maintain their genetic resistance to androgenetic alopecia when moved to a different site.",
    "A": "",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Donor dominance allows for successful hair transplantation in balding areas."
},
{
  "id": 208,
  "specialty": "Plastic Surgery",
  "topic": "Chemical Peels",
  "question": "Phenol peels are unique among chemical peels because they:",
  "options": {
    "A": "Are extremely shallow.",
    "B": "Are not absorbed systemically.",
    "C": "Can cause cardiac arrhythmias.",
    "D": "Do not require neutralization.",
    "E": "Are safe for all skin types."
  },
  "answer": "C",
  "explanation": {
    "correct": "Phenol is a deep peel agent that can be cardiotoxic, requiring cardiac monitoring during application.",
    "A": "Deepest peel.",
    "B": "Readily absorbed.",
    "C": "This is correct.",
    "D": "",
    "E": "High risk of pigmentation changes."
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Phenol peels require systemic monitoring."
},
{
  "id": 209,
  "specialty": "Plastic Surgery",
  "topic": "Maxillofacial Trauma",
  "question": "A Le Fort II fracture is also known as a:",
  "options": {
    "A": "Guerin fracture.",
    "B": "Pyramidal fracture.",
    "C": "Craniofacial disjunction.",
    "D": "Tripod fracture.",
    "E": "Nasal fracture."
  },
  "answer": "B",
  "explanation": {
    "correct": "A Le Fort II fracture follows a pyramidal line through the nasal bones, lacrimal bones, orbital floor, and infraorbital rim.",
    "A": "Le Fort I.",
    "B": "This is correct.",
    "C": "Le Fort III.",
    "D": "Zygomaticomaxillary complex fracture.",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Le Fort II fractures involve the central midface in a pyramid shape."
},
{
  "id": 210,
  "specialty": "Plastic Surgery",
  "topic": "Microbiology",
  "question": "The most common organism isolated from human bite wounds is:",
  "options": {
    "A": "Pasteurella multocida.",
    "B": "Eikenella corrodens.",
    "C": "Staphylococcus aureus.",
    "D": "Streptococcus viridans.",
    "E": "B and D."
  },
  "answer": "E",
  "explanation": {
    "correct": "Human bites are polymicrobial, but Eikenella corrodens and alpha-hemolytic streptococci (S. viridans) are classic isolates.",
    "A": "Cat/dog bites.",
    "B": "",
    "C": "",
    "D": "",
    "E": "This is correct."
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Eikenella corrodens is a signature organism of human bite infections."
},
{
  "id": 211,
  "specialty": "Plastic Surgery",
  "topic": "Skin Physiology",
  "question": "Melanocytes are derived from which embryological layer?",
  "options": {
    "A": "Ectoderm (Neural crest).",
    "B": "Mesoderm.",
    "C": "Endoderm.",
    "D": "Neural tube.",
    "E": "Yolk sac."
  },
  "answer": "A",
  "explanation": {
    "correct": "Melanocytes migrate from the neural crest to the skin during the first trimester.",
    "A": "This is correct.",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Melanocytes are neuroectodermal in origin."
},
{
  "id": 212,
  "specialty": "Plastic Surgery",
  "topic": "Lymphedema",
  "question": "Stemmer's sign is diagnostic of:",
  "options": {
    "A": "Venous insufficiency.",
    "B": "Lymphedema.",
    "C": "DVT.",
    "D": "Cellulitis.",
    "E": "Compartment syndrome."
  },
  "answer": "B",
  "explanation": {
    "correct": "Stemmer's sign is the inability to pinch a fold of skin on the dorsal surface of the second toe or finger, indicating lymphedema.",
    "A": "",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Stemmer's sign is a reliable clinical marker for chronic lymphedema."
},
{
  "id": 213,
  "specialty": "Plastic Surgery",
  "topic": "Flap Anatomy",
  "question": "A 'delay' procedure on a flap works by:",
  "options": {
    "A": "Increasing the total amount of skin.",
    "B": "Promoting the orientation of the microvasculature along the flap axis.",
    "C": "Reducing the metabolic rate of the flap.",
    "D": "Increasing systemic blood pressure.",
    "E": "Decreasing the venous drainage."
  },
  "answer": "B",
  "explanation": {
    "correct": "Flap delay (partially incising the flap before moving it) encourages longitudinal reorientation of vessels and 'primes' the flap for its new blood supply.",
    "A": "",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Surgical delay improves flap survival by reorganizing blood flow."
},
{
  "id": 214,
  "specialty": "Plastic Surgery",
  "topic": "Craniofacial",
  "question": "The most common craniofacial cleft according to the Tessier classification is:",
  "options": {
    "A": "Cleft 0.",
    "B": "Cleft 3.",
    "C": "Cleft 7.",
    "D": "Cleft 10.",
    "E": "Cleft 14."
  },
  "answer": "C",
  "explanation": {
    "correct": "Tessier 7 cleft (macrostomia) is the most common lateral facial cleft.",
    "A": "",
    "B": "",
    "C": "This is correct.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Tessier 7 cleft involves the oral commissure."
},
{
  "id": 215,
  "specialty": "Plastic Surgery",
  "topic": "Burn Surgery",
  "question": "Curling's ulcer is associated with:",
  "options": {
    "A": "Severe head injury.",
    "B": "Severe burns.",
    "C": "Gastric cancer.",
    "D": "Long-term NSAID use.",
    "E": "Liver failure."
  },
  "answer": "B",
  "explanation": {
    "correct": "Curling's ulcer is an acute stress ulcer of the duodenum occurring in patients with extensive burns.",
    "A": "Cushing's ulcer.",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Stress ulcer prophylaxis is essential in major burn patients."
},
{
  "id": 216,
  "specialty": "Plastic Surgery",
  "topic": "Ear Anatomy",
  "question": "The sensory innervation of the ear is provided by:",
  "options": {
    "A": "Greater auricular nerve.",
    "B": "Auriculotemporal nerve.",
    "C": "Lesser occipital nerve.",
    "D": "Vagus nerve (Arnold's).",
    "E": "All of the above."
  },
  "answer": "E",
  "explanation": {
    "correct": "The ear has complex innervation from the cervical plexus (C2, C3) and several cranial nerves (V, VII, IX, X).",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": "This is correct."
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "The ear receives multi-nerve sensory supply."
},
{
  "id": 217,
  "specialty": "Plastic Surgery",
  "topic": "Hand Surgery",
  "question": "A mallet finger deformity results from injury to the:",
  "options": {
    "A": "Central slip of the extensor tendon.",
    "B": "Terminal extensor tendon at the DIP joint.",
    "C": "FDP tendon.",
    "D": "FDS tendon.",
    "E": "Ulnar collateral ligament."
  },
  "answer": "B",
  "explanation": {
    "correct": "Mallet finger is the loss of active extension at the DIP joint due to rupture or avulsion of the terminal extensor tendon.",
    "A": "Boutonniere deformity.",
    "B": "This is correct.",
    "C": "Jersey finger.",
    "D": "",
    "E": "Gamekeeper's thumb."
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Mallet finger is a common athletic injury."
},
{
  "id": 218,
  "specialty": "Plastic Surgery",
  "topic": "Vascular Surgery",
  "question": "The Allen test is used to evaluate:",
  "options": {
    "A": "Ulnar nerve function.",
    "B": "Patency of the radial and ulnar arteries.",
    "C": "Carpal tunnel syndrome.",
    "D": "Vascularity of the lower limb.",
    "E": "Lymphedema."
  },
  "answer": "B",
  "explanation": {
    "correct": "The Allen test assesses the patency of the radial and ulnar arteries and the adequacy of the palmar arch circulation.",
    "A": "",
    "B": "This is correct.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Allen test is mandatory before radial artery harvest or cannulation."
},
{
  "id": 219,
  "specialty": "Plastic Surgery",
  "topic": "Melanoma",
  "question": "The standard surgical margin for a 1.5-mm thick melanoma is:",
  "options": {
    "A": "0.5 cm.",
    "B": "1.0 cm.",
    "C": "2.0 cm.",
    "D": "3.0 cm.",
    "E": "5.0 cm."
  },
  "answer": "C",
  "explanation": {
    "correct": "Current guidelines recommend 2 cm margins for melanomas 1.01-2.00 mm thick.",
    "A": "",
    "B": "For < 1.0 mm.",
    "C": "This is correct.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Melanoma margins are based on Breslow thickness."
},
{
  "id": 220,
  "specialty": "Plastic Surgery",
  "topic": "Suture Removal",
  "question": "Facial sutures should typically be removed after:",
  "options": {
    "A": "1-2 days.",
    "B": "3-5 days.",
    "C": "7-10 days.",
    "D": "14 days.",
    "E": "When they fall out."
  },
  "answer": "B",
  "explanation": {
    "correct": "To minimize the risk of 'track marks' or railroad scarring, facial sutures are removed early (3-5 days), as the face has excellent blood supply.",
    "A": "",
    "B": "This is correct.",
    "C": "For limbs/back.",
    "D": "",
    "E": ""
  },
  "guideline": "MCQs in Plastic Surgery",
  "takeaway": "Early suture removal on the face prevents suture-hole scarring."
}
,
{
  "id": 221,
  "specialty": "General Surgery",
  "topic": "Gastric Anatomy",
  "question": "Which of the following statements is true with regard to the arterial blood supply of the stomach?",
  "options": {
    "A": "The left gastroepiploic artery commonly arises from the left gastric artery.",
    "B": "Ligation of the left gastric artery can result in acute left-sided hepatic ischemia.",
    "C": "The stomach is extremely susceptible to ischemia because of poor collateral circulation.",
    "D": "The inferior phrenic and short gastric arteries provide significant blood supply to the body of the stomach.",
    "E": "A replaced right hepatic artery may originate from the left gastric artery."
  },
  "answer": "B",
  "explanation": {
    "correct": "An aberrant or replaced left hepatic artery originates from the left gastric artery in 15% to 20% of individuals and can represent the sole arterial blood supply to the left hepatic lobe.",
    "A": "The left gastroepiploic artery arises from the splenic artery.",
    "B": "",
    "C": "The stomach has a rich collateral network (4 major arteries) making it resistant to ischemia.",
    "D": "These supply the fundus and upper body, but are not the primary source for the entire body.",
    "E": "A replaced right hepatic artery typically originates from the SMA, not the left gastric."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The left gastric artery often gives rise to an aberrant left hepatic artery; its ligation carries a risk of left-sided hepatic ischemia."
},
{
  "id": 222,
  "specialty": "General Surgery",
  "topic": "Esophageal Surgery",
  "question": "After esophagectomy, the arterial blood supply of a gastric conduit is primarily based on which of the following vessels?",
  "options": {
    "A": "Left gastroepiploic artery",
    "B": "Left gastric artery",
    "C": "Right gastroepiploic artery",
    "D": "Right gastric artery",
    "E": "Inferior phrenic arteries"
  },
  "answer": "C",
  "explanation": {
    "correct": "During gastric mobilization for esophageal replacement, the left gastric and short gastric arteries are divided. The right gastroepiploic artery becomes the primary blood supply for the gastric pull-up.",
    "A": "Divided during mobilization.",
    "B": "Divided to mobilize the stomach.",
    "C": "",
    "D": "Provides some supply but the right gastroepiploic is the dominant vessel.",
    "E": "Divided during hiatal dissection."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The right gastroepiploic artery is the critical vessel for maintaining viability of a gastric conduit after esophagectomy."
},
{
  "id": 223,
  "specialty": "General Surgery",
  "topic": "Vagotomy",
  "question": "Which of the following correctly matches the type of vagotomy with its appropriate level of vagal transection?",
  "options": {
    "A": "Truncal vagotomy: common nerve of Latarjet",
    "B": "Highly selective vagotomy: trunks below the celiac and hepatic branches",
    "C": "Selective vagotomy: trunks above the celiac and hepatic branches",
    "D": "Truncal vagotomy: anterior and posterior vagal trunks above the celiac and hepatic branches",
    "E": "Highly selective vagotomy: hepatic branches"
  },
  "answer": "D",
  "explanation": {
    "correct": "Truncal vagotomy involves dividing the vagal trunks at the level of the esophagus, proximal to the origin of the celiac and hepatic branches.",
    "A": "Latarjet is targeted in highly selective vagotomy.",
    "B": "Highly selective vagotomy divides terminal branches to the fundus/body only.",
    "C": "Selective vagotomy is distal to the celiac/hepatic branches but proximal to the crow's foot.",
    "D": "",
    "E": "Hepatic branches are spared in selective and highly selective vagotomy."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Truncal vagotomy denervates the entire stomach and most of the abdominal viscera by dividing the trunks above their major branches."
},
{
  "id": 224,
  "specialty": "General Surgery",
  "topic": "Gastric Physiology",
  "question": "Which cell type is correctly matched with its appropriate secretory product?",
  "options": {
    "A": "Parietal cell/ghrelin",
    "B": "Chief cell/pepsinogen",
    "C": "G cell/intrinsic factor",
    "D": "Delta cell/gastrin",
    "E": "Endocrine cell/somatostatin"
  },
  "answer": "B",
  "explanation": {
    "correct": "Chief cells, located in the fundus and corpus, are responsible for secreting pepsinogen.",
    "A": "Parietal cells secrete HCl and intrinsic factor. Ghrelin is from Gr cells.",
    "B": "",
    "C": "G cells secrete gastrin. Intrinsic factor is from parietal cells.",
    "D": "Delta (D) cells secrete somatostatin. Gastrin is from G cells.",
    "E": "Somatostatin is specifically from D cells."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Chief cells produce pepsinogen, the precursor to the proteolytic enzyme pepsin."
},
{
  "id": 225,
  "specialty": "General Surgery",
  "topic": "Gastric Anatomy",
  "question": "Which cell type is correctly matched with its primary anatomic location in the stomach?",
  "options": {
    "A": "Parietal cell/gastric cardia",
    "B": "G cell/fundus and corpus",
    "C": "D cell/gastric antrum",
    "D": "Delta cell/duodenum",
    "E": "Enterochromaffin-like cell/corpus and fundus"
  },
  "answer": "E",
  "explanation": {
    "correct": "Enterochromaffin-like (ECL) cells are located in the oxyntic mucosa of the corpus and fundus and produce histamine.",
    "A": "Parietal cells are in the fundus and corpus.",
    "B": "G cells are primarily in the antrum.",
    "C": "D cells are throughout the stomach but heavily in the antrum (D cells) and corpus.",
    "D": "Delta cells are in the pancreas/stomach; 'E' is the more specific classic match here.",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Parietal and ECL cells are concentrated in the body (corpus) and fundus, while G cells dominate the antrum."
},
{
  "id": 226,
  "specialty": "General Surgery",
  "topic": "Gastric Physiology",
  "question": "Acid secretion is stimulated by the following parietal cell receptors except:",
  "options": {
    "A": "Acetylcholine",
    "B": "Histamine",
    "C": "Somatostatin",
    "D": "Gastrin",
    "E": "None of the above"
  },
  "answer": "C",
  "explanation": {
    "correct": "Somatostatin is a potent inhibitor of parietal cell function and gastrin release, acting via D cells.",
    "A": "ACh stimulates acid via M3 receptors.",
    "B": "Histamine stimulates acid via H2 receptors.",
    "C": "",
    "D": "Gastrin stimulates acid via CCK2 receptors.",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The three primary secretagogues for acid are ACh, histamine, and gastrin; somatostatin is the main inhibitor."
},
{
  "id": 227,
  "specialty": "General Surgery",
  "topic": "Gastric Physiology",
  "question": "The most important phase of gastric acid secretion in terms of total acid volume after a meal is the:",
  "options": {
    "A": "Basal phase",
    "B": "Cephalic phase",
    "C": "Gastric phase",
    "D": "Intestinal phase",
    "E": "Interdigestive phase"
  },
  "answer": "C",
  "explanation": {
    "correct": "The gastric phase, triggered by distention and presence of peptides, accounts for 50-60% of total post-prandial acid secretion.",
    "A": "Basal secretion is low.",
    "B": "Cephalic phase (vagal) accounts for ~30%.",
    "C": "",
    "D": "Intestinal phase accounts for ~5-10%.",
    "E": "Same as basal."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The gastric phase is the dominant contributor to acid production during digestion."
},
{
  "id": 228,
  "specialty": "General Surgery",
  "topic": "Gastric Physiology",
  "question": "Vagal stimulation of the parietal cell is primarily mediated by which of the following neurotransmitters?",
  "options": {
    "A": "Acetylcholine",
    "B": "Norepinephrine",
    "C": "Gastrin-releasing peptide",
    "D": "Histamine",
    "E": "Somatostatin"
  },
  "answer": "A",
  "explanation": {
    "correct": "Direct vagal stimulation of parietal cells is mediated by acetylcholine acting on muscarinic M3 receptors.",
    "A": "",
    "B": "Sympathetic neurotransmitter.",
    "C": "GRP mediates vagal stimulation of G cells, not parietal cells directly.",
    "D": "Paracrine mediator, not a direct vagal neurotransmitter.",
    "E": "Inhibitory mediator."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Vagal nerve activity stimulates acid production directly via ACh and indirectly via GRP-mediated gastrin release."
},
{
  "id": 229,
  "specialty": "General Surgery",
  "topic": "Zollinger-Ellison Syndrome",
  "question": "In a patient with recurrent peptic ulcers and a gastrin level of 1200 pg/mL, a secretin stimulation test is performed. Which result is diagnostic of Zollinger-Ellison Syndrome (gastrinoma)?",
  "options": {
    "A": "Decrease in serum gastrin by >100 pg/mL",
    "B": "Increase in serum gastrin by >200 pg/mL",
    "C": "No change in serum gastrin levels",
    "D": "Increase in serum secretin levels",
    "E": "Decrease in gastric acid output"
  },
  "answer": "B",
  "explanation": {
    "correct": "In gastrinoma, secretin paradoxically stimulates gastrin release from tumor cells. An increase of >200 pg/mL is highly sensitive and specific.",
    "A": "Secretin normally inhibits gastrin in healthy individuals.",
    "B": "",
    "C": "Negative test.",
    "D": "Secretin is what is being injected.",
    "E": "Gastrinomas cause massive increases in acid output."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The secretin stimulation test is the gold standard for diagnosing gastrinoma when basal gastrin is inconclusive."
},
{
  "id": 230,
  "specialty": "General Surgery",
  "topic": "Gastrinoma",
  "question": "The most common location for a primary gastrinoma is within the 'Gastrinoma Triangle.' Which of the following defines a boundary of this triangle?",
  "options": {
    "A": "Spleen",
    "B": "Junction of the cystic and common hepatic ducts",
    "C": "Left kidney",
    "D": "Greater curvature of the stomach",
    "E": "Ligament of Treitz"
  },
  "answer": "B",
  "explanation": {
    "correct": "The Gastrinoma Triangle (Passaro's Triangle) is bounded by the junction of the cystic and common hepatic ducts, the junction of the 2nd and 3rd portions of the duodenum, and the junction of the neck and body of the pancreas.",
    "A": "Too far left.",
    "B": "",
    "C": "Too posterior/lateral.",
    "D": "The stomach is not a boundary.",
    "E": "Too distal."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Over 90% of gastrinomas are found within the Gastrinoma Triangle."
},
{
  "id": 231,
  "specialty": "General Surgery",
  "topic": "Gastric Physiology",
  "question": "The cephalic phase of gastric acid secretion is primarily mediated by which of the following?",
  "options": {
    "A": "Gastrin release from the duodenum",
    "B": "Distention of the gastric body",
    "C": "Vagus nerve activity",
    "D": "Secretin inhibition",
    "E": "CCK release"
  },
  "answer": "C",
  "explanation": {
    "correct": "The cephalic phase is initiated by the sight, smell, or thought of food and is mediated entirely by the vagus nerve.",
    "A": "That is the intestinal phase.",
    "B": "That is the gastric phase.",
    "C": "",
    "D": "Secretin inhibits acid.",
    "E": "CCK primarily acts on the gallbladder and pancreas."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The cephalic phase is the 'psychic' phase of digestion, purely vagally mediated."
},
{
  "id": 232,
  "specialty": "General Surgery",
  "topic": "Gastric Physiology",
  "question": "Which of the following is the primary trigger for the gastric phase of acid secretion?",
  "options": {
    "A": "Sight of food",
    "B": "Acid in the duodenum",
    "C": "Gastric distention and intraluminal peptides",
    "D": "Hypoglycemia",
    "E": "Somatostatin release"
  },
  "answer": "C",
  "explanation": {
    "correct": "The gastric phase is triggered by mechanical distention (vagovagal reflex) and chemical stimulation by amino acids and peptides on G cells.",
    "A": "Cephalic phase.",
    "B": "Intestinal phase (usually inhibitory).",
    "C": "",
    "D": "Hypoglycemia stimulates the vagus (cephalic-like).",
    "E": "Somatostatin inhibits the gastric phase."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Mechanical and chemical stimuli in the stomach are the hallmarks of the gastric phase."
},
{
  "id": 233,
  "specialty": "General Surgery",
  "topic": "Gastric Physiology",
  "question": "Intrinsic factor, which is essential for Vitamin B12 absorption, is secreted by which cell type?",
  "options": {
    "A": "Chief cells",
    "B": "Parietal cells",
    "C": "G cells",
    "D": "Mucous neck cells",
    "E": "D cells"
  },
  "answer": "B",
  "explanation": {
    "correct": "Parietal cells secrete both hydrochloric acid and intrinsic factor.",
    "A": "Secretes pepsinogen.",
    "B": "",
    "C": "Secretes gastrin.",
    "D": "Secretes mucus.",
    "E": "Secretes somatostatin."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Loss of parietal cells (e.g., total gastrectomy) leads to pernicious anemia due to B12 malabsorption."
},
{
  "id": 234,
  "specialty": "General Surgery",
  "topic": "Post-Gastrectomy Complications",
  "question": "The most common metabolic or functional complication following truncal vagotomy and pyloroplasty is:",
  "options": {
    "A": "B12 deficiency",
    "B": "Iron deficiency",
    "C": "Diarrhea",
    "D": "Hypoglycemia",
    "E": "Afferent loop syndrome"
  },
  "answer": "C",
  "explanation": {
    "correct": "Post-vagotomy diarrhea occurs in up to 30% of patients due to rapid gastric emptying and altered bile acid metabolism.",
    "A": "More common with subtotal/total gastrectomy.",
    "B": "Common with bypass of the duodenum.",
    "C": "",
    "D": "Occurs in late dumping, but diarrhea is more frequent overall.",
    "E": "Requires Billroth II reconstruction."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Diarrhea is a frequent and often disabling consequence of truncal vagotomy."
},
{
  "id": 235,
  "specialty": "General Surgery",
  "topic": "Gastric Ulcers",
  "question": "According to the Modified Johnson classification, a Type I gastric ulcer is located:",
  "options": {
    "A": "In the prepyloric region",
    "B": "Along the lesser curvature near the incisura angularis",
    "C": "High on the lesser curvature near the GE junction",
    "D": "In the fundus associated with NSAID use",
    "E": "In the duodenum"
  },
  "answer": "B",
  "explanation": {
    "correct": "Type I ulcers are the most common and are found on the lesser curvature near the incisura. They are associated with normal or low acid production.",
    "A": "Type III.",
    "B": "",
    "C": "Type IV.",
    "D": "Type V.",
    "E": "Type II involves a gastric ulcer plus a duodenal ulcer."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Type I gastric ulcers are the classic 'low acid' ulcers found at the incisura."
},
{
  "id": 236,
  "specialty": "General Surgery",
  "topic": "Gastric Ulcers",
  "question": "Which of the following gastric ulcer types is associated with gastric acid hypersecretion?",
  "options": {
    "A": "Type I and Type IV",
    "B": "Type II and Type III",
    "C": "Type I and Type V",
    "D": "Type IV only",
    "E": "All gastric ulcers are hypersecretory"
  },
  "answer": "B",
  "explanation": {
    "correct": "Type II (gastric + duodenal) and Type III (prepyloric) ulcers are both associated with high acid levels, similar to duodenal ulcers.",
    "A": "Type I and IV are low/normal acid.",
    "B": "",
    "C": "Type V is related to NSAIDs.",
    "D": "Type IV is low acid.",
    "E": "False; many are due to mucosal defense failure."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Type II and III gastric ulcers behave like duodenal ulcers and require acid-reducing procedures if surgery is needed."
},
{
  "id": 237,
  "specialty": "General Surgery",
  "topic": "Peptic Ulcer Disease",
  "question": "The most common cause of non-NSAID related gastric ulcers is:",
  "options": {
    "A": "Zollinger-Ellison syndrome",
    "B": "Helicobacter pylori infection",
    "C": "Smoking",
    "D": "Alcohol use",
    "E": "Psychological stress"
  },
  "answer": "B",
  "explanation": {
    "correct": "H. pylori is found in 70-80% of patients with gastric ulcers and over 90% of those with duodenal ulcers.",
    "A": "Rare cause.",
    "B": "",
    "C": "Risk factor but not the primary cause.",
    "D": "Causes gastritis but rarely discrete ulcers.",
    "E": "Not a primary cause of chronic PUD."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "H. pylori and NSAIDs are the 'big two' causes of peptic ulcer disease."
},
{
  "id": 238,
  "specialty": "General Surgery",
  "topic": "Gastric Ulcers",
  "question": "The surgical procedure of choice for a refractory Type I gastric ulcer that failed medical management is:",
  "options": {
    "A": "Truncal vagotomy and pyloroplasty",
    "B": "Highly selective vagotomy",
    "C": "Distal gastrectomy (antrectomy) including the ulcer",
    "D": "Vagotomy and antrectomy",
    "E": "Graham patch"
  },
  "answer": "C",
  "explanation": {
    "correct": "Antrectomy (distal gastrectomy) with Billroth I or II reconstruction is the gold standard for Type I ulcers. Vagotomy is usually not required as acid levels are not high.",
    "A": "Ineffective for Type I.",
    "B": "Associated with high recurrence for Type I.",
    "C": "",
    "D": "Used for Type II/III to address hypersecretion.",
    "E": "Used for perforation, not refractory disease."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "For Type I ulcers, the focus is on ulcer excision (via antrectomy) rather than acid reduction."
},
{
  "id": 239,
  "specialty": "General Surgery",
  "topic": "Gastric Ulcers",
  "question": "A 60-year-old woman is found to have a Type IV gastric ulcer. This ulcer is most likely located:",
  "options": {
    "A": "In the duodenum",
    "B": "Near the incisura angularis",
    "C": "In the gastric fundus",
    "D": "High on the lesser curvature, near the GE junction",
    "E": "Along the greater curvature"
  },
  "answer": "D",
  "explanation": {
    "correct": "Type IV ulcers are specifically located high on the lesser curvature, often making surgical resection difficult (Csendes procedure).",
    "A": "Duodenal ulcer.",
    "B": "Type I.",
    "C": "Not a standard location for Johnson classification.",
    "D": "",
    "E": "Rare for benign ulcers, suspicious for malignancy."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Type IV ulcers are high-lying and present a technical challenge for resection."
},
{
  "id": 240,
  "specialty": "General Surgery",
  "topic": "Gastric Pathology",
  "question": "Curling's ulcers are acute stress ulcers that typically occur in patients with:",
  "options": {
    "A": "Head trauma",
    "B": "Severe burns",
    "C": "Sepsis",
    "D": "Chronic alcohol abuse",
    "E": "NSAID overdose"
  },
  "answer": "B",
  "explanation": {
    "correct": "Curling's ulcers are stress-related mucosal disease (SRMD) seen in burn victims. Cushing's ulcers are associated with CNS injury.",
    "A": "Cushing's ulcer.",
    "B": "",
    "C": "Generalized stress gastritis.",
    "D": "Erosive gastritis.",
    "E": "Discrete peptic ulcer."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Mnemonic: 'C'urling = 'B'urns (Curling iron), 'C'ushing = 'C'NS."
},
{
  "id": 241,
  "specialty": "General Surgery",
  "topic": "Gastric Physiology",
  "question": "Which of the following dietary components is the most potent inhibitor of gastric emptying?",
  "options": {
    "A": "Complex carbohydrates",
    "B": "Simple sugars",
    "C": "Proteins",
    "D": "Lipids (fats)",
    "E": "Water"
  },
  "answer": "D",
  "explanation": {
    "correct": "Lipids trigger the release of CCK and other enterogastrones from the duodenum, which significantly slow gastric emptying.",
    "A": "Moderate inhibition.",
    "B": "Osmotic effect slows emptying, but less than fats.",
    "C": "Moderate inhibition.",
    "D": "",
    "E": "Empties fastest (non-caloric liquid)."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "High-fat meals stay in the stomach the longest due to hormonal feedback."
},
{
  "id": 242,
  "specialty": "General Surgery",
  "topic": "Gastric Physiology",
  "question": "The rate of gastric emptying for liquids is primarily determined by:",
  "options": {
    "A": "Antral propulsion",
    "B": "Pyloric resistance",
    "C": "Proximal gastric (fundal) tone",
    "D": "Duodenal distention",
    "E": "Pancreatic secretion"
  },
  "answer": "C",
  "explanation": {
    "correct": "Emptying of liquids is a function of the pressure gradient between the stomach and duodenum, maintained by fundal tone. Solids require antral grinding.",
    "A": "Maintains emptying of solids.",
    "B": "Regulates size of particles leaving.",
    "C": "",
    "D": "Inhibitory feedback.",
    "E": "Neutralizes acid but doesn't drive emptying."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Fundus = Liquid emptying; Antrum = Solid emptying."
},
{
  "id": 243,
  "specialty": "General Surgery",
  "topic": "Upper GI Bleeding",
  "question": "What is the most common cause of massive upper gastrointestinal hemorrhage?",
  "options": {
    "A": "Gastric cancer",
    "B": "Esophageal varices",
    "C": "Duodenal ulcer",
    "D": "Mallory-Weiss tear",
    "E": "Dieulafoy's lesion"
  },
  "answer": "C",
  "explanation": {
    "correct": "Peptic ulcer disease (specifically duodenal ulcers) is the leading cause of upper GI bleeding.",
    "A": "Usually causes chronic occult blood loss.",
    "B": "Causes massive bleeding but less common than ulcers.",
    "C": "",
    "D": "Usually self-limited.",
    "E": "Rare cause."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "PUD remains the #1 cause of life-threatening upper GI bleeding."
},
{
  "id": 244,
  "specialty": "General Surgery",
  "topic": "Upper GI Bleeding",
  "question": "A Dieulafoy's lesion is best described as:",
  "options": {
    "A": "A large malignant ulcer",
    "B": "A submucosal artery that erodes through otherwise normal mucosa",
    "C": "A venous malformation of the antrum",
    "D": "A stress-induced erosion in the fundus",
    "E": "A mucosal tear at the GE junction"
  },
  "answer": "B",
  "explanation": {
    "correct": "Dieulafoy's lesion is a large-caliber submucosal artery that fails to taper, eventually eroding through the surface to cause massive bleeding.",
    "A": "Malignant ulcer.",
    "B": "",
    "C": "GAVE (watermelon stomach).",
    "D": "Stress gastritis.",
    "E": "Mallory-Weiss tear."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Dieulafoy's = Caliber-persistent artery; often hard to find because the surrounding mucosa is normal."
},
{
  "id": 245,
  "specialty": "General Surgery",
  "topic": "Upper GI Bleeding",
  "question": "Where is a Dieulafoy's lesion most commonly located?",
  "options": {
    "A": "Distal duodenum",
    "B": "Gastric antrum",
    "C": "Proximal stomach along the lesser curvature",
    "D": "Greater curvature of the body",
    "E": "Middle esophagus"
  },
  "answer": "C",
  "explanation": {
    "correct": "Most Dieulafoy's lesions (up to 80%) are located within 6 cm of the gastroesophageal junction on the lesser curvature.",
    "A": "Rare.",
    "B": "Possible but less common.",
    "C": "",
    "D": "Rare.",
    "E": "Rare."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Focus endoscopic search on the proximal lesser curvature in cases of unexplained massive UGI bleed."
},
{
  "id": 246,
  "specialty": "General Surgery",
  "topic": "Upper GI Bleeding",
  "question": "The first-line management for a bleeding Dieulafoy's lesion is:",
  "options": {
    "A": "Angiographic embolization",
    "B": "Endoscopic therapy (clips, cautery, or epinephrine)",
    "C": "Total gastrectomy",
    "D": "Oversewing of the vessel via gastrotomy",
    "E": "Acid suppression with IV PPI only"
  },
  "answer": "B",
  "explanation": {
    "correct": "Endoscopic therapy is successful in over 90% of cases. Thermal coagulation or hemoclips are preferred.",
    "A": "Second-line if endoscopy fails.",
    "B": "",
    "C": "Extreme measure, rarely needed.",
    "D": "Surgical option if minimally invasive methods fail.",
    "E": "Ineffective for an arterial lesion."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Endoscopy is both diagnostic and therapeutic for Dieulafoy's lesions."
},
{
  "id": 247,
  "specialty": "General Surgery",
  "topic": "Perforated Peptic Ulcer",
  "question": "A 45-year-old man presents with sudden-onset severe epigastric pain. Chest X-ray shows free air under the diaphragm. What is the most likely diagnosis?",
  "options": {
    "A": "Acute cholecystitis",
    "B": "Acute pancreatitis",
    "C": "Perforated peptic ulcer",
    "D": "Small bowel obstruction",
    "E": "Aortic dissection"
  },
  "answer": "C",
  "explanation": {
    "correct": "Pneumoperitoneum (free air) in the setting of acute abdominal pain is pathognomonic for a perforated hollow viscus, most commonly a peptic ulcer.",
    "A": "Rarely causes free air.",
    "B": "No free air; elevated amylase/lipase.",
    "C": "",
    "D": "Shows dilated loops and air-fluid levels, not free air.",
    "E": "No free air; chest pain radiating to back."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Sudden pain + Free air = Perforation (usually Duodenal Ulcer)."
},
{
  "id": 248,
  "specialty": "General Surgery",
  "topic": "Duodenal Ulcers",
  "question": "The most common site for a perforated peptic ulcer is the:",
  "options": {
    "A": "Posterior wall of the duodenum",
    "B": "Anterior wall of the duodenum",
    "C": "Gastric antrum",
    "D": "Lesser curvature of the stomach",
    "E": "Greater curvature of the stomach"
  },
  "answer": "B",
  "explanation": {
    "correct": "Anterior duodenal ulcers are prone to perforation into the peritoneal cavity, while posterior ulcers tend to bleed.",
    "A": "Tends to bleed (GDA erosion).",
    "B": "",
    "C": "Less common for perforation than duodenum.",
    "D": "Common for benign ulcers but less so for perforation.",
    "E": "Rare."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Anterior = Perforates; Posterior = Bleeds."
},
{
  "id": 249,
  "specialty": "General Surgery",
  "topic": "Duodenal Ulcers",
  "question": "Posterior duodenal ulcers that cause massive hemorrhage typically erode into which artery?",
  "options": {
    "A": "Left gastric artery",
    "B": "Gastroduodenal artery",
    "C": "Splenic artery",
    "D": "Superior mesenteric artery",
    "E": "Right gastric artery"
  },
  "answer": "B",
  "explanation": {
    "correct": "The gastroduodenal artery (GDA) runs directly behind the first part of the duodenum and is the classic source of massive hemorrhage from a posterior ulcer.",
    "A": "Associated with gastric ulcers.",
    "B": "",
    "C": "Associated with posterior gastric wall/pancreas.",
    "D": "Too distal.",
    "E": "Supplies the pylorus/lesser curve."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "GDA erosion is the reason posterior duodenal ulcers are life-threatening."
},
{
  "id": 250,
  "specialty": "General Surgery",
  "topic": "Perforated Peptic Ulcer",
  "question": "The most appropriate surgical treatment for a perforated duodenal ulcer in a patient with no previous history of peptic ulcer disease and significant peritoneal soilage is:",
  "options": {
    "A": "Truncal vagotomy and antrectomy",
    "B": "Highly selective vagotomy",
    "C": "Omental (Graham) patch closure",
    "D": "Subtotal gastrectomy",
    "E": "Pyloroplasty"
  },
  "answer": "C",
  "explanation": {
    "correct": "In the acute setting with significant contamination, simple closure with an omental patch is the safest and most appropriate procedure.",
    "A": "Too high risk in contaminated field.",
    "B": "Takes too long; not indicated in acute instability.",
    "C": "",
    "D": "Overly aggressive.",
    "E": "Used to widen the outlet, not close a perforation."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Graham patch is the gold standard for acute duodenal perforation."
},
{
  "id": 251,
  "specialty": "General Surgery",
  "topic": "Helicobacter Pylori",
  "question": "Infection with Helicobacter pylori has been strongly associated with all of the following EXCEPT:",
  "options": {
    "A": "Duodenal ulcer",
    "B": "Gastric adenocarcinoma",
    "C": "MALT lymphoma",
    "D": "Gastroesophageal reflux disease (GERD)",
    "E": "Atrophic gastritis"
  },
  "answer": "D",
  "explanation": {
    "correct": "H. pylori is NOT associated with GERD. In some cases, its presence (and the resulting atrophic gastritis) may even reduce acid production and GERD symptoms.",
    "A": ">90% association.",
    "B": "Class I carcinogen.",
    "C": "Primary association; eradication cures MALT.",
    "D": "",
    "E": "Chronic infection leads to atrophy."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "H. pylori causes ulcers and cancer, but generally not reflux."
},
{
  "id": 252,
  "specialty": "General Surgery",
  "topic": "Gastric Cancer",
  "question": "The most common presenting symptom of gastric adenocarcinoma is:",
  "options": {
    "A": "Massive hematemesis",
    "B": "Epigastric pain",
    "C": "Weight loss",
    "D": "Dysphagia",
    "E": "Palpable abdominal mass"
  },
  "answer": "B",
  "explanation": {
    "correct": "Epigastric pain, often mimicking PUD, is the most common symptom (found in ~70-80% of patients). Weight loss is the second most common.",
    "A": "Rare; chronic occult loss is more common.",
    "B": "",
    "C": "Very common but often occurs later than pain.",
    "D": "Common only in cardia/GE junction tumors.",
    "E": "Late sign (virchow's node, etc.)."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Gastric cancer often presents like benign dyspepsia, leading to delayed diagnosis."
},
{
  "id": 253,
  "specialty": "General Surgery",
  "topic": "Gastric Cancer",
  "question": "Sister Mary Joseph's nodule refers to a metastatic deposit from an intra-abdominal malignancy located in the:",
  "options": {
    "A": "Left supraclavicular node",
    "B": "Umbilicus",
    "C": "Rectovesical pouch",
    "D": "Left axillary node",
    "E": "Ovary"
  },
  "answer": "B",
  "explanation": {
    "correct": "Sister Mary Joseph nodule is a metastatic deposit in the umbilicus, often associated with gastric, pancreatic, or ovarian cancers.",
    "A": "Virchow's node.",
    "B": "",
    "C": "Blumer's shelf.",
    "D": "Irish's node.",
    "E": "Krukenberg tumor."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Physical exam signs in gastric cancer often represent advanced, incurable disease."
},
{
  "id": 254,
  "specialty": "General Surgery",
  "topic": "Gastric Cancer",
  "question": "Blumer's shelf is a physical exam finding in gastric cancer representing metastasis to the:",
  "options": {
    "A": "Liver",
    "B": "Lungs",
    "C": "Pelvic shelf (rectovesical or rectouterine pouch)",
    "D": "Umbilicus",
    "E": "Ovary"
  },
  "answer": "C",
  "explanation": {
    "correct": "Blumer's shelf is a palpable mass in the pelvis on rectal or vaginal exam, caused by drop metastasis.",
    "A": "Liver Mets.",
    "B": "Lung Mets.",
    "C": "",
    "D": "Sister Mary Joseph.",
    "E": "Krukenberg."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Blumer's shelf indicates Stage IV disease."
},
{
  "id": 255,
  "specialty": "General Surgery",
  "topic": "Gastric Cancer",
  "question": "Virchow's node, a sign of metastatic gastric cancer, is located in the:",
  "options": {
    "A": "Right supraclavicular area",
    "B": "Left supraclavicular area",
    "C": "Right axilla",
    "D": "Left axilla",
    "E": "Umbilicus"
  },
  "answer": "B",
  "explanation": {
    "correct": "Virchow's node (Troisier's sign) is a left supraclavicular lymph node that receives lymphatic drainage from the abdominal cavity via the thoracic duct.",
    "A": "Receives drainage from head/neck/thorax.",
    "B": "",
    "C": "Rare site.",
    "D": "Irish's node.",
    "E": "Sister Mary Joseph."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The left supraclavicular node is the classic sentinel node for abdominal malignancy."
},
{
  "id": 256,
  "specialty": "General Surgery",
  "topic": "Gastric Cancer",
  "question": "A Krukenberg tumor is a metastatic deposit of gastric adenocarcinoma located in the:",
  "options": {
    "A": "Liver",
    "B": "Brain",
    "C": "Ovary",
    "D": "Spleen",
    "E": "Lung"
  },
  "answer": "C",
  "explanation": {
    "correct": "Krukenberg tumors are typically bilateral ovarian metastases from a primary GI cancer (often signet-ring cell gastric cancer).",
    "A": "Liver mets.",
    "B": "Brain mets (rare in gastric cancer).",
    "C": "",
    "D": "Splenic involvement is usually direct extension.",
    "E": "Lung mets."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Gastric cancer metastasizes to the ovary via transcoelomic (peritoneal) spread."
},
{
  "id": 257,
  "specialty": "General Surgery",
  "topic": "Gastric Cancer",
  "question": "The most common histologic type of gastric malignancy is:",
  "options": {
    "A": "Squamous cell carcinoma",
    "B": "Adenocarcinoma",
    "C": "Lymphoma",
    "D": "Gastrointestinal stromal tumor (GIST)",
    "E": "Carcinoid"
  },
  "answer": "B",
  "explanation": {
    "correct": "Adenocarcinoma accounts for over 95% of all primary gastric malignancies.",
    "A": "Occurs in the esophagus.",
    "B": "",
    "C": "Accounts for ~3-5%.",
    "D": "Accounts for ~1-2%.",
    "E": "Rare."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "When one says 'gastric cancer,' they usually mean adenocarcinoma."
},
{
  "id": 258,
  "specialty": "General Surgery",
  "topic": "Gastric Cancer",
  "question": "Which of the following is a recognized risk factor for the development of gastric adenocarcinoma?",
  "options": {
    "A": "Blood type O",
    "B": "High-fiber diet",
    "C": "Pernicious anemia",
    "D": "Young age",
    "E": "Female gender"
  },
  "answer": "C",
  "explanation": {
    "correct": "Pernicious anemia (atrophic gastritis) increases risk by 2-3 fold. Other factors include H. pylori, Blood Type A, and smoking.",
    "A": "Blood type O is associated with duodenal ulcers.",
    "B": "Protective factor.",
    "C": "",
    "D": "Risk increases with age.",
    "E": "Males are at higher risk."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Atrophic conditions of the stomach create a pro-carcinogenic environment."
},
{
  "id": 259,
  "specialty": "General Surgery",
  "topic": "Gastric Lymphoma",
  "question": "The first-line treatment for a localized, H. pylori-positive MALT lymphoma of the stomach is:",
  "options": {
    "A": "Total gastrectomy",
    "B": "Combination chemotherapy (CHOP)",
    "C": "Radiation therapy",
    "D": "Antibiotic eradication of H. pylori",
    "E": "Observation only"
  },
  "answer": "D",
  "explanation": {
    "correct": "Eradication of H. pylori leads to complete regression of early-stage MALT lymphoma in 70-80% of cases.",
    "A": "Not indicated for MALT unless perforated/bleeding.",
    "B": "Reserved for high-grade or refractory disease.",
    "C": "Second-line for localized disease failing antibiotics.",
    "D": "",
    "E": "Active treatment is required."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "MALT lymphoma is the only cancer that can be 'cured' with antibiotics in many patients."
},
{
  "id": 260,
  "specialty": "General Surgery",
  "topic": "Gastrointestinal Stromal Tumors (GIST)",
  "question": "Gastrointestinal stromal tumors (GISTs) are thought to originate from which of the following cell types?",
  "options": {
    "A": "Parietal cells",
    "B": "Chief cells",
    "C": "Interstitial cells of Cajal",
    "D": "Smooth muscle cells",
    "E": "Neuroendocrine cells"
  },
  "answer": "C",
  "explanation": {
    "correct": "GISTs arise from the interstitial cells of Cajal (the pacemaker cells of the GI tract) and usually express the KIT (CD117) protein.",
    "A": "Epithelial origin.",
    "B": "Epithelial origin.",
    "C": "",
    "D": "Leiomyoma origin.",
    "E": "Carcinoid origin."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "GIST = CD117 positive mesenchymal tumor from cells of Cajal."
},
{
  "id": 261,
  "specialty": "General Surgery",
  "topic": "Gastric Carcinoids",
  "question": "The most common location for a gastric carcinoid tumor is the:",
  "options": {
    "A": "Antrum",
    "B": "Body (corpus)",
    "C": "Pylorus",
    "D": "Cardia",
    "E": "Duodenal bulb"
  },
  "answer": "B",
  "explanation": {
    "correct": "Gastric carcinoids (especially Type I) are most commonly found in the fundus and body, where the acid-producing glands are located.",
    "A": "Less common.",
    "B": "",
    "C": "Rare.",
    "D": "Rare.",
    "E": "Different entity (duodenal carcinoid)."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Gastric carcinoids often occur in the same location as parietal cells because they are driven by hypergastrinemia in Type I cases."
},
{
  "id": 262,
  "specialty": "General Surgery",
  "topic": "Gastric Carcinoids",
  "question": "Which type of gastric carcinoid is associated with chronic atrophic gastritis and hypergastrinemia?",
  "options": {
    "A": "Type I",
    "B": "Type II",
    "C": "Type III",
    "D": "Type IV",
    "E": "None of the above"
  },
  "answer": "A",
  "explanation": {
    "correct": "Type I carcinoids (70-80%) are associated with hypergastrinemia due to atrophic gastritis (pernicious anemia). They are often multiple and small.",
    "A": "",
    "B": "Associated with ZES and MEN1.",
    "C": "Sporadic and aggressive (normal gastrin).",
    "D": "Not a standard classification.",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Type I carcinoids are generally benign and can often be managed endoscopically."
},
{
  "id": 263,
  "specialty": "General Surgery",
  "topic": "GIST",
  "question": "The most appropriate surgical management for a solitary 3 cm gastric GIST is:",
  "options": {
    "A": "Total gastrectomy",
    "B": "Wedge resection with 1-2 cm margins",
    "C": "Endoscopic mucosal resection",
    "D": "Vagotomy and antrectomy",
    "E": "Observation until >5 cm"
  },
  "answer": "B",
  "explanation": {
    "correct": "GISTs do not typically spread via lymphatics, so a wedge resection with clear margins is sufficient. Lymphadenectomy is not required.",
    "A": "Overly aggressive.",
    "B": "",
    "C": "High risk of incomplete resection for a 3 cm lesion.",
    "D": "Not indicated for GIST.",
    "E": "Any symptomatic or >2 cm GIST should be resected."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "GIST surgery = Clear margins; No lymphadenectomy needed."
},
{
  "id": 264,
  "specialty": "General Surgery",
  "topic": "Gastric Lymphoma",
  "question": "Which of the following is true regarding gastric lymphoma?",
  "options": {
    "A": "The stomach is the most common site of extra-nodal lymphoma.",
    "B": "Most are Hodgkin's lymphoma.",
    "C": "Surgery is always the first-line treatment.",
    "D": "It is not related to H. pylori.",
    "E": "It only occurs in the fundus."
  },
  "answer": "A",
  "explanation": {
    "correct": "The stomach is indeed the most common site for extranodal lymphoma. Most are Non-Hodgkin's (B-cell).",
    "A": "",
    "B": "Almost all are Non-Hodgkin.",
    "C": "Chemotherapy/Radiation/Antibiotics are often first-line.",
    "D": "Strongly related to H. pylori (MALT).",
    "E": "Can occur anywhere."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The stomach is the 'king' of extranodal lymphoma."
},
{
  "id": 265,
  "specialty": "General Surgery",
  "topic": "Menetrier's Disease",
  "question": "Menetrier's disease is characterized by massive gastric rugal folds and which of the following metabolic findings?",
  "options": {
    "A": "Hyperproteinemia",
    "B": "Protein-losing enteropathy and hypoalbuminemia",
    "C": "Increased acid secretion",
    "D": "Low serum gastrin",
    "E": "Vitamin B12 hyper-absorption"
  },
  "answer": "B",
  "explanation": {
    "correct": "Menetrier's is a protein-losing gastropathy characterized by foveolar hyperplasia and loss of parietal cells (achlorhydria).",
    "A": "Hypoproteinemia occurs.",
    "B": "",
    "C": "Achlorhydria is the rule.",
    "D": "Gastrin may be elevated due to low acid.",
    "E": "B12 deficiency is more likely."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Menetrier's = Huge folds + Low acid + Low protein."
},
{
  "id": 266,
  "specialty": "General Surgery",
  "topic": "Gastric Bezoars",
  "question": "The most common type of bezoar, often composed of vegetable fiber and associated with prior gastric surgery (vagotomy), is a:",
  "options": {
    "A": "Trichobezoar",
    "B": "Phytobezoar",
    "C": "Pharmacobezoar",
    "D": "Lactobezoar",
    "E": "Plasticobezoar"
  },
  "answer": "B",
  "explanation": {
    "correct": "Phytobezoars are composed of indigestible plant material (cellulose, lignin). They occur when motility is impaired.",
    "A": "Hair (often in psych patients).",
    "B": "",
    "C": "Medications.",
    "D": "Milk (in infants).",
    "E": "Not a standard term."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Post-vagotomy patients are prone to phytobezoars due to reduced motility and acid."
},
{
  "id": 267,
  "specialty": "General Surgery",
  "topic": "Gastric Outlet Obstruction",
  "question": "In the modern era, what is the most common cause of gastric outlet obstruction in adults?",
  "options": {
    "A": "Peptic ulcer disease (PUD)",
    "B": "Malignancy (gastric or pancreatic cancer)",
    "C": "Bezoars",
    "D": "Pyloric stenosis",
    "E": "Gastric volvulus"
  },
  "answer": "B",
  "explanation": {
    "correct": "While PUD was historically the leading cause, malignancy now accounts for the majority of cases in many Western series.",
    "A": "Historically #1, now decreasing due to PPIs/H. pylori treatment.",
    "B": "",
    "C": "Rare cause.",
    "D": "Congenital; rare in adults.",
    "E": "Causes acute obstruction but not 'outlet' obstruction in the classic chronic sense."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Chronic outlet obstruction in an adult is malignancy until proven otherwise."
},
{
  "id": 268,
  "specialty": "General Surgery",
  "topic": "Gastric Volvulus",
  "question": "Acute gastric volvulus is most commonly associated with which of the following pre-existing conditions?",
  "options": {
    "A": "Truncal vagotomy",
    "B": "Paraesophageal (Type II-IV) hiatal hernia",
    "C": "Splenectomy",
    "D": "Chronic gastritis",
    "E": "Gastric cancer"
  },
  "answer": "B",
  "explanation": {
    "correct": "A large hiatal hernia provides the space and laxity required for the stomach to rotate on its mesenteric axis.",
    "A": "No association.",
    "B": "",
    "C": "Laxity of gastrosplenic ligament may play a minor role, but hernia is #1.",
    "D": "No association.",
    "E": "Can cause volvulus but less common than hernia."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Hiatal hernia is the 'setup' for gastric volvulus."
},
{
  "id": 269,
  "specialty": "General Surgery",
  "topic": "Gastric Volvulus",
  "question": "The classic 'Borchardt’s Triad' for acute gastric volvulus includes all of the following EXCEPT:",
  "options": {
    "A": "Acute epigastric pain and distention",
    "B": "Inability to pass a nasogastric tube",
    "C": "Non-productive retching",
    "D": "Massive hematemesis",
    "E": "None of the above"
  },
  "answer": "D",
  "explanation": {
    "correct": "Borchardt's triad consists of: 1. Pain/Distention, 2. Retching without emesis, 3. Inability to pass an NG tube. Hematemesis is NOT part of the triad.",
    "A": "Part of the triad.",
    "B": "Part of the triad.",
    "C": "Part of the triad.",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Remember Borchardt's Triad: Pain, Retching, No NG tube."
},
{
  "id": 270,
  "specialty": "General Surgery",
  "topic": "Gastric Lymphoma",
  "question": "What is the most common histological subtype of primary gastric lymphoma?",
  "options": {
    "A": "Follicular lymphoma",
    "B": "Diffuse large B-cell lymphoma (DLBCL)",
    "C": "Mantle cell lymphoma",
    "D": "Burkitt lymphoma",
    "E": "Hodgkin's lymphoma"
  },
  "answer": "B",
  "explanation": {
    "correct": "While MALT is the classic 'low-grade' gastric lymphoma, Diffuse Large B-Cell Lymphoma (DLBCL) is the most common overall high-grade primary gastric lymphoma.",
    "A": "Rare in stomach.",
    "B": "",
    "C": "Rare in stomach.",
    "D": "Rare in stomach.",
    "E": "Extremely rare in stomach."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Primary gastric lymphomas are almost always B-cell Non-Hodgkin's (MALT or DLBCL)."
}
,
{
  "id": 271,
  "specialty": "General Surgery",
  "topic": "Liver",
  "question": "Which of the following statements is true regarding the segmental anatomy of the liver?",
  "options": {
    "A": "Segment I is the left lateral segment.",
    "B": "Segment IV is the caudate lobe.",
    "C": "Segment VIII is in the left lobe.",
    "D": "The line of Cantlie separates the right and left lobes.",
    "E": "The falciform ligament separates the right and left lobes."
  },
  "answer": "D",
  "explanation": {
    "correct": "Cantlie's line, which runs from the IVC to the gallbladder fossa, separates the anatomic right and left lobes.",
    "A": "Segment I is the caudate lobe.",
    "B": "Segment IV is the quadrate lobe.",
    "C": "Segment VIII is part of the right lobe.",
    "D": "",
    "E": "The falciform ligament separates the left lateral and left medial segments."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Cantlie's line is the surgical landmark dividing the right and left liver."
},
{
  "id": 272,
  "specialty": "General Surgery",
  "topic": "Liver",
  "question": "The most common variation in hepatic arterial anatomy is:",
  "options": {
    "A": "Replaced right hepatic artery from the SMA.",
    "B": "Replaced left hepatic artery from the left gastric artery.",
    "C": "Accessory right hepatic artery from the celiac axis.",
    "D": "Common hepatic artery from the SMA.",
    "E": "Replaced left hepatic artery from the SMA."
  },
  "answer": "A",
  "explanation": {
    "correct": "A replaced right hepatic artery from the SMA is the most common variant (15-20%).",
    "A": "",
    "B": "Second most common variant.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The SMA often gives rise to a replaced right hepatic artery."
},
{
  "id": 273,
  "specialty": "General Surgery",
  "topic": "Liver",
  "question": "Which of the following is true concerning the hepatic arterial buffer response?",
  "options": {
    "A": "It refers to the autoregulation of portal venous flow.",
    "B": "Adenosine is the primary mediator.",
    "C": "It involves an increase in hepatic arterial flow when portal flow increases.",
    "D": "It is mediated by the sympathetic nervous system.",
    "E": "It is absent in transplanted livers."
  },
  "answer": "B",
  "explanation": {
    "correct": "Adenosine builds up when portal flow is low, causing arterial dilation (buffer response).",
    "A": "It refers to the regulation of arterial flow.",
    "B": "",
    "C": "Flow increases when portal flow *decreases*.",
    "D": "",
    "E": "It is preserved."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The liver buffers portal flow changes by adjusting arterial flow via adenosine."
},
{
  "id": 274,
  "specialty": "General Surgery",
  "topic": "Liver",
  "question": "Which of the following statements is true about the portal vein?",
  "options": {
    "A": "It is formed by the junction of the inferior mesenteric vein and splenic vein.",
    "B": "It is the most dorsal structure in the hepatoduodenal ligament.",
    "C": "It contains the valves of Mirizzi.",
    "D": "The right portal vein typically branches later than the left portal vein.",
    "E": "It carries deoxygenated blood and provides only 10% of the liver's oxygenation."
  },
  "answer": "B",
  "explanation": {
    "correct": "The portal vein lies posterior (dorsal) to the bile duct and hepatic artery.",
    "A": "Formed by SMV and splenic vein.",
    "B": "",
    "C": "Mirizzi refers to ductal compression, not valves.",
    "D": "Right branches early.",
    "E": "Provides 50-70% of oxygenation."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Portal vein is the deepest structure in the portal triad."
},
{
  "id": 275,
  "specialty": "General Surgery",
  "topic": "Liver",
  "question": "During hepatic inflow occlusion (Pringle maneuver), the bleeding from a liver injury is noted to continue. Which of the following is most likely to be the cause of the ongoing bleeding?",
  "options": {
    "A": "The common hepatic artery.",
    "B": "The portal vein.",
    "C": "A replaced left hepatic artery from the left gastric artery.",
    "D": "The hepatic veins.",
    "E": "The splenic artery."
  },
  "answer": "D",
  "explanation": {
    "correct": "The Pringle maneuver stops inflow but not back-bleeding from the hepatic veins or retrohepatic IVC.",
    "A": "Stopped by Pringle.",
    "B": "Stopped by Pringle.",
    "C": "Could cause bleeding, but hepatic veins are a more common/classic cause.",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Persistent bleeding after Pringle maneuver indicates hepatic vein or IVC injury."
},
{
  "id": 276,
  "specialty": "General Surgery",
  "topic": "Liver",
  "question": "An otherwise healthy 30-year-old woman is found to have a liver lesion on ultrasound. All of the following would point to a diagnosis of hepatic hemangioma except:",
  "options": {
    "A": "The lesion is asymptomatic.",
    "B": "A bruit is audible over the liver.",
    "C": "The lesion is peripheral in location.",
    "D": "CT scan shows peripheral enhancement with central progression.",
    "E": "Technetium-labeled red blood cell (RBC) scan shows late pooling of tracer."
  },
  "answer": "B",
  "explanation": {
    "correct": "Bruits are more common in AV malformations or hypervascular tumors like HCC, not simple hemangiomas.",
    "A": "Most are asymptomatic.",
    "B": "",
    "C": "Common location.",
    "D": "Classic imaging finding.",
    "E": "Diagnostic test."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Hepatic hemangiomas are typically silent and show 'fill-in' on contrast imaging."
},
{
  "id": 277,
  "specialty": "General Surgery",
  "topic": "Liver",
  "question": "Which of the following hepatic resections involves dissection in the plane of the falciform ligament or umbilical fissure?",
  "options": {
    "A": "Right lobectomy",
    "B": "Right trisegmentectomy",
    "C": "Left lobectomy",
    "D": "Left lateral segmentectomy",
    "E": "None of the above"
  },
  "answer": "D",
  "explanation": {
    "correct": "Left lateral segmentectomy involves removing segments II and III, separated from segment IV by the umbilical fissure/falciform ligament.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The umbilical fissure is the boundary for left lateral segmentectomy."
},
{
  "id": 278,
  "specialty": "General Surgery",
  "topic": "Liver",
  "question": "Which of the following is true concerning the hepatic resection?",
  "options": {
    "A": "The mortality for right lobectomy is 10% in major centers.",
    "B": "Hemorrhage is the most common cause of death after liver resection.",
    "C": "A left lobectomy includes segments V, VI, VII, and VIII.",
    "D": "A left lateral segmentectomy includes segments II, III, and IV.",
    "E": "A right trisegmentectomy includes segments IV, V, VI, VII, and VIII."
  },
  "answer": "E",
  "explanation": {
    "correct": "A right trisegmentectomy (extended right hepatectomy) includes all segments except II and III (and usually I).",
    "A": "Mortality is <5% now.",
    "B": "Liver failure/sepsis is more common now.",
    "C": "Those are right lobe segments.",
    "D": "Only II and III.",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Right trisegmentectomy is a major resection leaving only segments II and III."
},
{
  "id": 279,
  "specialty": "General Surgery",
  "topic": "Liver",
  "question": "All of the following are true concerning the diagnosis and treatment of pyogenic liver abscess except:",
  "options": {
    "A": "The most common cause is biliary tract disease.",
    "B": "Blood cultures are positive in 50% to 100% of cases.",
    "C": "Most cases are polymicrobial.",
    "D": "Jaundice is usually present.",
    "E": "CT scan is the most sensitive diagnostic test."
  },
  "answer": "D",
  "explanation": {
    "correct": "Jaundice is actually UNCOMMON in liver abscess unless there is concurrent biliary obstruction.",
    "A": "Primary source.",
    "B": "",
    "C": "True for pyogenic.",
    "D": "",
    "E": "Standard imaging."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Pyogenic liver abscess typically presents with fever and pain, not jaundice."
},
{
  "id": 280,
  "specialty": "General Surgery",
  "topic": "Liver",
  "question": "Which of the following is true regarding the diagnosis and treatment of amebic liver abscess?",
  "options": {
    "A": "It is caused by the parasite Entamoeba histolytica.",
    "B": "Most patients have active intestinal amebiasis.",
    "C": "Surgical drainage is the treatment of choice.",
    "D": "The most common symptom is jaundice.",
    "E": "It is more common in women."
  },
  "answer": "A",
  "explanation": {
    "correct": "Entamoeba histolytica is the causative agent.",
    "A": "",
    "B": "Only ~10% have active dysentery.",
    "C": "Metronidazole is the treatment.",
    "D": "Pain and fever.",
    "E": "More common in men (10:1)."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Amebic liver abscess is a medical disease, not a surgical one."
},
{
  "id": 281,
  "specialty": "General Surgery",
  "topic": "Liver",
  "question": "All of the following are true concerning hydatid cyst of the liver except:",
  "options": {
    "A": "It is caused by the parasite Echinococcus granulosus.",
    "B": "Casoni's skin test is the most specific diagnostic test.",
    "C": "Calcification of the cyst wall is a common finding.",
    "D": "Spillage of cyst contents can cause anaphylaxis.",
    "E": "Treatment consists of surgical excision or drainage."
  },
  "answer": "B",
  "explanation": {
    "correct": "Casoni's test is historically used but is neither sensitive nor specific. Serology (ELISA) is preferred.",
    "A": "",
    "B": "",
    "C": "Common finding.",
    "D": "Due to high antigen content.",
    "E": "Surgical management is standard."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Hydatid cysts require careful management to avoid life-threatening anaphylaxis."
},
{
  "id": 282,
  "specialty": "General Surgery",
  "topic": "Liver",
  "question": "A 45-year-old woman is found to have a 5-cm liver mass on CT scan during evaluation for vague abdominal pain. The mass is hypervascular and has a central scar. Which of the following is the most likely diagnosis?",
  "options": {
    "A": "Hepatic adenoma",
    "B": "Focal nodular hyperplasia (FNH)",
    "C": "Hepatic hemangioma",
    "D": "Hepatocellular carcinoma (HCC)",
    "E": "Metastatic disease"
  },
  "answer": "B",
  "explanation": {
    "correct": "A central stellate scar in a hypervascular mass is the classic description of FNH.",
    "A": "No central scar.",
    "B": "",
    "C": "Peripheral fill-in.",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Central stellate scar = FNH."
},
{
  "id": 283,
  "specialty": "General Surgery",
  "topic": "Liver",
  "question": "Which of the following is true about hepatic adenoma?",
  "options": {
    "A": "It is more common in men.",
    "B": "It is associated with the use of oral contraceptives.",
    "C": "The risk of malignant transformation is zero.",
    "D": "It should be managed conservatively if larger than 5 cm.",
    "E": "It is usually symptomatic at presentation."
  },
  "answer": "B",
  "explanation": {
    "correct": "Hepatic adenomas are strongly associated with estrogen use.",
    "A": "Women (9:1).",
    "B": "",
    "C": "Risk is ~10%.",
    "D": "Resect if >5 cm.",
    "E": "Usually asymptomatic unless bleeding."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Hepatic adenoma = Estrogen + Risk of rupture/cancer."
},
{
  "id": 284,
  "specialty": "General Surgery",
  "topic": "Spleen",
  "question": "Which of the following statements regarding splenic anatomy is true?",
  "options": {
    "A": "The splenic ligaments are all avascular.",
    "B": "The tail of the pancreas is often contained in the splenorenal ligament.",
    "C": "The average weight of the adult spleen is 300 g.",
    "D": "The first branches of the splenic artery are the short gastric arteries.",
    "E": "Accessory spleens are most commonly found in the greater omentum."
  },
  "answer": "B",
  "explanation": {
    "correct": "The splenorenal ligament contains the splenic vessels and the pancreatic tail.",
    "A": "Gastrosplenic ligament contains short gastrics.",
    "B": "",
    "C": "Average is ~150g.",
    "D": "Pancreatic branches are first.",
    "E": "Found in the hilum."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Pancreas tail injury is a risk during splenectomy due to its location in the splenorenal ligament."
},
{
  "id": 285,
  "specialty": "General Surgery",
  "topic": "Spleen",
  "question": "All of the following are functions of the spleen except:",
  "options": {
    "A": "Filtration of old and damaged erythrocytes.",
    "B": "Pitting and culling of erythrocytes.",
    "C": "Production of tuftsin and properdin.",
    "D": "Production of factor VIII.",
    "E": "Phagocytosis of encapsulated bacteria."
  },
  "answer": "D",
  "explanation": {
    "correct": "Factor VIII is produced by endothelial cells, primarily in the liver and kidneys.",
    "A": "True.",
    "B": "True.",
    "C": "True (opsonins).",
    "D": "",
    "E": "True."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The spleen is a critical immunological and hematological filter."
},
{
  "id": 286,
  "specialty": "General Surgery",
  "topic": "Spleen",
  "question": "All of the following are true regarding the blood supply of the spleen except:",
  "options": {
    "A": "The splenic artery is a branch of the celiac axis.",
    "B": "The splenic vein joins the superior mesenteric vein to form the portal vein.",
    "C": "The splenic artery follows a tortuous course along the superior border of the pancreas.",
    "D": "The short gastric arteries are branches of the left gastroepiploic artery.",
    "E": "The splenic vein lies posterior to the pancreas."
  },
  "answer": "D",
  "explanation": {
    "correct": "The short gastric arteries are terminal branches of the splenic artery itself.",
    "A": "True.",
    "B": "True.",
    "C": "True.",
    "D": "",
    "E": "True."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The splenic artery is the largest branch of the celiac trunk."
},
{
  "id": 287,
  "specialty": "General Surgery",
  "topic": "Spleen",
  "question": "Which of the following is the most common indication for splenectomy?",
  "options": {
    "A": "Splenic trauma",
    "B": "Immune thrombocytopenic purpura (ITP)",
    "C": "Hereditary spherocytosis",
    "D": "Splenic abscess",
    "E": "Hodgkin's disease"
  },
  "answer": "A",
  "explanation": {
    "correct": "Trauma remains the leading cause of splenectomy, though medical indications are common.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Splenic trauma is the most frequent surgical indication for spleen removal."
},
{
  "id": 288,
  "specialty": "General Surgery",
  "topic": "Spleen",
  "question": "All of the following are true regarding splenic trauma except:",
  "options": {
    "A": "The spleen is the most commonly injured organ in blunt abdominal trauma.",
    "B": "Most splenic injuries in children can be managed nonoperatively.",
    "C": "Kehr's sign is pain in the left shoulder.",
    "D": "Postsplenectomy sepsis is most commonly caused by Streptococcus pneumoniae.",
    "E": "A grade III splenic injury involves a subcapsular hematoma of <10% surface area."
  },
  "answer": "E",
  "explanation": {
    "correct": "Grade III injury is a hematoma >50% or a laceration >3cm.",
    "A": "True.",
    "B": "True (90%+).",
    "C": "True (phrenic nerve irritation).",
    "D": "True.",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Grading of splenic injury guides the decision for operative vs. non-operative management."
},
{
  "id": 289,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Which of the following vascular relationships is not an important consideration during resection of the head of the pancreas?",
  "options": {
    "A": "Arterial supply of the pancreatic head from the splenic artery",
    "B": "Confluence of the splenic vein and superior mesenteric vein dorsal to the pancreatic neck",
    "C": "Absence of ventral portal vein branches dorsal to the pancreatic neck",
    "D": "Origin of the right hepatic artery from the superior mesenteric artery",
    "E": "Origin of the middle colic artery from the superior mesenteric artery"
  },
  "answer": "A",
  "explanation": {
    "correct": "The pancreatic head is supplied by the pancreaticoduodenal arcade (GDA and SMA), not the splenic artery.",
    "A": "",
    "B": "Crucial landmark.",
    "C": "Allows for the 'tunnel' during Whipple.",
    "D": "Replaced RHA must be identified.",
    "E": "Must be preserved."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Splenic artery supplies the body and tail, while the head is supplied by the SMA and GDA."
},
{
  "id": 290,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "The major blood supply to the body and tail of the pancreas is from which of the following?",
  "options": {
    "A": "Superior mesenteric artery",
    "B": "Gastroduodenal artery",
    "C": "Splenic artery",
    "D": "Right gastric artery",
    "E": "Inferior mesenteric artery"
  },
  "answer": "C",
  "explanation": {
    "correct": "The splenic artery gives off numerous small branches to the pancreas body and tail.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Splenic artery = Pancreatic body/tail supply."
},
{
  "id": 291,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Which of the following is true concerning the pancreas?",
  "options": {
    "A": "The pancreas is a primarily retroperitoneal organ.",
    "B": "The pancreatic duct of Santorini is the main pancreatic duct.",
    "C": "The uncinate process lies anterior to the superior mesenteric vessels.",
    "D": "The pancreas develops from a single ventral bud.",
    "E": "The head of the pancreas lies in the hilum of the spleen."
  },
  "answer": "A",
  "explanation": {
    "correct": "The pancreas is secondarily retroperitoneal.",
    "A": "",
    "B": "Santorini is accessory; Wirsung is main.",
    "C": "Lies posterior.",
    "D": "Dorsal and ventral buds.",
    "E": "Tail lies in the hilum."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The pancreas is a retroperitoneal organ with complex vascular relations."
},
{
  "id": 292,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "All of the following are true concerning the embryology of the pancreas except:",
  "options": {
    "A": "The pancreas develops from a dorsal and a ventral bud.",
    "B": "The ventral bud forms the uncinate process and part of the head.",
    "C": "Pancreas divisum is the most common congenital anomaly.",
    "D": "Annular pancreas is a failure of the ventral bud to rotate.",
    "E": "Ectopic pancreas is most commonly found in the ileum."
  },
  "answer": "E",
  "explanation": {
    "correct": "Ectopic pancreas is most common in the stomach or duodenum.",
    "A": "True.",
    "B": "True.",
    "C": "True.",
    "D": "True.",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Congenital anomalies of the pancreas are common and often asymptomatic."
},
{
  "id": 293,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "All of the following are true concerning the physiology of the pancreas except:",
  "options": {
    "A": "CCK is the primary stimulus for enzyme secretion.",
    "B": "Secretin is the primary stimulus for bicarbonate secretion.",
    "C": "The pancreas secretes approximately 1 L of fluid per day.",
    "D": "Somatostatin inhibits pancreatic secretion.",
    "E": "Acetylcholine inhibits pancreatic enzyme secretion."
  },
  "answer": "E",
  "explanation": {
    "correct": "ACh (vagal) stimulates pancreatic secretion.",
    "A": "True.",
    "B": "True.",
    "C": "True.",
    "D": "True.",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Pancreatic secretion is controlled by both neural and hormonal pathways."
},
{
  "id": 294,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Which of the following is the most common cause of acute pancreatitis in the United States?",
  "options": {
    "A": "Alcohol",
    "B": "Biliary tract disease",
    "C": "Hypertriglyceridemia",
    "D": "Hypercalcemia",
    "E": "Trauma"
  },
  "answer": "B",
  "explanation": {
    "correct": "Gallstones are the leading cause of acute pancreatitis.",
    "A": "Second most common.",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Gallstone pancreatitis is a frequent surgical emergency."
},
{
  "id": 295,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Ranson's criteria for acute pancreatitis at the time of admission include all of the following except:",
  "options": {
    "A": "Age > 55 years",
    "B": "WBC > 16,000/mm3",
    "C": "Glucose > 200 mg/dL",
    "D": "LDH > 350 IU/L",
    "E": "Hematocrit decrease > 10%"
  },
  "answer": "E",
  "explanation": {
    "correct": "Hematocrit decrease is part of the 48-hour criteria, not admission.",
    "A": "Admission.",
    "B": "Admission.",
    "C": "Admission.",
    "D": "Admission.",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Ranson's criteria assess severity based on physiological derangement."
},
{
  "id": 296,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Which of the following is true concerning pancreatic pseudocysts?",
  "options": {
    "A": "Most pseudocysts require surgical drainage.",
    "B": "The wall of a pseudocyst is lined by epithelium.",
    "C": "Spontaneous resolution occurs in up to 50% of cases.",
    "D": "Percutaneous drainage is the treatment of choice for all symptomatic pseudocysts.",
    "E": "They most commonly occur in the head of the pancreas."
  },
  "answer": "C",
  "explanation": {
    "correct": "Many pseudocysts resolve spontaneously within 6 weeks.",
    "A": "Most resolve.",
    "B": "Nonepithelialized.",
    "C": "",
    "D": "Surgery/Endoscopy for non-infected.",
    "E": "Body and tail."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Watchful waiting is appropriate for early pancreatic pseudocysts."
},
{
  "id": 297,
  "specialty": "General Surgery",
  "topic": "Biliary",
  "question": "All of the following are true concerning the anatomy of the gallbladder and biliary tract except:",
  "options": {
    "A": "The gallbladder is located in a fossa on the inferior surface of the liver.",
    "B": "The cystic artery usually arises from the right hepatic artery.",
    "C": "Calot's triangle is bounded by the cystic duct, common hepatic duct, and the liver.",
    "D": "The common bile duct is formed by the junction of the cystic duct and hepatic duct.",
    "E": "The blood supply to the common bile duct is primarily from the portal vein."
  },
  "answer": "E",
  "explanation": {
    "correct": "The CBD is supplied by the GDA and right hepatic artery (3 and 9 o'clock positions).",
    "A": "True.",
    "B": "True.",
    "C": "True.",
    "D": "True.",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Bile duct blood supply is fragile and purely arterial."
},
{
  "id": 298,
  "specialty": "General Surgery",
  "topic": "Biliary",
  "question": "Which of the following is the most common cause of gallstones in the Western world?",
  "options": {
    "A": "Pigment stones",
    "B": "Cholesterol stones",
    "C": "Calcium carbonate stones",
    "D": "Mixed stones",
    "E": "Bile acid stones"
  },
  "answer": "B",
  "explanation": {
    "correct": "Cholesterol stones (including mixed) account for 80% of stones.",
    "A": "More common in cirrhosis/hemolysis.",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Cholesterol stones are the predominant type in the West."
},
{
  "id": 299,
  "specialty": "General Surgery",
  "topic": "Biliary",
  "question": "All of the following are risk factors for cholesterol gallstones except:",
  "options": {
    "A": "Female gender",
    "B": "Obesity",
    "C": "Rapid weight loss",
    "D": "Chronic hemolytic anemia",
    "E": "Multiparity"
  },
  "answer": "D",
  "explanation": {
    "correct": "Hemolysis causes pigment (bilirubinate) stones, not cholesterol stones.",
    "A": "True.",
    "B": "True.",
    "C": "True.",
    "D": "",
    "E": "True."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Know the 'F' risk factors: Female, Forty, Fat, Fertile."
},
{
  "id": 300,
  "specialty": "General Surgery",
  "topic": "Biliary",
  "question": "All of the following are true regarding the diagnosis of acute cholecystitis except:",
  "options": {
    "A": "The most common symptom is RUQ pain.",
    "B": "Murphy's sign is specific for acute cholecystitis.",
    "C": "Ultrasound is the initial test of choice.",
    "D": "HIDA scan is the most sensitive test.",
    "E": "Jaundice is present in the majority of patients."
  },
  "answer": "E",
  "explanation": {
    "correct": "Jaundice in acute cholecystitis is rare (<20%) and should raise suspicion for CBD stones (Mirizzi's).",
    "A": "True.",
    "B": "True.",
    "C": "True.",
    "D": "True.",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Jaundice + Cholecystitis = CBD stone until proven otherwise."
},
{
  "id": 301,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "The uncinate process of the pancreas is adjacent and dorsal to which of the following?",
  "options": {
    "A": "Splenic vein",
    "B": "Inferior vena cava",
    "C": "Superior mesenteric artery",
    "D": "Left renal vein",
    "E": "Fourth portion of the duodenum"
  },
  "answer": "C",
  "explanation": {
    "correct": "The SMA/SMV pass anterior to the uncinate process.",
    "A": "",
    "B": "Posterior to uncinate.",
    "C": "",
    "D": "Posterior to uncinate.",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The uncinate process 'hooks' behind the mesenteric vessels."
},
{
  "id": 302,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Which of the following is true concerning the blood supply to the pancreas?",
  "options": {
    "A": "The head is supplied by the celiac axis only.",
    "B": "The body and tail are supplied by the SMA only.",
    "C": "The pancreaticoduodenal arteries form an arcade between the celiac and SMA.",
    "D": "The splenic artery provides no blood supply.",
    "E": "The IMA provides the primary supply."
  },
  "answer": "C",
  "explanation": {
    "correct": "The head is a watershed area between celiac and SMA.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Pancreas head blood supply comes from two major arterial trunks."
},
{
  "id": 303,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Which of the following is the most common site of ectopic pancreas?",
  "options": {
    "A": "Stomach",
    "B": "Duodenum",
    "C": "Jejunum",
    "D": "Meckel's diverticulum",
    "E": "All of the above are common sites"
  },
  "answer": "E",
  "explanation": {
    "correct": "Ectopic pancreas can be found anywhere in the foregut derivatives.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Ectopic pancreas is usually an incidental finding."
},
{
  "id": 304,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "All of the following are true concerning chronic pancreatitis except:",
  "options": {
    "A": "Alcoholism is the most common cause.",
    "B": "Pain is the most common symptom.",
    "C": "Malabsorption and diabetes are late findings.",
    "D": "ERCP is the most sensitive diagnostic test.",
    "E": "Total pancreatectomy is the treatment of choice."
  },
  "answer": "E",
  "explanation": {
    "correct": "Surgery is for pain relief; drainage or partial resection is preferred over total pancreatectomy.",
    "A": "True.",
    "B": "True.",
    "C": "True.",
    "D": "True.",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Management of chronic pancreatitis is largely symptomatic and medical."
},
{
  "id": 305,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Which of the following is the most common islet cell tumor?",
  "options": {
    "A": "Insulinoma",
    "B": "Gastrinoma",
    "C": "Glucagonoma",
    "D": "Somatostatinoma",
    "E": "VIPoma"
  },
  "answer": "A",
  "explanation": {
    "correct": "Insulinoma is the most frequent neuroendocrine tumor of the pancreas.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Insulinoma is the 'most common' of the rare islet cell tumors."
},
{
  "id": 306,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Whipple's triad for insulinoma includes all of the following except:",
  "options": {
    "A": "Symptoms of hypoglycemia during fasting.",
    "B": "Blood glucose < 50 mg/dL during symptoms.",
    "C": "Relief of symptoms with glucose administration.",
    "D": "Elevated C-peptide levels.",
    "E": "Symptoms occur after exercise."
  },
  "answer": "D",
  "explanation": {
    "correct": "C-peptide is a lab finding, not part of the clinical triad.",
    "A": "Part of triad.",
    "B": "Part of triad.",
    "C": "Part of triad.",
    "D": "",
    "E": "Common trigger."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Whipple's triad is the hallmark for diagnosing insulinoma."
},
{
  "id": 307,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Which of the following is true concerning gastrinoma (Zollinger-Ellison syndrome)?",
  "options": {
    "A": "Most gastrinomas are benign.",
    "B": "Most gastrinomas are found in the head of the pancreas.",
    "C": "The 'gastrinoma triangle' is bounded by the cystic duct, duodenum, and pancreas neck.",
    "D": "Total gastrectomy is the treatment of choice.",
    "E": "Secretin stimulation results in a decrease in gastrin."
  },
  "answer": "C",
  "explanation": {
    "correct": "Passaro's triangle is where most gastrinomas (pancreatic and extrapancreatic) are located.",
    "A": "60-90% are malignant.",
    "B": "Many are in the duodenum.",
    "C": "",
    "D": "PPIs are first-line; surgery for cure.",
    "E": "Increase in gastrin."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Secretin stimulation is a paradoxical diagnostic test for ZES."
},
{
  "id": 308,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Which of the following is true concerning the surgical treatment of pancreatic cancer?",
  "options": {
    "A": "Most patients are candidates for resection.",
    "B": "The Whipple procedure involves resection of the head, duodenum, gallbladder, and distal stomach.",
    "C": "5-year survival after Whipple is 50%.",
    "D": "SMA involvement is not a contraindication.",
    "E": "Total pancreatectomy is better than Whipple."
  },
  "answer": "B",
  "explanation": {
    "correct": "Classic Whipple includes distal gastrectomy.",
    "A": "Only 15-20%.",
    "B": "",
    "C": "Survival is ~20%.",
    "D": "SMA involvement = unresectable.",
    "E": "No survival benefit; high morbidity."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Pancreaticoduodenectomy is a complex but standard operation for head tumors."
},
{
  "id": 309,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Which of the following is the most common symptom of pancreatic cancer?",
  "options": {
    "A": "Jaundice",
    "B": "Weight loss",
    "C": "Pain",
    "D": "Nausea",
    "E": "Diarrhea"
  },
  "answer": "B",
  "explanation": {
    "correct": "Weight loss is almost universal in pancreatic cancer.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Unexplained weight loss in an older patient is a major red flag."
},
{
  "id": 310,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Courvoisier's sign in a patient with jaundice indicates which of the following?",
  "options": {
    "A": "Acute cholecystitis",
    "B": "Choledocholithiasis",
    "C": "Malignancy obstructing the CBD",
    "D": "Pancreatitis",
    "E": "Sclerosing cholangitis"
  },
  "answer": "C",
  "explanation": {
    "correct": "A palpable, non-tender gallbladder in a jaundiced patient suggests malignancy.",
    "A": "Tender GB.",
    "B": "Gallstones cause fibrosis (non-distensible GB).",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Courvoisier's sign = Malignancy."
},
{
  "id": 311,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "All of the following are true concerning cystic neoplasms of the pancreas except:",
  "options": {
    "A": "Serous cystadenoma is usually benign.",
    "B": "Mucinous cystadenoma has high malignant potential.",
    "C": "IPMN can involve the main duct.",
    "D": "SPEN is common in young women.",
    "E": "Serous cystadenoma should always be resected."
  },
  "answer": "E",
  "explanation": {
    "correct": "Serous cystadenomas are generally observed unless symptomatic.",
    "A": "True.",
    "B": "True.",
    "C": "True.",
    "D": "True.",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Cystic pancreatic lesions require careful differentiation between benign and malignant types."
},
{
  "id": 312,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Which of the following is the most common location for a gastrinoma?",
  "options": {
    "A": "Head of the pancreas",
    "B": "Body of the pancreas",
    "C": "Tail of the pancreas",
    "D": "Duodenum",
    "E": "Spleen"
  },
  "answer": "D",
  "explanation": {
    "correct": "Duodenal gastrinomas are actually more frequent than pancreatic ones in many series.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Always look in the duodenum for the primary gastrinoma."
},
{
  "id": 313,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Which of the following is the most common cause of death in patients with acute pancreatitis?",
  "options": {
    "A": "Respiratory failure",
    "B": "Renal failure",
    "C": "Sepsis",
    "D": "Hemorrhage",
    "E": "Heart failure"
  },
  "answer": "C",
  "explanation": {
    "correct": "Late mortality is primarily due to infected necrosis and sepsis.",
    "A": "Early cause.",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Sepsis from pancreatic necrosis is a major killer."
},
{
  "id": 314,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "The most important initial step in the management of acute pancreatitis is:",
  "options": {
    "A": "Antibiotics",
    "B": "Surgical debridement",
    "C": "Fluid resuscitation",
    "D": "ERCP",
    "E": "Nasogastric suction"
  },
  "answer": "C",
  "explanation": {
    "correct": "Aggressive hydration is critical to maintain pancreatic perfusion and prevent necrosis.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Fluids are the most important early treatment for pancreatitis."
},
{
  "id": 315,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Which of the following is true concerning pancreatic trauma?",
  "options": {
    "A": "Most injuries are managed nonoperatively.",
    "B": "Ductal injury is managed by drainage alone.",
    "C": "Head injury with ductal disruption may require Whipple.",
    "D": "Hemorrhage is the most common cause of late death.",
    "E": "Amylase is a sensitive indicator."
  },
  "answer": "C",
  "explanation": {
    "correct": "Severe head/ductal injuries may mandate a Whipple in the trauma setting.",
    "A": "Grade I/II only.",
    "B": "Resection for ductal injury.",
    "C": "",
    "D": "Sepsis.",
    "E": "Neither sensitive nor specific."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Management of pancreatic trauma depends entirely on ductal integrity."
},
{
  "id": 316,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "All of the following are true concerning pancreas divisum except:",
  "options": {
    "A": "Failure of dorsal and ventral buds to fuse.",
    "B": "Most of the pancreas drains through the duct of Santorini.",
    "C": "Associated with increased risk of pancreatitis.",
    "D": "Most common congenital anomaly.",
    "E": "Best diagnosed by CT scan."
  },
  "answer": "E",
  "explanation": {
    "correct": "ERCP/MRCP is required for diagnosis, not standard CT.",
    "A": "True.",
    "B": "True.",
    "C": "True.",
    "D": "True (10%).",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Pancreas divisum is a common cause of idiopathic pancreatitis."
},
{
  "id": 317,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Which of the following is true concerning annular pancreas?",
  "options": {
    "A": "Failure of dorsal bud to rotate.",
    "B": "Usually presents in adults with pain.",
    "C": "In infants, presents with non-bilious vomiting.",
    "D": "Treatment of choice is bypass (duodenoduodenostomy).",
    "E": "Resection is the treatment of choice."
  },
  "answer": "D",
  "explanation": {
    "correct": "Bypass is safer than resecting the annulus, which risks ductal injury/fistula.",
    "A": "Ventral bud.",
    "B": "",
    "C": "Bilious (usually post-ampullary).",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Annular pancreas = Bypass, don't resect."
},
{
  "id": 318,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Which of the following is the most common cause of chronic pancreatitis in children?",
  "options": {
    "A": "Alcohol",
    "B": "Cystic fibrosis",
    "C": "Hyperlipidemia",
    "D": "Trauma",
    "E": "Hereditary pancreatitis"
  },
  "answer": "B",
  "explanation": {
    "correct": "CF is the leading cause in the pediatric population.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Chronic pancreatitis in a child should prompt testing for CF."
},
{
  "id": 319,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "All of the following are true concerning the Puestow procedure except:",
  "options": {
    "A": "It is a longitudinal pancreaticojejunostomy.",
    "B": "It requires a dilated pancreatic duct (> 6 mm).",
    "C": "It provides pain relief in 70% to 80%.",
    "D": "It involves resection of the head.",
    "E": "It is used for chronic pancreatitis."
  },
  "answer": "D",
  "explanation": {
    "correct": "Puestow is a drainage procedure, no resection is performed.",
    "A": "True.",
    "B": "True.",
    "C": "True.",
    "D": "",
    "E": "True."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Puestow = Drainage for large duct chronic pancreatitis."
},
{
  "id": 320,
  "specialty": "General Surgery",
  "topic": "Pancreas",
  "question": "Which of the following is true regarding somatostatinoma?",
  "options": {
    "A": "It is usually benign.",
    "B": "It is associated with diabetes, gallstones, and steatorrhea.",
    "C": "It is more common than insulinoma.",
    "D": "It is usually found in the duodenum.",
    "E": "Treatment is medical only."
  },
  "answer": "B",
  "explanation": {
    "correct": "The 'inhibitory syndrome' is characteristic of somatostatin excess.",
    "A": "Malignant.",
    "B": "",
    "C": "Very rare.",
    "D": "Pancreas.",
    "E": "Surgical resection."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Somatostatinoma presents with the classic inhibitory triad."
}
,
{
  "id": 321,
  "specialty": "Pediatric Surgery",
  "topic": "Daily fluid requirements",
  "question": "Which of the following statements is true regarding daily fluid requirements?",
  "options": {
    "A": "Premature infants weighing less than 2 kg require only up to 80 mL/kg/day of fluid.",
    "B": "Neonates and infants weighing 2 to 10 kg require 200 mL/kg/day of fluid.",
    "C": "Infants and children weighing 10 to 20 kg require 1000 mL/day plus 50 mL/kg/day of fluid for every kilogram over 10 kg.",
    "D": "Children heavier than 20 kg require 1500 mL/day plus 30 mL/kg/day of fluid for every kilogram over 20 kg.",
    "E": "All of the above."
  },
  "answer": "C",
  "explanation": {
    "correct": "Maintenance fluid requirements are calculated based on weight: 100 mL/kg for the first 10 kg, 50 mL/kg for the next 10 kg (1000 mL total for 20 kg), and 20 mL/kg for each kg over 20 kg. Option D is incorrect because it should be 20 mL/kg, not 30 mL/kg.",
    "A": "Premature infants often require higher fluid volumes due to insensible losses.",
    "B": "The requirement is 100 mL/kg for the first 10 kg.",
    "C": "This is the correct standard formula for maintenance fluids.",
    "D": "The requirement for >20 kg is 1500 mL + 20 mL/kg for every kg over 20.",
    "E": "Only option C is accurate."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Maintenance fluid requirements in children follow the 4-2-1 rule or the 100-50-20 rule based on body weight."
},
{
  "id": 322,
  "specialty": "Pediatric Surgery",
  "topic": "Pediatric electrolyte and protein requirements",
  "question": "Which of the following is true in the pediatric population?",
  "options": {
    "A": "The daily sodium requirement is 6 mEq/kg.",
    "B": "The daily potassium requirement is 4 mEq/kg.",
    "C": "The daily protein requirement is 2 to 3.5 g/kg in infants.",
    "D": "Free water maintenance carbohydrate requirement is 1 mg/kg/min in neonates.",
    "E": "Fat solutions should be started at 1.5 g/kg/day and titrated up to 5.5 to 6.0 g/kg/day."
  },
  "answer": "C",
  "explanation": {
    "correct": "Daily protein requirements are 2 to 3.5 g/kg/day in infants to support rapid growth. Sodium requirements are typically 2 to 5 mEq/kg/day, and potassium requirements are 2 to 3 mEq/kg/day.",
    "A": "Sodium requirement is 2 to 5 mEq/kg/day.",
    "B": "Potassium requirement is 2 to 3 mEq/kg/day.",
    "C": "Infants require 2 to 3.5 g/kg/day of protein for growth.",
    "D": "Glucose requirements are higher, typically 4-6 mg/kg/min in neonates.",
    "E": "Fat titration usually goes up to 3 g/kg/day."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Pediatric patients have higher protein and glucose requirements per kilogram compared to adults."
},
{
  "id": 323,
  "specialty": "Pediatric Surgery",
  "topic": "Hypertrophic Pyloric Stenosis",
  "question": "A 5-week-old boy has a 5-day history of vomiting and weight loss. His anterior fontanelle is flattened and his mucous membranes are dry. Which of the following statements about this infant is true?",
  "options": {
    "A": "Characterization of the emesis as bilious is crucial to aid in the diagnosis.",
    "B": "Palpation of the abdomen will not help with the diagnosis.",
    "C": "Ultrasound imaging of the abdomen will not add to the diagnosis.",
    "D": "The most likely diagnosis is intussusception.",
    "E": "The condition should be corrected by emergency surgery."
  },
  "answer": "A",
  "explanation": {
    "correct": "Characterizing emesis as non-bilious is crucial because it localizes the obstruction proximal to the ampulla of Vater, which is classic for pyloric stenosis. Bilious emesis suggests a more distal obstruction like malrotation.",
    "A": "The nature of vomiting (bilious vs. non-bilious) is a key diagnostic differentiator.",
    "B": "Palpation of an 'olive' mass is a pathognomonic finding.",
    "C": "Ultrasound is the gold standard for confirming pyloric stenosis.",
    "D": "Intussusception usually occurs later (3-18 months) and presents with bilious vomiting/bloody stools.",
    "E": "Correction of fluids and electrolytes must occur before surgery; it is never an emergency."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Pyloric stenosis presents with non-bilious projectile vomiting and requires medical stabilization before surgical pyloromyotomy."
},
{
  "id": 324,
  "specialty": "Pediatric Surgery",
  "topic": "Pyloric Stenosis Electrolytes",
  "question": "For the infant with pyloric stenosis, which of the following is the most common electrolyte abnormality?",
  "options": {
    "A": "Hypokalemic, hypochloremic metabolic alkalosis",
    "B": "Hyperkalemic, hyperchloremic metabolic acidosis",
    "C": "Hypocalcemia",
    "D": "Hyperchloremic metabolic alkalosis",
    "E": "Hypercalcemia"
  },
  "answer": "A",
  "explanation": {
    "correct": "Loss of gastric HCl leads to hypochloremia and metabolic alkalosis. The kidney attempts to conserve volume and H+ by excreting K+, leading to hypokalemia (paradoxical aciduria).",
    "A": "The classic triad in pyloric stenosis is hypokalemic, hypochloremic metabolic alkalosis.",
    "B": "Metabolic acidosis is not seen in uncomplicated pyloric stenosis.",
    "C": "Calcium is not typically affected.",
    "D": "Chloride is lost, so it is hypochloremic.",
    "E": "Calcium is not typically affected."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Severe vomiting in pyloric stenosis causes a unique metabolic pattern that must be corrected with IVF containing saline and potassium."
},
{
  "id": 325,
  "specialty": "Pediatric Surgery",
  "topic": "Pyloric Stenosis Initial Therapy",
  "question": "Which of the following solutions is appropriate for initial intravenous therapy in an infant with pyloric stenosis and dehydration?",
  "options": {
    "A": "Lactated Ringer's solution",
    "B": "5% dextrose in water (D5W)",
    "C": "5% dextrose in 0.45% normal saline + 10 mEq/L KCl",
    "D": "5% dextrose in 0.9% normal saline + 20 mEq/L KCl",
    "E": "10% dextrose in 0.22% normal saline"
  },
  "answer": "D",
  "explanation": {
    "correct": "The preferred solution is 0.9% NS to replace chloride and volume, with D5 to prevent hypoglycemia and 20-40 mEq/L KCl to replace potassium once urine output is confirmed.",
    "A": "LR contains lactate and not enough chloride for this specific correction.",
    "B": "D5W does not replace lost electrolytes or volume.",
    "C": "0.45% NS may not provide enough chloride for rapid correction.",
    "D": "D5NS with KCl is the standard for correcting this specific metabolic deficit.",
    "E": "Too dilute in saline and too high in dextrose."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Isotonic saline is essential for correcting the hypochloremia and contraction alkalosis of pyloric stenosis."
},
{
  "id": 326,
  "specialty": "Pediatric Surgery",
  "topic": "Meconium Ileus",
  "question": "Which of the following is true concerning meconium ileus?",
  "options": {
    "A": "It is the presenting symptom in 50% of children with cystic fibrosis.",
    "B": "It is most commonly found in the proximal jejunum.",
    "C": "It is typically associated with a microcolon.",
    "D": "It is rarely associated with atresia or volvulus.",
    "E": "Water-soluble contrast enema is rarely successful."
  },
  "answer": "C",
  "explanation": {
    "correct": "Meconium ileus leads to a 'disuse' microcolon because the meconium is stuck in the distal ileum and never reaches the colon.",
    "A": "It is the presenting symptom in about 15-20% of CF patients.",
    "B": "It occurs in the distal ileum.",
    "C": "A microcolon is a classic finding on contrast enema.",
    "D": "Complicated meconium ileus is often associated with atresia or volvulus.",
    "E": "Gastrografin enema is successful in up to 60-70% of uncomplicated cases."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Meconium ileus is a distal small bowel obstruction highly specific for cystic fibrosis."
},
{
  "id": 327,
  "specialty": "Pediatric Surgery",
  "topic": "Meconium Ileus Diagnosis",
  "question": "A 2-day-old infant has not passed meconium. Radiographs show multiple dilated loops of bowel but no air-fluid levels. Contrast enema shows a small colon and pellets of meconium in the distal ileum. Diagnosis?",
  "options": {
    "A": "Hirschsprung's disease",
    "B": "Meconium ileus",
    "C": "Jejunal atresia",
    "D": "Malrotation",
    "E": "Meconium plug syndrome"
  },
  "answer": "B",
  "explanation": {
    "correct": "The combination of no air-fluid levels (due to thick meconium), microcolon, and pellets in the distal ileum is pathognomonic for meconium ileus.",
    "A": "Hirschsprung's usually shows a transition zone in the rectum/sigmoid.",
    "B": "Classic presentation for meconium ileus.",
    "C": "Jejunal atresia would show a few dilated loops and air-fluid levels.",
    "D": "Malrotation/volvulus is an acute presentation with bilious vomiting.",
    "E": "Meconium plug syndrome involves the colon and is usually transient."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Distinguishing between meconium ileus and Hirschsprung's is the first step in managing neonatal low bowel obstruction."
},
{
  "id": 328,
  "specialty": "Pediatric Surgery",
  "topic": "ECMO Indications",
  "question": "Major indications for the initiation of extracorporeal membrane oxygenation (ECMO) in a newborn include all of the following EXCEPT:",
  "options": {
    "A": "Congenital diaphragmatic hernia",
    "B": "Meconium aspiration syndrome",
    "C": "Sepsis",
    "D": "Pulmonary sequestration",
    "E": "Respiratory distress syndrome"
  },
  "answer": "D",
  "explanation": {
    "correct": "Pulmonary sequestration is a localized lung malformation and not a cause of diffuse neonatal respiratory failure requiring ECMO.",
    "A": "CDH with severe pulmonary hypertension is a common indication.",
    "B": "MAS is a primary indication for ECMO.",
    "C": "Neonatal sepsis with respiratory failure can be bridged with ECMO.",
    "D": "This is a surgical lesion, not a cause of refractory respiratory failure.",
    "E": "RDS is a major indication."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "ECMO is used for reversible, life-threatening neonatal respiratory and cardiac failure."
},
{
  "id": 329,
  "specialty": "Pediatric Surgery",
  "topic": "Pediatric Trauma",
  "question": "Which of the following statements concerning pediatric trauma is true?",
  "options": {
    "A": "Trauma is the second leading cause of death in children.",
    "B": "Acceptable indications for CT include painful distracting injury or significant head injury.",
    "C": "Operative intervention is indicated for any spleen injury seen on CT.",
    "D": "Intraosseous access is preferred for all fluid delivery in children.",
    "E": "Surgical cricothyroidotomy is acceptable for infants."
  },
  "answer": "B",
  "explanation": {
    "correct": "CT imaging in children is reserved for specific indications to minimize radiation. Painful distracting injuries or unclear exams in high-energy trauma are valid reasons.",
    "A": "Trauma is the LEADING cause of death in children.",
    "B": "Correct clinical indications for CT in stable patients.",
    "C": "Most pediatric solid organ injuries are managed non-operatively.",
    "D": "IO access is a secondary choice when IV access fails.",
    "E": "Cricothyroidotomy is contraindicated in children <12 years; needle cric or tracheostomy is used."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Non-operative management is the standard for hemodynamically stable children with solid organ injuries."
},
{
  "id": 330,
  "specialty": "Pediatric Surgery",
  "topic": "Blood Transfusion",
  "question": "A 6-month-old infant requires blood transfusion after injury. Which is the most appropriate initial replacement regimen?",
  "options": {
    "A": "10 to 20 mL/kg of PRBCs",
    "B": "30 to 40 mL/kg of PRBCs",
    "C": "10 to 20 mL/kg of PRBCs + Platelets",
    "D": "10 to 20 mL/kg of PRBCs + FFP",
    "E": "40 to 60 mL/kg of whole blood"
  },
  "answer": "A",
  "explanation": {
    "correct": "Initial volume replacement in pediatric trauma starts with 20 mL/kg of crystalloid, followed by 10-20 mL/kg of PRBCs if needed.",
    "A": "Standard initial pediatric blood bolus.",
    "B": "Too much for an initial bolus.",
    "C": "Platelets are not part of the initial bolus unless there is known coagulopathy.",
    "D": "FFP is added in massive transfusion protocols.",
    "E": "Whole blood is rarely used in initial trauma resuscitation."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Pediatric resuscitation uses weight-based boluses (20 mL/kg crystalloid, 10 mL/kg PRBC)."
},
{
  "id": 331,
  "specialty": "Pediatric Surgery",
  "topic": "Testicular Torsion",
  "question": "Which of the following is FALSE regarding testicular torsion?",
  "options": {
    "A": "Physical examination may reveal a horizontal lie.",
    "B": "Salvage chance decreases after 6 hours.",
    "C": "Ultrasound is the test of choice to assist in diagnosis.",
    "D": "Contralateral orchiopexy is not indicated.",
    "E": "Testicular scan may assist in the diagnosis."
  },
  "answer": "D",
  "explanation": {
    "correct": "Contralateral orchiopexy IS absolutely indicated because the underlying anatomical defect (bell-clapper deformity) is typically bilateral.",
    "A": "Horizontal lie or 'bell-clapper' deformity is common.",
    "B": "Time is testis; salvage drops significantly after 6 hours.",
    "C": "Doppler US shows decreased flow.",
    "D": "False; both sides must be fixed.",
    "E": "Radionuclide scans are accurate but rarely used due to time."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Testicular torsion is a surgical emergency; surgical exploration should not be delayed for imaging if the clinical suspicion is high."
},
{
  "id": 332,
  "specialty": "Pediatric Surgery",
  "topic": "Hydrocele",
  "question": "Indicated treatment for a noncommunicating hydrocele in a 2-month-old infant?",
  "options": {
    "A": "Observation",
    "B": "Needle aspiration",
    "C": "Groin incision repair",
    "D": "Scrotal incision repair",
    "E": "Emergency surgery"
  },
  "answer": "A",
  "explanation": {
    "correct": "Most noncommunicating hydroceles resolve spontaneously by 1 year of age as the fluid is absorbed.",
    "A": "Standard management for infants <1 year.",
    "B": "Aspiration is contraindicated due to risk of injury or recurrence.",
    "C": "Surgery is reserved for hydroceles persisting after 1 year.",
    "D": "Scrotal incisions are avoided in children due to potential for undiagnosed hernia.",
    "E": "Not an emergency."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Pediatric hydroceles are managed expectantly until age 1, after which they are repaired via an inguinal approach."
},
{
  "id": 333,
  "specialty": "Pediatric Surgery",
  "topic": "Intussusception",
  "question": "Which of the following statements about intussusception is true?",
  "options": {
    "A": "It most commonly occurs in infants between 2 and 4 weeks of age.",
    "B": "Bilious vomiting is the earliest symptom.",
    "C": "Air or contrast enema is successful in 80% to 90% of cases.",
    "D": "Recurrence after reduction is common (>50%).",
    "E": "Surgery is indicated if symptoms >24 hours."
  },
  "answer": "C",
  "explanation": {
    "correct": "Hydrostatic or pneumatic reduction is highly successful (80-90%) and is the first-line treatment for stable patients without peritonitis.",
    "A": "Peak incidence is 3 to 18 months.",
    "B": "Early symptoms are colicky pain and lethargy; vomiting occurs later.",
    "C": "Correct success rate for non-operative reduction.",
    "D": "Recurrence rate is low (~10%).",
    "E": "Time is not an absolute contraindication to enema if no peritonitis."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The classic triad is colicky pain, 'currant jelly' stool, and a sausage-shaped mass."
},
{
  "id": 334,
  "specialty": "Pediatric Surgery",
  "topic": "Hirschsprung's Disease",
  "question": "Which of the following statements about Hirschsprung's disease is true?",
  "options": {
    "A": "It is caused by the absence of ganglion cells in the Meissner and Auerbach plexuses.",
    "B": "The aganglionic segment always starts at the ileocecal valve.",
    "C": "Total colonic aganglionosis is found in 50% of cases.",
    "D": "Barium enema is the gold standard for diagnosis.",
    "E": "Most patients present with diarrhea in the first week."
  },
  "answer": "A",
  "explanation": {
    "correct": "The pathology is the failure of neural crest cells to migrate, leading to an aganglionic segment that remains contracted.",
    "A": "This is the definitive pathological definition.",
    "B": "It always starts at the internal anal sphincter and extends proximally.",
    "C": "Total colonic involvement is rare (~5-10%).",
    "D": "Rectal biopsy showing absent ganglion cells is the gold standard.",
    "E": "Failure to pass meconium is the most common presentation."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Hirschsprung's disease should be suspected in any neonate with delayed passage of meconium (>48 hours)."
},
{
  "id": 335,
  "specialty": "Pediatric Surgery",
  "topic": "Duodenal Atresia",
  "question": "A 3-day-old infant with trisomy 21 has a 'double bubble' sign on radiograph. Diagnosis?",
  "options": {
    "A": "Malrotation",
    "B": "Duodenal atresia",
    "C": "Jejunal atresia",
    "D": "Pyloric stenosis",
    "E": "Meconium ileus"
  },
  "answer": "B",
  "explanation": {
    "correct": "Duodenal atresia is strongly associated with Down syndrome (Trisomy 21) and produces the 'double bubble' (stomach and proximal duodenum) on X-ray.",
    "A": "Malrotation can show a double bubble if it causes duodenal obstruction (volvulus).",
    "B": "Classic association with Trisomy 21 and double bubble.",
    "C": "Jejunal atresia shows more than two bubbles (triple bubble).",
    "D": "Pyloric stenosis shows a single large stomach bubble.",
    "E": "Meconium ileus shows dilated loops without air-fluid levels."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Duodenal atresia is treated with a duodenoduodenostomy (Kimura procedure)."
},
{
  "id": 336,
  "specialty": "Pediatric Surgery",
  "topic": "Omphalocele",
  "question": "Which of the following statements concerning omphalocele is true?",
  "options": {
    "A": "The defect is usually to the right of the umbilical cord.",
    "B": "The bowel is typically covered by a sac.",
    "C": "It is rarely associated with other congenital anomalies.",
    "D": "Immediate surgical closure is always required.",
    "E": "Maternal alpha-fetoprotein levels are typically normal."
  },
  "answer": "B",
  "explanation": {
    "correct": "An omphalocele is a midline defect through the umbilical ring where bowel/organs are covered by a sac of peritoneum and amnion.",
    "A": "That describes gastroschisis.",
    "B": "Correct; the sac is a key differentiator from gastroschisis.",
    "C": "False; 50-70% have associated cardiac or chromosomal anomalies.",
    "D": "Large defects may require staged closure (silo).",
    "E": "AFP is usually elevated."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Omphalocele is associated with Beckwith-Wiedemann syndrome and Pentalogy of Cantrell."
},
{
  "id": 337,
  "specialty": "Pediatric Surgery",
  "topic": "Gastroschisis",
  "question": "Which of the following statements concerning gastroschisis is true?",
  "options": {
    "A": "The defect is usually to the right of the umbilical cord.",
    "B": "It is frequently associated with chromosomal abnormalities.",
    "C": "The bowel is covered by a sac.",
    "D": "Intestinal atresia is common (10% to 15%).",
    "E": "A and D are true."
  },
  "answer": "E",
  "explanation": {
    "correct": "Gastroschisis is a paraumbilical defect (usually right) without a sac. It has a low association with other anomalies but a significant risk of associated intestinal atresia.",
    "A": "Correct; right-sided defect is classic.",
    "B": "False; unlike omphalocele, it's rarely chromosomal.",
    "C": "False; no sac is present.",
    "D": "Correct; atresia is common due to vascular accidents.",
    "E": "Both A and D are correct."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Gastroschisis bowel appears 'matted' and thick due to exposure to amniotic fluid."
},
{
  "id": 338,
  "specialty": "Pediatric Surgery",
  "topic": "Branchial Cleft Anomalies",
  "question": "Which of the following statements is most accurate regarding branchial cleft anomalies?",
  "options": {
    "A": "Third arch anomalies are common.",
    "B": "Type II first arch branchial anomalies are the most common overall.",
    "C": "The glossopharyngeal nerve is associated with the third branchial arch.",
    "D": "Second arch anomalies end in the piriform sinus.",
    "E": "Second arch anomalies travel deep to the internal carotid artery."
  },
  "answer": "C",
  "explanation": {
    "correct": "The third branchial arch is associated with the glossopharyngeal nerve (CN IX).",
    "A": "Third arch anomalies are the rarest.",
    "B": "Second arch anomalies are the most common (95%).",
    "C": "Correct anatomical association.",
    "D": "Third and fourth arch anomalies end in the piriform sinus.",
    "E": "Second arch tracts pass between the external and internal carotids."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Branchial cleft anomalies are remnants of the embryonic branchial apparatus."
},
{
  "id": 339,
  "specialty": "Pediatric Surgery",
  "topic": "Meckel's Diverticulum",
  "question": "Which of the following is FALSE regarding Meckel's diverticulum?",
  "options": {
    "A": "Most are detected incidentally.",
    "B": "It is typically found on the mesenteric side of the bowel.",
    "C": "It results from incomplete closure of the omphalomesenteric duct.",
    "D": "Gastric mucosa is indirectly responsible for GI hemorrhage.",
    "E": "It is usually found within 2 feet of the ileocecal valve."
  },
  "answer": "B",
  "explanation": {
    "correct": "Meckel's diverticulum is always located on the ANTIMESENTERIC border of the ileum.",
    "A": "True; many remain asymptomatic.",
    "B": "False; it is antimesenteric.",
    "C": "True; it is a remnant of the vitelline duct.",
    "D": "True; acid from ectopic gastric tissue ulcers adjacent ileal mucosa.",
    "E": "True; follows the 'Rule of 2s'."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Meckel's is the most common congenital anomaly of the GI tract."
},
{
  "id": 340,
  "specialty": "Pediatric Surgery",
  "topic": "Thyroglossal Duct Cyst",
  "question": "Which of the following statements about thyroglossal duct cysts is true?",
  "options": {
    "A": "They are the most common congenital neck mass.",
    "B": "They are typically located in the lateral neck.",
    "C": "Surgical management includes simple excision of the cyst.",
    "D": "They are usually found in the suprahyoid position.",
    "E": "Most present at birth."
  },
  "answer": "A",
  "explanation": {
    "correct": "Thyroglossal duct cysts are the most common congenital neck mass and are usually found in the midline.",
    "A": "Correct; much more common than branchial cysts.",
    "B": "False; they are midline.",
    "C": "False; Sistrunk procedure (including the midportion of the hyoid) is required.",
    "D": "False; they can be supra-, infra-, or at the level of the hyoid.",
    "E": "False; usually present in late childhood or after a URI."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The Sistrunk procedure reduces the recurrence rate from 50% to <5%."
},
{
  "id": 341,
  "specialty": "Pediatric Surgery",
  "topic": "Imperforate Anus",
  "question": "A newborn is diagnosed with an imperforate anus. Which of the following is true?",
  "options": {
    "A": "High lesions are more common in females.",
    "B": "Low lesions are associated with a fistula to the urinary tract.",
    "C": "In males, high lesions often have a fistula to the prostatic urethra or bladder.",
    "D": "In females, the most common fistula is to the bladder.",
    "E": "Immediate colostomy is indicated for all patients."
  },
  "answer": "C",
  "explanation": {
    "correct": "High anorectal malformations in males commonly involve a fistula to the urinary system, typically the prostatic or bulbar urethra.",
    "A": "High lesions are slightly more common in males.",
    "B": "Low lesions usually have a perineal fistula.",
    "C": "Correct for high male lesions.",
    "D": "In females, the fistula is usually to the vestibule or vagina.",
    "E": "Low lesions can be repaired primary without colostomy."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Associated VACTERL anomalies should be screened for in all anorectal malformations."
},
{
  "id": 342,
  "specialty": "Pediatric Surgery",
  "topic": "Neuroblastoma",
  "question": "Which of the following is true regarding neuroblastoma?",
  "options": {
    "A": "It most commonly arises in the neck.",
    "B": "It is the most common extracranial solid tumor of childhood.",
    "C": "Most patients present with Stage 1 disease.",
    "D": "Urinary vanillylmandelic acid (VMA) is rarely elevated.",
    "E": "It typically carries a better prognosis than Wilms tumor."
  },
  "answer": "B",
  "explanation": {
    "correct": "Neuroblastoma is the most common extracranial solid tumor in children and arises from the sympathetic chain.",
    "A": "Adrenal gland is the most common site (~50%).",
    "B": "Correct epidemiological fact.",
    "C": "Most present with advanced metastatic disease (Stage 4).",
    "D": "VMA/HVA are elevated in >90% of cases.",
    "E": "Wilms tumor generally has a much better prognosis."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "N-myc amplification is a key negative prognostic factor in neuroblastoma."
},
{
  "id": 343,
  "specialty": "Pediatric Surgery",
  "topic": "Wilms Tumor",
  "question": "Which of the following is true regarding Wilms tumor?",
  "options": {
    "A": "It is often associated with hematuria and hypertension.",
    "B": "Bilateral disease occurs in 50% of cases.",
    "C": "Surgery is the only treatment modality.",
    "D": "It is less common than neuroblastoma.",
    "E": "A and D are true."
  },
  "answer": "E",
  "explanation": {
    "correct": "Wilms tumor (nephroblastoma) is a renal tumor of childhood often presenting with a large abdominal mass, hypertension, and occasionally hematuria.",
    "A": "True; hypertension is due to renin production.",
    "B": "Bilateral disease (Stage V) occurs in only 5% of cases.",
    "C": "Multimodal (surgery, chemo, +/- rad) is the standard.",
    "D": "True; it is slightly less common than neuroblastoma.",
    "E": "Both A and D are correct."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "WAGR syndrome (Wilms, Aniridia, Genitourinary anomalies, Retardation) is a known association."
},
{
  "id": 344,
  "specialty": "Pediatric Surgery",
  "topic": "Congenital Diaphragmatic Hernia",
  "question": "A newborn has a scaphoid abdomen and respiratory distress. Next best step?",
  "options": {
    "A": "Immediate surgical repair",
    "B": "Bag-mask ventilation",
    "C": "Endotracheal intubation and nasogastric decompression",
    "D": "Prone positioning",
    "E": "ECMO"
  },
  "answer": "C",
  "explanation": {
    "correct": "Stabilization is the priority. Intubation prevents bowel distension from air swallowing, which worsens lung compression. Bag-mask is contraindicated as it forces air into the stomach/bowel.",
    "A": "CDH is a medical, not surgical, emergency; repair is delayed until stable.",
    "B": "Absolutely contraindicated.",
    "C": "Correct initial management.",
    "D": "Not helpful.",
    "E": "Reserved for those failing conventional or high-frequency ventilation."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The prognosis of CDH is determined by the degree of pulmonary hypoplasia and hypertension."
},
{
  "id": 345,
  "specialty": "Pediatric Surgery",
  "topic": "Malrotation",
  "question": "Which of the following is true regarding the management of malrotation?",
  "options": {
    "A": "The Ladd procedure is the standard surgical treatment.",
    "B": "The bowel is placed in its normal anatomical position.",
    "C": "Appendectomy is not performed during the Ladd procedure.",
    "D": "The cecum is fixed to the right gutter.",
    "E": "All of the above."
  },
  "answer": "A",
  "explanation": {
    "correct": "The Ladd procedure involves counter-clockwise detorsion, widening the mesentery, and placing the bowel in a 'non-rotation' position.",
    "A": "The gold standard for malrotation/volvulus.",
    "B": "False; bowel is placed Small Bowel to Right, Large Bowel to Left.",
    "C": "False; appendectomy is performed because the appendix will end up in the LUQ, confusing future diagnosis.",
    "D": "False; cecum is placed in the LUQ.",
    "E": "Only A is true."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Midgut volvulus is 'the diagnosis that must not be missed' in a neonate with bilious vomiting."
}
,
{
  "id": 346,
  "specialty": "Pediatric Surgery",
  "topic": "Biliary Atresia",
  "question": "Which of the following statements concerning biliary atresia is true?",
  "options": {
    "A": "Without treatment, the average survival is 5 years.",
    "B": "The hallmark pathologic findings in biliary atresia are giant cell transformation and hepatocellular necrosis.",
    "C": "The Kasai procedure typically includes a choledochojejunostomy anastomosis.",
    "D": "Ultrasound of the liver and gallbladder is an integral part of the diagnostic work-up for biliary atresia.",
    "E": "Biliary atresia is the third most common indication for pediatric liver transplantation."
  },
  "answer": "B",
  "explanation": {
    "correct": "The hallmark pathologic findings in biliary atresia are giant cell transformation and hepatocellular necrosis.",
    "A": "Untreated biliary atresia is usually fatal within 2 years.",
    "B": "Correct pathology.",
    "C": "The Kasai procedure is a hepatoportoenterostomy, usually with a Roux-en-Y jejunal limb.",
    "D": "True, but pathology is considered the 'hallmark' for the question context.",
    "E": "It is the #1 indication for pediatric liver transplant."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Biliary atresia is the leading indication for pediatric liver transplantation and is characterized by giant cell transformation."
},
{
  "id": 347,
  "specialty": "Pediatric Surgery",
  "topic": "Biliary Atresia - Kasai Procedure",
  "question": "With regard to the Kasai procedure for the treatment of biliary atresia, which of the following statements is true?",
  "options": {
    "A": "It is most successfully performed after 3 months of age.",
    "B": "Cholangitis rarely complicates a successful procedure.",
    "C": "Portal hypertension remains problematic despite a successful operation.",
    "D": "If hepatic transplantation is needed, an initial Kasai enterostomy is not indicated.",
    "E": "Cholangitis is an infrequent late complication."
  },
  "answer": "C",
  "explanation": {
    "correct": "Even with successful bile flow after a Kasai procedure, most patients develop progressive cirrhosis and portal hypertension.",
    "A": "Success is highest if done <60 days of age.",
    "B": "Cholangitis is a very common complication.",
    "C": "Correct; Kasai is often a bridge to transplant.",
    "D": "Kasai is still usually the first step.",
    "E": "Cholangitis is common."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The Kasai procedure provides a bridge to liver transplantation, but progressive liver disease often continues."
},
{
  "id": 348,
  "specialty": "Pediatric Surgery",
  "topic": "TEF/Esophageal Atresia",
  "question": "Which of the following is the most common anatomic type of tracheoesophageal malformations?",
  "options": {
    "A": "Proximal esophageal atresia and distal tracheoesophageal fistula",
    "B": "Complete esophageal atresia without fistula",
    "C": "H-type esophageal fistula",
    "D": "Proximal fistula and distal esophageal atresia",
    "E": "Proximal and distal tracheoesophageal fistulas"
  },
  "answer": "A",
  "explanation": {
    "correct": "Type C (EA with distal TEF) accounts for 85% of cases.",
    "A": "Most common type.",
    "B": "Type A, ~8%.",
    "C": "Type E, ~4%.",
    "D": "Type B, rare.",
    "E": "Type D, rare."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Type C (Esophageal Atresia with distal TEF) is the most frequent variant encountered."
},
{
  "id": 349,
  "specialty": "Pediatric Surgery",
  "topic": "Hirschsprung Disease",
  "question": "Which of the following is true concerning Hirschsprung disease?",
  "options": {
    "A": "More common in females",
    "B": "Absent ganglion cells in both the Auerbach and Meissner plexuses",
    "C": "Failure to pass meconium in the first 48 hours of life",
    "D": "Best diagnosed by lower gastrointestinal contrast-enhanced study",
    "E": "Atrophy of submucosal nerve endings seen on rectal biopsy specimens"
  },
  "answer": "B",
  "explanation": {
    "correct": "Hirschsprung's is defined by the absence of ganglion cells in both the myenteric (Auerbach) and submucosal (Meissner) plexuses.",
    "A": "More common in males (4:1).",
    "B": "Correct anatomical definition.",
    "C": "True, but 'B' is the fundamental definition.",
    "D": "Biopsy is the gold standard.",
    "E": "Hypertrophy of nerve endings is seen, not atrophy."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Hirschsprung disease involves total aganglionosis of the distal bowel plexuses."
},
{
  "id": 350,
  "specialty": "Pediatric Surgery",
  "topic": "Malrotation/Volvulus",
  "question": "A previously well 3-week-old infant exhibits a sudden onset of bilious vomiting. Which of the following is the most likely diagnosis?",
  "options": {
    "A": "Pyloric stenosis",
    "B": "Duodenal atresia",
    "C": "Malrotation of the midgut",
    "D": "Intussusception",
    "E": "Tracheoesophageal fistula, H type"
  },
  "answer": "C",
  "explanation": {
    "correct": "Bilious vomiting in a neonate or young infant is midgut volvulus until proven otherwise.",
    "A": "Non-bilious vomiting.",
    "B": "Presents within the first 24-48 hours usually.",
    "C": "Correct; surgical emergency.",
    "D": "Usually older infants (>3 months).",
    "E": "Presents with coughing/choking with feeds."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Bilious emesis in a newborn is a surgical emergency requiring immediate evaluation for malrotation."
},
{
  "id": 351,
  "specialty": "Pediatric Surgery",
  "topic": "Malrotation - Diagnosis",
  "question": "For a neonate with sudden onset of bilious vomiting, which of the following is the most appropriate initial diagnostic test?",
  "options": {
    "A": "Upper gastrointestinal contrast-enhanced study",
    "B": "Abdominal ultrasound",
    "C": "Barium enema",
    "D": "Abdominal radiograph",
    "E": "Computed tomography (CT) scan"
  },
  "answer": "A",
  "explanation": {
    "correct": "An upper GI series is the gold standard for diagnosing malrotation by showing the location of the ligament of Treitz.",
    "A": "Gold standard.",
    "B": "Whirlpool sign can be seen but is less sensitive than UGI.",
    "C": "Can show cecal position but UGI is better.",
    "D": "Nonspecific.",
    "E": "Not used for initial diagnosis."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Upper GI series is the most reliable test for confirming intestinal malrotation."
},
{
  "id": 352,
  "specialty": "Pediatric Surgery",
  "topic": "Ladd Procedure",
  "question": "All of the following are true of the Ladd procedure for midgut volvulus EXCEPT:",
  "options": {
    "A": "Midgut volvulus twists in a counterclockwise direction and needs to be untwisted in a clockwise manner.",
    "B": "Ladd bands refer to congenital bands extending across the duodenum from the ascending colon to the retroperitoneum.",
    "C": "There is no proved benefit with pexis of the cecum, duodenum, or both.",
    "D": "An incidental appendectomy is often performed to prevent future diagnostic confusion due to abnormal location.",
    "E": "Midgut volvulus is typically reduced by rotating the bowel in a counterclockwise direction."
  },
  "answer": "A",
  "explanation": {
    "correct": "Midgut volvulus almost always occurs in a clockwise direction and must be untwisted counter-clockwise.",
    "A": "Incorrect; it's the opposite.",
    "B": "True definition of Ladd bands.",
    "C": "True; widening the mesentery is the key.",
    "D": "True; part of the standard Ladd procedure.",
    "E": "True."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The Ladd procedure involves counter-clockwise detorsion and lysis of bands to widen the mesentery."
},
{
  "id": 353,
  "specialty": "Pediatric Surgery",
  "topic": "CDH - Location",
  "question": "The most common location of a congenital diaphragmatic hernia is:",
  "options": {
    "A": "Right, posterolateral",
    "B": "Left, posterolateral",
    "C": "Right, anteromedial",
    "D": "Left, anteromedial",
    "E": "Esophageal hiatus"
  },
  "answer": "B",
  "explanation": {
    "correct": "Bochdalek hernias (posterolateral) are most common, and 85% are left-sided.",
    "A": "Only 15% are right-sided.",
    "B": "Most common (Bochdalek).",
    "C": "Morgagni (rare).",
    "D": "Morgagni (rare).",
    "E": "Hiatal hernia (different entity)."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Bochdalek hernia is predominantly left-sided and posterolateral."
},
{
  "id": 354,
  "specialty": "Pediatric Surgery",
  "topic": "Umbilical Hernia",
  "question": "Regarding a 1-month-old neonate with an umbilical hernia, which of the following is true?",
  "options": {
    "A": "The likelihood of spontaneous closure by age 4 is low.",
    "B": "Indications for early repair include incarceration, large skin proboscis, and the presence of a ventriculoperitoneal shunt.",
    "C": "Repair of the hernia should routinely include the use of prosthetic mesh.",
    "D": "Complete closure may be expected in only 30% of children by age 5.",
    "E": "All umbilical hernias require surgical repair regardless of size."
  },
  "answer": "B",
  "explanation": {
    "correct": "While most close by age 4, specific conditions like VP shunts warrant earlier repair due to complications.",
    "A": "Spontaneous closure rate is >80% by age 4.",
    "B": "Correct indications for early surgery.",
    "C": "Primary repair is standard; mesh is rarely used in children.",
    "D": "Spontaneous closure is much more frequent.",
    "E": "Observation is the rule until age 4-5."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Most pediatric umbilical hernias close spontaneously; VP shunts are an indication for earlier repair."
},
{
  "id": 355,
  "specialty": "Pediatric Surgery",
  "topic": "CDH - Prognosis",
  "question": "Which of the following is true concerning congenital diaphragmatic hernia (CDH)?",
  "options": {
    "A": "The defect is usually small and easily closed primary.",
    "B": "Pulmonary hypoplasia is the most important prognostic factor.",
    "C": "Surgical repair should be performed immediately upon diagnosis.",
    "D": "Survival is approximately 95% in high-risk cases.",
    "E": "Most infants with CDH are asymptomatic at birth."
  },
  "answer": "B",
  "explanation": {
    "correct": "Survival depends on the degree of pulmonary hypoplasia and irreversible pulmonary hypertension.",
    "A": "Often large, requiring patch.",
    "B": "Key prognostic factor.",
    "C": "Repair is delayed until physiologic stabilization.",
    "D": "Survival in severe cases is lower (~50-70%).",
    "E": "Usually present with immediate respiratory distress."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Pulmonary development, not the surgical defect, determines survival in CDH."
},
{
  "id": 356,
  "specialty": "Pediatric Surgery",
  "topic": "Duodenal Atresia - Imaging",
  "question": "The 'double bubble' sign on abdominal radiograph is characteristic of:",
  "options": {
    "A": "Pyloric stenosis",
    "B": "Duodenal atresia",
    "C": "Jejunal atresia",
    "D": "Malrotation",
    "E": "Intussusception"
  },
  "answer": "B",
  "explanation": {
    "correct": "Double bubble (stomach and duodenum) indicates complete duodenal obstruction.",
    "A": "Single large gastric bubble.",
    "B": "Classic sign.",
    "C": "Multiple bubbles.",
    "D": "May show it but not as consistently as atresia.",
    "E": "May show bowel obstruction but not double bubble."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Double bubble = Complete proximal duodenal obstruction."
},
{
  "id": 357,
  "specialty": "Pediatric Surgery",
  "topic": "Gastroschisis vs Omphalocele",
  "question": "Regarding gastroschisis and omphalocele, which of the following is true?",
  "options": {
    "A": "Omphalocele is associated with a higher incidence of other congenital anomalies.",
    "B": "Gastroschisis is a defect within the umbilical cord.",
    "C": "Omphalocele is typically found to the right of the umbilical cord.",
    "D": "Gastroschisis is covered by a peritoneal sac.",
    "E": "Omphalocele has a better prognosis for intestinal function."
  },
  "answer": "A",
  "explanation": {
    "correct": "Omphalocele has a high association with cardiac and chromosomal anomalies (>50%).",
    "A": "Correct.",
    "B": "Omphalocele is within the cord; Gastroschisis is paraumbilical.",
    "C": "Omphalocele is midline; Gastroschisis is usually right.",
    "D": "Gastroschisis has no sac.",
    "E": "Gastroschisis often has poor initial function due to 'peel' but long-term is usually fine."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Always screen for cardiac defects in babies with an omphalocele."
},
{
  "id": 358,
  "specialty": "Pediatric Surgery",
  "topic": "Pyloric Stenosis - Age",
  "question": "Hypertrophic pyloric stenosis typically presents at what age?",
  "options": {
    "A": "Birth to 1 week",
    "B": "3 to 6 weeks",
    "C": "3 to 6 months",
    "D": "6 to 12 months",
    "E": "Over 1 year"
  },
  "answer": "B",
  "explanation": {
    "correct": "Peak incidence is between 3 and 6 weeks of life.",
    "A": "Too early.",
    "B": "Correct peak age.",
    "C": "Rarely presents this late.",
    "D": "Extremely rare.",
    "E": "Not a pediatric presentation for this disease."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Pyloric stenosis is a disease of the first few weeks of life."
},
{
  "id": 359,
  "specialty": "Pediatric Surgery",
  "topic": "Intussusception - Lead Point",
  "question": "The most common lead point for intussusception in children over 2 years of age is:",
  "options": {
    "A": "Meckel diverticulum",
    "B": "Lymphoid hyperplasia",
    "C": "Intestinal polyp",
    "D": "Lymphoma",
    "E": "Duplication cyst"
  },
  "answer": "A",
  "explanation": {
    "correct": "While most are idiopathic (lymphoid), Meckel's is the leading *pathologic* lead point.",
    "A": "Most common pathologic lead point.",
    "B": "Most common overall but not a 'lead point' in the pathologic sense for older kids.",
    "C": "",
    "D": "Important but less common than Meckel's.",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Consider pathologic lead points in children outside the typical 3-18 month age range for intussusception."
},
{
  "id": 360,
  "specialty": "Pediatric Surgery",
  "topic": "Meckel's Diverticulum - Presentation",
  "question": "The most common presentation of Meckel diverticulum in children is:",
  "options": {
    "A": "Intestinal obstruction",
    "B": "Painless lower gastrointestinal bleeding",
    "C": "Diverticulitis",
    "D": "Umbilical discharge",
    "E": "Intussusception"
  },
  "answer": "B",
  "explanation": {
    "correct": "Painless hematochezia (currant jelly or brick-red) is the most frequent symptom.",
    "A": "Occurs via volvulus or intussusception, but less common than bleeding.",
    "B": "Correct; due to ectopic gastric acid.",
    "C": "Can mimic appendicitis.",
    "D": "Patent vitelline duct remnant.",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Meckel's is the most common cause of significant GI bleeding in children."
}
,
{
  "id": 361,
  "specialty": "Trauma",
  "topic": "Colonic GSW",
  "question": "A 44-year-old man suffers a gunshot wound to his abdomen. He is hemodynamically stable and taken to the operating room. On exploration, his injuries are found to be limited to two small bowel injuries 7 cm apart, each with destruction of 70% of the bowel wall, and a through-and-through injury to the ascending colon with destruction of 30% of the bowel wall. How should these injuries be managed?",
  "options": {
    "A": "Resection and anastomosis of the small bowel injuries and primary repair of the colon injury",
    "B": "Primary repair of both the small bowel and colon injuries",
    "C": "Primary repair of the small bowel injuries, primary repair of the colon injury, and creation of a diverting ileostomy",
    "D": "Resection of the small bowel injuries and exteriorization of the colon injury as a colostomy",
    "E": "Resection and anastomosis of all injuries"
  },
  "answer": "A",
  "explanation": {
    "correct": "Historically, all colon injuries were treated by diversion; however, modern guidelines allow for primary repair in hemodynamically stable patients with injuries involving less than 50% of the circumferential bowel and no vascular disruption. For small bowel injuries, resection is indicated when the injury involves greater than 50% of the wall circumference, or when there are multiple injuries in a short segment where primary repair would compromise the lumen or blood supply.",
    "A": "Correct management for stable patient with these specific injuries.",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Hemodynamically stable patients with minimal colonic contamination can often undergo primary repair of colon injuries."
},
{
  "id": 362,
  "specialty": "Trauma",
  "topic": "Neck Trauma",
  "question": "A 27-year-old woman is brought to the emergency department awake and alert after sustaining a gunshot wound to her neck. The wound is anterior to the origin of the sternocleidomastoid muscle at the angle of the mandible. The patient is asymptomatic. All of the following are correct management choices except:",
  "options": {
    "A": "Cervical spine radiographic studies",
    "B": "Mandatory neck exploration",
    "C": "Four-vessel angiographic studies",
    "D": "Esophagoscopy and esophagography",
    "E": "Laryngoscopy and bronchoscopy"
  },
  "answer": "B",
  "explanation": {
    "correct": "The patient has sustained an injury to Zone III of the neck (above the angle of the mandible). Asymptomatic patients with Zone III injuries should undergo selective management rather than mandatory exploration.",
    "A": "Standard in trauma.",
    "B": "Incorrect; selective management is preferred for asymptomatic Zone III.",
    "C": "Necessary for Zone III evaluation.",
    "D": "Necessary for aerodigestive evaluation.",
    "E": "Necessary for airway evaluation."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Zone III neck injuries in asymptomatic patients are managed selectively with thorough imaging and endoscopy."
},
{
  "id": 363,
  "specialty": "Trauma",
  "topic": "Carotid Injury",
  "question": "Soon after a patient with a Zone III neck injury arrives in the emergency department, left hemiparesis and aphasia develop. At this time, which of the following treatments should be provided?",
  "options": {
    "A": "Continued observation",
    "B": "Repair of the carotid artery injury",
    "C": "Ligation of the carotid artery injury",
    "D": "Repair of the vertebral artery injury",
    "E": "Systemic anticoagulation"
  },
  "answer": "B",
  "explanation": {
    "correct": "The development of a neurologic deficit (hemiparesis, aphasia) in a patient with a Zone III neck injury is highly suggestive of a carotid artery injury. Current trauma recommendations favor surgical repair of the carotid artery.",
    "A": "Inappropriate for acute deficit.",
    "B": "Standard of care for salvageable neurologic status.",
    "C": "Only if non-reconstructible.",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Acute neurologic deficits following carotid injury warrant immediate surgical repair if possible."
},
{
  "id": 364,
  "specialty": "Trauma",
  "topic": "Pancreatic Trauma",
  "question": "A 42-year-old man strike the steering wheel during an MVA. He is hemodynamically stable but has positive DPL. Exploration reveals complete transection of the pancreatic neck. What is the most appropriate management?",
  "options": {
    "A": "Distal pancreatectomy with oversewing and drainage of the proximal pancreatic stump",
    "B": "Roux-en-Y pancreaticojejunostomy to the distal end",
    "C": "Primary repair and drainage of the pancreatic duct",
    "D": "Whipple operation",
    "E": "Total pancreatectomy"
  },
  "answer": "A",
  "explanation": {
    "correct": "For a complete transection of the pancreatic neck, the standard management is a distal pancreatectomy. The proximal stump is oversewn and the area is widely drained.",
    "A": "Gold standard for neck/body transection.",
    "B": "More complex, higher leak rate in trauma.",
    "C": "Unreliable.",
    "D": "For head injuries.",
    "E": "Overly aggressive."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Transection of the pancreas to the left of the mesenteric vessels is best managed by distal pancreatectomy."
},
{
  "id": 365,
  "specialty": "Trauma",
  "topic": "Urethral Injury",
  "question": "A 30-year-old man with stable vitals has a high-riding prostate and bilateral pubic rami fractures. He has not voided. Next step?",
  "options": {
    "A": "Wait for the patient to void",
    "B": "Attempt gentle transurethral catheterization",
    "C": "Perform retrograde cystography",
    "D": "Perform retrograde urethrography (RUG)",
    "E": "Perform IVP"
  },
  "answer": "D",
  "explanation": {
    "correct": "The presence of pubic rami fractures combined with a high-riding prostate is highly suspicious for a posterior urethral injury. Blind catheterization is contraindicated; RUG is mandatory.",
    "A": "Delays diagnosis.",
    "B": "Contraindicated.",
    "C": "Evaluates bladder, not urethra.",
    "D": "Necessary to rule out urethral disruption.",
    "E": "Evaluates upper tract."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Retrograde urethrography is the first step in suspected urethral injury before any catheterization."
},
{
  "id": 366,
  "specialty": "Trauma",
  "topic": "TRALI",
  "question": "A 24-year-old man requires multiple transfusions for hemothorax. He develops tachypnea, hypoxia, and bilateral infiltrates on CXR. Which is true?",
  "options": {
    "A": "Reaction usually develops 12-24 hours after transfusion",
    "B": "Mortality rate nears 50%",
    "C": "Associated with elevated PCWP",
    "D": "Clinical improvement is typically seen within 2 to 8 days",
    "E": "Results from entrapment of activated platelets in the lung"
  },
  "answer": "D",
  "explanation": {
    "correct": "TRALI manifests within 6 hours. It is non-cardiogenic (normal PCWP). Most patients show significant clinical improvement within 2 to 8 days with supportive care.",
    "A": "Develops within 6 hours.",
    "B": "Mortality is ~5-10%.",
    "C": "Non-cardiogenic (low/normal PCWP).",
    "D": "Typical recovery timeline.",
    "E": "Results from antileukocyte antibodies."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "TRALI is a leading cause of transfusion-related mortality but usually resolves within a week."
},
{
  "id": 367,
  "specialty": "Trauma",
  "topic": "Compartment Syndrome",
  "question": "A patient with SFA repair develops diminished pulses and pain with passive dorsiflexion. Anterior compartment pressure is 30 mmHg. Which is true?",
  "options": {
    "A": "Fractures cause ~30% of cases",
    "B": "Lateral compartment is most commonly affected",
    "C": "25 mmHg negates need for fasciotomy",
    "D": "Paresthesias are an early development",
    "E": "A four-compartment fasciotomy should be performed"
  },
  "answer": "E",
  "explanation": {
    "correct": "The standard surgical treatment for the lower leg is a four-compartment fasciotomy. Paresthesias are a late sign.",
    "A": "Fractures cause ~50%.",
    "B": "Anterior is most common.",
    "C": "Clinical findings take precedence; 30 is a common threshold.",
    "D": "Late sign.",
    "E": "Standard of care."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Fasciotomy in the leg must include all four compartments to be effective."
},
{
  "id": 368,
  "specialty": "Trauma",
  "topic": "Rhabdomyolysis",
  "question": "Regarding rhabdomyolysis and its complications:",
  "options": {
    "A": "Acute renal failure occurs secondary to the release of myoglobin",
    "B": "Alkalotic environment promotes cast formation",
    "C": "Renal failure typically resolves in 3-5 days",
    "D": "Severe hyponatremia is a frequent complication",
    "E": "Alkalinization to pH 8-9 is the goal"
  },
  "answer": "A",
  "explanation": {
    "correct": "Myoglobin released from muscle damage causes renal tubular obstruction and toxicity.",
    "A": "Primary mechanism.",
    "B": "Acidic environment promotes casts.",
    "C": "Resolution takes longer.",
    "D": "Hyperkalemia is more common.",
    "E": "Urine pH goal is >6.5."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Myoglobinuria requires aggressive hydration and urine alkalinization to prevent ATN."
},
{
  "id": 369,
  "specialty": "Trauma",
  "topic": "Abdominal Compartment Syndrome",
  "question": "A patient develops a firm abdomen and oliguria 12 hours after massive transfusion. Which is true of ACS?",
  "options": {
    "A": "PCWP is typically low",
    "B": "FRC is increased",
    "C": "There is increased central venous return",
    "D": "Central venous pressure (CVP) is increased",
    "E": "Cardiac output increases"
  },
  "answer": "D",
  "explanation": {
    "correct": "ACS increases intra-abdominal pressure, which is transmitted to the thorax, resulting in falsely elevated CVP and PCWP measurements.",
    "A": "Falsely elevated.",
    "B": "FRC is decreased due to diaphragm elevation.",
    "C": "Decreased due to IVC compression.",
    "D": "Falsely elevated due to thoracic pressure.",
    "E": "Decreased."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "ACS causes multi-system dysfunction, including decreased cardiac output and respiratory failure."
},
{
  "id": 370,
  "specialty": "Trauma",
  "topic": "Pregnancy Trauma",
  "question": "A woman at 30 weeks' gestation is in an MVA. Which is true regarding trauma in pregnancy?",
  "options": {
    "A": "Less than 5% of pregnancies are affected",
    "B": "Uterus is protected by the bony pelvis until the beginning of the second trimester",
    "C": "Fundal height at 25 weeks is at the umbilicus",
    "D": "Blood volume increases by ~30%",
    "E": "Hypotensive patients should be placed in the right lateral position"
  },
  "answer": "B",
  "explanation": {
    "correct": "The uterus stays in the pelvis until ~12 weeks. Volume increases by 50%. Left lateral position is used to avoid IVC compression.",
    "A": "Up to 8%.",
    "B": "True (up to 12 weeks).",
    "C": "20 weeks is umbilicus.",
    "D": "50% increase.",
    "E": "Left lateral."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "The physiologic changes of pregnancy can mask signs of maternal hemorrhage until it is severe."
},
{
  "id": 371,
  "specialty": "Trauma",
  "topic": "Blunt Abdominal Trauma",
  "question": "A stable patient after a crash has LUQ tenderness. Next step?",
  "options": {
    "A": "CT scan of the abdomen and pelvis",
    "B": "DPL",
    "C": "Admission and observation",
    "D": "Abdominal ultrasound (FAST)",
    "E": "Exploratory laparotomy"
  },
  "answer": "A",
  "explanation": {
    "correct": "CT is the gold standard for stable patients to identify specific organ injuries.",
    "A": "Best initial test for stable patient.",
    "B": "For unstable or high-risk for hollow viscus.",
    "C": "May miss occult injury.",
    "D": "Good for unstable, but CT is more detailed.",
    "E": "Not indicated without evidence of injury."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "CT is essential for grading solid organ injuries in stable blunt trauma patients."
},
{
  "id": 372,
  "specialty": "Trauma",
  "topic": "Splenic Trauma",
  "question": "A 58-year-old man has a 2 cm splenic laceration. Which is true?",
  "options": {
    "A": "60% of adult splenic injuries are managed nonoperatively",
    "B": "This injury grade has a 5% failure rate with NOM",
    "C": "Age is not a factor in failure rate",
    "D": "Initial tachycardia precludes NOM",
    "E": "Nonoperative management of a grade V injury has ~25% success rate"
  },
  "answer": "E",
  "explanation": {
    "correct": "NOM for Grade V injuries is highly likely to fail (~75% failure).",
    "A": "Much higher (~80-90%).",
    "B": "Higher.",
    "C": "Age >55 is a risk factor for failure.",
    "D": "Stability AFTER resuscitation is what matters.",
    "E": "Accurate success rate for Grade V."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Splenic injury grade and patient age are key predictors of NOM success."
},
{
  "id": 373,
  "specialty": "Trauma",
  "topic": "Splenic Trauma - Failure of NOM",
  "question": "A patient being observed for splenic injury develops tachycardia and hypotension on day 2. Next step?",
  "options": {
    "A": "Transfuse 2 units and serial Hb",
    "B": "Angiography",
    "C": "CT scan",
    "D": "Repeat abdominal exam",
    "E": "Laparotomy"
  },
  "answer": "E",
  "explanation": {
    "correct": "New hemodynamic instability during observation is a definitive indication for surgery.",
    "A": "Unsafe without control.",
    "B": "May be used if stable, but laparotomy is safer for acute shock.",
    "C": "Too slow for unstable patient.",
    "D": "Too slow.",
    "E": "Standard of care for failure of NOM."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Hemodynamic instability is the most common reason for converting from NOM to surgery."
},
{
  "id": 374,
  "specialty": "Trauma",
  "topic": "Diaphragmatic Rupture",
  "question": "A CXR shows rib fractures and an air-fluid level in the left chest. Which is true?",
  "options": {
    "A": "Right-sided is more common",
    "B": "60% incidence of coexisting pelvic fractures",
    "C": "FAST is the best initial test",
    "D": "40% incidence of normal CXR in documented injury",
    "E": "60% incidence of coexisting thoracic aortic injury"
  },
  "answer": "D",
  "explanation": {
    "correct": "Initial CXR is often normal or non-specific in diaphragmatic injury.",
    "A": "Left is more common.",
    "B": "Only ~10%.",
    "C": "CXR is initial, then CT.",
    "D": "Correct range for normal initial CXR.",
    "E": "Much lower."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Diaphragmatic injury should be suspected in any major blunt thoracoabdominal trauma."
},
{
  "id": 375,
  "specialty": "Trauma",
  "topic": "Liver Trauma",
  "question": "A stable patient has a grade III liver laceration. Which is true?",
  "options": {
    "A": "Should be managed operatively",
    "B": "Associated with 15% incidence of coexisting splenic injury",
    "C": "20% will fail NOM",
    "D": "Pringle maneuver max time is 20 minutes",
    "E": "Atriocaval shunt is the first maneuver"
  },
  "answer": "B",
  "explanation": {
    "correct": "Concurrent solid organ injuries are common in blunt trauma.",
    "A": "Managed non-operatively.",
    "B": "Known association rate.",
    "C": "Failure rate is <10%.",
    "D": "Up to 60 mins.",
    "E": "Last resort."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Liver injuries are more successfully managed nonoperatively than splenic injuries."
},
{
  "id": 376,
  "specialty": "Trauma",
  "topic": "Subclavian Injury",
  "question": "A patient has a stab wound below the mid-clavicle and no pulses. Approach?",
  "options": {
    "A": "Median sternotomy",
    "B": "Clavicular incision",
    "C": "Right anterolateral thoracotomy",
    "D": "Right posterolateral thoracotomy",
    "E": "Left anterolateral thoracotomy"
  },
  "answer": "B",
  "explanation": {
    "correct": "Direct access to the subclavian artery is best achieved through a clavicular incision.",
    "A": "For proximal/central injuries.",
    "B": "Best for distal subclavian/axillary.",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Exposure of the subclavian artery depends on the segment injured (clavicular incision vs. sternotomy/thoracotomy)."
},
{
  "id": 377,
  "specialty": "Trauma",
  "topic": "Penetrating Trauma - DPL",
  "question": "A RUQ stab wound patient has a DPL with 20,000 RBC/mm3. Next step?",
  "options": {
    "A": "CT scan",
    "B": "Observation",
    "C": "Suture repair of wound",
    "D": "Exploratory laparotomy",
    "E": "Discharge"
  },
  "answer": "D",
  "explanation": {
    "correct": "The threshold for positive DPL in penetrating trauma is 10,000 RBC/mm3.",
    "A": "",
    "B": "",
    "C": "",
    "D": "Positive finding in penetrating trauma.",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "DPL thresholds differ between blunt (100k) and penetrating (10k) mechanisms."
},
{
  "id": 378,
  "specialty": "Trauma",
  "topic": "Massive Hemothorax",
  "question": "A chest tube returns 1800 mL of blood immediately. Next step?",
  "options": {
    "A": "CT scan",
    "B": "Transfusion and observation",
    "C": "Angiography",
    "D": "Exploratory laparotomy",
    "E": "Exploratory thoracotomy"
  },
  "answer": "E",
  "explanation": {
    "correct": "Immediate return of >1500 mL or 200 mL/hr for 4 hours warrants thoracotomy.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": "Definitive indication for surgery."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Massive hemothorax indicates a major vascular or pulmonary hilum injury."
},
{
  "id": 379,
  "specialty": "Trauma",
  "topic": "GCS Calculation",
  "question": "Incomprehensible sounds, eyes open to pain, flexor response. GCS?",
  "options": {
    "A": "5",
    "B": "6",
    "C": "7",
    "D": "8",
    "E": "Not enough info"
  },
  "answer": "C",
  "explanation": {
    "correct": "Eyes (2) + Verbal (2) + Motor (3) = 7.",
    "A": "",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "GCS is a critical predictor of brain injury severity and airway safety."
},
{
  "id": 380,
  "specialty": "Trauma",
  "topic": "Airway Management",
  "question": "For a trauma patient with a GCS of 7, what is the next best step?",
  "options": {
    "A": "CT scan of the head",
    "B": "Continue surveys",
    "C": "CXR",
    "D": "Head of bed 30 degrees",
    "E": "Endotracheal intubation"
  },
  "answer": "E",
  "explanation": {
    "correct": "GCS ≤ 8 requires definitive airway control.",
    "A": "Necessary but after airway.",
    "B": "",
    "C": "",
    "D": "",
    "E": "Priority #1 in primary survey."
  },
  "guideline": "Rush Review 5th Edition",
  "takeaway": "Airway protection is the first priority in patients with impaired consciousness."
}
];