const fs = require('fs');

const subagentOutput = [
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
