const fs = require('fs');

const newQuestions = [
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
];

let questionsJsContent = fs.readFileSync('js/questions.js', 'utf8');

const lastBracketIndex = questionsJsContent.lastIndexOf('];');
if (lastBracketIndex !== -1) {
    const newContent = newQuestions.map(q => JSON.stringify(q, null, 2)).join(',\n');
    const updatedContent = questionsJsContent.slice(0, lastBracketIndex) + ',\n' + newContent + '\n];';
    fs.writeFileSync('js/questions.js', updatedContent);
    console.log('Successfully appended ' + newQuestions.length + ' questions to js/questions.js');
} else {
    console.error('Could not find the end of the QUESTIONS array in js/questions.js');
}
