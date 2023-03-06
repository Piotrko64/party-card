import { TextType } from "types/stores/WishesSectionStore";
import { InputRange } from "ui/form/inputRange/InputRange";
import { fontsToChoice } from "data/fonts/fontsToChoice";
import cx from "classnames";
import classes from "./textForm.module.scss";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { OrdinaryColors } from "ui/form/inputColorSection/ordinaryColors/OrdinaryColors";
import { GradientColors } from "ui/form/inputColorSection/gradientColors/GradientsColors";
import { SizePanel } from "./sizePanel/SizePanel";
import { useGetTextFormFunctions } from "./hooks/useGetTextFormFunctions";
import { useTranslation } from "react-i18next";

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

    const { t } = useTranslation("generate");

    return (
        <div className={classes.container}>
            <h3> {t("ownText")} </h3>

            <div className={classes.textAreaContainer}>
                <textarea
                    className={classes.textArea}
                    placeholder=""
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

            <h4> {t("getSize")}</h4>
            <SizePanel idElement={id} sizeTitle={size} />

            <h4> {t("marginTop")}</h4>
            <InputRange intensity={marginTop} callback={changeMarginTop} max="250" />

            <h4> {t("marginBottom")} </h4>
            <InputRange intensity={marginBottom} callback={changeMarginBottom} max="250" />
            <TextWithToggleButton
                text={t("isFullWidth")}
                isChecked={isFullWidth}
                callback={toggleFullWidth}
            />
            <h4> {t("textColor")} </h4>
            <OrdinaryColors changeColor={changeColorFont} selectedColor={color} />
            <GradientColors changeColor={changeColorFontGradient} selectedColor={color} />

            <h4> {t("backColor")}</h4>
            <OrdinaryColors changeColor={changeColorBackground} selectedColor={backgroundColor} />
        </div>
    );
}
