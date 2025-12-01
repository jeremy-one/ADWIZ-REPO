import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avocat liquidation judiciaire - Défense du dirigeant | ADWIZ Avocat",
  description:
    "Accompagnement en liquidation judiciaire avec ADWIZ. Défense de la responsabilité du dirigeant, protection contre les sanctions et conseils pour envisager le rebond.",
  keywords: [
    "liquidation judiciaire",
    "avocat liquidation judiciaire",
    "responsabilité du dirigeant",
    "sanctions dirigeant",
    "cessation des paiements",
    "procédures collectives",
    "défense dirigeant",
    "avocat entreprises en difficulté",
  ],
};

export default function LiquidationJudiciaireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
