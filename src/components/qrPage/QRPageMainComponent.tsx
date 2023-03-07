import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import classes from "./qrPageMainComponent.module.scss";
import { useQRPageMainComponent } from "./hooks/useQRPageMainComponent";

export function QRPageMainComponent() {
    const { createImage, copyLink, t, qrCard, link } = useQRPageMainComponent();

    return (
        <div className={classes.page}>
            <h1> {t("mainTitle")} </h1>

            <div ref={qrCard} className={classes.card}>
                <h2> {t("aboveCode")} </h2>
                <QRCode size={256} value={link} viewBox={`0 0 256 256`} className={classes.qrCode} />
                <p> {t("underCode")}</p>
            </div>
            <div className={classes.buttons}>
                <button onClick={createImage} className={classes.download}>
                    {t("qrImageButton")}
                </button>
                <button onClick={copyLink} className={classes.copy}>
                    {t("linkButton")}
                </button>
                <Link to={link} className={classes.goToCard}>
                    {t("goToCard")}
                </Link>
            </div>
        </div>
    );
}
