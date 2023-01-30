import { Heart } from "ui/svg/Heart";
import { PropsIcon } from "types/svg/PropsIcon";
import { Martini } from "ui/svg/Martini";
import { Star } from "ui/svg/Star";
import { Gift } from "./../../ui/svg/Gift";

export function dataTypeIcon(props: PropsIcon) {
    return [
        {
            name: "heart",
            component: <Heart {...props} />,
        },
        {
            name: "martini",
            component: <Martini {...props} />,
        },
        {
            name: "star",
            component: <Star {...props} />,
        },
        {
            name: "gift",
            component: <Gift {...props} />,
        },
    ];
}
