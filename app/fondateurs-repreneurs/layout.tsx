import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'avocat des Entrepreneurs - Bordeaux | ADWIZ",
  description: "Avocat spécialisé pour fondateurs et repreneurs d'entreprise. Accompagnement dans la structuration, le développement et la cession.",
};

export default function FondateursRepreneursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
