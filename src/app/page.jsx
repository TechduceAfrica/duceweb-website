import CtaSection from "./components/ctaSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`${styles.main} no__pe`}>
      <CtaSection/>
    </main>
  );
}
