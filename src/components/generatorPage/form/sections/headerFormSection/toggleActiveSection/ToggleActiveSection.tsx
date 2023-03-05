import { PropsWithChildren } from "react";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { useHeaderSectionStore } from "./../../../../../../stores/HeaderSectionStore/HeaderSectionStore";
import { useTranslation } from "react-i18next";

type Props = { nameSection: string; isActive: boolean };

export function ToggleActiveSection({ children, nameSection, isActive }: PropsWithChildren<Props>) {
    const { toggleActiveSection } = useHeaderSectionStore();
    const { t } = useTranslation("ui");

    function toggleActive() {
        toggleActiveSection(nameSection);
    }

    return (
        <>
            <TextWithToggleButton callback={toggleActive} text={t("activateSection")} isChecked={isActive} />
            {isActive && children}
        </>
    );
}
