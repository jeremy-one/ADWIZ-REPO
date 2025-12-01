import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sauvetage d'entreprise - Sauvegarde et Redressement Judiciaire | ADWIZ Avocat",
  description:
    "Sauvez votre entreprise avec ADWIZ. Procédures de sauvegarde et redressement judiciaire pour les entreprises en difficulté. Protection du Tribunal et plan de restructuration.",
  keywords: [
    "sauvetage entreprise",
    "sauvegarde",
    "redressement judiciaire",
    "procédures collectives",
    "avocat redressement judiciaire",
    "plan de continuation",
    "cessation des paiements",
    "avocat entreprises en difficulté",
  ],
};

export default function SauvetageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
