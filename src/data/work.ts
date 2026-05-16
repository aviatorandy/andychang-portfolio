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
    caption:
      "Launching a 0→1 Cloud Audit Log Platform for Healthcare Compliance",
    imageFit: "contain",
    imageBg: "bg-[#0d2818]",
  },
  {
    slug: "sahara-cloud-co-founder-cpo",
    href: "/work/sahara-cloud-co-founder-cpo",
    image: "/images/portfolio/sahara-cloud.png",
    alt: "Sahara Cloud",
    caption:
      "Raising $750K and founding a company @ Hardware SaaS Startup (Sahara Cloud)",
    imageFit: "cover",
    imageBg: "bg-neutral-900",
  },
  {
    slug: "yext-platform-automation",
    href: "/work/yext-platform-automation",
    image: "/images/portfolio/yext.png",
    alt: "Yext",
    caption:
      "Automating Efficiency Using Data @ Marketing Tech B2B SaaS Company (Yext)",
    imageFit: "cover",
    imageBg: "bg-neutral-100",
  },
  {
    slug: "harmonize-onboarding-automation",
    href: "/work/harmonize-onboarding-automation",
    image: "/images/portfolio/harmonize.png",
    alt: "Harmonize",
    caption:
      "Automating & Standardizing Employee Onboarding @ Chat Based HR Company (Harmonize)",
    imageFit: "cover",
    imageBg: "bg-neutral-50",
  },
];

export const additionalCaseStudies = [
  {
    label: "LLM Workflow Automation",
    href: "/work/omnicell-llm-workflow-automation",
  },
  {
    label: "Auth Re-architecture",
    href: "/work/omnicell-auth-rearchitecture",
  },
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
  {
    slug: "workout-recommender",
    href: "https://claude.ai/public/artifacts/c7036dc6-40e6-4427-9bae-6db5254c4e2f",
    image: "/images/portfolio/workout-recommender.png",
    alt: "AI Workout Recommender",
    caption: "AI Workout Recommender Based On Prior Lifts",
    imageFit: "cover",
    imageBg: "bg-neutral-50",
    external: true,
  },
];
