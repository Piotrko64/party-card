import { componentsToAdd } from "data/form/wishesSection/componentsToAdd";
import { useAddWishForm } from "hooks/form/wishes/useAddWishForm";
import { useTranslation } from "react-i18next";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { ComponentNames } from "types/stores/WishesSectionStore";
import classes from "./listAvailableWish.module.scss";

export function ListAvailableWish({ afterDrop }: { afterDrop: () => void }) {
    const addComponentToStore = useAddWishForm();
    const wishElements = useWishesSectionStore((state) => state.elements);
    const { t, i18n } = useTranslation("generate");

    function addNewElement(title: ComponentNames) {
        afterDrop();
        addComponentToStore(title);
    }

    return (
        <div className={classes.listComponents}>
            {wishElements.length >= 20 ? (
                <h3> {t("maxLength")} </h3>
            ) : (
                componentsToAdd.map(({ title, plName, enName }) => (
                    <button key={title} onClick={() => addNewElement(title as ComponentNames)}>
                        {i18n.language.includes("pl") ? plName : enName} +
                    </button>
                ))
            )}
            {wishElements.length === 0 && <h3>{t("noSelect")}</h3>}
        </div>
    );
}
