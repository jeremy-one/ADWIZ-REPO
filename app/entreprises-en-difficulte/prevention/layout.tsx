import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prévention des difficultés d'entreprise | ADWIZ Avocat",
  description:
    "Anticipez et prévenez les difficultés de votre entreprise avec ADWIZ. Mandat ad hoc, conciliation et procédures amiables pour traiter les difficultés en toute confidentialité.",
  keywords: [
    "prévention difficultés entreprise",
    "mandat ad hoc",
    "conciliation",
    "procédures amiables",
    "avocat prévention",
    "cessation des paiements",
    "avocat entreprises en difficulté",
  ],
};

export default function PreventionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
