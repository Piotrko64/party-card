import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import classes from "./backToGenerator.module.scss";

export function BackToGenerator() {
    return createPortal(
        <Link to="/GenerateCard" className={classes.back} preventScrollReset={true}>
            Wróć do generatora
        </Link>,
        document.body
    );
}
