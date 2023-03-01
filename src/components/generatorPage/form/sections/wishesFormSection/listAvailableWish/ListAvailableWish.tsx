import { componentsToAdd } from "data/form/wishesSection/componentsToAdd";
import { useAddWishForm } from "hooks/form/wishes/useAddWishForm";
import { ComponentNames } from "types/stores/WishesSectionStore";
import classes from "./listAvailableWish.module.scss";

export function ListAvailableWish() {
    const addComponentToStore = useAddWishForm();

    return (
        <div className={classes.listComponents}>
            {componentsToAdd.map((component) => (
                <button onClick={() => addComponentToStore(component.title as ComponentNames)}>
                    {component.plName} +
                </button>
            ))}
        </div>
    );
}
