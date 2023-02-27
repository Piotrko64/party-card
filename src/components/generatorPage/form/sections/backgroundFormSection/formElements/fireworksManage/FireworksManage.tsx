import { ChangeEvent } from "react";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import classes from "./fireworksManage.module.scss";

const MAX_INTENSITY = "30";

export function FireworksManage() {
    const { fireworks, changeValue } = useBackgroundStore();

    function toggleFireworks() {
        changeValue("fireworks", !fireworks.isFireworks, "isFireworks");
    }

    function handleChangeIntensity(event: ChangeEvent) {
        changeValue("fireworks", (event.target as HTMLInputElement).value, "intensity");
    }

    return (
        <>
            <h3>Fajerwerki</h3>
            <TextWithToggleButton
                text="Chcesz fajerwerki na stronie?"
                callback={toggleFireworks}
                isChecked={fireworks.isFireworks}
            />
            {fireworks.isFireworks && (
                <div>
                    <h4> Dobierz intensywność fajerwerek </h4>
                    <div className={classes.inputRange}>
                        {" "}
                        <input
                            type="range"
                            step="0.1"
                            min="0"
                            max={MAX_INTENSITY}
                            onChange={handleChangeIntensity}
                            value={fireworks.intensity}
                            className={classes.input}
                        />{" "}
                        {((fireworks.intensity / +MAX_INTENSITY) * 100).toFixed(0) + "/100"}
                    </div>
                </div>
            )}
        </>
    );
}
