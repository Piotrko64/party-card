import classes from "./ordinaryColors.module.scss";
import cx from "classnames";
import { isNotGradientAndNotColorInArray } from "utils/isGradient";
import { ordinaryColors } from "../../../../data/colors/colors";
import { useTranslation } from "react-i18next";

type Props = {
    changeColor: (color: string) => void;
    withoutLabel?: true;
    selectedColor: string;
};

export function OrdinaryColors({ changeColor, withoutLabel, selectedColor }: Props) {
    const { t } = useTranslation("ui");

    return (
        <>
            {!withoutLabel && <h5> {t("colors")} </h5>}
            <div className={classes.colors}>
                {ordinaryColors.map((color) => (
                    <div
                        key={color}
                        className={cx(classes.singleColor, selectedColor === color && classes.selectedColor)}
                        style={{ backgroundColor: color }}
                        onClick={() => changeColor(color)}
                    ></div>
                ))}

                {isNotGradientAndNotColorInArray(selectedColor, ordinaryColors) && (
                    <div
                        className={cx(classes.singleColor, classes.selectedColor)}
                        style={{ backgroundColor: selectedColor }}
                    ></div>
                )}
            </div>
            <div>
                <label className={classes.label}>
                    <input
                        type="color"
                        className={classes.input}
                        onChange={(e) => changeColor(e.target.value)}
                        value={selectedColor}
                    />
                    {t("selectColor")}
                </label>
            </div>
        </>
    );
}
