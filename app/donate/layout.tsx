import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate — Jasmine Nyree Corporation",
  description:
    "Support Jasmine Nyree Corporation's mission to empower individuals with special needs. Every donation directly funds our programs and community development.",
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
