import classes from "./previewButton.module.scss";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

export function PreviewButton() {
    return createPortal(
        <Link to="/previewCard" className={classes.preview} preventScrollReset={true}>
            Zobacz podgląd
        </Link>,
        document.body
    );
}
