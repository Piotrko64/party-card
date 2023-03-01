import { TagCloudComponent } from "components/cardComponent/wishesSection/wishElements/tagCloudComponent/TagCloudComponent";
import { TextComponent } from "components/cardComponent/wishesSection/wishElements/textComponent/TextComponent";
import { WishWall } from "components/cardComponent/wishesSection/wishElements/wishWall/WishWall";
import {
    GifSectionType,
    ImageURLType,
    TagCloudType,
    TextType,
    UnionWishElements,
    WallWishType,
} from "types/stores/WishesSectionStore";
import { ImageURL } from "components/cardComponent/wishesSection/wishElements/imageURL/ImageURL";
import { GifWishComponent } from "./../../components/cardComponent/wishesSection/wishElements/GifWishComponent/GifWishComponent";

export function wishElementsData(props: UnionWishElements) {
    return [
        { name: "tagCloud", component: <TagCloudComponent {...(props as TagCloudType)} /> },
        { name: "wishWall", component: <WishWall {...(props as WallWishType)} /> },
        { name: "imageURL", component: <ImageURL {...(props as ImageURLType)} /> },
        { name: "text", component: <TextComponent {...(props as TextType)} /> },
        { name: "gif", component: <GifWishComponent {...(props as GifSectionType)} /> },
    ];
}
