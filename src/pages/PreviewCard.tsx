import { CardPageMainComponent } from "components/cardComponent/CardPageMainComponent";
import { ScrollRestoration } from "react-router-dom";
import { BackToGenerator } from "ui/form/inputText/buttons/backToGenerator/BackToGenerator";

export function PreviewCardPage() {
    return (
        <>
            <CardPageMainComponent />
            <BackToGenerator />
        </>
    );
}
