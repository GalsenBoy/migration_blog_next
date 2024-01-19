"use client";
import Links from "@/components/Links";
import "./header.scss";
import { navs } from "./navs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div id="header-container">
        <Link href={"/"}>
          {" "}
          <Image
            width={100}
            height={100}
            alt="bilaly cissokho"
            src={"/bc.webp"}
          />
        </Link>
        <div id="nav">
          {navs.map((nav, key) => (
            <Links
              to={nav.to}
              content={nav.content}
              key={key}
              className={pathname.startsWith(nav.to) ? "isActive" : ""}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
