import QRCode from "react-qr-code";
import { Link, useParams } from "react-router-dom";
import { copyToClipboard } from "./../../utils/copyToClipboard";
import { saveAs } from "file-saver";
import domtoimage from "dom-to-image";
import { useRef } from "react";
import classes from "./qrPageMainComponent.module.scss";
import { useChangesContentStoresByDatabaseInfo } from "./../../hooks/useChangesContentStoresByDatabaseInfo";
import { useQuery } from "react-query";
import { LoadingScreen } from "components/LoadingScreen/LoadingScreen";
import { ErrorScreen } from "components/ErrorScreen/ErrorScreen";
import { useTranslation } from "react-i18next";

export function QRPageMainComponent() {
    let { id } = useParams();
    const changeStores = useChangesContentStoresByDatabaseInfo();
    const { isError, isLoading } = useQuery("qr" + id, () => changeStores(id!));

    const { t } = useTranslation("qrPage");

    const link = window.location.origin + "/card/" + id;
    const qrCard = useRef<HTMLDivElement>(null);

    function copyLink() {
        copyToClipboard(link);
    }

    function createImage() {
        domtoimage.toBlob(qrCard.current!).then(function (blob) {
            saveAs(blob, "QR_CODE.png");
        });
    }

    return (
        <>
            {isLoading ? (
                <LoadingScreen />
            ) : isError ? (
                <ErrorScreen />
            ) : (
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
            )}
        </>
    );
}
