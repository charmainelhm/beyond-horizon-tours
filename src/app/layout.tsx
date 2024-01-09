import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "BeyondHorizon Tours",
  description: "Where Every Journey Takes You to the Edge of Possibility",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
