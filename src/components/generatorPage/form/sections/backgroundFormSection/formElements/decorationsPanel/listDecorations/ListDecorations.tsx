import { dataTypeIcon } from "data/background/dataTypeIcon";
import classes from "./listDecorations.module.scss";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import cx from "classnames";
import { useTranslation } from "react-i18next";

export function ListDecorations() {
    const { backgroundDecorations: decorations, changeValue, background } = useBackgroundStore();
    const { t } = useTranslation("generate");

    const iconProps = {
        left: "0",
        right: "0",
        color: decorations.color,
    };

    function changeDecorations(icon: string) {
        changeValue("backgroundDecorations", icon, "kindDecorations");
    }

    return (
        <>
            <h4>{t("selectIcon")}</h4>
            <div className={classes.container}>
                {dataTypeIcon(iconProps).map((icon) => (
                    <div
                        onClick={() => {
                            changeDecorations(icon.name);
                        }}
                        className={cx(
                            classes.relative,
                            icon.name === decorations.kindDecorations && classes.selected
                        )}
                        style={{
                            background:
                                icon.name === decorations.kindDecorations ? background.color : "var(--gray)",
                        }}
                    >
                        {icon.component}
                    </div>
                ))}
            </div>
        </>
    );
}
