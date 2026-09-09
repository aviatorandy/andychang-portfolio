export type CaseStudy = {
  slug: string;
  company: string;
  title: string;
  description: string;
  metrics: string[];
  metricsLabel?: string;
  role?: string;
  image?: string;
  externalUrl?: string;
  externalLabel?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "omnicell-llm-workflow-automation",
    company: "Omnicell",
    title: "LLM Workflow Automation",
    role: "Product Manager",
    description:
      "Built AI-assisted workflows that triage, research, and resolve customer issue cases in regulated healthcare with human-in-the-loop guardrails",
    metrics: [
      "2,000+ AI-assisted cases resolved",
      "~$220K saved annually",
      "Human-in-the-loop guardrails",
      "Healthcare compliance traceability",
    ],
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
    title: "Pragmatic Auth Re-architecture",
    role: "Product Manager",
    description:
      "Chose a pragmatic enterprise auth path that reused the existing foundation with targeted improvements to unblock customers and accelerate revenue",
    metrics: [
      "95% of affected customers unblocked",
      "$1M+ revenue accelerated",
      "Reduced onboarding friction",
      "Pragmatic auth migration strategy",
    ],
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
      "Manual workflows automated",
      "Scaled across enterprise onboarding",
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
      "RAG-powered dental EOB audit system that retrieves insurance policies and fee schedules to flag billing discrepancies with evidence-backed findings",
    metrics: [
      "15 min → under 1 min review time",
      "1–3 discrepancies flagged per EOB",
      "Policy lookup + rules + AI",
      "Evidence-backed findings",
    ],
    image: "/images/portfolio/billhero.png",
  },
  {
    slug: "review-intelligence-pipeline",
    company: "Independent",
    title: "Review Intelligence Pipeline",
    role: "Builder / PM",
    description:
      "End-to-end LLM pipeline that transforms 20,000+ unstructured reviews into structured themes, complaints, and feature requests for product decision-making",
    metrics: [
      "20,000+ reviews processed",
      "99% valid structured outputs",
      "98% source-backed accuracy",
      "Hours → minutes analysis",
    ],
    image: "/images/portfolio/review-intelligence.png",
  },
  {
    slug: "betnowly-social-betting",
    company: "BetNowly",
    title: "Social Betting Ledger",
    role: "Founder & Product Lead",
    description:
      "Social betting ledger for creating, sharing, tracking, and settling informal bets — with a trust model, full settlement state machine, and instrumented growth funnel",
    metrics: [
      "End-to-end bet lifecycle",
      "Acquisition funnel instrumented",
      "9 intent-specific landing pages",
      "Guest-to-account claiming",
    ],
    metricsLabel: "Scope shipped",
    externalUrl: "https://betnowly.com",
    externalLabel: "View live product",
    image: "/images/portfolio/betnowly.png",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
