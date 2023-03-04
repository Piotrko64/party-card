import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { TagCloudType } from "types/stores/WishesSectionStore";
import { OrdinaryColors } from "ui/form/inputColorSection/ordinaryColors/OrdinaryColors";
import classes from "./tagCloudForm.module.scss";
import { ListInputElement } from "ui/form/listInputElements/ListInputElements";
import { NamesFont } from "types/typesForStyles/NamesFont";
import { fontsToChoice } from "data/fonts/fontsToChoice";
import cx from "classnames";

export function TagCloudForm({ color, id: idElement, texts, font }: TagCloudType) {
    const { changeWishValue } = useWishesSectionStore();

    function changeColorText(color: string) {
        changeWishValue("color", color, idElement);
    }

    function changeFont(newFont: NamesFont) {
        changeWishValue("font", newFont, idElement);
    }

    return (
        <>
            <h3> Chmura życzeń </h3>
            <div className={classes.fonts}>
                {fontsToChoice.map(({ fullName, name }) => (
                    <div
                        className={cx(classes.font, font === name && classes.thisFont)}
                        style={{ fontFamily: fullName }}
                        onClick={() => changeFont(name)}
                        key={fullName}
                    >
                        {name}
                    </div>
                ))}
            </div>
            <OrdinaryColors changeColor={changeColorText} selectedColor={color} />
            <ListInputElement idElement={idElement} texts={texts} />
        </>
    );
}
