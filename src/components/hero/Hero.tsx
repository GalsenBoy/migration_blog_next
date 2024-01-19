import Image from "next/image";
import "./hero.scss";
export default function Hero() {
  return (
    <section>
      <div id="hero-container">
        <div id="hero-image">
          <Image width={1168} height={500} src="/reactnest.webp" alt="react" />
        </div>
      </div>
    </section>
  );
}
