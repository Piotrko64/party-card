import { NameFormSection } from "./formElements/nameFormSection/NameFormSection";
import { TextAboveName } from "./formElements/textAboveName/TextaboveName";
import { TextOnEnd } from "./formElements/textOnEnd/TextOnEnd";
import { TextUnderName } from "./formElements/textUnderName/TextUnderName";
import { SupriseCardForm } from "./formElements/supriseCardForm/SupriseCardForm";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import classes from "./headerFormSection.module.scss";

export function HeaderFormSection() {
    const { toggleActiveHeader, isActive } = useHeaderSectionStore();

    return (
        <>
            <h2>Sekcja Główna</h2>

            <p>
                Jest to część kartki którą jubilat zobaczy jako pierwszą. Pamiętaj że wygląd kartki możesz
                obserwować na bieżącą wraz z uzupełnianiem formularza. Tą sekcję jak i sekcję z życzeniami
                możesz wyłączyć, więc jeśli uważasz że ta sekcja jest zbędna to możesz ją wyłączyć
                przełącznikiem u góry
            </p>
            <TextWithToggleButton
                isChecked={isActive}
                callback={toggleActiveHeader}
                text="Czy ta sekcja ma być wyświetlana?"
            />
            {isActive ? (
                <>
                    <div className="grayBlock">
                        <NameFormSection />
                    </div>
                    <div className="grayBlock">
                        <TextAboveName />
                    </div>
                    <div className="grayBlock">
                        <TextUnderName />
                    </div>
                    <div className="grayBlock">
                        <TextOnEnd />
                    </div>
                    <div className="grayBlock">
                        <SupriseCardForm />
                    </div>
                </>
            ) : (
                <h3 className={classes.alert}> Sekcja została wyłączona </h3>
            )}
        </>
    );
}
