import { TagCloudComponent } from "components/cardComponent/wishesSection/wishElements/tagCloudComponent/TagCloudComponent";
import { ComponentNames, UnionWishElements } from "types/stores/WishesSectionStore";

export function wishElementsData(props: UnionWishElements) {
    return [{ name: "tagCloud", component: <TagCloudComponent {...props} /> }];
}
