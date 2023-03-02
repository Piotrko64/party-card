import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";

export function useGenerateCard() {
    const header = useHeaderSectionStore();

    return () => {
        console.log(JSON.parse(JSON.stringify(header)));
    };
}
