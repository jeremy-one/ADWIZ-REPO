import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avocat Contentieux & Recouvrement - Bordeaux | ADWIZ",
  description: "Expertise en contentieux commercial, responsabilité des dirigeants, conflits d'associés et recouvrement de créances.",
};

export default function ContentieuxRecouvrementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
