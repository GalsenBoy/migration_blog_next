/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import "./about.scss";
import { aboutData } from "./aboutData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bilaly Cissokho - à-propros",
  description:
    "J'appelle Bilaly Cissokho, jeune développeur web passionné partageant son parcours et ses découvertes dans le monde de la programmation. Explorez avec moi les nuances de React, Nest.js et Next.js à travers des tutoriels, des astuces et des retours d'expérience. Découvrez les dernières tendances, les bonnes pratiques et les défis rencontrés dans le développement web moderne. Rejoignez la conversation et enrichissez votre compréhension du développement avec un passionné de technologies web émergentes.",
};

export default function About() {
  return (
    <section>
      <div id="about">
        <div id="about-content">
          <Image width={350} height={75} src="/moi.webp" alt="bilaly" />
          <div id="text">
            <p className="inline">Salut ! Je m'appelle </p>
            <h1>
              <strong>Bilaly Cissokho</strong>
            </h1>
            {aboutData.map((about, index) => (
              <p key={index} className={about.class}>
                {about.paragraph}
              </p>
            ))}
          </div>
        </div>
        <div id="about-thanks">
          <p>
            Rejoignez-moi dans cette aventure d'apprentissage et d'innovation,
            où nous explorerons ensemble les multiples facettes de React, NestJS
            et TypeScript. N'hésitez pas à laisser vos commentaires, suggestions
            et questions - la communauté que nous créons ici est le moteur qui
            alimente ma passion pour le développement web.
          </p>
        </div>
      </div>
    </section>
  );
}
