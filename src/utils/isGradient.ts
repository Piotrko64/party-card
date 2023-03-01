import { isColorInArray } from "./isColorInArray";

export function isGradient(color: string) {
    return /linear-gradient/g.test(color);
}

export function isNotGradientAndNotColorInArray(color: string, colors: Array<string>) {
    return !isGradient(color) && !isColorInArray(color, colors);
}

export function isGradientAndNotColorInArray(color: string, colors: Array<string>) {
    return isGradient(color) && !isColorInArray(color, colors);
}
