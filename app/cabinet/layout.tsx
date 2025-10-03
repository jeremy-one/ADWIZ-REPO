import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cabinet ADWIZ | Avocat en Droit des Affaires à Bordeaux",
  description: "Découvrez le cabinet ADWIZ et son approche unique du droit des affaires. Expertise, innovation et accompagnement sur mesure.",
};

export default function CabinetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
