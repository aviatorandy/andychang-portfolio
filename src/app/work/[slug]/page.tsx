import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import { getCaseStudyContent } from "@/lib/case-study-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  const content = getCaseStudyContent(slug);

  if (!study || !content) {
    return { title: "Case Study Not Found" };
  }

  const title = content.title || `${study.company} — ${study.title}`;

  return {
    title: `${title} | Andy Chang`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  const content = getCaseStudyContent(slug);

  if (!study || !content) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <CaseStudyDetail study={study} content={content} />
      </main>
      <Footer />
    </>
  );
}
