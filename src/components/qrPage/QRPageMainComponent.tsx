import QRCode from "react-qr-code";
import { useLocation, useParams } from "react-router-dom";
import { copyToClipboard } from "./../../utils/copyToClipboard";
import { saveAs } from "file-saver";
import domtoimage from "dom-to-image";
import { useRef } from "react";
import classes from "./qrPageMainComponent.module.scss";

export function QRPageMainComponent() {
    let { id } = useParams();

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
            <div ref={qrCard}>
                <h2> Zeskanuj poniższy kod QR </h2>
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "400px" }}
                    value={link}
                    viewBox={`0 0 256 256`}
                />
                <p> Czeka tam na Ciebie miła niespodzianka</p>
            </div>
            <div>
                <button onClick={createImage}>Pobierz powyższy kod QR jako zdjęcie</button>{" "}
                <button onClick={copyLink}> Skopiuj link do kartki </button>
            </div>
        </div>
    );
}
