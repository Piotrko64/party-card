import { useTranslation } from "react-i18next";
import classes from "./describePart.module.scss";

export function DescribePart() {
    const { t } = useTranslation("home");
    console.log(t("description"));
    return (
        <p className={classes.describe}>
            Bądź oryginalny w kwestii życzeń.
            <br />
            Stwórz internetową kartkę okolicznościową dla swoich najbliższych <br /> - z okazji urodzin lub
            innych okazji!
        </p>
    );
}
