const fs = require('fs');

const newQuestions = [
  {
    "id": 121,
    "specialty": "General Surgery",
    "topic": "Endocrine",
    "question": "A 45-year-old woman complains of nervousness, sweating, tremulousness, and weight loss. A thyroid scan exhibits a single 'hot' nodule with suppression of the rest of the gland. Which of the following is the most likely diagnosis?",
    "options": { "A": "Hypersecreting adenoma", "B": "Graves disease", "C": "Lateral aberrant thyroid", "D": "Papillary carcinoma", "E": "Medullary carcinoma" },
    "answer": "A",
    "explanation": { "correct": "The thyroid scan showing a single hot nodule with suppression of the surrounding thyroid tissue is characteristic of a hyperfunctioning toxic adenoma (Plummer's disease). Graves disease would show diffuse uptake throughout the gland.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "A hot nodule on thyroid scan in a thyrotoxic patient suggests a hyperfunctioning adenoma."
  },
  {
    "id": 122,
    "specialty": "General Surgery",
    "topic": "Endocrine",
    "question": "A patient with mild skin pigmentation presents with sudden abdominal pain, fever, and hypotension (BP 88/58). Laboratory results show glucose 55 mg/dL, sodium 119 mEq/L, and potassium 6.2 mEq/L. Which of the following is the definitive treatment?",
    "options": { "A": "10% dextrose infusion", "B": "Bicarbonate", "C": "Hypertonic saline", "D": "Corticosteroids", "E": "Vasopressors" },
    "answer": "D",
    "explanation": { "correct": "The presentation of hypotension, skin pigmentation, hypoglycemia, hyponatremia, and hyperkalemia is classic for acute adrenal crisis (Addisonian crisis). Immediate administration of corticosteroids is the definitive treatment.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Adrenal crisis presents with hypotension and electrolyte imbalance; it requires immediate steroid replacement."
  },
  {
    "id": 123,
    "specialty": "General Surgery",
    "topic": "Endocrine",
    "question": "A patient develops progressive neck swelling, stridor, and difficulty breathing several hours after a completion thyroidectomy. After successful intubation, what is the most appropriate next step?",
    "options": { "A": "Neck exploration and parathyroidectomy", "B": "Administration of IV calcium", "C": "Administration of IV steroids", "D": "Reopening of the wound", "E": "Observation in the ICU" },
    "answer": "D",
    "explanation": { "correct": "Postoperative hematoma after thyroid surgery is a surgical emergency. Even if the airway is secured by intubation, the wound must be reopened to evacuate the clot and control any ongoing bleeding.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Progressive neck swelling and stridor after thyroidectomy indicate a postoperative hematoma requiring immediate evacuation."
  },
  {
    "id": 124,
    "specialty": "General Surgery",
    "topic": "Endocrine",
    "question": "A 28-year-old woman presents with galactorrhea and amenorrhea. MRI reveals a 5-mm pituitary lesion. What is the best initial management?",
    "options": { "A": "Transsphenoidal resection", "B": "Bromocriptine", "C": "Radiation therapy", "D": "Observation", "E": "Bilateral adrenalectomy" },
    "answer": "B",
    "explanation": { "correct": "For microprolactinomas (<10 mm), medical management with dopamine agonists (e.g., bromocriptine or cabergoline) is the first-line treatment and is often highly effective.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Dopamine agonists are the first-line treatment for prolactinomas."
  },
  {
    "id": 125,
    "specialty": "General Surgery",
    "topic": "Endocrine",
    "question": "In a patient with confirmed primary hyperparathyroidism, what is the primary purpose of performing a technetium-99m sestamibi scan?",
    "options": { "A": "To confirm the diagnosis of hyperparathyroidism", "B": "To differentiate between hyperplasia and adenoma", "C": "To localize the parathyroid glands before surgery", "D": "To determine the need for surgery", "E": "To screen for MEN syndromes" },
    "answer": "C",
    "explanation": { "correct": "Sestamibi scans are used as a preoperative localization tool to identify hyperfunctioning parathyroid tissue, allowing for a more targeted surgical approach. They are not used for initial diagnosis.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Sestamibi scan is a localization tool, not a diagnostic test for hyperparathyroidism."
  },
  {
    "id": 126,
    "specialty": "General Surgery",
    "topic": "Endocrine",
    "question": "A 60-year-old man presents with necrolytic migratory erythema, weight loss, and mild diabetes mellitus. CT scan shows a mass in the tail of the pancreas. What is the most likely diagnosis?",
    "options": { "A": "Insulinoma", "B": "Glucagonoma", "C": "Gastrinoma", "D": "VIPoma", "E": "Somatostatinoma" },
    "answer": "B",
    "explanation": { "correct": "The combination of necrolytic migratory erythema (a characteristic rash), diabetes, and a pancreatic islet cell tumor is diagnostic of a glucagonoma.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Glucagonoma presents with necrolytic migratory erythema and diabetes."
  },
  {
    "id": 127,
    "specialty": "General Surgery",
    "topic": "Endocrine",
    "question": "A 40-year-old woman with Cushingoid features has elevated urinary free cortisol. The cortisol levels are suppressed by high-dose dexamethasone but not by low-dose dexamethasone. What is the most likely source?",
    "options": { "A": "Adrenal adenoma", "B": "Adrenal carcinoma", "C": "Ectopic ACTH production", "D": "Pituitary adenoma", "E": "Exogenous steroid use" },
    "answer": "D",
    "explanation": { "correct": "Cushing disease (pituitary source) is typically suppressed by high-dose dexamethasone. Adrenal tumors and ectopic ACTH production (e.g., small cell lung cancer) do not typically show suppression with high-dose dexamethasone.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Cortisol suppression by high-dose dexamethasone indicates a pituitary source (Cushing disease)."
  },
  {
    "id": 128,
    "specialty": "General Surgery",
    "topic": "Endocrine",
    "question": "Which of the following thyroid malignancies is associated with the best long-term prognosis?",
    "options": { "A": "Papillary carcinoma", "B": "Follicular carcinoma", "C": "Medullary carcinoma", "D": "Anaplastic carcinoma", "E": "Thyroid lymphoma" },
    "answer": "A",
    "explanation": { "correct": "Papillary thyroid carcinoma is the most common thyroid cancer and carries the best prognosis, with 10-year survival rates over 90% in most patients.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Papillary thyroid carcinoma has the best prognosis among common thyroid cancers."
  },
  {
    "id": 129,
    "specialty": "General Surgery",
    "topic": "Endocrine",
    "question": "The presence of psammoma bodies on fine-needle aspiration (FNA) of a thyroid nodule is most suggestive of which diagnosis?",
    "options": { "A": "Follicular carcinoma", "B": "Papillary carcinoma", "C": "Medullary carcinoma", "D": "Anaplastic carcinoma", "E": "Hurthle cell carcinoma" },
    "answer": "B",
    "explanation": { "correct": "Psammoma bodies (concentric calcifications) are a classic histological finding in papillary thyroid carcinoma and are highly suggestive of the diagnosis.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Psammoma bodies are pathognomonic for papillary thyroid cancer."
  },
  {
    "id": 130,
    "specialty": "General Surgery",
    "topic": "Endocrine",
    "question": "A patient with severe hypercalcemia (serum calcium 14 mg/dL) presents with lethargy and constipation. What is the most appropriate initial management?",
    "options": { "A": "Intravenous normal saline infusion", "B": "Thiazide diuretics", "C": "IV phosphorus", "D": "Mithramycin", "E": "Immediate surgery" },
    "answer": "A",
    "explanation": { "correct": "Severe hypercalcemia leads to dehydration and renal impairment. Aggressive hydration with normal saline is the first and most crucial step to restore volume and enhance urinary calcium excretion.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Saline hydration is the first step in managing hypercalcemic crisis."
  },
  {
    "id": 131,
    "specialty": "General Surgery",
    "topic": "Endocrine",
    "question": "Which of the following is a recognized indication for parathyroidectomy in a patient with primary hyperparathyroidism?",
    "options": { "A": "Age over 60", "B": "Mild fatigue", "C": "Recurrent nephrolithiasis", "D": "Serum calcium 10.5 mg/dL", "E": "Normal bone mineral density" },
    "answer": "C",
    "explanation": { "correct": "Symptomatic primary hyperparathyroidism, such as that manifesting with kidney stones (nephrolithiasis), is a definitive indication for surgical intervention.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Nephrolithiasis is an indication for surgery in primary hyperparathyroidism."
  },
  {
    "id": 132,
    "specialty": "General Surgery",
    "topic": "Endocrine",
    "question": "A pregnant woman in her second trimester is diagnosed with papillary thyroid carcinoma. What is the most appropriate management?",
    "options": { "A": "Immediate total thyroidectomy", "B": "Termination of pregnancy", "C": "Radioactive iodine treatment", "D": "Suppression therapy and surgery after delivery", "E": "Total thyroidectomy during the second trimester" },
    "answer": "E",
    "explanation": { "correct": "If surgery for thyroid cancer is required during pregnancy, it is safest to perform it during the second trimester. Alternatively, for low-risk papillary cancer, surgery can often be delayed until postpartum.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Thyroid surgery in pregnancy is best performed in the second trimester."
  },
  {
    "id": 133,
    "specialty": "General Surgery",
    "topic": "Endocrine",
    "question": "A 65-year-old woman with Hashimoto thyroiditis presents with a rapidly enlarging thyroid mass and obstructive symptoms. What is the most likely diagnosis?",
    "options": { "A": "Papillary carcinoma", "B": "Follicular carcinoma", "C": "Medullary carcinoma", "D": "Anaplastic carcinoma", "E": "Thyroid lymphoma" },
    "answer": "E",
    "explanation": { "correct": "Thyroid lymphoma is highly associated with underlying Hashimoto thyroiditis and typically presents as a rapidly growing mass in an older patient.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Hashimoto thyroiditis is a risk factor for thyroid lymphoma."
  },
  {
    "id": 134,
    "specialty": "General Surgery",
    "topic": "Endocrine",
    "question": "Medullary thyroid carcinoma originates from which of the following cell types?",
    "options": { "A": "Follicular cells", "B": "Parafollicular C cells", "C": "Hurthle cells", "D": "Lymphocytes", "E": "Fibroblasts" },
    "answer": "B",
    "explanation": { "correct": "Medullary thyroid carcinoma arises from the parafollicular C cells, which are neuroendocrine cells that secrete calcitonin.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "MTC originates from calcitonin-secreting C cells."
  },
  {
    "id": 135,
    "specialty": "General Surgery",
    "topic": "Endocrine",
    "question": "Multiple Endocrine Neoplasia Type 2A (MEN 2A) is characterized by which of the following combinations?",
    "options": { "A": "Pituitary, Parathyroid, Pancreas", "B": "Medullary thyroid cancer, Pheochromocytoma, Parathyroid hyperplasia", "C": "Medullary thyroid cancer, Pheochromocytoma, Mucosal neuromas", "D": "Papillary thyroid cancer, Adrenal adenoma, Pituitary adenoma", "E": "Gastrinoma, Insulinoma, Parathyroid adenoma" },
    "answer": "B",
    "explanation": { "correct": "MEN 2A (Sipple syndrome) includes medullary thyroid carcinoma, pheochromocytoma, and parathyroid hyperplasia. MEN 2B also includes mucosal neuromas and marfanoid habitus.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "MEN 2A consists of MTC, Pheochromocytoma, and Hyperparathyroidism."
  },
  {
    "id": 136,
    "specialty": "General Surgery",
    "topic": "Vascular",
    "question": "A 64-year-old man presents with a 5-minute episode of blindness in the right eye (amaurosis fugax). What is the most appropriate initial diagnostic test?",
    "options": { "A": "Carotid duplex ultrasound", "B": "Aspirin administration", "C": "Head CT", "D": "Carotid endarterectomy", "E": "Warfarin therapy" },
    "answer": "A",
    "explanation": { "correct": "Amaurosis fugax is a transient ischemic event caused by emboli from the carotid artery. Carotid duplex ultrasound is the best initial screening test to evaluate for carotid stenosis.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Amaurosis fugax is a classic symptom of carotid artery disease."
  },
  {
    "id": 137,
    "specialty": "General Surgery",
    "topic": "Vascular",
    "question": "A 60-year-old asymptomatic man is found to have a 6-cm pulsatile infraumbilical abdominal mass. What is the most appropriate management?",
    "options": { "A": "Observation", "B": "Elective repair", "C": "CT scan every 6 months", "D": "Beta-blocker therapy", "E": "Arteriogram" },
    "answer": "B",
    "explanation": { "correct": "For abdominal aortic aneurysms (AAA), a diameter of 5.5 cm or greater in men is a standard indication for elective surgical or endovascular repair due to the risk of rupture.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "AAA > 5.5 cm in men warrants repair."
  },
  {
    "id": 138,
    "specialty": "General Surgery",
    "topic": "Vascular",
    "question": "A patient presents with a cold, pale, and pulseless left foot with sudden onset of pain. He has an irregular heart rate of 110 bpm. What is the most appropriate first step in management?",
    "options": { "A": "Systemic heparinization", "B": "Arteriogram", "C": "Embolectomy", "D": "Thrombolysis", "E": "Fasciotomy" },
    "answer": "A",
    "explanation": { "correct": "The patient has acute limb ischemia, likely due to an embolus from atrial fibrillation. The immediate first step is systemic anticoagulation with heparin to prevent further clot propagation and stabilize the situation.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Immediate heparinization is the first step in managing acute arterial occlusion."
  },
  {
    "id": 139,
    "specialty": "General Surgery",
    "topic": "Vascular",
    "question": "A patient reports calf pain after walking two blocks that is relieved by rest. His ankle-brachial index (ABI) is 0.6. What is the most appropriate initial treatment?",
    "options": { "A": "Bypass surgery", "B": "Supervised walking program", "C": "Angioplasty", "D": "Sympathectomy", "E": "Amputation" },
    "answer": "B",
    "explanation": { "correct": "Stable intermittent claudication is best managed initially with a supervised exercise program, risk factor modification, and smoking cessation.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Exercise is the first-line treatment for stable claudication."
  },
  {
    "id": 140,
    "specialty": "General Surgery",
    "topic": "Vascular",
    "question": "Which of the following is the most common site of atherosclerotic occlusive disease in the lower extremities?",
    "options": { "A": "Aorta", "B": "Common iliac artery", "C": "Superficial femoral artery", "D": "Popliteal artery", "E": "Tibial artery" },
    "answer": "C",
    "explanation": { "correct": "The superficial femoral artery (SFA), particularly at the level of the adductor (Hunter's) canal, is the most common site of arterial stenosis and occlusion in patients with peripheral arterial disease.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "SFA at the adductor canal is the most frequent site of atherosclerosis."
  },
  {
    "id": 141,
    "specialty": "General Surgery",
    "topic": "Vascular",
    "question": "A 70-year-old man presents with sudden, severe back pain, hypotension, and a pulsatile abdominal mass. What is the most likely diagnosis?",
    "options": { "A": "Acute pancreatitis", "B": "Perforated ulcer", "C": "Ruptured abdominal aortic aneurysm", "D": "Mesenteric ischemia", "E": "Renal colic" },
    "answer": "C",
    "explanation": { "correct": "The classic triad of back or abdominal pain, hypotension, and a pulsatile mass is highly suggestive of a ruptured abdominal aortic aneurysm (AAA), a surgical emergency.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Ruptured AAA presents with a classic triad of pain, hypotension, and a pulsatile mass."
  },
  {
    "id": 142,
    "specialty": "General Surgery",
    "topic": "Vascular",
    "question": "A patient with chronic varicose veins develops a non-healing ulcer just above the medial malleolus. What is the most likely underlying cause?",
    "options": { "A": "Arterial insufficiency", "B": "Chronic venous insufficiency", "C": "Diabetic neuropathy", "D": "Marjolin ulcer", "E": "Lymphedema" },
    "answer": "B",
    "explanation": { "correct": "Ulcers located over the medial malleolus in the setting of chronic venous changes (hyperpigmentation, varicose veins) are typical for venous stasis ulcers resulting from chronic venous insufficiency.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Medial malleolar ulcers are characteristic of venous stasis disease."
  },
  {
    "id": 143,
    "specialty": "General Surgery",
    "topic": "Vascular",
    "question": "A young male smoker presents with digital ischemia and a history of migratory superficial thrombophlebitis. What is the most likely diagnosis?",
    "options": { "A": "Raynaud disease", "B": "Buerger disease (Thromboangiitis obliterans)", "C": "Takayasu arteritis", "D": "Polyarteritis nodosa", "E": "Scleroderma" },
    "answer": "B",
    "explanation": { "correct": "Buerger disease is a non-atherosclerotic inflammatory vasculitis closely linked to tobacco use, often presenting with small-vessel ischemia and superficial vein involvement in young smokers.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Buerger disease should be suspected in young smokers with digital ischemia."
  },
  {
    "id": 144,
    "specialty": "General Surgery",
    "topic": "Vascular",
    "question": "What is the non-invasive diagnostic test of choice for a patient with suspected deep vein thrombosis (DVT) of the lower extremity?",
    "options": { "A": "D-dimer assay", "B": "Venous duplex ultrasound", "C": "Venography", "D": "CT angiogram", "E": "MRI" },
    "answer": "B",
    "explanation": { "correct": "Venous duplex ultrasound is the first-line, non-invasive imaging modality for diagnosing DVT due to its high accuracy and ease of use.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Duplex ultrasound is the gold standard for DVT diagnosis."
  },
  {
    "id": 145,
    "specialty": "General Surgery",
    "topic": "Vascular",
    "question": "A patient with thoracic outlet syndrome (TOS) presents with a cyanotic 'blue toe'. This is most likely the result of distal embolization from which source?",
    "options": { "A": "Venous thrombosis", "B": "Subclavian artery aneurysm", "C": "Raynaud phenomenon", "D": "Reflex sympathetic dystrophy", "E": "Nerve compression" },
    "answer": "B",
    "explanation": { "correct": "Arterial TOS can cause post-stenotic dilation or aneurysm formation in the subclavian artery, which can shed emboli that travel distally and cause digit ischemia (blue toe syndrome).", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Arterial TOS can lead to subclavian artery aneurysms and distal emboli."
  },
  {
    "id": 146,
    "specialty": "General Surgery",
    "topic": "Vascular",
    "question": "What is the most common cause of renovascular hypertension in the general population?",
    "options": { "A": "Fibromuscular dysplasia", "B": "Atherosclerosis", "C": "Renal artery aneurysm", "D": "Embolism", "E": "Vasculitis" },
    "answer": "B",
    "explanation": { "correct": "Atherosclerotic renal artery stenosis is the most common cause of renovascular hypertension, particularly in older patients. Fibromuscular dysplasia is more common in younger women.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Atherosclerosis is the leading cause of renovascular hypertension."
  },
  {
    "id": 147,
    "specialty": "General Surgery",
    "topic": "Vascular",
    "question": "A 75-year-old man with diffuse atherosclerosis presents with severe postprandial abdominal pain and significant weight loss. What is the most likely diagnosis?",
    "options": { "A": "Chronic cholecystitis", "B": "Chronic mesenteric ischemia", "C": "Peptic ulcer disease", "D": "Pancreatic cancer", "E": "Crohn disease" },
    "answer": "B",
    "explanation": { "correct": "Chronic mesenteric ischemia (intestinal angina) presents with pain after eating, which leads to fear of food and subsequent weight loss in patients with extensive vascular disease.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Postprandial pain and weight loss are hallmarks of chronic mesenteric ischemia."
  },
  {
    "id": 148,
    "specialty": "General Surgery",
    "topic": "Vascular",
    "question": "Which of the following systemic complications is most likely to result from a large, long-standing arteriovenous (AV) fistula?",
    "options": { "A": "High-output heart failure", "B": "Systemic hypotension", "C": "Reflex bradycardia", "D": "Decreased pulse pressure", "E": "Venous insufficiency" },
    "answer": "A",
    "explanation": { "correct": "Large AV fistulas bypass the high-resistance capillary beds, increasing venous return and stroke volume, which can eventually lead to high-output heart failure.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Large AV fistulas can cause high-output heart failure."
  },
  {
    "id": 149,
    "specialty": "General Surgery",
    "topic": "Vascular",
    "question": "A patient develops bloody diarrhea several days after undergoing an aortobifemoral bypass for AAA. What is the most likely diagnosis?",
    "options": { "A": "Pseudomembranous colitis", "B": "Ischemic colitis", "C": "Diverticulitis", "D": "Aortoenteric fistula", "E": "Stress ulcer" },
    "answer": "B",
    "explanation": { "correct": "Ischemic colitis is a recognized complication of aortic surgery, typically resulting from sacrifice or occlusion of the inferior mesenteric artery during the procedure.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Ischemic colitis is a serious complication following aortic reconstruction."
  },
  {
    "id": 150,
    "specialty": "General Surgery",
    "topic": "Vascular",
    "question": "Which of the following is considered the most effective method for preventing pulmonary embolism in high-risk surgical patients?",
    "options": { "A": "Aspirin", "B": "Sequential compression devices", "C": "Early ambulation", "D": "Low-dose heparin or LMWH", "E": "IVC filter" },
    "answer": "D",
    "explanation": { "correct": "Pharmacological prophylaxis with low-dose heparin or low-molecular-weight heparin (LMWH) is the most effective proven strategy for preventing venous thromboembolism in high-risk patients.", "A": "", "B": "", "C": "", "D": "", "E": "" },
    "guideline": "Surgery PreTest 13th Ed",
    "takeaway": "Chemical prophylaxis is superior for VTE prevention in high-risk patients."
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
