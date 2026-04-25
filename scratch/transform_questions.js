const fs = require('fs');

const subagentOutput = [
  {
    "question": "A 75-year-old farmer complained of a scaly, plaque-like skin lesion on his forearm with recent development of ulceration. Biopsy reveals invasive squamous carcinomas within actinic keratosis negative examination of axillary nodes. Definitive treatment is:",
    "options": [
      "(A) Local wound care until the ulcer heals; then wide excision and repair",
      "(B) Excision of the lesion with frozen section determined free margins and repair",
      "(C) Wide excision; split-thickness skin graft and axillary node dissection",
      "(D) Wide excision; split-thickness graft and radiation therapy",
      "(E) Wide excision; split-thickness graft and chemotherapy"
    ],
    "answer": "(B)",
    "explanation": "Squamous cell carcinoma (SCC) of the skin is generally slow-growing and has a low rate of metastasis. Actinically induced SCCs are less aggressive. The preferred treatment is wide local excision with frozen section control of the margins to ensure complete removal while preserving as much healthy tissue as possible."
  },
  {
    "question": "A 65-year-old light-complexioned male presents with a solitary scaly plaque-like lesion on his forearm present for many years. The lesion is 0.5 cm in diameter. Shave biopsy reveals intraepithelial squamous cell carcinoma (Bowen’s disease) incompletely excised. Further treatment includes:",
    "options": [
      "(A) Wide excision of the lesions and sentinel node biopsy",
      "(B) Referral for local radiation therapy",
      "(C) Excision and repair of this area, ensuring clear surgical margins",
      "(D) No further treatment indicated",
      "(E) Local application of 5-fluorouracil (5-FU) cream"
    ],
    "answer": "(C)",
    "explanation": "Bowen's disease is squamous cell carcinoma in situ (intraepithelial). Since it has the potential to become invasive, complete excision with clear margins is the standard of care. Other options like topical 5-FU or cryotherapy can be used but surgical excision provides the highest cure rate and histological confirmation of margins."
  },
  {
    "question": "A 45-year-old soccer player presents with a 6-month history of an ulcerative nodular lesion, 1.5 cm in diameter in the region of the right oral commissure. Biopsy reveals basal cell carcinoma. The preferred treatment is:",
    "options": [
      "(A) Mohs micrographic surgery and subsequent reconstruction",
      "(B) Excision with a clinical margin and local flap repair",
      "(C) Topical 5-FU",
      "(D) Local radiation therapy",
      "(E) Cryotherapy"
    ],
    "answer": "(A)",
    "explanation": "Basal cell carcinoma (BCC) is the most common skin cancer. Mohs micrographic surgery is specifically indicated for lesions in cosmetically or functionally sensitive areas (like the oral commissure, nose, or eyelids) and for recurrent or large lesions. It allows for the highest cure rate while maximizing tissue preservation."
  },
  {
    "question": "Which of the following is TRUE of wound contraction?",
    "options": [
      "(A) It is less than 50% in most wounds.",
      "(B) It is characterized by formation and fixation of tissue around a joint.",
      "(C) It is less affected by excision of tissue from center of wound rather than at the periphery.",
      "(D) It is characterized by centripetal movement of the whole thickness of the surrounding skin.",
      "(E) It is experimentally less affected by excision of tissue from center of wound rather than at the periphery."
    ],
    "answer": "(E)",
    "explanation": "Wound contraction is the process of centripetal movement of the wound edges mediated by myofibroblasts. It is more affected by the presence of skin grafts (full-thickness inhibiting it more than split-thickness) and, experimentally, is less affected by central tissue excision compared to peripheral excision."
  },
  {
    "question": "Which of the following is TRUE of skin grafts?",
    "options": [
      "(A) Split-thickness grafts contain the epidermis and all of the dermis.",
      "(B) Full-thickness grafts are more likely to survive than split-thickness grafts.",
      "(C) Split-thickness grafts inhibit wound contraction better than full-thickness grafts.",
      "(D) Full-thickness skin grafts inhibit wound contraction more than split-thickness grafts.",
      "(E) Split-thickness grafts are more aesthetic than full-thickness grafts."
    ],
    "answer": "(D)",
    "explanation": "Full-thickness skin grafts (FTSG) include the entire dermis and are more effective at inhibiting wound contraction than split-thickness skin grafts (STSG). However, STSGs have a higher 'take' rate because they require less revascularization."
  },
  {
    "question": "A 65-year-old patient undergoes an APR (abdominoperineal resection) for a low rectal cancer. The ileostomy should be:",
    "options": [
      "(A) Circular and 2–3 cm in height",
      "(B) Flush with the skin",
      "(C) Placed in the midline incision",
      "(D) Placed through the rectus muscle",
      "(E) Constructed without a maturation step"
    ],
    "answer": "(A)",
    "explanation": "A properly constructed ileostomy should be 'protruded' or 'budded' (Brooke ileostomy), ideally 2-3 cm in height, to allow the effluent (which contains caustic digestive enzymes) to drain directly into the appliance without contacting and irritating the surrounding skin."
  },
  {
    "question": "A 55-year-old patient undergoes a cholecystectomy for gallstones. The surgery is considered a 'clean-contaminated' wound. The expected infection rate is:",
    "options": [
      "(A) <2%",
      "(B) 5%",
      "(C) 10%",
      "(D) 20%",
      "(E) 30%"
    ],
    "answer": "(C)",
    "explanation": "Clean-contaminated wounds are those where a hollow viscus (respiratory, alimentary, or urinary tract) is entered under controlled conditions without significant spillage. The reported infection rate for such procedures is approximately 10%."
  },
  {
    "question": "Which of the following describes a 'clean-contaminated' wound?",
    "options": [
      "(A) Entry into the intestinal or urinary tract without significant spillage",
      "(B) A wound with gross spillage from the GI tract",
      "(C) An old traumatic wound with retained necrotic tissue",
      "(D) A surgical incision in a 'clean' area like the breast",
      "(E) A wound involving a perforated viscus"
    ],
    "answer": "(A)",
    "explanation": "By definition, a clean-contaminated wound involves a controlled entry into a colonized tract (like the bowel or bladder) without unusual contamination or major breaks in technique."
  },
  {
    "question": "A 25-year-old man is brought to the ER with burns to his chest and arms. The burns are mottled red/white and have blistering. This is characteristic of:",
    "options": [
      "(A) First-degree burn",
      "(B) Superficial partial-thickness burn",
      "(C) Deep partial-thickness burn",
      "(D) Second-degree burn",
      "(E) Third-degree burn"
    ],
    "answer": "(D)",
    "explanation": "Second-degree (partial-thickness) burns involve the epidermis and varying depths of the dermis. They are characterized by pain, redness, and the formation of blisters."
  },
  {
    "question": "A 30-year-old woman sustained partial-thickness burns to her legs. Partial-thickness burns involve:",
    "options": [
      "(A) Epidermis only",
      "(B) Entire dermis",
      "(C) Subcutaneous fat",
      "(D) Epidermis and part of the dermis",
      "(E) Muscle and bone"
    ],
    "answer": "(D)",
    "explanation": "Partial-thickness burns (second-degree) extend through the epidermis into the dermis but do not destroy the entire depth of the dermis, allowing for spontaneous re-epithelialization from skin appendages."
  },
  {
    "question": "Full-thickness burns are characterized by:",
    "options": [
      "(A) Involvement of the entire dermis",
      "(B) Severe pain and hypersensitivity",
      "(C) Blistering and weeping",
      "(D) Rapid healing without grafting",
      "(E) Minimal scarring"
    ],
    "answer": "(A)",
    "explanation": "Full-thickness (third-degree) burns involve the destruction of the entire epidermis and dermis. Because the nerve endings are destroyed, these burns are often anesthetic (painless) and typically require skin grafting for closure."
  },
  {
    "question": "Following initial resuscitation of a burn patient using the Parkland formula, the patient remains oliguric. The next step should be:",
    "options": [
      "(A) Increase the rate of Ringer’s lactate infusion",
      "(B) Administer a bolus of albumin",
      "(C) Give intravenous furosemide",
      "(D) Change to normal saline",
      "(E) Start dopamine infusion"
    ],
    "answer": "(A)",
    "explanation": "The Parkland formula provides an estimate of fluid requirements. If urine output is inadequate (<0.5 mL/kg/h in adults), the rate of crystalloid (Ringer’s lactate) infusion should be increased. Diuretics should be avoided as they may further deplete intravascular volume."
  },
  {
    "question": "The definitive management of deep partial-thickness or full-thickness burns involves:",
    "options": [
      "(A) Tangential excision of eschar until bleeding is encountered",
      "(B) Waiting for the eschar to slough spontaneously",
      "(C) Application of wet-to-dry dressings only",
      "(D) Systemic antibiotics for all patients",
      "(E) Immediate grafting without debridement"
    ],
    "answer": "(A)",
    "explanation": "Tangential excision involves removing thin layers of the burn eschar until viable, bleeding tissue is reached. This reduces the risk of infection and prepares the wound bed for successful skin grafting."
  },
  {
    "question": "A 12-year-old boy has multiple skin lesions and is diagnosed with Neurofibromatosis type 1 (NF-1). This condition is associated with:",
    "options": [
      "(A) Autosomal recessive inheritance",
      "(B) Dermoid cysts",
      "(C) Optic nerve gliomas",
      "(D) AV malformations",
      "(E) Absence of malignant potential"
    ],
    "answer": "(C)",
    "explanation": "NF-1 (von Recklinghausen's disease) is an autosomal dominant disorder. Key features include café-au-lait spots, Lisch nodules, and an increased risk of tumors such as optic nerve gliomas and neurofibromas (which can undergo malignant transformation)."
  },
  {
    "question": "Which of the following pigmented lesions has the highest risk of developing into melanoma?",
    "options": [
      "(A) Hutchinson's freckle",
      "(B) Common freckle (ephelis)",
      "(C) Congenital nevocellular nevi",
      "(D) Cherry hemangioma",
      "(E) Seborrheic keratosis"
    ],
    "answer": "(C)",
    "explanation": "Large congenital nevi (those >20 cm in predicted adult size) carry a significant lifetime risk (estimated at 5-10%) of developing into melanoma, often within the first decade of life."
  },
  {
    "question": "Which is TRUE of basal cell carcinoma (BCC)?",
    "options": [
      "(A) It has a 15% rate of distant metastasis.",
      "(B) It is more common in dark-complexioned individuals.",
      "(C) It is the most common form of skin cancer.",
      "(D) It occurs only on the head and neck.",
      "(E) Topical 5-FU is the treatment of choice for all lesions."
    ],
    "answer": "(C)",
    "explanation": "BCC is the most frequent skin malignancy. While it is locally invasive and can cause significant tissue destruction, it almost never metastasizes (<0.1%). It is most common in fair-skinned individuals with chronic sun exposure."
  },
  {
    "question": "A melanoma reported as Clark Level I implies:",
    "options": [
      "(A) It is confined to the epidermis (in situ).",
      "(B) It involves the papillary dermis.",
      "(C) It fills the papillary dermis.",
      "(D) It involves the reticular dermis.",
      "(E) It has invaded the subcutaneous fat."
    ],
    "answer": "(A)",
    "explanation": "The Clark Level system describes the anatomical depth of invasion. Level I means the tumor is restricted to the epidermis (melanoma in situ). Level II involves the papillary dermis, and so on."
  },
  {
    "question": "A 49-year-old male presents with recurrent infections in the axillae and perianal region. The likely diagnosis is:",
    "options": [
      "(A) Paget’s disease",
      "(B) Furunculosis",
      "(C) Hidradenitis suppurativa",
      "(D) Crohn's disease",
      "(E) Cutaneous tuberculosis"
    ],
    "answer": "(C)",
    "explanation": "Hidradenitis suppurativa is a chronic inflammatory condition affecting the apocrine glands, typically in the axillae, groin, and perianal areas. It presents with recurrent abscesses, sinus tracts, and scarring."
  },
  {
    "question": "List the layers of skin from the most superficial to the deepest:",
    "options": [
      "(A) Basal, Granular, Prickle, Corneum",
      "(B) Corneum, Prickle, Granular, Basal",
      "(C) Corneum, Granular, Basal, Prickle",
      "(D) Corneum, Granular, Prickle, Basal",
      "(E) Basal, Prickle, Granular, Corneum"
    ],
    "answer": "(D)",
    "explanation": "The epidermal layers from superficial to deep are: Stratum corneum (horny layer), Stratum granulosum (granular layer), Stratum spinosum (prickle layer), and Stratum basale (basal layer)."
  },
  {
    "question": "Gorlin's syndrome (Basal Cell Nevus Syndrome) is characterized by:",
    "options": [
      "(A) Autosomal recessive inheritance",
      "(B) Rib abnormalities such as splayed or bifid ribs",
      "(C) Absence of palmar pits",
      "(D) Onset only after age 50",
      "(E) Hyperparathyroidism"
    ],
    "answer": "(B)",
    "explanation": "Gorlin's syndrome is an autosomal dominant condition featuring multiple BCCs, odontogenic keratocysts, palmar/plantar pits, and skeletal anomalies like bifid ribs."
  },
  {
    "question": "A 35-year-old woman has a breast mass that disappears after aspiration of clear fluid. The diagnosis is:",
    "options": [
      "(A) Fibroadenoma",
      "(B) Fibrocystic disease",
      "(C) Breast cancer",
      "(D) Lipoma",
      "(E) Galactocele"
    ],
    "answer": "(B)",
    "explanation": "Fibrocystic change often presents with symptomatic cysts. Aspiration of clear or straw-colored fluid with complete resolution of the mass is diagnostic of a simple cyst."
  },
  {
    "question": "The most common benign breast tumor in young women is:",
    "options": [
      "(A) Breast cyst",
      "(B) Intraductal papilloma",
      "(C) Fibroadenoma",
      "(D) Phylloides tumor",
      "(E) Lipoma"
    ],
    "answer": "(C)",
    "explanation": "Fibroadenomas are common, rubbery, mobile, benign tumors typically found in women in their 20s and 30s."
  },
  {
    "question": "Galactorrhea in a non-pregnant woman is most commonly associated with:",
    "options": [
      "(A) Fibroadenoma",
      "(B) Hyperparathyroidism",
      "(C) Pituitary adenoma",
      "(D) Mastitis",
      "(E) Breast cancer"
    ],
    "answer": "(C)",
    "explanation": "Hyperprolactinemia, often caused by a prolactin-secreting pituitary adenoma, is the most common organic cause of non-puerperal galactorrhea."
  },
  {
    "question": "A painful breast mass appearing several weeks after trauma with skin retraction is likely:",
    "options": [
      "(A) Inflammatory carcinoma",
      "(B) Hematoma",
      "(C) Abscess",
      "(D) Fat necrosis",
      "(E) Sclerosing adenosis"
    ],
    "answer": "(D)",
    "explanation": "Fat necrosis can mimic breast cancer by presenting as a firm, fixed mass with skin tethering/retraction following an injury."
  },
  {
    "question": "Recurrent subareolar abscesses and draining tracts (Zuska’s disease) are best treated by:",
    "options": [
      "(A) Repeated I&D",
      "(B) Chronic antibiotics",
      "(C) Complete excision of the drainage tract and affected duct",
      "(D) Mastectomy",
      "(E) Warm compresses"
    ],
    "answer": "(C)",
    "explanation": "Zuska's disease involves squamous metaplasia of the lactiferous ducts. Simple drainage often fails; definitive cure requires excision of the entire fistula and the diseased duct."
  },
  {
    "question": "Mondor's disease of the breast refers to:",
    "options": [
      "(A) A malignant phylloides tumor",
      "(B) Lymphatic obstruction by cancer",
      "(C) Superficial thrombophlebitis",
      "(D) A fungal infection",
      "(E) Nipple inversion"
    ],
    "answer": "(C)",
    "explanation": "Mondor's disease is a benign, self-limiting superficial thrombophlebitis of the breast or chest wall veins, often appearing as a painful 'cord'."
  },
  {
    "question": "The most common cause of bloody nipple discharge is:",
    "options": [
      "(A) Intraductal papilloma",
      "(B) Paget's disease",
      "(C) Ductal carcinoma in situ",
      "(D) Fat necrosis",
      "(E) Fibrocystic disease"
    ],
    "answer": "(A)",
    "explanation": "While malignancy must be ruled out, a benign intraductal papilloma is the single most frequent cause of spontaneous bloody nipple discharge."
  },
  {
    "question": "Management of fibrocystic changes with thickening but no discrete mass includes:",
    "options": [
      "(A) Immediate biopsy of all thickened areas",
      "(B) Bilateral mastectomy",
      "(C) Routine re-examination",
      "(D) MRI in all cases",
      "(E) Spot compression views of any suspicious mammographic areas"
    ],
    "answer": "(E)",
    "explanation": "Diffuse thickening without a dominant mass is managed with clinical follow-up and targeted imaging (mammography/ultrasound) if specific areas of concern are identified."
  },
  {
    "question": "Which mammographic finding is most likely to be benign?",
    "options": [
      "(A) Stellate mass",
      "(B) Fine pleomorphic calcifications",
      "(C) Coarse 'popcorn' calcifications",
      "(D) New architectural distortion",
      "(E) Skin thickening"
    ],
    "answer": "(C)",
    "explanation": "Coarse, 'popcorn-like' calcifications are characteristic of an involuting (calcifying) fibroadenoma and are benign."
  },
  {
    "question": "Which of the following is NOT a proven risk factor for breast cancer?",
    "options": [
      "(A) Smoking",
      "(B) Family history in a first-degree relative",
      "(C) Atypical ductal hyperplasia (ADH)",
      "(D) Increasing age",
      "(E) Early menarche"
    ],
    "answer": "(A)",
    "explanation": "While smoking is harmful, its status as an independent risk factor for breast cancer is less established than age, genetics, and hormonal exposure."
  },
  {
    "question": "Estrogen receptor (ER) and Progesterone receptor (PR) status should be:",
    "options": [
      "(A) Checked only in patients over 50",
      "(B) Checked only if chemotherapy is planned",
      "(C) Checked only in metastatic disease",
      "(D) Determined in all cases of invasive breast carcinoma",
      "(E) Used only to predict recurrence, not treatment response"
    ],
    "answer": "(D)",
    "explanation": "Hormone receptor status is essential for all invasive breast cancers to guide adjuvant endocrine therapy decisions."
  },
  {
    "question": "In postmenopausal women with ER+ breast cancer, the most effective hormonal therapy is:",
    "options": [
      "(A) Tamoxifen",
      "(B) Raloxifene",
      "(C) Aromatase inhibitors",
      "(D) Progesterone",
      "(E) Estrogen"
    ],
    "answer": "(C)",
    "explanation": "Aromatase inhibitors (e.g., anastrozole, letrozole) have been shown to be superior to tamoxifen in postmenopausal women."
  },
  {
    "question": "The most important prognostic factor in breast cancer is:",
    "options": [
      "(A) Tumor size",
      "(B) Histological grade",
      "(C) Axillary lymph node status",
      "(D) ER/PR status",
      "(E) Patient age"
    ],
    "answer": "(C)",
    "explanation": "The presence and number of axillary lymph node metastases remain the single best predictor of overall survival and recurrence risk."
  },
  {
    "question": "Which is TRUE of Ductal Carcinoma In Situ (DCIS)?",
    "options": [
      "(A) Approximately 30% of cases become invasive if untreated.",
      "(B) Comedo DCIS is less aggressive than non-comedo types.",
      "(C) It always requires a total mastectomy.",
      "(D) It commonly metastasizes to axillary nodes.",
      "(E) Radiotherapy is never indicated after lumpectomy."
    ],
    "answer": "(A)",
    "explanation": "DCIS is a non-invasive precursor. If left untreated, a significant percentage will progress to invasive ductal carcinoma."
  },
  {
    "question": "A finding of Lobular Carcinoma In Situ (LCIS) on biopsy means:",
    "options": [
      "(A) The patient needs a simple mastectomy.",
      "(B) The patient has an invasive cancer elsewhere in the breast.",
      "(C) The patient is at increased risk for invasive cancer in either breast.",
      "(D) It is a direct precursor that will become invasive at that site.",
      "(E) Radiation therapy is mandatory."
    ],
    "answer": "(C)",
    "explanation": "LCIS is considered a marker of increased risk rather than a direct precursor. The risk of invasive cancer is roughly equal for both breasts."
  },
  {
    "question": "Paget’s disease of the nipple is characterized by:",
    "options": [
      "(A) A benign skin rash",
      "(B) Association with underlying carcinoma",
      "(C) Rapid healing with topical steroids",
      "(D) Absence of nipple biopsy findings",
      "(E) Association with Paget's disease of the bone"
    ],
    "answer": "(B)",
    "explanation": "Paget’s disease presents as an eczematous change of the nipple and is almost always associated with an underlying DCIS or invasive cancer."
  },
  {
    "question": "A breast cancer patient with positive supraclavicular nodes is classified as:",
    "options": [
      "(A) Stage IIA",
      "(B) Stage IIIB",
      "(C) Stage IIIC",
      "(D) Stage IV",
      "(E) Stage IIB"
    ],
    "answer": "(C)",
    "explanation": "Supraclavicular lymph node involvement (N3) without distant visceral metastasis is Stage IIIC."
  },
  {
    "question": "Anaphylaxis during sentinel lymph node biopsy is most likely caused by:",
    "options": [
      "(A) Radiocolloid",
      "(B) Local anesthetic",
      "(C) Isosulfan blue dye",
      "(D) Methylene blue",
      "(E) Latex"
    ],
    "answer": "(C)",
    "explanation": "Isosulfan blue (and sometimes methylene blue) can cause allergic reactions, including life-threatening anaphylaxis, in about 1% of patients."
  },
  {
    "question": "Adjuvant treatment for a 5-mm tubular cancer (ER+/PR+) with negative nodes is:",
    "options": [
      "(A) Chemotherapy and radiation",
      "(B) Radiation only",
      "(C) Hormonal therapy only",
      "(D) Radiation and hormonal therapy (if lumpectomy was performed)",
      "(E) No adjuvant therapy required"
    ],
    "answer": "(D)",
    "explanation": "Standard care after breast-conserving surgery includes radiotherapy to reduce local recurrence and hormonal therapy for ER+ tumors."
  },
  {
    "question": "The best surgical option for multicentric DCIS with a suspicious axillary node is:",
    "options": [
      "(A) Lumpectomy",
      "(B) Modified Radical Mastectomy",
      "(C) Sentinel node biopsy alone",
      "(D) Radical Mastectomy",
      "(E) Wide local excision"
    ],
    "answer": "(B)",
    "explanation": "Multicentric disease usually requires mastectomy. If nodes are suspicious, an axillary dissection or clearance (making it a modified radical mastectomy) is indicated."
  },
  {
    "question": "The most frequent site of distant metastasis for breast cancer is:",
    "options": [
      "(A) Brain",
      "(B) Bone",
      "(C) Lung",
      "(D) Liver",
      "(E) Adrenal glands"
    ],
    "answer": "(B)",
    "explanation": "The skeleton (bone) is the most common site of distant spread for breast cancer."
  },
  {
    "question": "Injury to the long thoracic nerve during axillary dissection causes:",
    "options": [
      "(A) Winging of the scapula",
      "(B) Loss of arm adduction",
      "(C) Numbness of the inner arm",
      "(D) Weakness of the latissimus dorsi",
      "(E) Wrist drop"
    ],
    "answer": "(A)",
    "explanation": "The long thoracic nerve innervates the serratus anterior; damage leads to 'winging' of the scapula when the patient pushes against a wall."
  },
  {
    "question": "Breast cancer during pregnancy is:",
    "options": [
      "(A) Always a reason for termination",
      "(B) Never treated with chemotherapy",
      "(C) The most common cancer diagnosed during pregnancy",
      "(D) Always ER positive",
      "(E) Treated with radiation in the first trimester"
    ],
    "answer": "(C)",
    "explanation": "Breast cancer is the most common malignancy during pregnancy. Treatment depends on the trimester; chemotherapy can often be given safely in the 2nd and 3rd trimesters."
  },
  {
    "question": "Routine follow-up after breast cancer treatment should always include:",
    "options": [
      "(A) Monthly tumor markers",
      "(B) Quarterly CT scans",
      "(C) Yearly bone scans",
      "(D) Regular clinical exams and yearly mammography",
      "(E) Semi-annual MRI"
    ],
    "answer": "(D)",
    "explanation": "Evidence-based follow-up focuses on history, physical examination, and annual mammography to detect local recurrence or a new primary."
  },
  {
    "question": "Submuscular placement of breast implants is preferred because:",
    "options": [
      "(A) It is less painful.",
      "(B) It prevents all capsule formation.",
      "(C) It allows better mammographic visualization of breast tissue.",
      "(D) It is cheaper.",
      "(E) It eliminates the risk of rupture."
    ],
    "answer": "(C)",
    "explanation": "Placing implants behind the pectoral muscle makes it easier for radiologists to visualize native breast tissue during screening mammography."
  },
  {
    "question": "What is the incidence of breast cancer in males?",
    "options": [
      "(A) <1% of all breast cancers",
      "(B) 5%",
      "(C) 10%",
      "(D) 20%",
      "(E) 50%"
    ],
    "answer": "(A)",
    "explanation": "Male breast cancer is rare, representing less than 1% of the total breast cancer cases."
  },
  {
    "question": "Persistent, symptomatic gynecomastia in a young man is best managed by:",
    "options": [
      "(A) Total mastectomy",
      "(B) Radiation therapy",
      "(C) Endocrine workup and subcutaneous mastectomy",
      "(D) Observation for life",
      "(E) Daily aspirin"
    ],
    "answer": "(C)",
    "explanation": "Once a pathologic cause is ruled out, surgical correction (subcutaneous mastectomy) is the treatment for persistent, emotionally distressing gynecomastia."
  },
  {
    "question": "A large breast tumor with skin erosion and a favorable outlook is likely:",
    "options": [
      "(A) Medullary carcinoma",
      "(B) Cystosarcoma phyllodes (benign)",
      "(C) Scirrhous carcinoma",
      "(D) Inflammatory carcinoma",
      "(E) Paget's disease"
    ],
    "answer": "(B)",
    "explanation": "Phyllodes tumors can grow quite large and even ulcerate the skin, but most are benign or low-grade and have an excellent prognosis with wide local excision."
  },
  {
    "question": "Infiltrating lobular carcinoma (ILC) differs from ductal carcinoma (IDC) in that ILC is:",
    "options": [
      "(A) Never bilateral",
      "(B) Always easier to see on mammography",
      "(C) More likely to be multifocal and bilateral",
      "(D) Always treated with mastectomy only",
      "(E) Less sensitive to hormones"
    ],
    "answer": "(C)",
    "explanation": "Lobular carcinomas are notably more likely than ductal cancers to be multifocal within the same breast and to occur in the contralateral breast."
  },
  {
    "question": "An 'occult' primary breast cancer typically presents as:",
    "options": [
      "(A) A large palpable mass",
      "(B) Nipple discharge only",
      "(C) Axillary lymphadenopathy with no visible breast mass",
      "(D) Bone pain",
      "(E) Skin rash"
    ],
    "answer": "(C)",
    "explanation": "Occult primary breast cancer presents as metastatic disease (usually in the axillary nodes) where the primary tumor in the breast cannot be identified by physical exam or standard imaging."
  }
];

let startId = 26;
const transformed = subagentOutput.map((q, index) => {
    const optionsObj = {};
    q.options.forEach(opt => {
        const match = opt.match(/^\((A|B|C|D|E)\)\s*(.*)/);
        if (match) {
            optionsObj[match[1]] = match[2];
        }
    });

    const specialty = q.question.toLowerCase().includes('breast') || q.question.toLowerCase().includes('nipple') || q.question.toLowerCase().includes('mammographic') ? 'Breast Surgery' : 'General Surgery';
    const topic = specialty === 'Breast Surgery' ? 'Breast Disease' : 'Skin & Soft Tissue';

    return {
        id: startId + index,
        specialty: specialty,
        topic: topic,
        question: q.question,
        options: optionsObj,
        answer: q.answer.replace(/[()]/g, ''),
        explanation: {
            correct: q.explanation,
            A: "", B: "", C: "", D: "", E: ""
        },
        guideline: "Surgery Clinical Cases MCQ's",
        takeaway: "See explanation for key learning point."
    };
});

fs.writeFileSync('transformed_questions.json', JSON.stringify(transformed, null, 2));
console.log('Successfully transformed ' + transformed.length + ' questions.');
