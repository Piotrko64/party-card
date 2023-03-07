import { listExamplesCard } from "data/examplesCard/listExamplesCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import classes from "./examplesPanel.module.scss";
import cx from "classnames";
import { useExamplesPanel } from "./hooks/useExamplesPanel";

export function ExamplesPanel() {
    const { id, t } = useExamplesPanel();

    return (
        <>
            <div className={classes.panel}>
                <div className={classes.flexColumn}>
                    {listExamplesCard.map((example, index) => {
                        const numberOfExample = index + 1;

                        return (
                            <Link
                                key={example.id}
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
                <div className={classes.title}> {t("examples")} </div>
            </div>
            <Link to="/">
                <img src="/icons/leftArrow.png" className={classes.img} />
            </Link>
        </>
    );
}
