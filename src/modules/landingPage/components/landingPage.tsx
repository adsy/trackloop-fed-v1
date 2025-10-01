import Image from "next/image";
import logo from "../../../../public/logo.svg";
import styles from "./landingPage.module.css";
import { FC } from "react";
import { Button } from "@/components";

export type LandingPageProps = {
  signIn: (username: string, password: string) => void;
};

export const LandingPage: FC<LandingPageProps> = ({ signIn }) => {
  return (
    <div id={styles.landingPage}>
      <Image
        className={styles.logo}
        src={logo}
        alt="Next.js logo"
        width={360}
        height={76}
        priority
      />
      <div className={styles.buttonRow}>
        <Button
          text="Sign In"
          type="primary"
          onClick={() => signIn("user", "pass")}
        />
        <Button
          text="Register"
          type="secondary"
          onClick={() => signIn("user", "pass")}
        />
      </div>
    </div>
  );
};
