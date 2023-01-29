export function isColor(color: string) {
    const optionStyle = new Option().style;
    optionStyle.color = color;
    return optionStyle.color !== "";
}
