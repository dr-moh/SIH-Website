const fs = require('fs');

const subagentOutput = [
  {
    "id": 381,
    "specialty": "Trauma",
    "topic": "Colonic injury",
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
      "correct": "Small bowel injuries involving more than 50% of the circumference or multiple injuries in a short segment require resection and anastomosis. In hemodynamically stable patients without significant contamination, most colon injuries can be safely managed with primary repair or resection and anastomosis without diversion.",
      "A": "Correct management.",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "Hemodynamically stable patients with isolated colonic injuries can often be managed with primary repair."
  },
  {
    "id": 382,
    "specialty": "Trauma",
    "topic": "Neck Trauma",
    "question": "A 27-year-old woman is brought to the emergency department awake and alert after sustaining a gunshot wound to her neck. The wound is anterior to the origin of the sternocleidomastoid muscle at the angle of the mandible. The patient is asymptomatic. All of the following are correct management choices except:",
    "options": {
      "A": "Cervical spine radiographic studies",
      "B": "Mandatory neck exploration",
      "C": "Four-vessel angiographic studies",
      "D": "Flexible esophagoscopic examination",
      "E": "Contrast-enhanced esophagographic examination"
    },
    "answer": "B",
    "explanation": {
      "correct": "Current management of penetrating neck injuries in asymptomatic stable patients (Zone II) often follows a 'no-mandatory exploration' protocol, using diagnostic studies like CTA, esophagography, and endoscopy to rule out vascular and aerodigestive injuries.",
      "A": "",
      "B": "Correct; mandatory exploration is no longer the standard for asymptomatic patients.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "Selective management is the preferred strategy for asymptomatic penetrating neck injuries."
  },
  {
    "id": 383,
    "specialty": "Trauma",
    "topic": "Carotid Injury",
    "question": "Soon after the patient in Question 2 arrives in the emergency department, she becomes hemiparetic and goes into shock. At this time, which of the following treatments should be provided?",
    "options": {
      "A": "Proximal and distal control",
      "B": "Repair of the carotid artery injury",
      "C": "Ligation of the carotid artery injury",
      "D": "Repair of the vertebral artery injury",
      "E": "Mandatory neck exploration"
    },
    "answer": "C",
    "explanation": {
      "correct": "In patients with profound shock and a severe neurologic deficit (like hemiparesis/coma) following a carotid injury, ligation may be indicated if the patient is unstable or if repair is technically unfeasible in the setting of life-threatening hemorrhage.",
      "A": "",
      "B": "",
      "C": "Correct; ligation is sometimes necessary in salvage cases.",
      "D": "",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "Carotid ligation is a fallback for irreparable injuries or unstable patients with severe deficits."
  },
  {
    "id": 384,
    "specialty": "Trauma",
    "topic": "Pancreatico-duodenal injury",
    "question": "In the upper part of the abdomen of a 45-year-old man who was the steering-wheel driver during a motor vehicle accident, the exploration for injuries revealed a moderate amount of blood and an injury to the second portion of the duodenum. The patient is stable and a grade II laceration involving less than one-third of the pancreatic head is found. What is the most appropriate management of the injury?",
    "options": {
      "A": "Duodenojejunostomy with external drainage and drainage of the proximal pancreatic stump",
      "B": "Roux-en-Y pancreaticojejunostomy to the divided end of the pancreas with distal pancreaticojejunostomy and external drainage",
      "C": "Primary repair and drainage of the pancreatic duct",
      "D": "Pyloric exclusion",
      "E": "Pancreatoduodenectomy"
    },
    "answer": "D",
    "explanation": {
      "correct": "Pyloric exclusion is a management technique used for complex duodenal or combined duodenal-pancreatic injuries to divert gastric contents away from the repair, allowing it to heal.",
      "A": "",
      "B": "",
      "C": "",
      "D": "Correct; useful for combined injuries.",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "Pyloric exclusion protects duodenal repairs in the setting of concurrent pancreatic injury."
  },
  {
    "id": 385,
    "specialty": "Trauma",
    "topic": "Urethral Injury",
    "question": "A 30-year-old man is brought to the emergency department after being involved in a Jet Ski crash. His vital signs are stable. A high-riding prostate is noted on rectal examination. On portable pelvic radiographs he is found to have bilateral pubic rami fractures. He has not yet voided since admission. Which of the following should be the next step?",
    "options": {
      "A": "Wait for the patient to void freely before attempting transurethral bladder catheterization.",
      "B": "Initially attempt gentle transurethral bladder catheterization, but stop if resistance is encountered.",
      "C": "Obtain a urethrogram before attempting transurethral bladder catheterization.",
      "D": "Insert a suprapubic cystostomy tube.",
      "E": "Perform computed tomography of the pelvis with three-dimensional reconstruction."
    },
    "answer": "C",
    "explanation": {
      "correct": "Signs of urethral injury (high-riding prostate, blood at the meatus, pelvic fracture) require a retrograde urethrogram (RUG) to assess urethral integrity before any attempt at transurethral catheterization.",
      "A": "",
      "B": "",
      "C": "Correct; RUG is mandatory.",
      "D": "",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "Always perform a retrograde urethrogram before catheterization if urethral injury is suspected."
  },
  {
    "id": 386,
    "specialty": "Trauma",
    "topic": "Blunt Trauma - DPL",
    "question": "A 28-year-old man is a restrained passenger in a high-speed motor vehicle collision. On arrival at the emergency department, his pulse is 110 beats/min and his blood pressure is 85/50 mm Hg. After 2 liters of crystalloid, his pulse is 120 beats/min and his blood pressure is 80/40 mm Hg. A FAST is negative. Bedside chest and pelvic radiographs are negative. Which of the following statements regarding this condition is true?",
    "options": {
      "A": "The type of injury is generally associated with a 5% to 10% mortality rate.",
      "B": "In the case of blunt trauma, DPL is still superior to ultrasound.",
      "C": "If the injury is at the level of the aortic hiatus, it is best addressed via a right thoracotomy.",
      "D": "This patient's pain is associated with a far higher mortality rate than with nonoperative management.",
      "E": "Therapeutic embolization is the first line of treatment for this condition."
    },
    "answer": "B",
    "explanation": {
      "correct": "In an unstable patient with negative FAST and negative X-rays, DPL can be used to detect intra-abdominal hemorrhage that may have been missed by ultrasound.",
      "A": "",
      "B": "Correct; DPL remains a fallback for FAST-negative shock.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "DPL is highly sensitive for hemoperitoneum when FAST is inconclusive or negative."
  },
  {
    "id": 387,
    "specialty": "Trauma",
    "topic": "Compartment Syndrome",
    "question": "A 44-year-old man suffers a gunshot wound to his left thigh resulting in a superficial femoral artery injury. It is repaired with a saphenous vein graft. Five hours postoperatively his distal pulses diminish and he begins to experience severe pain with passive motion of the left foot. Left anterior compartment pressure is 30 mm Hg. Which of the following statements is true regarding compartment syndrome?",
    "options": {
      "A": "Fractures are the cause of approximately 30% of all compartment syndromes.",
      "B": "The lateral compartment of the lower part of the leg is the most commonly affected.",
      "C": "A compartment pressure of 25 mm Hg negates a need for fasciotomy.",
      "D": "Paresthesias are an early clinical development.",
      "E": "A four-compartment fasciotomy should be performed."
    },
    "answer": "E",
    "explanation": {
      "correct": "When compartment syndrome is diagnosed in the leg (clinical signs or pressure >30 mmHg), a full four-compartment fasciotomy should be performed to prevent permanent limb dysfunction.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": "Correct surgical management."
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "Four-compartment fasciotomy is the standard for lower leg compartment syndrome."
  },
  {
    "id": 388,
    "specialty": "Trauma",
    "topic": "Rhabdomyolysis",
    "question": "Regarding rhabdomyolysis:",
    "options": {
      "A": "Acute renal failure is secondary to the release of myoglobin.",
      "B": "In acidic urine conditions, the formation of myoglobin casts in the renal tubules occurs, accelerating kidney damage.",
      "C": "The renal failure from rhabdomyolysis typically resolves within 5 to 7 days.",
      "D": "Severe hypercalcemia is a common early event.",
      "E": "Alkalinization to a pH between 8 and 9 is an important treatment goal."
    },
    "answer": "B",
    "explanation": {
      "correct": "Myoglobin is nephrotoxic, especially in the presence of acidic urine, which promotes the formation of casts and increases renal damage.",
      "A": "",
      "B": "Correct mechanism of injury.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "Acidic urine exacerbates myoglobin-induced renal injury."
  },
  {
    "id": 389,
    "specialty": "Trauma",
    "topic": "Abdominal Compartment Syndrome",
    "question": "A 54-year-old man is admitted to the ICU after undergoing emergency laparotomy for abdominal trauma. His intra-abdominal pressure is noted to be 25 mm Hg and his cerebral perfusion pressure is decreased. Which of the following statements is true regarding abdominal compartment syndrome (ACS)?",
    "options": {
      "A": "Grade IV ACS is defined as an intra-abdominal pressure greater than 20 mm Hg.",
      "B": "There is increased cardiac output.",
      "C": "There is increased central venous pressure.",
      "D": "Urinary output increases with grade I ACS.",
      "E": "Grade IV ACS is best managed conservatively."
    },
    "answer": "C",
    "explanation": {
      "correct": "In ACS, the high intra-abdominal pressure is transmitted across the diaphragm, leading to increased intrathoracic pressure and falsely elevated CVP readings, while venous return and cardiac output actually decrease.",
      "A": "",
      "B": "",
      "C": "Correct; falsely elevated due to thoracic transmission.",
      "D": "",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "ACS leads to falsely elevated central venous and wedge pressures."
  },
  {
    "id": 390,
    "specialty": "Trauma",
    "topic": "Pregnancy Trauma",
    "question": "A 25-year-old woman is the driver in a motor vehicle accident and is approximately 30 weeks pregnant. Which of the following statements are true regarding trauma in a pregnant patient?",
    "options": {
      "A": "Less than 5% of all pregnancies are affected by trauma.",
      "B": "The uterus is protected by the bony pelvis until the beginning of the second trimester.",
      "C": "A woman of 25 weeks' gestation will have a palpable fundal height at approximately the level of the umbilicus.",
      "D": "Blood volume during pregnancy increases by approximately 30%.",
      "E": "Hypotensive patients should be placed in the right lateral position."
    },
    "answer": "D",
    "explanation": {
      "correct": "Maternal blood volume increases significantly during pregnancy (by 30-50%), which can mask signs of hemorrhage until substantial blood loss has occurred.",
      "A": "",
      "B": "",
      "C": "",
      "D": "Correct physiologic fact.",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "Hypervolemia of pregnancy can mask acute blood loss in trauma."
  },
  {
    "id": 391,
    "specialty": "Critical Care",
    "topic": "Sedation in ICU",
    "question": "A 76-year-old man with a history of Child class A cirrhosis and chronic renal insufficiency is admitted to the ICU following an emergency exploratory laparotomy for ruptured appendicitis. In the ICU, the patient has a heart rate (HR) of 129 beats/min, a blood pressure (BP) of 220/90 mm Hg, and a respiratory rate (RR) of 30 breaths/min with a pulse oximetry (SaO2) of 90%. He is agitated and trying to pull his drains and does not appear to respond to commands. What is the best choice to sedate the patient?",
    "options": {
      "A": "Lorazepam, 5 mg intravenously",
      "B": "Four-point restraints while trying to reason with the patient",
      "C": "Morphine delivered by PCA",
      "D": "Propofol and fentanyl drip",
      "E": "Placement of an epidural catheter for analgesia"
    },
    "answer": "D",
    "explanation": {
      "correct": "Propofol is a rapid-acting sedative with a short half-life, making it suitable for agitated patients in the ICU. Fentanyl provides analgesia and has a better safety profile than morphine in renal failure.",
      "A": "",
      "B": "",
      "C": "",
      "D": "Correct pharmacological choice.",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "Propofol/Fentanyl is a versatile combination for ICU sedation and analgesia."
  },
  {
    "id": 392,
    "specialty": "Critical Care",
    "topic": "ICU Drugs",
    "question": "Which of the following is true regarding sedative and analgesic drugs used in the ICU?",
    "options": {
      "A": "Most benzodiazepines and opioids are metabolized via the kidneys.",
      "B": "Midazolam has a long half-life and is therefore poorly suited for sedation.",
      "C": "Fentanyl has a high incidence of hypotension and is poorly suited for patients in shock.",
      "D": "Lorazepam is longer acting than midazolam and can be delivered as a continuous infusion.",
      "E": "Propofol has no significant effect on blood pressure."
    },
    "answer": "D",
    "explanation": {
      "correct": "Lorazepam is longer-acting than midazolam and is commonly used for continuous sedation, although it carries a risk of propylene glycol toxicity at high doses.",
      "A": "",
      "B": "",
      "C": "",
      "D": "Correct pharmacokinetic fact.",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "Lorazepam is useful for sustained sedation but requires monitoring for toxicity."
  },
  {
    "id": 393,
    "specialty": "Critical Care",
    "topic": "Arterial Cannulation",
    "question": "Which of the following statements regarding radial artery cannulation is true?",
    "options": {
      "A": "Ischemia is common.",
      "B": "An Allen test is required.",
      "C": "The incidence of infection is higher with catheters placed by surgical cutdown.",
      "D": "The catheter should be replaced every 3 days.",
      "E": "Intermittent flushing to keep the catheter free of clots is desirable."
    },
    "answer": "C",
    "explanation": {
      "correct": "Surgical cutdown for arterial access is associated with a higher risk of infection compared to percutaneous techniques.",
      "A": "",
      "B": "",
      "C": "Correct relative risk.",
      "D": "",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "Percutaneous arterial access is preferred over surgical cutdown for infection control."
  },
  {
    "id": 394,
    "specialty": "Critical Care",
    "topic": "PA Catheter Complications",
    "question": "A 72-year-old man with a history of congestive heart failure undergoes an aortic valve replacement. A pulmonary artery (PA) catheter is placed. Five hours later, blood-tinged sputum is noted in the patient's endotracheal tube. Select the best intervention.",
    "options": {
      "A": "Place the patient in the supine position and administer lidocaine.",
      "B": "Place a double-lumen endotracheal tube and occlude the appropriate bronchus with a Fogarty catheter.",
      "C": "Pull the PA catheter back 2 cm with the balloon inflated.",
      "D": "In-line the endotracheal tube while deflating the balloon for 2 to 4 hours.",
      "E": "Obtain a chest radiograph to confirm correct placement of the line."
    },
    "answer": "B",
    "explanation": {
      "correct": "Hemoptysis following PA catheter placement suggests pulmonary artery rupture. Initial management involves isolating the affected lung with a double-lumen tube and controlling the hemorrhage.",
      "A": "",
      "B": "Correct management for PA rupture.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "Pulmonary artery rupture is a rare but catastrophic complication of PA catheters."
  },
  {
    "id": 395,
    "specialty": "Critical Care",
    "topic": "Nutrition Support",
    "question": "Which of the following is true regarding nutritional support in the ICU?",
    "options": {
      "A": "Total parenteral nutrition (TPN) is superior to enteral nutrition.",
      "B": "Enteral nutrition should be started within 24 to 48 hours of admission.",
      "C": "Gastric residuals >100 mL always indicate a need to stop enteral feeds.",
      "D": "Prokinetic agents have no role in the management of high gastric residuals.",
      "E": "TPN is associated with a lower incidence of infectious complications than enteral nutrition."
    },
    "answer": "B",
    "explanation": {
      "correct": "Early enteral nutrition (within 24-48 hours) is associated with better outcomes, lower infection rates, and maintained gut mucosal integrity compared to TPN.",
      "A": "",
      "B": "Correct; early EN is preferred.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "Early enteral nutrition is the gold standard for ICU support."
  },
  {
    "id": 396,
    "specialty": "Critical Care",
    "topic": "VAP Diagnosis",
    "question": "Which of the following statements regarding ventilator-associated pneumonia (VAP) is true?",
    "options": {
      "A": "VAP is defined as pneumonia occurring more than 24 hours after intubation.",
      "B": "Quantitative culture of bronchoalveolar lavage (BAL) fluid with >10^4 CFU/mL is diagnostic.",
      "C": "Early-onset VAP (within 4 days) is usually caused by multidrug-resistant (MDR) pathogens.",
      "D": "Linezolid is the first-line agent for all VAP cases.",
      "E": "Routine change of ventilator circuits every 48 hours reduces VAP incidence."
    },
    "answer": "B",
    "explanation": {
      "correct": "Quantitative cultures from BAL (>10^4 CFU/mL) or protected brush specimens (>10^3 CFU/mL) are standard for diagnosing VAP.",
      "A": "",
      "B": "Correct diagnostic threshold.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "Quantitative BAL cultures are the most accurate way to diagnose VAP."
  },
  {
    "id": 397,
    "specialty": "Critical Care",
    "topic": "Oxygen Delivery",
    "question": "A 57-year-old man with a history of coronary artery disease, hypertension, and hyperlipidemia has complaints of severe abdominal pain and bloody diarrhea. An upright chest radiograph shows free air. The patient is intubated and placed on a ventilator. Which one of the following will NOT directly affect oxygen delivery (DO2)?",
    "options": {
      "A": "Rapid infusion of 2 L of saline solution",
      "B": "Administration of three ampules of sodium bicarbonate to correct the acidosis",
      "C": "Increasing PEEP by 2.5 units",
      "D": "Transfusion of 2 units of packed red blood cells (PRBCs)",
      "E": "Increasing FiO2 to 60%"
    },
    "answer": "B",
    "explanation": {
      "correct": "Oxygen delivery (DO2) depends on Cardiac Output (CO) and Arterial Oxygen Content (CaO2). Sodium bicarbonate corrects acidosis but does not directly alter CO, hemoglobin, or oxygen saturation.",
      "A": "",
      "B": "Correct; bicarbonate doesn't affect DO2 formula.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "DO2 = CO x [(Hb x 1.34 x SaO2) + (0.003 x PaO2)]."
  },
  {
    "id": 398,
    "specialty": "Critical Care",
    "topic": "Sepsis Physiology",
    "question": "If a patient in the operating room (OR) was found to have perforated colon cancer with fecal peritonitis, a BP of 70/40 mm Hg, and a heart rate of 120 beats/min, which of the following is true?",
    "options": {
      "A": "The lactate level would likely be decreased.",
      "B": "The patient has 15% to 20% of the total body oxygen consumption available.",
      "C": "The delivery of oxygen to the tissues is likely to be increased.",
      "D": "If the patient has 40% of the total body oxygen consumption available...",
      "E": "There is an increased demand for oxygen."
    },
    "answer": "E",
    "explanation": {
      "correct": "In septic shock (fecal peritonitis), there is a significant increase in metabolic demand and oxygen consumption, despite impaired delivery.",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": "Correct; metabolic demand is high."
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "Septic shock creates a massive imbalance between oxygen supply and demand."
  },
  {
    "id": 399,
    "specialty": "Critical Care",
    "topic": "Ventilation pressures",
    "question": "A 24-year-old man who sustained multiple trauma is in the ICU and is being mechanically ventilated. His peak airway pressure is 45 cm H2O and his plateau pressure is 25 cm H2O. What is the most likely cause?",
    "options": {
      "A": "Tension pneumothorax",
      "B": "Abdominal compartment syndrome",
      "C": "Kinked endotracheal tube",
      "D": "Acute respiratory distress syndrome (ARDS)",
      "E": "Mucus plug in the right mainstem bronchus"
    },
    "answer": "C",
    "explanation": {
      "correct": "A high peak-to-plateau pressure gradient (>15-20 cm H2O) indicates increased airway resistance, which can be caused by a kinked tube, bronchospasm, or secretions/mucus plugs.",
      "A": "",
      "B": "",
      "C": "Correct; high peak pressure with normal plateau = resistance.",
      "D": "",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "High peak pressure + normal plateau = Airway resistance; high peak + high plateau = Lung compliance issue."
  },
  {
    "id": 400,
    "specialty": "Critical Care",
    "topic": "Septic Shock - Vasopressors",
    "question": "Regarding the use of vasopressors in septic shock:",
    "options": {
      "A": "Dopamine is the first-line agent.",
      "B": "Norepinephrine is the first-line agent.",
      "C": "Vasopressin should be used as monotherapy.",
      "D": "Epinephrine is preferred over norepinephrine.",
      "E": "Phenylephrine is the first-line agent."
    },
    "answer": "B",
    "explanation": {
      "correct": "According to the Surviving Sepsis Guidelines, norepinephrine is the recommended first-line vasopressor for septic shock.",
      "A": "",
      "B": "Correct first-line agent.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "Rush Review 5th Edition",
    "takeaway": "Norepinephrine is superior to dopamine for survival and side effect profile in septic shock."
  }
];

let questionsJsContent = fs.readFileSync('js/questions.js', 'utf8');

const lastBracketIndex = questionsJsContent.lastIndexOf('];');
if (lastBracketIndex !== -1) {
    const newContent = subagentOutput.map(q => JSON.stringify(q, null, 2)).join(',\n');
    const updatedContent = questionsJsContent.slice(0, lastBracketIndex) + ',\n' + newContent + '\n];';
    fs.writeFileSync('js/questions.js', updatedContent);
    console.log('Successfully appended ' + subagentOutput.length + ' questions to js/questions.js');
} else {
    console.error('Could not find the end of the QUESTIONS array in js/questions.js');
}
