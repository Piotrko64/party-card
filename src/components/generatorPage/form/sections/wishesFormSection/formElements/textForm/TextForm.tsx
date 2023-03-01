import { TextType } from "types/stores/WishesSectionStore";
import { InputRange } from "ui/form/inputRange/InputRange";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { ChangeEvent } from "react";
import { FontChoosingPanel } from "ui/form/fontChoosingPanel/FontChoosingPanel";
import { NamesFont } from "types/typesForStyles/NamesFont";
import { fontsToChoice } from "data/fonts/fontsToChoice";
import cx from "classnames";
import classes from "./textForm.module.scss";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { OrdinaryColors } from "ui/form/inputColorSection/ordinaryColors/OrdinaryColors";
import { GradientColors } from "ui/form/inputColorSection/gradientColors/GradientsColors";
import { SizePanel } from "./sizePanel/SizePanel";

export function TextForm({
    marginTop,
    marginBottom,
    id,
    font,
    text,
    isFullWidth,
    color,
    backgroundColor,
    isGradient,
}: TextType) {
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

    return (
        <>
            <h3> Własny tekst </h3>

            <div className={classes.textAreaContainer}>
                <textarea
                    className={classes.textArea}
                    placeholder="Podaj adres ULR zdjęcia do kartki"
                    onChange={changeValueTextArea}
                    value={text}
                ></textarea>
            </div>

            <div className={classes.fonts}>
                {fontsToChoice.map(({ fullName, name }) => (
                    <div
                        className={cx(classes.font, font === name && classes.thisFont)}
                        style={{ fontFamily: fullName }}
                        onClick={() => changeFont(name)}
                    >
                        {name}
                    </div>
                ))}
            </div>
            <h4> Odstęp górny </h4>
            <InputRange intensity={marginTop} callback={changeMarginTop} max="250" />

            <h4> Odstęp dolny </h4>
            <InputRange intensity={marginBottom} callback={changeMarginBottom} max="250" />
            <TextWithToggleButton
                text="Zastosować na całą szerokość? (brak zaokrągleń)"
                isChecked={isFullWidth}
                callback={toggleFullWidth}
            />
            <OrdinaryColors changeColor={changeColorFont} selectedColor={color} />
            <GradientColors changeColor={changeColorFontGradient} selectedColor={color} />

            <h4> Kolor tła</h4>
            <OrdinaryColors changeColor={changeColorBackground} selectedColor={backgroundColor} />

            <SizePanel idElement={id} />
        </>
    );
}
