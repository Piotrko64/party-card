import { TextType } from "types/stores/WishesSectionStore";
import classes from "./textComponent.module.scss";
import { useTextComponent } from "./hooks/useTextComponent";

export function TextComponent({
    text,
    marginTop,
    marginBottom,
    isFullWidth,
    isGradient,
    font,
    color,
    backgroundColor,
    size,
}: TextType) {
    const { getContainerStyle, fontStyles } = useTextComponent({
        marginTop,
        marginBottom,
        isFullWidth,
        isGradient,
        font,
        color,
        backgroundColor,
        size,
    });

    return (
        <div style={{ ...getContainerStyle() }} className={classes.container}>
            <div style={{ ...fontStyles }} className={classes.text}>
                {text}
            </div>
        </div>
    );
}
