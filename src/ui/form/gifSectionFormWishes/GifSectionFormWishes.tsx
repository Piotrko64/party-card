import { GifSection } from "ui/form/gifSection/GifSection";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { GifSectionType } from "types/stores/WishesSectionStore";
import { objectGif } from "components/generatorPage/form/sections/headerFormSection/formElements/gifSection/GifSection";

export function GifSectionFormWishes({ id, url }: GifSectionType) {
    const { changePropertyValue } = useWishesSectionStore();

    function changeGif({ preview }: objectGif) {
        changePropertyValue(preview.url, id, "url");
    }

    return <GifSection url={url} changeGif={changeGif} />;
}
