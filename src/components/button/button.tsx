import styles from "./button.module.css";

export type ButtonProps = {
  text: string;
  type: "primary" | "secondary";
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ type, text, onClick }) => {
  return (
    <button
      aria-label={`button ${text}`}
      onClick={(e) => onClick()}
      className={`${styles.button} ${styles[type]}`}
    >
      {text}
    </button>
  );
};
