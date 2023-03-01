import { TagCloudComponent } from "components/cardComponent/wishesSection/wishElements/tagCloudComponent/TagCloudComponent";
import { WishWall } from "components/cardComponent/wishesSection/wishElements/wishWall/WishWall";
import { ImageURLType, TagCloudType, UnionWishElements, WallWishType } from "types/stores/WishesSectionStore";
import { ImageURL } from "./../../components/cardComponent/wishesSection/wishElements/imageURL/ImageURL";

export function wishElementsData(props: UnionWishElements) {
    return [
        { name: "tagCloud", component: <TagCloudComponent {...(props as TagCloudType)} /> },
        { name: "wishWall", component: <WishWall {...(props as WallWishType)} /> },
        { name: "imageURL", component: <ImageURL {...(props as ImageURLType)} /> },
    ];
}
