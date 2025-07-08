import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./startCardWithMusic.module.scss";

type Props = {
  onStart: () => void;
};

export function StartCardWithMusic({ onStart }: Props) {
  const { t } = useTranslation("generate");
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
    onStart();
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <button className={styles.button} onClick={handleClick}>
          {t("seeCard")}
        </button>
        <p className={styles.note}>{t("soundWarning")}</p>
      </div>
    </div>
  );
}
