import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'avocat des Associés - Bordeaux | ADWIZ",
  description: "Avocat spécialisé pour les associés : pactes d'associés, conventions de gouvernance et résolution de conflits entre associés.",
};

export default function AssociesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
