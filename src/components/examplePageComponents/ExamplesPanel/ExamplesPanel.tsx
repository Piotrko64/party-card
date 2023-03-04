import { listExamplesCard } from "data/examplesCard/listExamplesCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import classes from "./examplesPanel.module.scss";
import cx from "classnames";
import { useEffect } from "react";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";

import { HeaderSection } from "types/stores/HeaderSection";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { BackgroundStoreWithoutFunctions } from "types/stores/BackgroundStore";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { UnionWishElements } from "types/stores/WishesSectionStore";

export function ExamplesPanel() {
    const { id } = useParams();
    const { setEntireHeaderStore } = useHeaderSectionStore();
    const { setEntireBackgroundStore } = useBackgroundStore();
    const { setWishesElements } = useWishesSectionStore();
    const navigate = useNavigate();

    useEffect(() => {
        const index = +id! - 1;
        if (!listExamplesCard[index]) {
            navigate("/404");
            return;
        }

        const card = listExamplesCard[index];
        setEntireHeaderStore(card.headerSection as HeaderSection);
        setEntireBackgroundStore(card.backgroundSection as BackgroundStoreWithoutFunctions);
        setWishesElements(card.wishesSection as Array<UnionWishElements>);

        window.scrollTo(0, 0);
    }, [id]);

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
                <div className={classes.title}> Przykłady </div>
            </div>
            <Link to="/">
                <img src="/icons/leftArrow.png" className={classes.img} />
            </Link>
        </>
    );
}
