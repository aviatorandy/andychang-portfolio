// Legacy types/data kept for WorkCard backward compatibility
export type WorkItem = {
  slug: string;
  href: string;
  image: string;
  alt: string;
  caption: string;
  imageFit: "contain" | "cover";
  imageBg: string;
  external?: boolean;
};

export const featuredWork: WorkItem[] = [
  {
    slug: "omnicell-audit-platform",
    href: "/work/omnicell-audit-platform",
    image: "/images/portfolio/omnicell.png",
    alt: "Omnicell",
    caption: "Launching a 0→1 Cloud Audit Log Platform for Healthcare Compliance",
    imageFit: "contain",
    imageBg: "bg-[#0d2818]",
  },
  {
    slug: "sahara-cloud-co-founder-cpo",
    href: "/work/sahara-cloud-co-founder-cpo",
    image: "/images/portfolio/sahara_testing_gif.gif",
    alt: "Sahara Cloud",
    caption: "Raising $750K and founding a company @ Hardware SaaS Startup (Sahara Cloud)",
    imageFit: "cover",
    imageBg: "bg-neutral-900",
  },
  {
    slug: "yext-platform-automation",
    href: "/work/yext-platform-automation",
    image: "/images/portfolio/yext.png",
    alt: "Yext",
    caption: "Automating Enterprise Data Matching Workflows @ Yext",
    imageFit: "cover",
    imageBg: "bg-neutral-100",
  },
  {
    slug: "harmonize-onboarding-automation",
    href: "/work/harmonize-onboarding-automation",
    image: "/images/portfolio/harmonize.png",
    alt: "Harmonize",
    caption: "Automating Employee Onboarding Workflows @ Harmonize",
    imageFit: "contain",
    imageBg: "bg-neutral-50",
  },
];

export const additionalCaseStudies = [
  { label: "LLM Workflow Automation", href: "/work/omnicell-llm-workflow-automation" },
  { label: "Auth Re-architecture", href: "/work/omnicell-auth-rearchitecture" },
];

export const sideProjects: WorkItem[] = [
  {
    slug: "billhero-ai-dental-billing",
    href: "/work/billhero-ai-dental-billing",
    image: "/images/portfolio/billhero.png",
    alt: "BillHero",
    caption: "AI Dental Billing Auditor · BillHero",
    imageFit: "cover",
    imageBg: "bg-neutral-50",
  },
  {
    slug: "review-intelligence-pipeline",
    href: "/work/review-intelligence-pipeline",
    image: "/images/portfolio/review-intelligence.png",
    alt: "Review Intelligence Pipeline",
    caption: "Review Intelligence Pipeline (2026)",
    imageFit: "cover",
    imageBg: "bg-neutral-950",
  },
];

// ─── New grouped structure used by Work.tsx ───────────────────────────────────

export type WorkGroupItem = {
  slug: string;
  href: string;
  title: string;
  description: string;
  metrics: string[];
  external?: boolean;
};

export type WorkGroup = {
  label: string;
  items: WorkGroupItem[];
};

export const workGroups: WorkGroup[] = [
  {
    label: "Platform Systems",
    items: [
      {
        slug: "omnicell-audit-platform",
        href: "/work/omnicell-audit-platform",
        title: "Cloud Audit Log Platform for Healthcare Compliance",
        description:
          "System-of-record for regulated user and system activity across enterprise healthcare environments.",
        metrics: [
          "100% traceability for MVP events",
          "~$2M modeled exposure reduced",
          "Audit prep: weeks → minutes",
        ],
      },
      {
        slug: "omnicell-auth-rearchitecture",
        href: "/work/omnicell-auth-rearchitecture",
        title: "Auth Re-architecture at Omnicell",
        description:
          "Re-architected authentication to support enterprise SSO and delegated access, unblocking stalled revenue.",
        metrics: ["95% of customers unblocked", "$1M+ revenue accelerated"],
      },
    ],
  },
  {
    label: "AI Workflow Automation",
    items: [
      {
        slug: "omnicell-llm-workflow-automation",
        href: "/work/omnicell-llm-workflow-automation",
        title: "LLM Workflow Automation for Support Operations",
        description:
          "AI-assisted workflows to triage and resolve support and data quality cases in regulated healthcare.",
        metrics: ["2,000+ AI-assisted cases", "~$220K annual savings"],
      },
      {
        slug: "review-intelligence-pipeline",
        href: "/work/review-intelligence-pipeline",
        title: "Review Intelligence Pipeline",
        description:
          "End-to-end LLM pipeline analyzing 20,000+ reviews to generate structured, evidence-backed product insights.",
        metrics: ["99% JSON validity", "98% faithfulness"],
      },
      {
        slug: "billhero-ai-dental-billing",
        href: "/work/billhero-ai-dental-billing",
        title: "BillHero AI Dental Billing Auditor",
        description:
          "LLM + rule-based system auditing dental EOBs and surfacing billing discrepancies with recommended actions.",
        metrics: [
          "Review time: 15 min → under 1 min",
          "1–3 discrepancies per claim",
        ],
      },
    ],
  },
  {
    label: "Enterprise Automation",
    items: [
      {
        slug: "yext-platform-automation",
        href: "/work/yext-platform-automation",
        title: "Automating Enterprise Data Matching Workflows @ Yext",
        description:
          "Scaled decisioning and automation tooling to enterprise-wide adoption, eliminating 20,000+ hours of manual work annually.",
        metrics: [
          "20,000+ hours saved annually",
          "~$1M operating costs eliminated",
        ],
      },
      {
        slug: "harmonize-onboarding-automation",
        href: "/work/harmonize-onboarding-automation",
        title: "Automating Employee Onboarding Workflows @ Harmonize",
        description:
          "Built a lightweight onboarding automation MVP with role-based templates, scheduled communication, and completion tracking.",
        metrics: ["10% → 35% outreach response", "7% MRR increase"],
      },
    ],
  },
  {
    label: "0→1 Product",
    items: [
      {
        slug: "sahara-cloud-co-founder-cpo",
        href: "/work/sahara-cloud-co-founder-cpo",
        title: "Founding a Hardware Simulation SaaS Platform @ Sahara Cloud",
        description:
          "Co-founded and led product strategy for a cloud-based hardware simulation platform from concept to pre-seed funding.",
        metrics: [
          "$750K pre-seed raised",
          "200 beta users",
          "4 pilot engagements",
        ],
      },
    ],
  },
];

export type AIPrototype = {
  slug: string;
  href: string;
  title: string;
  input: string;
  workflow: string;
  output: string;
  signal: string;
  external?: boolean;
};

export const aiPrototypes: AIPrototype[] = [
  {
    slug: "billhero-ai-dental-billing",
    href: "/work/billhero-ai-dental-billing",
    title: "BillHero AI Dental Billing Auditor",
    input: "Dental EOBs and claim details",
    workflow: "Rule checks + LLM extraction + reasoning layer",
    output: "Overcharge flags, estimated savings, recommended action",
    signal: "Reduces manual review from 10–15 minutes to under 1 minute per claim",
  },
  {
    slug: "review-intelligence-pipeline",
    href: "/work/review-intelligence-pipeline",
    title: "Review Intelligence Pipeline",
    input: "Large review datasets (20,000+ reviews)",
    workflow:
      "LLM extraction, synthesis, evidence validation, automated evaluation",
    output: "Prioritized product insights with supporting evidence",
    signal:
      "99% JSON validity, 98% faithfulness score across structured outputs",
  },
  {
    slug: "omnicell-llm-workflow-automation",
    href: "/work/omnicell-llm-workflow-automation",
    title: "Omnicell LLM Workflow Automation",
    input: "Support and data quality cases",
    workflow:
      "AI-assisted triage, context retrieval, confidence check, human-in-the-loop review",
    output:
      "Draft resolution, recommended action, escalation path, audit log",
    signal: "2,000+ AI-assisted cases resolved, ~$220K annual savings",
  },
];
