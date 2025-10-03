import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avocat Levée de Fonds - Bordeaux | ADWIZ",
  description: "Accompagnement des transactions et levées de fonds : négociations, valorisation, audit, rédaction des actes et pactes d'associés.",
};

export default function TransactionsLeveesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
