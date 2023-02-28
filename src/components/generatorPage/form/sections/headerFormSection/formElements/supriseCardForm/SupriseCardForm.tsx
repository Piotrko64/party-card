import { FontChoosingPanel } from "ui/form/fontChoosingPanel/FontChoosingPanel";
import { InputColorSection } from "ui/form/inputColorSection/InputColorSection";
import { InputText } from "ui/form/inputText/InputText";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { useHeaderSectionStore } from "./../../../../../../../stores/HeaderSectionStore/HeaderSectionStore";

export function SupriseCardForm() {
    const { isActive, color, backgroundColor, font, text } = useHeaderSectionStore(
        (state) => state.supriseCard
    );
    console.log({ isActive, color, backgroundColor, font, text });
    const { changeValueInput, changeBackgroundSupriseCard } = useHeaderSectionStore();

    function toggleSupriseCard() {
        changeValueInput("supriseCard", !isActive, "isActive");
    }

    return (
        <>
            <h3> Kartka niespodzianka </h3>
            <TextWithToggleButton
                text="Czy kartka niespodzianka ma być dostępna?"
                callback={toggleSupriseCard}
                isChecked={isActive}
            />
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
    );
}
