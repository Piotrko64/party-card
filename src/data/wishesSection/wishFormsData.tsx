import { TagCloudForm } from "components/generatorPage/form/sections/wishesFormSection/formElements/tagCloudForm/TagCloudForm";
import { WishWallForm } from "components/generatorPage/form/sections/wishesFormSection/formElements/wishWall/WishWallForm";
import { TagCloudType, UnionWishElements, WallWishType } from "types/stores/WishesSectionStore";

export function wishFormsData(props: UnionWishElements) {
    return [
        { name: "tagCloud", component: <TagCloudForm {...(props as TagCloudType)} /> },
        { name: "wishWall", component: <WishWallForm {...(props as WallWishType)} /> },
    ];
}
