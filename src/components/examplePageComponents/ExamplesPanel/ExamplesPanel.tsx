import { listExamplesCard } from "data/examplesCard/listExamplesCard";
import { Link, useParams } from "react-router-dom";
import classes from "./examplesPanel.module.scss";
import cx from "classnames";

export function ExamplesPanel() {
    const { id } = useParams();

    return (
        <div className={classes.panel}>
            <div className={classes.flexColumn}>
                {listExamplesCard.map((_example, index) => {
                    const numberOfExample = index + 1;

                    return (
                        <Link
                            to={"/examples/" + numberOfExample}
                            className={cx(
                                classes.exampleButton,
                                +id! === numberOfExample && classes.selected
                            )}
                        >
                            {numberOfExample}
                        </Link>
                    );
                })}
            </div>
            <div className={classes.title}> Przykłady </div>
        </div>
    );
}
