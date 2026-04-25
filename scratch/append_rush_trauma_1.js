const fs = require('fs');

const subagentOutput = [
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
