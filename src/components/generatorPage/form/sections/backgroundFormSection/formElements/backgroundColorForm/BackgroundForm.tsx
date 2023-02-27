import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { InputColorSection } from "ui/form/inputColorSection/InputColorSection";

export function BackgroundForm() {
    const { changeValue, background } = useBackgroundStore();

    return (
        <>
            <h3> Kolor tła </h3>

            <InputColorSection
                callback={changeValue}
                nameSection={"background"}
                thisColor={background.color}
            />
        </>
    );
}
