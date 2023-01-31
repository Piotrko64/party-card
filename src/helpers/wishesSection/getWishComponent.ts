import { wishElementsData } from "data/wishesSection/wishElementsData";
import { ComponentNames, UnionWishElements } from "types/stores/WishesSectionStore";

export function getWishComponent(nameComponent: ComponentNames, props: UnionWishElements) {
    return wishElementsData(props).find((wish) => wish.name === nameComponent)?.component;
}
