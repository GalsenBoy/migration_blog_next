import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bilaly Cissokho - Blog",
  description:
    "Explorez le monde du développement web avec un jeune passionné de React, Nest.js et Next.js. Plongez dans des tutoriels captivants, des conseils pratiques et des réflexions sur les dernières tendances du développement web. Que vous soyez débutant ou expérimenté, découvrez des ressources enrichissantes pour améliorer vos compétences et rester à jour dans l'écosystème web. Bienvenue dans mon espace dédié à l'innovation, à l'apprentissage continu et à la création de solutions numériques exceptionnelles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <link rel="icon" href="/bc.webp" sizes="any" />
      <Header />
      {children}
      <Footer />
    </section>
  );
}
