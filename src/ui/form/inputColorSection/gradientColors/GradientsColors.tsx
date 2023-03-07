import classes from "./gradientColors.module.scss";
import ColorPicker from "react-best-gradient-color-picker";
import cx from "classnames";
import { isGradientAndNotColorInArray } from "utils/isGradient";
import { gradientColors } from "data/colors/colors";
import { useGradientColors } from "./hooks/useGradientColors";

type Props = {
    changeColor: (color: string, isGradient: true) => void;
    selectedColor: string;
};

export function GradientColors({ changeColor, selectedColor }: Props) {
    const { t, handleChange, toggleActive, isActivePicker } = useGradientColors(changeColor);

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
