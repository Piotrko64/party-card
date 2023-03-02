import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { DataToWrite } from "types/firebase/DataToWrite";
import { getCardById, writeNewData } from "./../../../../../firebase/initialFirebase";

export function useGenerateCard() {
    const header = useHeaderSectionStore();
    const wishes = useWishesSectionStore((state) => state.elements);
    const background = useBackgroundStore();

    const objCardForDatabase: DataToWrite = {
        nameAuthor: "",
        idAuthor: "",
        headerSection: JSON.parse(JSON.stringify(header)),
        wishesSection: wishes,
        backgroundSection: JSON.parse(JSON.stringify(background)),
    };

    return () => {
        const a = writeNewData(objCardForDatabase);
        getCardById("8e74cc2c-c008-4269-8716-ce408f1c7291");
        console.log(a);
        console.log(objCardForDatabase);
    };
}
