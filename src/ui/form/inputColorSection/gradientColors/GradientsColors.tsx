import { useProposalsToInputs } from "stores/ProposalsToInputsStore/ProposalsToInputsStore";
import classes from "./gradientColors.module.scss";
import ColorPicker from "react-best-gradient-color-picker";
import { useState } from "react";
import cx from "classnames";
import { isGradientAndNotColorInArray } from "utils/isGradient";

type Props = {
    changeColor: (color: string, isGradient: true) => void;
    selectedColor: string;
};

export function GradientColors({ changeColor, selectedColor }: Props) {
    const { gradientColors } = useProposalsToInputs();
    const [isActivePicker, setActivePicker] = useState(false);
    const [color, setColor] = useState(
        "linear-gradient(90deg, rgba(96,93,93,1) 0%, rgba(255,255,255,1) 100%)"
    );

    function toggleActive() {
        setActivePicker((prevState) => !prevState);
    }

    function handleChange(color: string) {
        changeColor(color, true);
        setColor(color);
    }

    return (
        <>
            <h5> Kolory Gradientowe </h5>
            <div className={classes.colors}>
                {gradientColors.map((color) => (
                    <div
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
                {isActivePicker ? "Schowaj picker" : "Stwórz własny gradient"}
            </button>
            {isActivePicker && <ColorPicker value={color} onChange={handleChange} />}
        </>
    );
}
