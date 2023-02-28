import { wishFormsData } from "data/wishesSection/wishFormsData";
import { ComponentNames, UnionWishElements } from "types/stores/WishesSectionStore";

export function getWishForm(nameComponent: ComponentNames, props: UnionWishElements) {
    return wishFormsData(props).find((wish) => wish.name === nameComponent)?.component;
}
