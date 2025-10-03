import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Avocat Droit des Affaires Bordeaux - ADWIZ",
  description: "Contactez ADWIZ pour vos besoins en droit des affaires. Consultation gratuite (25 min) pour échanger sur vos projets juridiques.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
