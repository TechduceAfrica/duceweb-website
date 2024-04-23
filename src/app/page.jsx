import CtaSection from "./components/ctaSection";
import Testimonial from "./components/testimonial";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`${styles.main} no__pe`}>
      <Testimonial/>
      <CtaSection/>
    </main>
  );
}
