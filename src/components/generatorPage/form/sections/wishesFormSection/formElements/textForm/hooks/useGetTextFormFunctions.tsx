import { ChangeEvent } from "react";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { NamesFont } from "types/typesForStyles/NamesFont";

type Props = { id: string; isFullWidth: boolean };

export function useGetTextFormFunctions({ id, isFullWidth }: Props) {
    const { changePropertyValue } = useWishesSectionStore();

    function changeMarginTop(event: ChangeEvent) {
        changePropertyValue((event.target as HTMLInputElement).value, id, "marginTop");
    }
    function changeMarginBottom(event: ChangeEvent) {
        changePropertyValue((event.target as HTMLInputElement).value, id, "marginBottom");
    }

    function changeFont(newValue: NamesFont) {
        changePropertyValue(newValue, id, "font");
    }

    function changeValueTextArea(event: ChangeEvent) {
        changePropertyValue((event.target as HTMLInputElement).value, id, "text");
    }

    function toggleFullWidth() {
        changePropertyValue(!isFullWidth, id, "isFullWidth");
    }

    function changeColorFont(color: string) {
        changePropertyValue(color, id, "color");
        changePropertyValue(false, id, "isGradient");
    }

    function changeColorFontGradient(color: string) {
        changeColorFont(color);
        changePropertyValue(true, id, "isGradient");
    }

    function changeColorBackground(color: string) {
        changePropertyValue(color, id, "backgroundColor");
    }

    return {
        changeColorBackground,
        changeColorFont,
        changeColorFontGradient,
        changeFont,
        changeMarginBottom,
        changeMarginTop,
        toggleFullWidth,
        changeValueTextArea,
    };
}
