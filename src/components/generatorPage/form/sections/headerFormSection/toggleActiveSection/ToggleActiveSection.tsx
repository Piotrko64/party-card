import { PropsWithChildren } from "react";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { useHeaderSectionStore } from "./../../../../../../stores/HeaderSectionStore/HeaderSectionStore";

type Props = { nameSection: string; isActive: boolean };

export function ToggleActiveSection({ children, nameSection, isActive }: PropsWithChildren<Props>) {
    const { toggleActiveSection } = useHeaderSectionStore();

    function toggleActive() {
        toggleActiveSection(nameSection);
    }

    return (
        <>
            <TextWithToggleButton callback={toggleActive} text="Aktywować tą sekcje?" isChecked={isActive} />
            {isActive && children}
        </>
    );
}
