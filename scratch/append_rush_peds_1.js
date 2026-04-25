const fs = require('fs');

const subagentOutput = [
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
