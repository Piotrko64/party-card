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
import { useGetTextFormFunctions } from "./hooks/useGetTextFormFunctions";

export function TextForm({
    marginTop,
    marginBottom,
    id,
    font,
    text,
    isFullWidth,
    color,
    backgroundColor,
    size,
}: TextType) {
    const {
        changeColorBackground,
        changeColorFont,
        changeColorFontGradient,
        changeFont,
        changeMarginBottom,
        changeMarginTop,
        toggleFullWidth,
        changeValueTextArea,
    } = useGetTextFormFunctions({ id, isFullWidth });

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
            <h4> Kolor tekstu </h4>
            <OrdinaryColors changeColor={changeColorFont} selectedColor={color} />
            <GradientColors changeColor={changeColorFontGradient} selectedColor={color} />

            <h4> Kolor tła</h4>
            <OrdinaryColors changeColor={changeColorBackground} selectedColor={backgroundColor} />

            <h4> Dobierz rozmiar</h4>
            <SizePanel idElement={id} sizeTitle={size} />
        </>
    );
}
