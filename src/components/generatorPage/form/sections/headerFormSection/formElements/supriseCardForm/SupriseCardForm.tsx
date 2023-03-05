import { FontChoosingPanel } from "ui/form/fontChoosingPanel/FontChoosingPanel";
import { InputColorSection } from "ui/form/inputColorSection/InputColorSection";
import { InputText } from "ui/form/inputText/InputText";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import { ToggleActiveSection } from "../../toggleActiveSection/ToggleActiveSection";

export function SupriseCardForm() {
    const { isActive, color, backgroundColor, font, text } = useHeaderSectionStore(
        (state) => state.supriseCard
    );

    const { changeValueInput } = useHeaderSectionStore();

    return (
        <>
            <h3> Kartka niespodzianka </h3>
            <ToggleActiveSection nameSection="supriseCard" isActive={isActive}>
                <>
                    <InputText
                        labelText="Dodaj tekst do kartki niespodzianki"
                        callback={changeValueInput}
                        valueInput={text}
                        namePropertyToChange="supriseCard"
                        maxLength={300}
                        placeholder="Napisz coś co zaskoczy 😏!"
                    />
                    <FontChoosingPanel callback={changeValueInput} font={font} nameSection="supriseCard" />

                    <h4> Ustaw kolor dla napisów </h4>

                    <InputColorSection
                        withoutGradient
                        thisColor={color}
                        nameSection="supriseCard"
                        callback={changeValueInput}
                    />

                    <h4> Ustaw kolor dla tła </h4>

                    <InputColorSection
                        withoutGradient
                        thisColor={backgroundColor}
                        nameSection="supriseCard"
                        callback={changeValueInput}
                        backgroundColorCase
                    />
                </>
            </ToggleActiveSection>
        </>
    );
}
