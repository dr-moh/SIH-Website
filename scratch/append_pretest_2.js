const fs = require('fs');

const newQuestions = [
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
