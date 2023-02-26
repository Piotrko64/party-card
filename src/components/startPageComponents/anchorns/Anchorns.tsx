import { anchornsStartPage } from "data/startPage/anchornsStartPage";
import { SingleAnchor } from "./SingleAnchor/SingleAnchor";
import cx from "classnames";
import classes from "./anchornsPart.module.scss";

export function AnchornsPart() {
    return (
        <div className={cx("flexCenter", classes.anchorns)}>
            {anchornsStartPage.map((anchor) => (
                <SingleAnchor {...anchor} />
            ))}
        </div>
    );
}
