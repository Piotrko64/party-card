import { componentsToAdd } from "data/form/wishesSection/componentsToAdd";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { ComponentNames, UnionWishElements } from "types/stores/WishesSectionStore";
import { v4 } from "uuid";

export function useAddWishForm() {
    const { addElementWish, elements } = useWishesSectionStore();

    function addWishToForm(nameWish: ComponentNames) {
        const findComponentObject = componentsToAdd.find(
            (component) => component.title === nameWish
        )?.componentObject;

        const newId = v4();

        addElementWish({ ...findComponentObject, id: newId } as UnionWishElements);
    }

    return addWishToForm;
}
