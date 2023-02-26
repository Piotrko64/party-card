import { NameFormSection } from "./formElements/nameFormSection/NameFormSection";
import { TextAboveName } from "./formElements/textAboveName/TextaboveName";
import { TextUnderName } from "./formElements/textUnderName/TextUnderName";

export function HeaderFormSection() {
    return (
        <>
            <h2>Sekcja Główna</h2>
            <p>
                Jest to część kartki którą jubilat zobaczy jako pierwszą. Pamiętaj że wygląd kartki możesz
                obserwować na bieżącą wraz z uzupełnianiem formularza. Tą sekcję jak i sekcję z życzeniami
                możesz wyłączyć, więc jeśli uważasz że ta sekcja jest zbędna to możesz ją wyłączyć
                przełącznikiem u góry
            </p>
            <div className="grayBlock">
                <NameFormSection />
            </div>
            <div className="grayBlock">
                <TextAboveName />
            </div>
            <div className="grayBlock">
                <TextUnderName />
            </div>
        </>
    );
}
