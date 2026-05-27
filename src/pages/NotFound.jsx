import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageWrapper from "@/components/site/PageWrapper";
import Section from "@/components/site/Section";

export default function NotFound() {
  return (
    <PageWrapper>
      <Section className="flex flex-col items-center justify-center text-center min-h-[60vh]">
        <p className="font-mono text-[#5865f2] text-sm mb-4">404</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Page introuvable.
        </h1>
        <p className="text-[#b5bac1] mb-8 max-w-md">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#5865f2] hover:bg-[#4752c4] text-white text-sm font-semibold rounded-md transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>
      </Section>
    </PageWrapper>
  );
}
