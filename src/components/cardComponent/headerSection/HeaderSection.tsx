import { TopTexts } from "./topTexts/TopTexts";
import { DownText } from "./downText/DownText";

export function HeaderSection() {
    return (
        <div className="flexColumn">
            <TopTexts />
            <DownText />
        </div>
    );
}
