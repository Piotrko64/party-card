import { getWishComponent } from "helpers/wishesSection/getWishComponent";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { TagCloudComponent } from "./wishElements/tagCloudComponent/TagCloudComponent";

export function WishesSection() {
    const wishElements = useWishesSectionStore((store) => store.elements);

    return (
        <main>
            {wishElements.map((element) => (
                <div key={element.name}>{getWishComponent("tagCloud")} </div>
            ))}
            {/* <TagCloudComponent /> */}
        </main>
    );
}
