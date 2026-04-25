const fs = require('fs');

const subagentOutput = [
  {
    "id": 151,
    "specialty": "Plastic Surgery",
    "topic": "Collagen",
    "question": "Which one of the following is true regarding collagen?",
    "options": {
      "A": "Its derivation is debated: either from the Greek for 'strength' or the Latin for 'strand'.",
      "B": "Type 1 collagen is formed from three identical 'alpha' chains.",
      "C": "Type 3 collagen is formed from two different 'alpha' chains.",
      "D": "Every third amino acid in collagen is glycine, the others usually being proline and hydroxyproline.",
      "E": "Collagen is stabilized by polymerization."
    },
    "answer": "D",
    "explanation": {
      "correct": "Every third amino acid in collagen is glycine. This allows the three alpha chains to pack tightly into a triple helix.",
      "A": "The word collagen is derived from the Greek word 'kolla', meaning glue.",
      "B": "Type 1 collagen is composed of two identical alpha1 chains and one alpha2 chain.",
      "C": "Type 3 collagen is composed of three identical alpha1 chains.",
      "D": "This is correct.",
      "E": "Collagen is stabilized by intra- and inter-chain cross-links, not polymerization."
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Glycine is essential for the triple helix structure of collagen."
  },
  {
    "id": 152,
    "specialty": "Plastic Surgery",
    "topic": "Anticoagulants",
    "question": "With regards to anticoagulants in microsurgery:",
    "options": {
      "A": "Heparin and antithrombin III have similar mechanisms of action.",
      "B": "Fondaparinux and dalteparin are factor Xa-specific.",
      "C": "Unfractionated heparin has a higher proportion of anti-Factor Xa activity than anti-thrombin activity.",
      "D": "The antiplatelet drug aspirin is contraindicated in patients younger than 16 years of age.",
      "E": "Heparin-induced thrombocytopenia is pharmacologically desirable."
    },
    "answer": "B",
    "explanation": {
      "correct": "Fondaparinux and dalteparin (a low-molecular-weight heparin) primarily inhibit Factor Xa.",
      "A": "Heparin acts by binding to and activating antithrombin III.",
      "B": "This is correct.",
      "C": "Unfractionated heparin has a 1:1 ratio of anti-Xa to anti-IIa activity; LMWH has a higher ratio of anti-Xa activity.",
      "D": "Aspirin is contraindicated in children due to the risk of Reye's syndrome, but the age threshold is specifically relevant to its use as an anti-inflammatory/antipyretic.",
      "E": "HIT is a serious complication, not desirable."
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "LMWH and Fondaparinux are more selective for Factor Xa than unfractionated heparin."
  },
  {
    "id": 153,
    "specialty": "Plastic Surgery",
    "topic": "Free Tissue Transfer History",
    "question": "Which excellence publication had been contributed to free tissue transfer is correct?",
    "options": {
      "A": "Komatsu and Tamai performed the first successful great toe-to-hand transfer in humans in 1968.",
      "B": "Nakayama published the first clinical series of free tissue transfers in 1964.",
      "C": "Cobbett performed the first successful free great toe-to-hand transfer in humans in 1968.",
      "D": "McLean and Buncke performed the first free omentum flap in 1971.",
      "E": "None of the above is true."
    },
    "answer": "C",
    "explanation": {
      "correct": "Cobbett is credited with the first successful free great toe-to-hand transfer in 1968.",
      "A": "Komatsu and Tamai performed the first successful limb replantation in 1965.",
      "B": "Nakayama reported free intestinal transfers in 1964, but Cobbett's toe transfer is the landmark for 'tissue transfer' in this context.",
      "C": "This is correct.",
      "D": "McLean and Buncke performed the first free omentum flap in 1969.",
      "E": "N/A"
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "John Cobbett performed the first successful toe-to-hand transfer in 1968."
  },
  {
    "id": 154,
    "specialty": "Plastic Surgery",
    "topic": "Wound Healing",
    "question": "Which of the following is correct regarding the fetal environment and wound healing?",
    "options": {
      "A": "Fetal wounds heal with significant scarring.",
      "B": "Fetal skin is rich in hyaluronic acid.",
      "C": "Fetal fibroblast migration is slower than in adults.",
      "D": "Fetal wounds exhibit a high inflammatory response.",
      "E": "Fetal collagen is predominantly Type 1."
    },
    "answer": "B",
    "explanation": {
      "correct": "Fetal wounds heal without scarring. The fetal environment is high in hyaluronic acid, which facilitates cell migration and regeneration.",
      "A": "Fetal wounds heal scarlessly.",
      "B": "This is correct.",
      "C": "Fetal fibroblasts migrate faster.",
      "D": "Fetal wounds have minimal inflammation.",
      "E": "Fetal skin has a higher ratio of Type 3 collagen."
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Hyaluronic acid is a key component of scarless fetal wound healing."
  },
  {
    "id": 155,
    "specialty": "Plastic Surgery",
    "topic": "Local Anesthetics",
    "question": "Regarding lidocaine toxicity:",
    "options": {
      "A": "The maximum dose of lidocaine with epinephrine is 3 mg/kg.",
      "B": "Early signs of toxicity include seizures.",
      "C": "Lidocaine is an ester-type local anesthetic.",
      "D": "The maximum dose of plain lidocaine is 4.5 mg/kg.",
      "E": "Toxicity primarily affects the renal system."
    },
    "answer": "D",
    "explanation": {
      "correct": "The maximum safe dose of plain lidocaine is 4.5 mg/kg (up to 7 mg/kg with epinephrine).",
      "A": "Maximum dose with epinephrine is 7 mg/kg.",
      "B": "Early signs are circumoral numbness and metallic taste; seizures are later.",
      "C": "Lidocaine is an amide.",
      "D": "This is correct.",
      "E": "Toxicity primarily affects the CNS and cardiovascular systems."
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Max dose of plain lidocaine is 4.5 mg/kg."
  },
  {
    "id": 156,
    "specialty": "Plastic Surgery",
    "topic": "Flap Classification",
    "question": "A Mathes and Nahai Type 2 muscle flap is characterized by:",
    "options": {
      "A": "One dominant vascular pedicle.",
      "B": "One dominant and several minor pedicles.",
      "C": "Two dominant pedicles.",
      "D": "Segmental vascular pedicles.",
      "E": "One dominant and one minor pedicle."
    },
    "answer": "B",
    "explanation": {
      "correct": "Type 2 muscle flaps have one dominant pedicle and several minor pedicles (e.g., gracilis, vastus lateralis).",
      "A": "Type 1.",
      "B": "This is correct.",
      "C": "Type 3.",
      "D": "Type 4.",
      "E": "Type 5 (one dominant and several segmental)."
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Mathes and Nahai Type 2 flaps have a dominant pedicle and minor ones."
  },
  {
    "id": 157,
    "specialty": "Plastic Surgery",
    "topic": "Hand Anatomy",
    "question": "The primary blood supply to the scaphoid bone is from:",
    "options": {
      "A": "The radial artery entering the proximal pole.",
      "B": "The ulnar artery entering the distal pole.",
      "C": "The radial artery entering the dorsal ridge.",
      "D": "The anterior interosseous artery.",
      "E": "The superficial palmar arch."
    },
    "answer": "C",
    "explanation": {
      "correct": "80% of the blood supply to the scaphoid enters the dorsal ridge from the radial artery and flows retrograde to the proximal pole.",
      "A": "Supply is retrograde, not direct to the proximal pole.",
      "B": "",
      "C": "This is correct.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Scaphoid blood supply is retrograde from the dorsal ridge."
  },
  {
    "id": 158,
    "specialty": "Plastic Surgery",
    "topic": "Nerve Regeneration",
    "question": "Wallerian degeneration refers to:",
    "options": {
      "A": "The recovery phase of a nerve after neuropraxia.",
      "B": "The breakdown of the axon distal to a site of injury.",
      "C": "The proliferation of Schwann cells in the proximal stump.",
      "D": "The formation of a neuroma.",
      "E": "Retrograde axonal transport."
    },
    "answer": "B",
    "explanation": {
      "correct": "Wallerian degeneration is the process where the axon and its myelin sheath distal to the site of injury disintegrate.",
      "A": "",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Wallerian degeneration occurs distal to a nerve injury."
  },
  {
    "id": 159,
    "specialty": "Plastic Surgery",
    "topic": "Tendon Repair",
    "question": "In the hand, Zone 2 (no man's land) refers to the area between:",
    "options": {
      "A": "The DIP joint and the insertion of the FDP.",
      "B": "The MCP joint and the middle of the middle phalanx.",
      "C": "The wrist and the start of the A1 pulley.",
      "D": "The carpal tunnel and the mid-palm.",
      "E": "The distal edge of the A1 pulley and the insertion of the FDS."
    },
    "answer": "E",
    "explanation": {
      "correct": "Zone 2 extends from the A1 pulley to the insertion of the flexor digitorum superficialis (FDS). It is notorious for adhesions after repair.",
      "A": "Zone 1.",
      "B": "Approximation of Zone 2.",
      "C": "Zone 3.",
      "D": "Zone 4.",
      "E": "This is correct."
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Zone 2 of the flexor tendons is between the A1 pulley and FDS insertion."
  },
  {
    "id": 160,
    "specialty": "Plastic Surgery",
    "topic": "Dupuytren's Contracture",
    "question": "The primary cell type involved in Dupuytren's contracture is:",
    "options": {
      "A": "Fibroblast.",
      "B": "Myofibroblast.",
      "C": "Adipocyte.",
      "D": "Chondrocyte.",
      "E": "Macrophage."
    },
    "answer": "B",
    "explanation": {
      "correct": "The myofibroblast is the key cell responsible for the contraction of the palmar fascia in Dupuytren's disease.",
      "A": "Fibroblasts differentiate into myofibroblasts.",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Myofibroblasts drive the contracture in Dupuytren's disease."
  },
  {
    "id": 161,
    "specialty": "Plastic Surgery",
    "topic": "Brachial Plexus Injuries",
    "question": "The most frequent lesion found in obstetrical brachial plexus injuries involves:",
    "options": {
      "A": "All cervical roots.",
      "B": "Only C8 and T1.",
      "C": "Only C6 and C7.",
      "D": "Upper plexus C5, C6 and C7.",
      "E": "Only C5."
    },
    "answer": "D",
    "explanation": {
      "correct": "Erb's palsy (upper plexus injury) is the most common form of obstetric brachial plexus injury, typically involving C5, C6, and sometimes C7.",
      "A": "This is less common (pan-plexus injury).",
      "B": "This is Klumpke's palsy, which is rare in obstetrics.",
      "C": "C5 is almost always involved.",
      "D": "This is correct.",
      "E": "C6 is also typically involved."
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Upper plexus lesions are the most common in obstetrical brachial plexus palsy."
  },
  {
    "id": 162,
    "specialty": "Plastic Surgery",
    "topic": "Carpal Tunnel Syndrome",
    "question": "Which nerve is compressed in carpal tunnel syndrome?",
    "options": {
      "A": "Ulnar nerve.",
      "B": "Radial nerve.",
      "C": "Median nerve.",
      "D": "Posterior interosseous nerve.",
      "E": "Musculocutaneous nerve."
    },
    "answer": "C",
    "explanation": {
      "correct": "The median nerve is compressed as it passes through the carpal tunnel under the transverse carpal ligament.",
      "A": "Compressed in Guyon's canal.",
      "B": "Compressed in the radial tunnel.",
      "C": "This is correct.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Carpal tunnel syndrome involves median nerve compression at the wrist."
  },
  {
    "id": 163,
    "specialty": "Plastic Surgery",
    "topic": "Skin Grafts",
    "question": "Inosculation during skin graft take refers to:",
    "options": {
      "A": "Passive absorption of nutrients by the graft.",
      "B": "Alignment and connection of host and graft capillaries.",
      "C": "Growth of new blood vessels into the graft.",
      "D": "Adhesion of the graft to the wound bed.",
      "E": "Contraction of the graft."
    },
    "answer": "B",
    "explanation": {
      "correct": "Inosculation is the second stage of graft take (around day 2-3), where graft and host capillaries align and fuse.",
      "A": "Plasmatic imbibition.",
      "B": "This is correct.",
      "C": "Angiogenesis (revascularization).",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Inosculation is the 'kissing' of host and graft blood vessels."
  },
  {
    "id": 164,
    "specialty": "Plastic Surgery",
    "topic": "Melanoma",
    "question": "The most important prognostic factor for a primary melanoma is:",
    "options": {
      "A": "Clark level.",
      "B": "Breslow thickness.",
      "C": "Presence of ulceration.",
      "D": "Age of the patient.",
      "E": "Anatomical site."
    },
    "answer": "B",
    "explanation": {
      "correct": "Breslow thickness (measured in millimeters) is the most significant predictor of survival and metastatic potential in primary melanoma.",
      "A": "Less accurate than Breslow.",
      "B": "This is correct.",
      "C": "Secondary prognostic factor.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Breslow thickness is the gold standard for melanoma staging."
  },
  {
    "id": 165,
    "specialty": "Plastic Surgery",
    "topic": "Burn Resuscitation",
    "question": "The Parkland formula for fluid resuscitation in burns is:",
    "options": {
      "A": "2 mL x kg x %TBSA.",
      "B": "3 mL x kg x %TBSA.",
      "C": "4 mL x kg x %TBSA.",
      "D": "5 mL x kg x %TBSA.",
      "E": "6 mL x kg x %TBSA."
    },
    "answer": "C",
    "explanation": {
      "correct": "The Parkland formula calculates the 24-hour crystalloid requirement as 4 mL per kilogram per percent total body surface area burned.",
      "A": "",
      "B": "",
      "C": "This is correct.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Parkland formula uses 4 mL/kg/%TBSA for burn resuscitation."
  },
  {
    "id": 166,
    "specialty": "Plastic Surgery",
    "topic": "Craniofacial Surgery",
    "question": "Which suture is involved in sagittal synostosis (scaphocephaly)?",
    "options": {
      "A": "Coronal suture.",
      "B": "Lambdoid suture.",
      "C": "Sagittal suture.",
      "D": "Metopic suture.",
      "E": "Squamosal suture."
    },
    "answer": "C",
    "explanation": {
      "correct": "Sagittal synostosis results from premature closure of the sagittal suture, leading to a long, narrow head (scaphocephaly).",
      "A": "Plagiocephaly/brachycephaly.",
      "B": "Posterior plagiocephaly.",
      "C": "This is correct.",
      "D": "Trigonocephaly.",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Sagittal synostosis is the most common single-suture synostosis."
  },
  {
    "id": 167,
    "specialty": "Plastic Surgery",
    "topic": "Rhinoplasty",
    "question": "The keystone area of the nose is the junction between:",
    "options": {
      "A": "The nasal bones and the upper lateral cartilages.",
      "B": "The upper lateral and lower lateral cartilages.",
      "C": "The septum and the nasal bones.",
      "D": "The tip and the alae.",
      "E": "The radix and the glabella."
    },
    "answer": "A",
    "explanation": {
      "correct": "The keystone area is the critical structural overlap between the bony vault (nasal bones) and the cartilaginous vault (upper lateral cartilages).",
      "A": "This is correct.",
      "B": "Scroll area.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "The keystone area provides structural support to the middle vault of the nose."
  },
  {
    "id": 168,
    "specialty": "Plastic Surgery",
    "topic": "Breast Reconstruction",
    "question": "The primary blood supply to a TRAM (Transverse Rectus Abdominis Myocutaneous) flap is from the:",
    "options": {
      "A": "Superior epigastric artery.",
      "B": "Inferior epigastric artery.",
      "C": "Superficial circumflex iliac artery.",
      "D": "Intercostal arteries.",
      "E": "Lumbar arteries."
    },
    "answer": "A",
    "explanation": {
      "correct": "In a pedicled TRAM flap, the superior epigastric artery provides the primary blood supply (though the inferior is more dominant in DIEP/Free TRAM).",
      "A": "Correct for pedicled TRAM.",
      "B": "Dominant for DIEP/Free TRAM.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Superior epigastric artery supplies the pedicled TRAM flap."
  },
  {
    "id": 169,
    "specialty": "Plastic Surgery",
    "topic": "Liposuction",
    "question": "The 'super-wet' technique of liposuction involves an infiltrate-to-aspirate ratio of:",
    "options": {
      "A": "1:1.",
      "B": "2:1.",
      "C": "3:1.",
      "D": "4:1.",
      "E": "5:1."
    },
    "answer": "A",
    "explanation": {
      "correct": "The super-wet technique uses approximately 1 mL of infiltrate for every 1 mL of aspirate expected.",
      "A": "This is correct.",
      "B": "Tumescent (2-3:1).",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Super-wet liposuction uses a 1:1 infiltrate ratio."
  },
  {
    "id": 170,
    "specialty": "Plastic Surgery",
    "topic": "Cleft Lip",
    "question": "The Millard rotation-advancement technique is primarily used for:",
    "options": {
      "A": "Cleft palate repair.",
      "B": "Unilateral cleft lip repair.",
      "C": "Bilateral cleft lip repair.",
      "D": "Alveolar bone grafting.",
      "E": "Velopharyngeal insufficiency."
    },
    "answer": "B",
    "explanation": {
      "correct": "The Millard technique is the most widely used procedure for repairing unilateral cleft lips.",
      "A": "",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Millard repair is the gold standard for unilateral cleft lip."
  },
  {
    "id": 171,
    "specialty": "Plastic Surgery",
    "topic": "Filler Substances",
    "question": "Of the following filler substances, which is correctly matched with its trade name?",
    "options": {
      "A": "Hyaluronic acid and Sculptra®.",
      "B": "Hydroxyapatite and Radiesse®.",
      "C": "Acellular cadaveric dermis and Zyderm®.",
      "D": "Large particle hyaluronic acid and Bioalcamid®.",
      "E": "None of the above."
    },
    "answer": "B",
    "explanation": {
      "correct": "Radiesse is composed of calcium hydroxyapatite microspheres.",
      "A": "Sculptra is poly-L-lactic acid.",
      "B": "This is correct.",
      "C": "Zyderm is bovine collagen; Alloderm is acellular cadaveric dermis.",
      "D": "Bioalcamid is a polyalkylimide gel.",
      "E": "N/A"
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Radiesse is the trade name for calcium hydroxyapatite filler."
  },
  {
    "id": 172,
    "specialty": "Plastic Surgery",
    "topic": "Facelift",
    "question": "The SMAS (Superficial Musculo-Aponeurotic System) is continuous superiorly with the:",
    "options": {
      "A": "Platysma.",
      "B": "Galea aponeurotica.",
      "C": "Temporal fascia.",
      "D": "Orbicularis oculi.",
      "E": "Masseteric fascia."
    },
    "answer": "B",
    "explanation": {
      "correct": "The SMAS layer in the face is continuous with the galea aponeurotica of the scalp and the platysma of the neck.",
      "A": "Inferiorly.",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "SMAS is a continuous fibro-muscular layer of the head and neck."
  },
  {
    "id": 173,
    "specialty": "Plastic Surgery",
    "topic": "Pressure Sores",
    "question": "A Grade 3 pressure sore is defined as:",
    "options": {
      "A": "Non-blanching erythema.",
      "B": "Partial-thickness skin loss.",
      "C": "Full-thickness skin loss involving subcutaneous tissue but not fascia.",
      "D": "Exposure of muscle and bone.",
      "E": "Necrosis of the dermis only."
    },
    "answer": "C",
    "explanation": {
      "correct": "Grade 3 involves full-thickness skin loss with damage to subcutaneous tissue that may extend down to, but not through, underlying fascia.",
      "A": "Grade 1.",
      "B": "Grade 2.",
      "C": "This is correct.",
      "D": "Grade 4.",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Grade 3 pressure sores involve subcutaneous tissue."
  },
  {
    "id": 174,
    "specialty": "Plastic Surgery",
    "topic": "Microtia",
    "question": "The preferred age for autologous rib cartilage ear reconstruction is:",
    "options": {
      "A": "Birth.",
      "B": "2-3 years.",
      "C": "6-10 years.",
      "D": "Puberty.",
      "E": "Adulthood."
    },
    "answer": "C",
    "explanation": {
      "correct": "Ear reconstruction is typically performed around age 6-10, when there is sufficient costal cartilage to carve a framework and the opposite ear has reached near-adult size.",
      "A": "",
      "B": "",
      "C": "This is correct.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Costal cartilage ear reconstruction is done when the child is large enough for a donor site."
  },
  {
    "id": 175,
    "specialty": "Plastic Surgery",
    "topic": "Abdominoplasty",
    "question": "The most common complication after abdominoplasty is:",
    "options": {
      "A": "Pulmonary embolism.",
      "B": "Seroma.",
      "C": "Hematoma.",
      "D": "Skin necrosis.",
      "E": "Infection."
    },
    "answer": "B",
    "explanation": {
      "correct": "Seroma (fluid collection) is the most frequent complication following abdominoplasty, occurring in up to 10-15% of cases.",
      "A": "Serious but less common.",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Seroma is the most common postoperative issue in abdominoplasty."
  },
  {
    "id": 176,
    "specialty": "Plastic Surgery",
    "topic": "Botox",
    "question": "Botulinum toxin A acts by inhibiting the release of:",
    "options": {
      "A": "Dopamine.",
      "B": "Serotonin.",
      "C": "Acetylcholine.",
      "D": "Norepinephrine.",
      "E": "GABA."
    },
    "answer": "C",
    "explanation": {
      "correct": "Botox blocks the release of acetylcholine from the presynaptic terminal of the neuromuscular junction, causing chemical denervation.",
      "A": "",
      "B": "",
      "C": "This is correct.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Botox causes muscle paralysis by blocking acetylcholine release."
  },
  {
    "id": 177,
    "specialty": "Plastic Surgery",
    "topic": "Ptosis",
    "question": "The muscle responsible for elevating the upper eyelid is the:",
    "options": {
      "A": "Orbicularis oculi.",
      "B": "Levator palpebrae superioris.",
      "C": "Frontalis.",
      "D": "Corrugator supercilii.",
      "E": "Procerus."
    },
    "answer": "B",
    "explanation": {
      "correct": "The levator palpebrae superioris is the main elevator of the upper lid. Muller's muscle provides a secondary (sympathetic) elevation.",
      "A": "Closes the eye.",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Levator muscle damage or weakness causes ptosis."
  },
  {
    "id": 178,
    "specialty": "Plastic Surgery",
    "topic": "Suture Materials",
    "question": "Which of the following is a non-absorbable suture?",
    "options": {
      "A": "Vicryl (Polyglactin).",
      "B": "Monocryl (Poliglecaprone).",
      "C": "Prolene (Polypropylene).",
      "D": "PDS (Polydioxanone).",
      "E": "Catgut."
    },
    "answer": "C",
    "explanation": {
      "correct": "Prolene is a synthetic non-absorbable monofilament suture often used for skin closure and vascular repairs.",
      "A": "Absorbable.",
      "B": "Absorbable.",
      "C": "This is correct.",
      "D": "Absorbable.",
      "E": "Absorbable."
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Prolene is a widely used non-absorbable suture."
  },
  {
    "id": 179,
    "specialty": "Plastic Surgery",
    "topic": "Local Anesthetics",
    "question": "Bupivacaine (Marcaine) is preferred for long procedures because:",
    "options": {
      "A": "It has a very rapid onset.",
      "B": "It has a long duration of action.",
      "C": "It is less toxic than lidocaine.",
      "D": "It causes vasoconstriction.",
      "E": "It is an ester."
    },
    "answer": "B",
    "explanation": {
      "correct": "Bupivacaine has a longer duration of action (4-8 hours) compared to lidocaine (1-2 hours).",
      "A": "Slow onset.",
      "B": "This is correct.",
      "C": "More cardiotoxic.",
      "D": "",
      "E": "It is an amide."
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Bupivacaine provides prolonged local anesthesia."
  },
  {
    "id": 180,
    "specialty": "Plastic Surgery",
    "topic": "Gynaecomastia",
    "question": "According to the Simon classification, Grade 2b gynaecomastia is characterized by:",
    "options": {
      "A": "Minor enlargement with no skin redundancy.",
      "B": "Moderate enlargement with no skin redundancy.",
      "C": "Moderate enlargement with skin redundancy.",
      "D": "Marked enlargement with redundant skin (female appearance).",
      "E": "Unilateral enlargement only."
    },
    "answer": "C",
    "explanation": {
      "correct": "Simon Grade 2b is moderate breast enlargement with skin redundancy. Grade 2a has no redundancy.",
      "A": "Grade 1.",
      "B": "Grade 2a.",
      "C": "This is correct.",
      "D": "Grade 3.",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Simon classification guides surgical management of gynaecomastia."
  },
  {
    "id": 181,
    "specialty": "Plastic Surgery",
    "topic": "Basal Cell Carcinoma",
    "question": "Which histological subtype of BCC is considered most aggressive?",
    "options": {
      "A": "Nodular.",
      "B": "Superficial.",
      "C": "Morphoeic (Sclerosing).",
      "D": "Pigmented.",
      "E": "Cystic."
    },
    "answer": "C",
    "explanation": {
      "correct": "Morphoeic or sclerosing BCC has an infiltrative growth pattern and higher recurrence rates than nodular or superficial types.",
      "A": "Most common, less aggressive.",
      "B": "",
      "C": "This is correct.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Morphoeic BCC requires wider margins due to its infiltrative nature."
  },
  {
    "id": 182,
    "specialty": "Plastic Surgery",
    "topic": "Vascular Anomalies",
    "question": "The most common infantile vascular tumor is:",
    "options": {
      "A": "Port-wine stain.",
      "B": "Infantile haemangioma.",
      "C": "Arteriovenous malformation.",
      "D": "Venous malformation.",
      "E": "Lymphangioma."
    },
    "answer": "B",
    "explanation": {
      "correct": "Infantile haemangiomas are the most common benign tumors of infancy, characterized by rapid proliferation and eventual involution.",
      "A": "Capillary malformation.",
      "B": "This is correct.",
      "C": "High-flow malformation.",
      "D": "Low-flow malformation.",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Infantile haemangiomas typically follow a proliferation-involution cycle."
  },
  {
    "id": 183,
    "specialty": "Plastic Surgery",
    "topic": "Keloids",
    "question": "The primary histological difference between keloids and hypertrophic scars is:",
    "options": {
      "A": "Presence of inflammation.",
      "B": "Extension beyond the original wound margins.",
      "C": "Presence of thick, disorganized Type 1 collagen bundles.",
      "D": "Blood supply.",
      "E": "Rate of growth."
    },
    "answer": "C",
    "explanation": {
      "correct": "Keloids are characterized by thick, glassy, eosinophilic collagen bundles (Type 1 and 3) that are highly disorganized and extend beyond the original wound.",
      "A": "",
      "B": "Clinical difference.",
      "C": "This is correct.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Keloids feature disorganized, thick collagen bundles."
  },
  {
    "id": 184,
    "specialty": "Plastic Surgery",
    "topic": "Hand Fractures",
    "question": "A Bennett's fracture involves the:",
    "options": {
      "A": "Base of the 5th metacarpal.",
      "B": "Neck of the 5th metacarpal.",
      "C": "Base of the 1st metacarpal.",
      "D": "Distal phalanx of the thumb.",
      "E": "Scaphoid."
    },
    "answer": "C",
    "explanation": {
      "correct": "Bennett's fracture is an intra-articular fracture-dislocation at the base of the first metacarpal (thumb CMC joint).",
      "A": "Reverse Bennett's.",
      "B": "Boxer's fracture.",
      "C": "This is correct.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Bennett's fracture is a common thumb injury requiring stability."
  },
  {
    "id": 185,
    "specialty": "Plastic Surgery",
    "topic": "Nerve Compression",
    "question": "Wartenberg's syndrome involves compression of which nerve?",
    "options": {
      "A": "Median nerve.",
      "B": "Ulnar nerve.",
      "C": "Superficial radial nerve.",
      "D": "Posterior interosseous nerve.",
      "E": "Anterior interosseous nerve."
    },
    "answer": "C",
    "explanation": {
      "correct": "Wartenberg's syndrome is the entrapment of the sensory branch of the radial nerve (SRN) in the forearm, causing pain and paraesthesia.",
      "A": "",
      "B": "",
      "C": "This is correct.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Wartenberg's syndrome is a sensory neuropathy of the radial nerve."
  },
  {
    "id": 186,
    "specialty": "Plastic Surgery",
    "topic": "Hypospadias",
    "question": "The three components of hypospadias are:",
    "options": {
      "A": "Dorsal hood, chordee, and proximal urethral meatus.",
      "B": "Ventral hood, chordee, and distal urethral meatus.",
      "C": "Dorsal hood, penile curvature, and undescended testes.",
      "D": "Ventral hood, penile curvature, and inguinal hernia.",
      "E": "None of the above."
    },
    "answer": "A",
    "explanation": {
      "correct": "Hypospadias is characterized by a ventrally placed urethral meatus, ventral curvature (chordee), and a redundant dorsal foreskin (dorsal hood).",
      "A": "This is correct.",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Hypospadias involves meatal malposition, chordee, and foreskin anomalies."
  },
  {
    "id": 187,
    "specialty": "Plastic Surgery",
    "topic": "Breast Implants",
    "question": "Baker Grade 4 capsular contracture is defined as:",
    "options": {
      "A": "Soft breast, natural appearance.",
      "B": "Slightly firm, looks natural.",
      "C": "Firm, looks abnormal.",
      "D": "Hard, painful, and looks abnormal.",
      "E": "Ruptured implant."
    },
    "answer": "D",
    "explanation": {
      "correct": "Baker Grade 4 is the most severe form: the breast is hard, cold, painful, and distorted in appearance.",
      "A": "Grade 1.",
      "B": "Grade 2.",
      "C": "Grade 3.",
      "D": "This is correct.",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Baker classification system stages capsular contracture."
  },
  {
    "id": 188,
    "specialty": "Plastic Surgery",
    "topic": "Lasers",
    "question": "The principle of 'selective photothermolysis' relies on:",
    "options": {
      "A": "Wavelength, pulse duration, and energy density.",
      "B": "The color of the laser light only.",
      "C": "The type of skin being treated.",
      "D": "Total exposure time.",
      "E": "Laser power in Watts."
    },
    "answer": "A",
    "explanation": {
      "correct": "Selective photothermolysis uses specific wavelengths and pulse durations to target chromophores (like melanin or hemoglobin) without damaging surrounding tissue.",
      "A": "This is correct.",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Selective photothermolysis is the foundation of medical laser therapy."
  },
  {
    "id": 189,
    "specialty": "Plastic Surgery",
    "topic": "Head and Neck",
    "question": "The most common site for a branchial cleft cyst is:",
    "options": {
      "A": "First branchial cleft.",
      "B": "Second branchial cleft.",
      "C": "Third branchial cleft.",
      "D": "Fourth branchial cleft.",
      "E": "Thyroglossal duct."
    },
    "answer": "B",
    "explanation": {
      "correct": "95% of branchial cleft anomalies arise from the second branchial cleft, typically presenting along the anterior border of the sternocleidomastoid muscle.",
      "A": "Around the ear/parotid.",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Second branchial cleft cysts are the most common congenital neck masses."
  },
  {
    "id": 190,
    "specialty": "Plastic Surgery",
    "topic": "Microvascular Surgery",
    "question": "The 'no-reflow' phenomenon in microsurgery is primarily due to:",
    "options": {
      "A": "Arterial spasm.",
      "B": "Inadequate venous drainage.",
      "C": "Microvascular damage and intravascular thrombosis during ischaemia.",
      "D": "Hypothermia of the flap.",
      "E": "Poor surgical technique."
    },
    "answer": "C",
    "explanation": {
      "correct": "The no-reflow phenomenon occurs when blood fails to reperfuse the microcirculation of a flap after a period of ischaemia, despite a patent anastomosis.",
      "A": "",
      "B": "",
      "C": "This is correct.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "No-reflow is a consequence of prolonged ischaemia and reperfusion injury."
  },
  {
    "id": 191,
    "specialty": "Plastic Surgery",
    "topic": "Lower Limb Trauma",
    "question": "According to the Gustilo-Anderson classification, a Type 3b open fracture involves:",
    "options": {
      "A": "A clean wound < 1 cm.",
      "B": "Extensive soft tissue damage requiring a flap for coverage.",
      "C": "Associated arterial injury requiring repair.",
      "D": "Adequate soft tissue coverage of the bone.",
      "E": "Wound > 10 cm with no contamination."
    },
    "answer": "B",
    "explanation": {
      "correct": "Type 3b involves extensive soft tissue injury with periosteal stripping and exposure of bone, requiring plastic surgical intervention (flaps) for coverage.",
      "A": "Type 1.",
      "B": "This is correct.",
      "C": "Type 3c.",
      "D": "Type 3a.",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Gustilo 3b fractures mandate flap reconstruction."
  },
  {
    "id": 192,
    "specialty": "Plastic Surgery",
    "topic": "Mandible Fractures",
    "question": "The most common site of mandible fracture is the:",
    "options": {
      "A": "Symphysis.",
      "B": "Body.",
      "C": "Angle.",
      "D": "Condyle.",
      "E": "Ramus."
    },
    "answer": "D",
    "explanation": {
      "correct": "The condyle is the most frequent site of mandible fracture, often resulting from indirect forces.",
      "A": "",
      "B": "",
      "C": "Second most common.",
      "D": "This is correct.",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Condylar fractures are the most frequent mandibular injuries."
  },
  {
    "id": 193,
    "specialty": "Plastic Surgery",
    "topic": "Eyelid Anatomy",
    "question": "The Gray Line of the eyelid corresponds to the:",
    "options": {
      "A": "Meibomian gland orifices.",
      "B": "Muscle of Riolan.",
      "C": "Tarsal plate.",
      "D": "Orbicularis oculi muscle.",
      "E": "Lid margin epidermis."
    },
    "answer": "B",
    "explanation": {
      "correct": "The Gray Line is the surface manifestation of the muscle of Riolan (the most superficial part of the orbicularis oculi) and serves as an important landmark for eyelid surgery.",
      "A": "",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "The Gray Line divides the eyelid into anterior and posterior lamellae."
  },
  {
    "id": 194,
    "specialty": "Plastic Surgery",
    "topic": "Surgical Anatomy",
    "question": "The 'Danger Space' of the neck is located between:",
    "options": {
      "A": "The superficial and deep cervical fascia.",
      "B": "The alar and prevertebral fascia.",
      "C": "The carotid sheath and the trachea.",
      "D": "The platysma and the SCM.",
      "E": "The mandible and the hyoid."
    },
    "answer": "B",
    "explanation": {
      "correct": "The danger space is a potential space between the alar fascia and the prevertebral fascia, allowing infection to spread from the base of the skull to the diaphragm.",
      "A": "",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "The neck's danger space is a route for mediastinitis."
  },
  {
    "id": 195,
    "specialty": "Plastic Surgery",
    "topic": "Free Flap Monitoring",
    "question": "The most sensitive clinical sign of venous congestion in a free flap is:",
    "options": {
      "A": "Flap coolness.",
      "B": "Pale color.",
      "C": "Slow capillary refill.",
      "D": "Rapid capillary refill and dark/purple color.",
      "E": "Loss of Doppler signal."
    },
    "answer": "D",
    "explanation": {
      "correct": "Venous congestion presents with a dark, blue, or purple flap that has very rapid capillary refill and often 'bleeds blue' on prick testing.",
      "A": "General sign of poor perfusion.",
      "B": "Sign of arterial insufficiency.",
      "C": "Sign of arterial insufficiency.",
      "D": "This is correct.",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Rapid refill and purple hue are pathognomonic for venous flap failure."
  },
  {
    "id": 196,
    "specialty": "Plastic Surgery",
    "topic": "Skin Anatomy",
    "question": "The thickest layer of the epidermis is the:",
    "options": {
      "A": "Stratum basale.",
      "B": "Stratum spinosum.",
      "C": "Stratum granulosum.",
      "D": "Stratum lucidum.",
      "E": "Stratum corneum."
    },
    "answer": "B",
    "explanation": {
      "correct": "The stratum spinosum (prickle cell layer) is usually the thickest layer of the viable epidermis.",
      "A": "",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": "Can be thicker on palms/soles, but spinosum is generally the thickest viable layer."
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Stratum spinosum provides structural integrity to the skin."
  },
  {
    "id": 197,
    "specialty": "Plastic Surgery",
    "topic": "Orbital Fractures",
    "question": "A 'blow-out' fracture typically involves which orbital wall?",
    "options": {
      "A": "Lateral wall.",
      "B": "Roof.",
      "C": "Medial wall.",
      "D": "Floor.",
      "E": "C and D."
    },
    "answer": "E",
    "explanation": {
      "correct": "Blow-out fractures most commonly involve the orbital floor (weakest part) and/or the medial wall (lamina papyracea).",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": "This is correct."
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Orbital floor and medial wall are most susceptible to blow-out fractures."
  },
  {
    "id": 198,
    "specialty": "Plastic Surgery",
    "topic": "Facial Nerve",
    "question": "The marginal mandibular nerve lies superficial to which structure at the level of the mandible?",
    "options": {
      "A": "Facial artery.",
      "B": "Parotid gland.",
      "C": "Masseter muscle.",
      "D": "Platysma.",
      "E": "Sternocleidomastoid."
    },
    "answer": "A",
    "explanation": {
      "correct": "The marginal mandibular nerve crosses superficial to the facial artery and vein at the inferior border of the mandible.",
      "A": "This is correct.",
      "B": "",
      "C": "",
      "D": "It is deep to the platysma.",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "The facial artery is a landmark for the marginal mandibular nerve."
  },
  {
    "id": 199,
    "specialty": "Plastic Surgery",
    "topic": "Fat Grafting",
    "question": "Coleman's technique for fat grafting involves:",
    "options": {
      "A": "High-pressure suction.",
      "B": "Centrifugation of the harvested fat.",
      "C": "Washing the fat with saline only.",
      "D": "Immediate injection of large volumes.",
      "E": "Addition of steroids to the fat."
    },
    "answer": "B",
    "explanation": {
      "correct": "The Coleman technique involves low-pressure manual harvest, centrifugation at 3000 rpm for 3 minutes, and meticulous micro-injection of fat pearls.",
      "A": "Damages fat cells.",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Centrifugation is a key step in the Coleman fat grafting technique."
  },
  {
    "id": 200,
    "specialty": "Plastic Surgery",
    "topic": "Ear Reconstruction",
    "question": "The most common congenital ear deformity is:",
    "options": {
      "A": "Microtia.",
      "B": "Stahl's ear.",
      "C": "Prominent ear (bat ear).",
      "D": "Cryptotia.",
      "E": "Anotia."
    },
    "answer": "C",
    "explanation": {
      "correct": "Prominent ear (due to lack of antihelical folding or conchal excess) is the most frequent congenital ear anomaly.",
      "A": "",
      "B": "",
      "C": "This is correct.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Prominent ear is easily corrected with otoplasty."
  },
  {
    "id": 201,
    "specialty": "Plastic Surgery",
    "topic": "Fascial Layers",
    "question": "Colles' fascia is the continuation of which abdominal layer into the perineum?",
    "options": {
      "A": "Camper's fascia.",
      "B": "Scarpa's fascia.",
      "C": "Transversalis fascia.",
      "D": "Parietal peritoneum.",
      "E": "Linea alba."
    },
    "answer": "B",
    "explanation": {
      "correct": "Scarpa's fascia (the deep membranous layer of the superficial abdominal fascia) continues into the perineum as Colles' fascia.",
      "A": "",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Scarpa's and Colles' fascia are continuous layers."
  },
  {
    "id": 202,
    "specialty": "Plastic Surgery",
    "topic": "Hand Infections",
    "question": "Kanavel's signs are diagnostic of:",
    "options": {
      "A": "Paronychia.",
      "B": "Felon.",
      "C": "Flexor tenosynovitis.",
      "D": "Herpetic whitlow.",
      "E": "Septic arthritis."
    },
    "answer": "C",
    "explanation": {
      "correct": "Kanavel's four signs are: flexed position, fusiform swelling, tenderness along the sheath, and pain on passive extension.",
      "A": "",
      "B": "",
      "C": "This is correct.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Kanavel's signs indicate an emergency hand infection."
  },
  {
    "id": 203,
    "specialty": "Plastic Surgery",
    "topic": "Scar Revision",
    "question": "The primary goal of a Z-plasty is to:",
    "options": {
      "A": "Remove the scar completely.",
      "B": "Lengthen the scar in a specific direction.",
      "C": "Change the color of the scar.",
      "D": "Narrow the scar.",
      "E": "Flatten a keloid."
    },
    "answer": "B",
    "explanation": {
      "correct": "Z-plasty is used to lengthen a scar along its central limb and to reorient the scar into relaxed skin tension lines.",
      "A": "",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Z-plasty reorients and lengthens scars."
  },
  {
    "id": 204,
    "specialty": "Plastic Surgery",
    "topic": "Craniofacial",
    "question": "Crouzon syndrome is distinguished from Apert syndrome by the absence of:",
    "options": {
      "A": "Craniosynostosis.",
      "B": "Midface hypoplasia.",
      "C": "Syndactyly.",
      "D": "Exophthalmos.",
      "E": "Hydrocephalus."
    },
    "answer": "C",
    "explanation": {
      "correct": "Both syndromes involve craniosynostosis and midface hypoplasia, but Apert syndrome is specifically associated with complex 'mitten-hand' syndactyly.",
      "A": "",
      "B": "",
      "C": "This is correct.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Syndactyly is the hallmark difference between Apert and Crouzon."
  },
  {
    "id": 205,
    "specialty": "Plastic Surgery",
    "topic": "Breast Anatomy",
    "question": "Cooper's ligaments provide:",
    "options": {
      "A": "Blood supply to the nipple.",
      "B": "Innervation to the breast.",
      "C": "Structural support to the breast parenchyma.",
      "D": "Lymphatic drainage.",
      "E": "Milk duct protection."
    },
    "answer": "C",
    "explanation": {
      "correct": "Cooper's ligaments (suspensory ligaments) are fibrous bands that connect the dermis to the deep pectoral fascia, providing structural support.",
      "A": "",
      "B": "",
      "C": "This is correct.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Cooper's ligaments maintain the shape of the breast."
  },
  {
    "id": 206,
    "specialty": "Plastic Surgery",
    "topic": "Laser Physics",
    "question": "The active medium in a CO2 laser is:",
    "options": {
      "A": "A crystal.",
      "B": "A dye.",
      "C": "A gas.",
      "D": "A semiconductor.",
      "E": "A liquid."
    },
    "answer": "C",
    "explanation": {
      "correct": "The CO2 laser is a gas laser with a wavelength of 10,600 nm, primarily absorbed by water.",
      "A": "e.g. Ruby, Nd:YAG.",
      "B": "e.g. Pulsed Dye.",
      "C": "This is correct.",
      "D": "e.g. Diode.",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "CO2 lasers are high-power gas lasers used for cutting and ablation."
  },
  {
    "id": 207,
    "specialty": "Plastic Surgery",
    "topic": "Hair Transplant",
    "question": "The 'donor dominant' theory in hair transplantation states that:",
    "options": {
      "A": "The recipient site determines the growth of the hair.",
      "B": "The transplanted hair maintains its original growth characteristics.",
      "C": "Hair only grows if taken from the occipital region.",
      "D": "Large grafts grow better than small grafts.",
      "E": "Auto-transplantation is impossible."
    },
    "answer": "B",
    "explanation": {
      "correct": "Donor dominance, proposed by Orentreich, states that hair follicles maintain their genetic resistance to androgenetic alopecia when moved to a different site.",
      "A": "",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Donor dominance allows for successful hair transplantation in balding areas."
  },
  {
    "id": 208,
    "specialty": "Plastic Surgery",
    "topic": "Chemical Peels",
    "question": "Phenol peels are unique among chemical peels because they:",
    "options": {
      "A": "Are extremely shallow.",
      "B": "Are not absorbed systemically.",
      "C": "Can cause cardiac arrhythmias.",
      "D": "Do not require neutralization.",
      "E": "Are safe for all skin types."
    },
    "answer": "C",
    "explanation": {
      "correct": "Phenol is a deep peel agent that can be cardiotoxic, requiring cardiac monitoring during application.",
      "A": "Deepest peel.",
      "B": "Readily absorbed.",
      "C": "This is correct.",
      "D": "",
      "E": "High risk of pigmentation changes."
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Phenol peels require systemic monitoring."
  },
  {
    "id": 209,
    "specialty": "Plastic Surgery",
    "topic": "Maxillofacial Trauma",
    "question": "A Le Fort II fracture is also known as a:",
    "options": {
      "A": "Guerin fracture.",
      "B": "Pyramidal fracture.",
      "C": "Craniofacial disjunction.",
      "D": "Tripod fracture.",
      "E": "Nasal fracture."
    },
    "answer": "B",
    "explanation": {
      "correct": "A Le Fort II fracture follows a pyramidal line through the nasal bones, lacrimal bones, orbital floor, and infraorbital rim.",
      "A": "Le Fort I.",
      "B": "This is correct.",
      "C": "Le Fort III.",
      "D": "Zygomaticomaxillary complex fracture.",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Le Fort II fractures involve the central midface in a pyramid shape."
  },
  {
    "id": 210,
    "specialty": "Plastic Surgery",
    "topic": "Microbiology",
    "question": "The most common organism isolated from human bite wounds is:",
    "options": {
      "A": "Pasteurella multocida.",
      "B": "Eikenella corrodens.",
      "C": "Staphylococcus aureus.",
      "D": "Streptococcus viridans.",
      "E": "B and D."
    },
    "answer": "E",
    "explanation": {
      "correct": "Human bites are polymicrobial, but Eikenella corrodens and alpha-hemolytic streptococci (S. viridans) are classic isolates.",
      "A": "Cat/dog bites.",
      "B": "",
      "C": "",
      "D": "",
      "E": "This is correct."
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Eikenella corrodens is a signature organism of human bite infections."
  },
  {
    "id": 211,
    "specialty": "Plastic Surgery",
    "topic": "Skin Physiology",
    "question": "Melanocytes are derived from which embryological layer?",
    "options": {
      "A": "Ectoderm (Neural crest).",
      "B": "Mesoderm.",
      "C": "Endoderm.",
      "D": "Neural tube.",
      "E": "Yolk sac."
    },
    "answer": "A",
    "explanation": {
      "correct": "Melanocytes migrate from the neural crest to the skin during the first trimester.",
      "A": "This is correct.",
      "B": "",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Melanocytes are neuroectodermal in origin."
  },
  {
    "id": 212,
    "specialty": "Plastic Surgery",
    "topic": "Lymphedema",
    "question": "Stemmer's sign is diagnostic of:",
    "options": {
      "A": "Venous insufficiency.",
      "B": "Lymphedema.",
      "C": "DVT.",
      "D": "Cellulitis.",
      "E": "Compartment syndrome."
    },
    "answer": "B",
    "explanation": {
      "correct": "Stemmer's sign is the inability to pinch a fold of skin on the dorsal surface of the second toe or finger, indicating lymphedema.",
      "A": "",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Stemmer's sign is a reliable clinical marker for chronic lymphedema."
  },
  {
    "id": 213,
    "specialty": "Plastic Surgery",
    "topic": "Flap Anatomy",
    "question": "A 'delay' procedure on a flap works by:",
    "options": {
      "A": "Increasing the total amount of skin.",
      "B": "Promoting the orientation of the microvasculature along the flap axis.",
      "C": "Reducing the metabolic rate of the flap.",
      "D": "Increasing systemic blood pressure.",
      "E": "Decreasing the venous drainage."
    },
    "answer": "B",
    "explanation": {
      "correct": "Flap delay (partially incising the flap before moving it) encourages longitudinal reorientation of vessels and 'primes' the flap for its new blood supply.",
      "A": "",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Surgical delay improves flap survival by reorganizing blood flow."
  },
  {
    "id": 214,
    "specialty": "Plastic Surgery",
    "topic": "Craniofacial",
    "question": "The most common craniofacial cleft according to the Tessier classification is:",
    "options": {
      "A": "Cleft 0.",
      "B": "Cleft 3.",
      "C": "Cleft 7.",
      "D": "Cleft 10.",
      "E": "Cleft 14."
    },
    "answer": "C",
    "explanation": {
      "correct": "Tessier 7 cleft (macrostomia) is the most common lateral facial cleft.",
      "A": "",
      "B": "",
      "C": "This is correct.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Tessier 7 cleft involves the oral commissure."
  },
  {
    "id": 215,
    "specialty": "Plastic Surgery",
    "topic": "Burn Surgery",
    "question": "Curling's ulcer is associated with:",
    "options": {
      "A": "Severe head injury.",
      "B": "Severe burns.",
      "C": "Gastric cancer.",
      "D": "Long-term NSAID use.",
      "E": "Liver failure."
    },
    "answer": "B",
    "explanation": {
      "correct": "Curling's ulcer is an acute stress ulcer of the duodenum occurring in patients with extensive burns.",
      "A": "Cushing's ulcer.",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Stress ulcer prophylaxis is essential in major burn patients."
  },
  {
    "id": 216,
    "specialty": "Plastic Surgery",
    "topic": "Ear Anatomy",
    "question": "The sensory innervation of the ear is provided by:",
    "options": {
      "A": "Greater auricular nerve.",
      "B": "Auriculotemporal nerve.",
      "C": "Lesser occipital nerve.",
      "D": "Vagus nerve (Arnold's).",
      "E": "All of the above."
    },
    "answer": "E",
    "explanation": {
      "correct": "The ear has complex innervation from the cervical plexus (C2, C3) and several cranial nerves (V, VII, IX, X).",
      "A": "",
      "B": "",
      "C": "",
      "D": "",
      "E": "This is correct."
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "The ear receives multi-nerve sensory supply."
  },
  {
    "id": 217,
    "specialty": "Plastic Surgery",
    "topic": "Hand Surgery",
    "question": "A mallet finger deformity results from injury to the:",
    "options": {
      "A": "Central slip of the extensor tendon.",
      "B": "Terminal extensor tendon at the DIP joint.",
      "C": "FDP tendon.",
      "D": "FDS tendon.",
      "E": "Ulnar collateral ligament."
    },
    "answer": "B",
    "explanation": {
      "correct": "Mallet finger is the loss of active extension at the DIP joint due to rupture or avulsion of the terminal extensor tendon.",
      "A": "Boutonniere deformity.",
      "B": "This is correct.",
      "C": "Jersey finger.",
      "D": "",
      "E": "Gamekeeper's thumb."
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Mallet finger is a common athletic injury."
  },
  {
    "id": 218,
    "specialty": "Plastic Surgery",
    "topic": "Vascular Surgery",
    "question": "The Allen test is used to evaluate:",
    "options": {
      "A": "Ulnar nerve function.",
      "B": "Patency of the radial and ulnar arteries.",
      "C": "Carpal tunnel syndrome.",
      "D": "Vascularity of the lower limb.",
      "E": "Lymphedema."
    },
    "answer": "B",
    "explanation": {
      "correct": "The Allen test assesses the patency of the radial and ulnar arteries and the adequacy of the palmar arch circulation.",
      "A": "",
      "B": "This is correct.",
      "C": "",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Allen test is mandatory before radial artery harvest or cannulation."
  },
  {
    "id": 219,
    "specialty": "Plastic Surgery",
    "topic": "Melanoma",
    "question": "The standard surgical margin for a 1.5-mm thick melanoma is:",
    "options": {
      "A": "0.5 cm.",
      "B": "1.0 cm.",
      "C": "2.0 cm.",
      "D": "3.0 cm.",
      "E": "5.0 cm."
    },
    "answer": "C",
    "explanation": {
      "correct": "Current guidelines recommend 2 cm margins for melanomas 1.01-2.00 mm thick.",
      "A": "",
      "B": "For < 1.0 mm.",
      "C": "This is correct.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Melanoma margins are based on Breslow thickness."
  },
  {
    "id": 220,
    "specialty": "Plastic Surgery",
    "topic": "Suture Removal",
    "question": "Facial sutures should typically be removed after:",
    "options": {
      "A": "1-2 days.",
      "B": "3-5 days.",
      "C": "7-10 days.",
      "D": "14 days.",
      "E": "When they fall out."
    },
    "answer": "B",
    "explanation": {
      "correct": "To minimize the risk of 'track marks' or railroad scarring, facial sutures are removed early (3-5 days), as the face has excellent blood supply.",
      "A": "",
      "B": "This is correct.",
      "C": "For limbs/back.",
      "D": "",
      "E": ""
    },
    "guideline": "MCQs in Plastic Surgery",
    "takeaway": "Early suture removal on the face prevents suture-hole scarring."
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
