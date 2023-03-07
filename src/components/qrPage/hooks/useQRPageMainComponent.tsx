import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { copyToClipboard } from "utils/copyToClipboard";

export function useQRPageMainComponent() {
    const { id } = useParams();
    const { t } = useTranslation("qrPage");
    const link = window.location.origin + "/card/" + id;
    const qrCard = useRef<HTMLDivElement>(null);

    function copyLink() {
        copyToClipboard(link);
    }

    function createImage() {
        html2canvas(qrCard.current!).then((canvas) => {
            saveAs(canvas.toDataURL(), "QR_CODE.png");
        });
    }

    return {
        createImage,
        copyLink,
        t,
        link,
        qrCard,
    };
}
