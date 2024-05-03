import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header>
      <nav className={styles.nav}>
        <p>next.js</p>

        <ul className={styles.links}>
          <Link href={"/"}>
            <li>home🏡</li>
          </Link>
          <Link href={"/products"}>
            <li>products🦆</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
