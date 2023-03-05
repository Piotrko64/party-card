import classes from "./gradientColors.module.scss";
import ColorPicker from "react-best-gradient-color-picker";
import { useState } from "react";
import cx from "classnames";
import { isGradientAndNotColorInArray } from "utils/isGradient";
import { gradientColors } from "data/colors/colors";
import { useTranslation } from "react-i18next";

type Props = {
    changeColor: (color: string, isGradient: true) => void;
    selectedColor: string;
};

export function GradientColors({ changeColor, selectedColor }: Props) {
    const [isActivePicker, setActivePicker] = useState(false);

    const { t } = useTranslation("ui");

    function toggleActive() {
        setActivePicker((prevState) => !prevState);
    }

    function handleChange(color: string) {
        changeColor(color, true);
    }

    return (
        <>
            <h5> {t("gradients")} </h5>
            <div className={classes.colors}>
                {gradientColors.map((color) => (
                    <div
                        key={color}
                        className={cx(classes.singleColor, selectedColor === color && classes.selectedColor)}
                        style={{ background: color }}
                        onClick={() => {
                            changeColor(color, true);
                        }}
                    ></div>
                ))}
                {isGradientAndNotColorInArray(selectedColor, gradientColors) && (
                    <div
                        className={cx(classes.singleColor, classes.selectedColor)}
                        style={{ background: selectedColor }}
                    ></div>
                )}
            </div>
            <button className={classes.label} onClick={toggleActive}>
                {isActivePicker ? t("hidePicker") : t("selectGradients")}
            </button>
            {isActivePicker && <ColorPicker value={selectedColor} onChange={handleChange} />}
        </>
    );
}
