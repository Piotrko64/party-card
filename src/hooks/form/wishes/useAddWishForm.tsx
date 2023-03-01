import { componentsToAdd } from "data/form/wishesSection/componentsToAdd";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { ComponentNames, UnionWishElements } from "types/stores/WishesSectionStore";
import { v4 } from "uuid";

export function useAddWishForm() {
    const { addElementWish } = useWishesSectionStore();

    function addWishToForm(nameWish: ComponentNames) {
        const findComponentObject = componentsToAdd.find(
            (component) => component.title === nameWish
        )?.componentObject;
        addElementWish({ ...findComponentObject, id: v4() } as UnionWishElements);
    }

    return addWishToForm;
}
