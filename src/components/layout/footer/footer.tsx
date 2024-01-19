import "./footer.scss";
import { socialsMedia } from "./socialMedia";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <footer>
      <div id="footer-container">
        <h3>Suivez-moi sur :</h3>
        <div>
          {socialsMedia.map((social, key) => (
            <Link key={key} href={social.to}>
              <Image
                width={50}
                height={50}
                src={social.imageSrc}
                alt={social.altText}
              />
            </Link>
          ))}
        </div>
      </div>
      <div id="copyright">
        <h4>{year} © BILALY CISSOKHO | Développeur web passionné</h4>
      </div>
    </footer>
  );
}
