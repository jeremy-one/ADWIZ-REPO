import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'avocat des dirigeants - Bordeaux | ADWIZ",
  description: "Avocat pour dirigeants d'entreprise : organisation juridique, gestion des contentieux, recouvrement et accompagnement dans les difficultés.",
};

export default function DirigeantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
