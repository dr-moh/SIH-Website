const fs = require('fs');

const subagentOutput = [
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
