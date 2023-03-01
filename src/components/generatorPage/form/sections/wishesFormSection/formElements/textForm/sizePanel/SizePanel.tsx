import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { sizes } from "./../../../../../../../../data/fonts/sizes";
import classes from "./sizePanel.module.scss";

type Props = {
    idElement: string;
};

export function SizePanel({ idElement }: Props) {
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
                    className={classes.size}
                >
                    {size.plTitle}
                </div>
            ))}
        </div>
    );
}
