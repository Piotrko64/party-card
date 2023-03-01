import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { sizes } from "data/fonts/sizes";
import classes from "./sizePanel.module.scss";
import cx from "classnames";

type Props = {
    idElement: string;
    sizeTitle: string;
};

export function SizePanel({ idElement, sizeTitle }: Props) {
    const { changePropertyValue } = useWishesSectionStore();

    function changeSize(size: string) {
        changePropertyValue(size, idElement, "size");
    }

    return (
        <div className={classes.sizes}>
            {sizes.map((size) => (
                <div
                    key={size.originalTitle}
                    onClick={() => changeSize(size.originalTitle)}
                    className={cx(classes.size, size.originalTitle === sizeTitle && classes.select)}
                >
                    {size.plTitle}
                </div>
            ))}
        </div>
    );
}
