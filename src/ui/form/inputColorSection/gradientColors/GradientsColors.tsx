import { useProposalsToInputs } from "stores/ProposalsToInputsStore/ProposalsToInputsStore";
import classes from "./gradientColors.module.scss";
import ColorPicker from "react-best-gradient-color-picker";
import { useState } from "react";

type Props = {
    changeColor: (color: string, isGradient: true) => void;
};

export function GradientColors({ changeColor }: Props) {
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
            <h4> Kolory Gradientowe </h4>
            <div className={classes.colors}>
                {gradientColors.map((color) => (
                    <div
                        className={classes.singleColor}
                        style={{ background: color }}
                        onClick={() => {
                            changeColor(color, true);
                        }}
                    ></div>
                ))}
            </div>
            <button className={classes.label} onClick={toggleActive}>
                {isActivePicker ? "Schowaj picker" : "Stwórz własny gradient"}
            </button>
            {isActivePicker && <ColorPicker value={color} hideControls onChange={handleChange} />}
        </>
    );
}
