import { ToggleButton } from "../toggleButton/ToggleButton";
import classes from "./textWithToggleButton.module.scss";

type Props = {
    callbackToToggle: () => void;
    isChecked: boolean;
    text: string;
};

export function TextWithToggleButton({ callbackToToggle, text, isChecked }: Props) {
    return (
        <>
            <div className={classes.row}>
                {text}
                <ToggleButton onChecked={callbackToToggle} isChecked={isChecked} />
            </div>
        </>
    );
}
