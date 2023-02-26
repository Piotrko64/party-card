import { useProposalsToInputs } from "stores/ProposalsToInputsStore/ProposalsToInputsStore";
import classes from "./gradientColors.module.scss";

type Props = {
    changeColor: (color: string, isGradient: true) => void;
};

export function GradientColors({ changeColor }: Props) {
    const { gradientColors } = useProposalsToInputs();

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
                <input
                    type="color"
                    className={classes.input}
                    onChange={(e) => changeColor(e.target.value, true)}
                />
                Stwórz własny gradient
            </label>
        </>
    );
}
