import { TagCloudComponent } from "components/cardComponent/wishesSection/wishElements/tagCloudComponent/TagCloudComponent";
import { ComponentNames } from "types/stores/WishesSectionStore";

export function wishElementsData(props?: any) {
    return [{ name: "tagCloud", component: <TagCloudComponent /> }];
}
