import { Trans, useTranslation } from "react-i18next";
import classes from "./describePart.module.scss";

export function DescribePart() {
    const { t } = useTranslation("startPage");

    return (
        <p className={classes.describe}>
            <Trans i18nKey="description" t={t}>
                Bądź oryginalny w kwestii życzeń.
                <br />
                Stwórz internetową kartkę okolicznościową dla swoich najbliższych <br /> - z okazji urodzin
                lub innych okazji!
            </Trans>
        </p>
    );
}
