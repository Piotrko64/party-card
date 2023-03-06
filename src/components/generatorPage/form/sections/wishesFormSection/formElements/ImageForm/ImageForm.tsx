import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { OrdinaryColors } from "ui/form/inputColorSection/ordinaryColors/OrdinaryColors";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";
import classes from "./imageForm.module.scss";

type Props = { isBorder: boolean; backgroundColor: string; url: string; id: string };

const MAX_LENGTH_URL = "2048";

export function ImageForm({ isBorder, backgroundColor, url, id }: Props) {
    const { changePropertyValue } = useWishesSectionStore();
    const { t } = useTranslation("generate");

    function changeURL(newValue: ChangeEvent) {
        changePropertyValue((newValue.target as HTMLInputElement).value, id, "url");
    }

    function toggleBorder() {
        changePropertyValue(!isBorder, id, "isBorder");
    }

    function changeBorderColor(newValue: string) {
        changePropertyValue(newValue, id, "backgroundColor");
    }

    return (
        <>
            <h3>{t("imgUrl")}</h3>

            <div className={classes.inputContainer}>
                <div className="flexCenter">
                    <input
                        className={classes.input}
                        placeholder={t("writeUrl")!}
                        onChange={changeURL}
                        maxLength={+MAX_LENGTH_URL}
                        value={url}
                    />
                    <div className={classes.counter}>{url.length + "/" + MAX_LENGTH_URL}</div>
                </div>
            </div>
            <TextWithToggleButton text={t("isStroke")} callback={toggleBorder} isChecked={isBorder} />
            {isBorder && (
                <>
                    <h5> {t("colorStroke")} </h5>
                    <OrdinaryColors changeColor={changeBorderColor} selectedColor={backgroundColor} />
                </>
            )}
        </>
    );
}
