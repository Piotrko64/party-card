import { useProposalsToInputs } from "stores/ProposalsToInputsStore/ProposalsToInputsStore";
import classes from "./ordinaryColors.module.scss";

type Props = {
    changeColor: (color: string) => void;
};

export function OrdinaryColors({ changeColor }: Props) {
    const { colors } = useProposalsToInputs();

    return (
        <>
            <h4> Zwykłe kolory </h4>
            <div className={classes.colors}>
                {colors.map((color) => (
                    <div
                        className={classes.singleColor}
                        style={{ backgroundColor: color }}
                        onClick={() => changeColor(color)}
                    ></div>
                ))}
            </div>
            <label className={classes.label}>
                <input type="color" className={classes.input} onChange={(e) => changeColor(e.target.value)} />
                Wybierz własny kolor
            </label>
        </>
    );
}
