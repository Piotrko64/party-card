import { onValue, ref } from "firebase/database";
import { db } from "firebase/initialFirebase";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { useHeaderSectionStore } from "./../stores/HeaderSectionStore/HeaderSectionStore";
import { useWishesSectionStore } from "./../stores/WishesSectionStore/WishesSectionStore";

export function useChangesContentStoresByDatabaseInfo(id: string) {
    const { setEntireHeaderStore } = useHeaderSectionStore();
    const { setWishesElements } = useWishesSectionStore();
    const { setEntireBackgroundStore } = useBackgroundStore();

    function changeStores() {
        const reference = ref(db, "cards/" + id);
        onValue(reference, (snapshot) => {
            const data = snapshot.val();
            setEntireBackgroundStore(data.backgroundSection);
            setWishesElements(data.wishesSection);
            setEntireHeaderStore(data.headerSection);
        });
    }

    return changeStores;
}
