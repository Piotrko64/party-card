import { isColorInArray } from "./isColorInArray";

export function isGradient(color: string) {
    return /linear-gradient/g.test(color);
}

export function isNotGradientAndNotColorInArray(color: string, colors: Array<string>) {
    console.log(!isGradient(color), "nie ma gradientu", !isColorInArray(color, colors));
    return !isGradient(color) && !isColorInArray(color, colors);
}

export function isGradientAndNotColorInArray(color: string, colors: Array<string>) {
    return isGradient(color) && !isColorInArray(color, colors);
}
