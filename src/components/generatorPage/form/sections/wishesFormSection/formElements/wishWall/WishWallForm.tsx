import { fontsToChoice } from "data/fonts/fontsToChoice";
import { WallWishType } from "types/stores/WishesSectionStore";
import cx from "classnames";
import { OrdinaryColors } from "ui/form/inputColorSection/ordinaryColors/OrdinaryColors";
import { ListInputElement } from "ui/form/listInputElements/ListInputElements";
import classes from "./wishWall.module.scss";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { NamesFont } from "types/typesForStyles/NamesFont";

export function WishWallForm({ id: idElement, font, color, texts }: WallWishType) {
    const { changeWishValue } = useWishesSectionStore();

    function changeColorText(color: string) {
        changeWishValue("color", color, idElement);
    }

    function changeFont(newFont: NamesFont) {
        changeWishValue("font", newFont, idElement);
    }

    return (
        <>
            {" "}
            <h3> Ściana życzeń</h3>
            <div className={classes.fonts}>
                {fontsToChoice.map(({ fullName, name }) => (
                    <div
                        className={cx(classes.font, font === name && classes.thisFont)}
                        style={{ fontFamily: fullName }}
                        onClick={() => changeFont(name)}
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
