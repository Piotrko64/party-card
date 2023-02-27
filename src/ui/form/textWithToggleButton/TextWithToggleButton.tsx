import { ToggleButton } from "../toggleButton/ToggleButton";
import classes from "./textWithToggleButton.module.scss";

type Props = {
    callback: (arg: any) => void;
    isChecked: boolean;
    text: string;
};

export function TextWithToggleButton({ callback, text, isChecked }: Props) {
    return (
        <>
            <div className={classes.row}>
                {text}
                <ToggleButton onChecked={callback} isChecked={isChecked} />
            </div>
        </>
    );
}
