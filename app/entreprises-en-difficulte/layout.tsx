import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avocat Entreprises en Difficulté - Bordeaux | ADWIZ",
  description: "Accompagnement des entreprises en difficulté : mandat ad hoc, conciliation, sauvegarde, redressement et liquidation judiciaire.",
};

export default function EntreprisesEnDifficulteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
