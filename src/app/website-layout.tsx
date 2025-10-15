import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type React from "react";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
