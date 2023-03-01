import { ImageForm } from "components/generatorPage/form/sections/wishesFormSection/formElements/ImageForm/ImageForm";
import { TagCloudForm } from "components/generatorPage/form/sections/wishesFormSection/formElements/tagCloudForm/TagCloudForm";
import { TextForm } from "components/generatorPage/form/sections/wishesFormSection/formElements/textForm/TextForm";
import { WishWallForm } from "components/generatorPage/form/sections/wishesFormSection/formElements/wishWall/WishWallForm";
import { GifSectionType } from "types/stores/WishesSectionStore";
import { GifSection } from "./../../ui/form/gifSection/GifSection";

import {
    ImageURLType,
    TagCloudType,
    TextType,
    UnionWishElements,
    WallWishType,
} from "types/stores/WishesSectionStore";
import { GifSectionFormWishes } from "ui/form/gifSectionFormWishes/GifSectionFormWishes";

export function wishFormsData(props: UnionWishElements) {
    return [
        { name: "tagCloud", component: <TagCloudForm {...(props as TagCloudType)} /> },
        { name: "wishWall", component: <WishWallForm {...(props as WallWishType)} /> },
        { name: "imageURL", component: <ImageForm {...(props as ImageURLType)} /> },
        { name: "text", component: <TextForm {...(props as TextType)} /> },
        { name: "gif", component: <GifSectionFormWishes {...(props as GifSectionType)} /> },
    ];
}
