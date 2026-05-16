import type { CaseStudyContent } from "@/types/case-study-content";

import harmonize from "@/content/case-studies/harmonize-onboarding-automation.json";
import omnicellAudit from "@/content/case-studies/omnicell-audit-platform.json";
import omnicellAuth from "@/content/case-studies/omnicell-auth-rearchitecture.json";
import omnicellLlm from "@/content/case-studies/omnicell-llm-workflow-automation.json";
import billhero from "@/content/case-studies/billhero-ai-dental-billing.json";
import reviewPipeline from "@/content/case-studies/review-intelligence-pipeline.json";
import sahara from "@/content/case-studies/sahara-cloud-co-founder-cpo.json";
import yext from "@/content/case-studies/yext-platform-automation.json";

const contentBySlug: Record<string, CaseStudyContent> = {
  "omnicell-audit-platform": omnicellAudit as CaseStudyContent,
  "sahara-cloud-co-founder-cpo": sahara as CaseStudyContent,
  "yext-platform-automation": yext as CaseStudyContent,
  "harmonize-onboarding-automation": harmonize as CaseStudyContent,
  "omnicell-llm-workflow-automation": omnicellLlm as CaseStudyContent,
  "omnicell-auth-rearchitecture": omnicellAuth as CaseStudyContent,
  "billhero-ai-dental-billing": billhero as CaseStudyContent,
  "review-intelligence-pipeline": reviewPipeline as CaseStudyContent,
};

export function getCaseStudyContent(slug: string): CaseStudyContent | undefined {
  return contentBySlug[slug];
}
