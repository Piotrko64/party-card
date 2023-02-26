import { useProposalsToInputs } from "stores/ProposalsToInputsStore/ProposalsToInputsStore";
import classes from "./gradientColors.module.scss";
import ColorPicker from "react-best-gradient-color-picker";
import { useState } from "react";

type Props = {
    changeColor: (color: string, isGradient: true) => void;
};

export function GradientColors({ changeColor }: Props) {
    const { gradientColors } = useProposalsToInputs();
    const [color, setColor] = useState(
        "linear-gradient(90deg, rgba(96,93,93,1) 0%, rgba(255,255,255,1) 100%)"
    );

    return (
        <>
            <h4> Kolory GRadientowe </h4>
            <div className={classes.colors}>
                {gradientColors.map((color) => (
                    <div
                        className={classes.singleColor}
                        style={{ background: color }}
                        onClick={() => changeColor(color, true)}
                    ></div>
                ))}
            </div>
            <label className={classes.label}>
                <ColorPicker value={color} onChange={setColor} />
                Stwórz własny gradient
            </label>
        </>
    );
}
