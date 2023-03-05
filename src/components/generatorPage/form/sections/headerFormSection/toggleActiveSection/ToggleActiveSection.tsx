import { PropsWithChildren, useEffect, useRef } from "react";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { useHeaderSectionStore } from "./../../../../../../stores/HeaderSectionStore/HeaderSectionStore";
import { useTranslation } from "react-i18next";

import autoAnimate from "@formkit/auto-animate";

type Props = { nameSection: string; isActive: boolean };

export function ToggleActiveSection({ children, nameSection, isActive }: PropsWithChildren<Props>) {
    const { toggleActiveSection } = useHeaderSectionStore();
    const { t } = useTranslation("ui");
    const parent = useRef(null);

    useEffect(() => {
        parent.current && autoAnimate(parent.current);
    }, [parent]);

    function toggleActive() {
        toggleActiveSection(nameSection);
    }

    return (
        <div ref={parent}>
            <TextWithToggleButton callback={toggleActive} text={t("activateSection")} isChecked={isActive} />
            {isActive && children}
        </div>
    );
}
