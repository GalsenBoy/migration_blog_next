import { Metadata } from "next";
import "./contact.scss";
export const metadata: Metadata = {
  title: "Bilaly Cissokho - Contact",
  description:
    "Contactez-moi pour discuter de projets passionnants, poser des questions techniques ou simplement échanger des idées sur React, Nest.js et Next.js. En tant que développeur web junior, je suis ouvert à la collaboration, aux opportunités professionnelles et aux discussions stimulantes. Utilisez le formulaire de contact pour entrer en contact. Ensemble, explorons les possibilités et façonnons l'avenir du développement web.",
};
export default function Contact() {
  return (
    <section className="contact-us" id="contact-section">
      <form id="contact" action="" method="post">
        <div className="section-heading">
          <h1>CONTACTEZ-MOI </h1>
        </div>

        <div className="inputField">
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Votre nom complet"
            autoComplete="on"
            required
          />
          <span className="valid_info_name"></span>
        </div>

        <div className="inputField">
          <input
            type="Email"
            name="email"
            id="email"
            placeholder="Votre adresse email"
          />
          <span className="valid_info_email"></span>
        </div>

        <div className="inputField">
          <textarea
            name="message"
            id="message"
            placeholder="Votre message"
          ></textarea>
          <span className="valid_info_message"></span>
        </div>

        <div className="inputField btn">
          <button type="submit" id="form-submit">
            ENVOYER LE MESSAGE
          </button>
        </div>
      </form>
    </section>
  );
}
