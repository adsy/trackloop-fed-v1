import styles from "./page.module.css";
import { ConnectedLandingPage } from "@/modules/landingPage/connectedComponents";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ConnectedLandingPage />
      </main>
    </div>
  );
}
