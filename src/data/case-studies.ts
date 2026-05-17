export type CaseStudy = {
  slug: string;
  company: string;
  title: string;
  description: string;
  metrics: string[];
  role?: string;
  image?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "omnicell-llm-workflow-automation",
    company: "Omnicell",
    title: "LLM Workflow Automation",
    role: "Senior Product Manager",
    description:
      "Built agentic LLM workflows to automate customer issue resolution in regulated healthcare",
    metrics: ["2,000+ cases automated", "$220K saved annually"],
    image: "/images/portfolio/omnicell.png",
  },
  {
    slug: "omnicell-audit-platform",
    company: "Omnicell",
    title: "Audit Platform (0→1)",
    role: "Senior Product Manager",
    description:
      "Architected compliance audit infrastructure from scratch across 3 engineering teams",
    metrics: [
      "100% MVP audit traceability",
      "$2M modeled exposure reduced",
      "Weeks → minutes evidence retrieval",
      "3 enterprise health systems",
    ],
    image: "/images/portfolio/omnicell.png",
  },
  {
    slug: "omnicell-auth-rearchitecture",
    company: "Omnicell",
    title: "Auth Re-architecture",
    role: "Senior Product Manager",
    description:
      "Redesigned authentication strategy to unblock enterprise customer onboarding",
    metrics: ["95% of customers unblocked", "$1M+ revenue accelerated"],
    image: "/images/portfolio/omnicell.png",
  },
  {
    slug: "sahara-cloud-co-founder-cpo",
    company: "Sahara Cloud",
    title: "Co-founder & CPO",
    role: "Co-founder & Chief Product Officer",
    description:
      "Co-founded cloud-based hardware simulation SaaS from 0 to paying customers",
    metrics: [
      "$750K pre-seed raised",
      "50+ discovery interviews",
      "200 beta users",
      "4 pilot engagements",
    ],
    image: "/images/portfolio/sahara_testing_gif.gif",
  },
  {
    slug: "yext-platform-automation",
    company: "Yext",
    title: "Platform Automation",
    role: "Senior Platform Manager",
    description:
      "Scaled internal automation tooling and delivered 200+ API integrations enterprise-wide",
    metrics: [
      "20,000+ hours saved annually",
      "~$1M operating costs eliminated",
      "96% CSAT maintained",
      "Faster enterprise activation",
    ],
    image: "/images/portfolio/yext.png",
  },
  {
    slug: "harmonize-onboarding-automation",
    company: "Harmonize",
    title: "Onboarding Automation",
    role: "Product Manager",
    description:
      "Automated and standardized employee onboarding workflows for a chat-based HR startup",
    metrics: [
      "10% → 35% outreach response",
      "7% MRR increase",
      "20+ usability interviews",
      "Manual coordination reduced",
    ],
    image: "/images/portfolio/harmonize.png",
  },
  {
    slug: "billhero-ai-dental-billing",
    company: "BillHero",
    title: "AI Dental Billing Auditor",
    role: "Builder / PM",
    description:
      "LLM + rule-based system auditing dental EOBs and detecting billing discrepancies",
    metrics: [
      "Review time 15 min → under 1 min",
      "1–3 discrepancies detected per claim",
    ],
    image: "/images/portfolio/billhero.png",
  },
  {
    slug: "review-intelligence-pipeline",
    company: "Independent",
    title: "Review Intelligence Pipeline",
    role: "Builder",
    description:
      "End-to-end LLM pipeline analyzing 20,000+ reviews generating structured product insights",
    metrics: ["99% JSON validity", "98% faithfulness", "Hours → minutes"],
    image: "/images/portfolio/review-intelligence.png",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
