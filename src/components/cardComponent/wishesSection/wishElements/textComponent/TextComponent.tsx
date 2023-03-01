import { TextType } from "types/stores/WishesSectionStore";

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
    return <div>{text}</div>;
}
