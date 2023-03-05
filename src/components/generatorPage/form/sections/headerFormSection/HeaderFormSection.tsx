import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import { useHeaderSectionStore } from "stores/HeaderSectionStore/HeaderSectionStore";
import classes from "./headerFormSection.module.scss";
import { elementListHeaderForm } from "data/form/headerSection/elementListHeaderForm";
import { useTranslation } from "react-i18next";

export function HeaderFormSection() {
    const { toggleActiveHeader, isActive } = useHeaderSectionStore();

    const { t } = useTranslation("generate");

    return (
        <>
            <h2>{t("headerSection")}</h2>

            <p>{t("headerDescription")}</p>
            <TextWithToggleButton isChecked={isActive} callback={toggleActiveHeader} text={t("enable")} />
            {isActive ? (
                <>
                    {elementListHeaderForm.map((element, index) => (
                        <div className="grayBlock" key={index}>
                            {element}
                        </div>
                    ))}
                </>
            ) : (
                <h3 className={classes.alert}> Sekcja została wyłączona </h3>
            )}
        </>
    );
}
