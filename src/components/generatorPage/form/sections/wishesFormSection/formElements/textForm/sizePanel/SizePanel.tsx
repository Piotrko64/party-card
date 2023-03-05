import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { sizes } from "data/fonts/sizes";
import classes from "./sizePanel.module.scss";
import cx from "classnames";

import { useTranslation } from "react-i18next";

type Props = {
    idElement: string;
    sizeTitle: string;
};

export function SizePanel({ idElement, sizeTitle }: Props) {
    const { changePropertyValue } = useWishesSectionStore();
    const { i18n } = useTranslation();

    function changeSize(size: string) {
        changePropertyValue(size, idElement, "size");
    }

    return (
        <div className={classes.sizes}>
            {sizes.map(({ originalTitle, plTitle }) => (
                <div
                    key={originalTitle}
                    onClick={() => changeSize(originalTitle)}
                    className={cx(classes.size, originalTitle === sizeTitle && classes.select)}
                >
                    {i18n.language.includes("pl") ? plTitle : originalTitle}
                </div>
            ))}
        </div>
    );
}
