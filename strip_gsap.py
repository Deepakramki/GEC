import os
import re

files_to_process = [
    'src/components/AllocationSection.tsx',
    'src/components/FAQSection.tsx',
    'src/components/MissionVisionSection.tsx',
    'src/components/HeroVisualCard.tsx',
    'src/components/TeamSection.tsx',
    'src/components/StagesOfWork.tsx',
    'src/components/VestingSection.tsx',
    'src/components/HumanitarianSection.tsx',
    'src/components/HeroTextSection.tsx',
    'src/components/FooterSection.tsx'
]

for filepath in files_to_process:
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r') as f:
        content = f.read()

    # Replace imports
    content = re.sub(r"import gsap from 'gsap';\n", "", content)
    content = re.sub(r"import { ScrollTrigger } from 'gsap/ScrollTrigger';\n", "", content)
    content = re.sub(r"import { useGSAP } from '@gsap/react';\n", "", content)
    content = re.sub(r"gsap\.registerPlugin\(ScrollTrigger\);\n", "", content)
    
    # Replace React import to remove useRef if it was just for gsap
    content = re.sub(r"import React, { useRef } from 'react';", "import React from 'react';", content)
    content = re.sub(r"import React, { useRef, useState } from 'react';", "import React, { useState } from 'react';", content)
    content = re.sub(r"import React, { useState, useRef } from 'react';", "import React, { useState } from 'react';", content)
    content = re.sub(r"import React, { useEffect, useRef } from 'react';", "import React, { useEffect } from 'react';", content)
    content = re.sub(r"import { useRef } from 'react';", "", content)

    # Remove ref variables like `const sectionRef = useRef<HTMLElement>(null);`
    content = re.sub(r"  const \w+Ref = useRef<[^>]+>\([^)]+\);\n+", "", content)

    # Remove useGSAP block
    content = re.sub(r"  useGSAP\(\(\) => \{.*?\}, \{ scope: \w+Ref \}\);\n+", "", content, flags=re.DOTALL)
    # also remove without scope if any
    content = re.sub(r"  useGSAP\(\(\) => \{.*?\}\);\n+", "", content, flags=re.DOTALL)

    # Remove ref={...} from elements
    content = re.sub(r" ref=\{\w+Ref\}", "", content)

    # Remove specific classes added for GSAP
    classes_to_remove = [
        "hero-headline ", "hero-subtitle ", "hero-cta ", "hero-socials ",
        "footer-cta ", "footer-section ", "footer-main ", "alloc-stat ", "alloc-center ", "alloc-card ",
        "faq-title ", "faq-item ", "faq-cta ",
        "mv-title ", "mv-subtitle ", "mv-text ", "mv-stat ", "mv-badge ",
        "hero-visual-card ", "hero-visual-graphic ", "hero-visual-badge ",
        "team-title ", "team-subtitle ", "team-member ", "team-cta ",
        "stages-title ", "stages-subtitle ", "stage-card ", "stages-cta ",
        "vesting-title ", "vesting-subtitle ", "vesting-card ", "vesting-cta ",
        "hum-title ", "hum-subtitle ", "hum-content ", "hum-image ",
    ]
    for cls in classes_to_remove:
        content = content.replace(cls, "")
    
    with open(filepath, 'w') as f:
        f.write(content)

print("Done stripping GSAP")
