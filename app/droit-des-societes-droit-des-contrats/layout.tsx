import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avocat Droit des Sociétés - Bordeaux | ADWIZ",
  description: "Expertise en droit des sociétés et droit commercial : création, structuration, modifications statutaires et contrats commerciaux.",
};

export default function DroitDesSocietesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
