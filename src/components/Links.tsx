// import { NavLink } from "react-router-dom";

import Link from "next/link";

type linkProps = {
  to: string;
  className?: string;
  content?: string;
};
export default function Links({ to, className, content }: linkProps) {
  return (
    <Link href={to} className={className}>
      {content}
    </Link>
  );
}
