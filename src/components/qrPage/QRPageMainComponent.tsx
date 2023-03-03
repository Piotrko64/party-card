import QRCode from "react-qr-code";
import { Link, useLocation, useParams } from "react-router-dom";
import { copyToClipboard } from "./../../utils/copyToClipboard";
import { saveAs } from "file-saver";
import domtoimage from "dom-to-image";
import { useRef } from "react";
import classes from "./qrPageMainComponent.module.scss";
import { useChangesContentStoresByDatabaseInfo } from "./../../hooks/useChangesContentStoresByDatabaseInfo";
import { useQuery } from "react-query";

export function QRPageMainComponent() {
    let { id } = useParams();
    const changeStores = useChangesContentStoresByDatabaseInfo();
    const { isError, isLoading } = useQuery("qr" + id, () => changeStores(id!));

    const link = window.location.origin + "/" + id;
    const qrCard = useRef<HTMLDivElement>(null);

    function copyLink() {
        copyToClipboard(link);
    }

    function createImage() {
        domtoimage.toBlob(qrCard.current!).then(function (blob) {
            saveAs(blob, "my-node.png");
        });
    }

    return (
        <div className={classes.page}>
            {isError && "err"}
            {isLoading && "asdad"}
            <h1> Kod został wygenerowany! </h1>

            <div ref={qrCard} className={classes.card}>
                <h2> Zeskanuj poniższy kod QR </h2>
                <QRCode size={256} value={link} viewBox={`0 0 256 256`} className={classes.qrCode} />
                <p> Czeka tam na Ciebie miła niespodzianka</p>
            </div>
            <div className={classes.buttons}>
                <button onClick={createImage} className={classes.download}>
                    Pobierz powyższy kod QR jako zdjęcie
                </button>{" "}
                <button onClick={copyLink} className={classes.copy}>
                    {" "}
                    Skopiuj link do kartki{" "}
                </button>
                <Link to={link} className={classes.goToCard}>
                    {" "}
                    Przejdź do kartki{" "}
                </Link>
            </div>
        </div>
    );
}
