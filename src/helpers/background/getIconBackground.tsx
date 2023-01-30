import { dataTypeIcon } from "data/background/dataTypeIcon";
import { NamesIconBackground } from "types/background/NamesIconBackground";
import { PropsIcon } from "types/svg/PropsIcon";
import { Heart } from "ui/svg/Heart";

export function getIconBackground(name: NamesIconBackground, props: PropsIcon) {
    return dataTypeIcon(props).find((icon) => icon.name === name)?.component || <Heart {...props} />;
}
