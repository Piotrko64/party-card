import { onValue, ref } from "firebase/database";
import { db } from "firebase/initialFirebase";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { useHeaderSectionStore } from "./../stores/HeaderSectionStore/HeaderSectionStore";
import { useWishesSectionStore } from "./../stores/WishesSectionStore/WishesSectionStore";

export function useChangesContentStoresByDatabaseInfo() {
    const { setEntireHeaderStore } = useHeaderSectionStore();
    const { setWishesElements } = useWishesSectionStore();
    const { setEntireBackgroundStore } = useBackgroundStore();

    function changeStores(id: string) {
        const reference = ref(db, "cards/" + id);
        try {
            onValue(reference, (snapshot) => {
                const data = snapshot.val();
                setEntireBackgroundStore(data.backgroundSection);
                setWishesElements(data.wishesSection);
                setEntireHeaderStore(data.headerSection);
            });
        } catch (err) {
            throw err;
        }
    }

    return changeStores;
}
