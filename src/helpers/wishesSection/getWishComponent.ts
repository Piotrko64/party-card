import { wishElementsData } from "data/wishesSection/wishElementsData";
import { ComponentNames } from "types/stores/WishesSectionStore";

export function getWishComponent(nameComponent: ComponentNames) {
    return wishElementsData().find((wish) => wish.name === nameComponent)?.component;
}
