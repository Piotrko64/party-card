import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { DataToWriteToDataBaseType } from "types/firebase/DataToWrite";
import { writeNewData } from "./../../../../../firebase/initialFirebase";

export function useGenerateCard() {
    const header = useHeaderSectionStore();
    const wishes = useWishesSectionStore((state) => state.elements);
    const background = useBackgroundStore();

    const objCardForDatabase: DataToWriteToDataBaseType = {
        date: new Date().toISOString(),
        nameAuthor: "",
        idAuthor: "",
        headerSection: JSON.parse(JSON.stringify(header)),
        wishesSection: wishes,
        backgroundSection: JSON.parse(JSON.stringify(background)),
    };

    return async (id: string) => {
        await writeNewData(objCardForDatabase, id);
    };
}
