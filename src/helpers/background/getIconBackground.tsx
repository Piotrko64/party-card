import { dataTypeIcon } from "data/background/dataTypeIcon";
import { PropsIcon } from "types/svg/PropsIcon";
import { Heart } from "ui/svg/Heart";

export function getIconBackground(name: string, props: PropsIcon) {
    return dataTypeIcon(props).find((icon) => icon.name === name)?.component || <Heart {...props} />;
}
