import { listExamplesCard } from "data/examplesCard/listExamplesCard";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { BackgroundStoreWithoutFunctions } from "types/stores/BackgroundStore";
import { HeaderSection } from "types/stores/HeaderSection";
import { UnionWishElements } from "types/stores/WishesSectionStore";

export function useExamplesPanel() {
    const { id } = useParams();
    const { t } = useTranslation("ui");
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

    return { t, id };
}
