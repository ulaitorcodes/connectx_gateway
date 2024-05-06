import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ICS Connectx Gateway",
  description: "At ICS Connectx Gateway, we are committed to revolutionizing the way businesses accept payments online. With a focus on innovation, security, and reliability, we offer comprehensive payment processing solutions designed to empower merchants and businesses of all sizes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      
      </body>
    </html>
  );
}
