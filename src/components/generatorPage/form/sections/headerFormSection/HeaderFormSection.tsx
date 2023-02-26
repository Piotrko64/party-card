import { NameFormSection } from "./formElements/nameFormSection/NameFormSection";

export function HeaderFormSection() {
    return (
        <>
            <h2>Sekcja Główna</h2>
            <p>
                Jest to część kartki którą jubilat zobaczy jako pierwszą. Pamiętaj że wygląd kartki możesz
                obserwować na bieżącą wraz z uzupełnianiem formularza.
            </p>
            <div className="grayBlock">
                <NameFormSection />
            </div>
        </>
    );
}
