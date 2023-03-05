import { componentsToAdd } from "data/form/wishesSection/componentsToAdd";
import { useAddWishForm } from "hooks/form/wishes/useAddWishForm";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { ComponentNames } from "types/stores/WishesSectionStore";
import classes from "./listAvailableWish.module.scss";

export function ListAvailableWish({ afterDrop }: { afterDrop: () => void }) {
    const addComponentToStore = useAddWishForm();
    const wishElements = useWishesSectionStore((state) => state.elements);

    function addNewElement(title: ComponentNames) {
        afterDrop();
        addComponentToStore(title);
    }

    return (
        <div className={classes.listComponents}>
            {wishElements.length >= 20 ? (
                <h3> Przekroczono maksymalną ilość elementów </h3>
            ) : (
                componentsToAdd.map((component) => (
                    <button
                        key={component.title}
                        onClick={() => addNewElement(component.title as ComponentNames)}
                    >
                        {component.plName} +
                    </button>
                ))
            )}
            {wishElements.length === 0 && <h3> Nie wybrano żadnych elementów </h3>}
        </div>
    );
}
