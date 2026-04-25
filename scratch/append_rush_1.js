const fs = require('fs');

const subagentOutput = [
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
