import { getWishComponent } from "helpers/wishesSection/getWishComponent";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";

export function WishesSection() {
    const wishElements = useWishesSectionStore((store) => store.elements);

    return (
        <main>
            {wishElements &&
                wishElements.map((element) => (
                    <div key={element.id}>{getWishComponent(element.name, { ...element })} </div>
                ))}
        </main>
    );
}
