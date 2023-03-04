import { ChangeEvent } from "react";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { InputRange } from "ui/form/inputRange/InputRange";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";

const MAX_INTENSITY = "20";

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
                    <InputRange
                        max={MAX_INTENSITY}
                        callback={handleChangeIntensity}
                        intensity={fireworks.intensity}
                    />
                </div>
            )}
        </>
    );
}
