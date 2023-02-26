import { useProposalsToInputs } from "stores/ProposalsToInputsStore/ProposalsToInputsStore";
import classes from "./ordinaryColors.module.scss";
import cx from "classnames";
import { isNotGradientAndNotColorInArray } from "utils/isGradient";

type Props = {
    changeColor: (color: string) => void;
    withoutLabel?: true;
    selectedColor: string;
};

export function OrdinaryColors({ changeColor, withoutLabel, selectedColor }: Props) {
    const { colors } = useProposalsToInputs();

    return (
        <>
            {!withoutLabel && <h5> Zwykłe kolory </h5>}
            <div className={classes.colors}>
                {colors.map((color) => (
                    <div
                        className={cx(classes.singleColor, selectedColor === color && classes.selectedColor)}
                        style={{ backgroundColor: color }}
                        onClick={() => changeColor(color)}
                    ></div>
                ))}

                {isNotGradientAndNotColorInArray(selectedColor, colors) && (
                    <div
                        className={cx(classes.singleColor, classes.selectedColor)}
                        style={{ backgroundColor: selectedColor }}
                    ></div>
                )}
            </div>
            <label className={classes.label}>
                <input type="color" className={classes.input} onChange={(e) => changeColor(e.target.value)} />
                Wybierz własny kolor
            </label>
        </>
    );
}
