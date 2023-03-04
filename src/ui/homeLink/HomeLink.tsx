import { Link } from "react-router-dom";
import classes from "./homeLink.module.scss";

export function HomeLink() {
    return (
        <div className={classes.backToHome}>
            <Link to="/">
                <img src="/icons/leftArrow.png" /> Wróć do strony głównej{" "}
            </Link>
        </div>
    );
}
