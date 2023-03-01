import { ImageForm } from "components/generatorPage/form/sections/wishesFormSection/formElements/ImageForm/ImageForm";
import { TagCloudForm } from "components/generatorPage/form/sections/wishesFormSection/formElements/tagCloudForm/TagCloudForm";
import { TextForm } from "components/generatorPage/form/sections/wishesFormSection/formElements/textForm/TextForm";
import { WishWallForm } from "components/generatorPage/form/sections/wishesFormSection/formElements/wishWall/WishWallForm";
import {
    ImageURLType,
    TagCloudType,
    TextType,
    UnionWishElements,
    WallWishType,
} from "types/stores/WishesSectionStore";

export function wishFormsData(props: UnionWishElements) {
    return [
        { name: "tagCloud", component: <TagCloudForm {...(props as TagCloudType)} /> },
        { name: "wishWall", component: <WishWallForm {...(props as WallWishType)} /> },
        { name: "imageURL", component: <ImageForm {...(props as ImageURLType)} /> },
        { name: "text", component: <TextForm {...(props as TextType)} /> },
    ];
}
