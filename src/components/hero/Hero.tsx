import Image from "next/image";
import "./hero.scss";
export default function Hero() {
  return (
    <section>
      <div id="hero-container">
        <div id="hero-image">
          <Image src="/reactnest.webp" width={1168} height={500}  alt="react" />
        </div>
      </div>
    </section>
  );
}
