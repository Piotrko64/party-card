import { Link } from "react-router-dom";
import classes from "./error404Screen.module.scss";
import { useError404Screen } from "./hooks/useError404Screen";

export function Error404Screen() {
    const { t } = useError404Screen();

    return (
        <div className={classes.screen}>
            <h1>404</h1>
            <h2> {t("notFound")} </h2>
            <p>
                {" "}
                <Link to="/"> {t("click")}</Link> {t("wait")}
            </p>
        </div>
    );
}
