import { onValue, ref, get, child } from "firebase/database";
import { db } from "firebase/initialFirebase";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { useHeaderSectionStore } from "./../stores/HeaderSectionStore/HeaderSectionStore";
import { useWishesSectionStore } from "./../stores/WishesSectionStore/WishesSectionStore";

export function useChangesContentStoresByDatabaseInfo() {
    const { setEntireHeaderStore } = useHeaderSectionStore();
    const { setWishesElements } = useWishesSectionStore();
    const { setEntireBackgroundStore } = useBackgroundStore();

    async function changeStores(id: string) {
        const dbRef = ref(db);

        await get(child(dbRef, `/cards/${id}`))
            .then((snapshot) => {
                const data = snapshot.val();

                if (!snapshot.exists() || !data) {
                    throw "Not exist!";
                }

                setEntireBackgroundStore(data.backgroundSection);
                setWishesElements(data.wishesSection);
                setEntireHeaderStore(data.headerSection);
            })
            .catch((err) => {
                throw new Error("ERROR:", err);
            });
    }

    return changeStores;
}
