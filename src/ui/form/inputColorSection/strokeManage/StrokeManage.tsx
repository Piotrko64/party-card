import { OrdinaryColors } from "../ordinaryColors/OrdinaryColors";
import { ToggleButton } from "./../../toggleButton/ToggleButton";

export function StrokeManage() {
    return (
        <div>
            <h4> Obrys </h4>
            <div>
                {" "}
                <ToggleButton />
                <h5> Wybierz kolor dla obrysu</h5>
                <OrdinaryColors withoutLabel />
            </div>
        </div>
    );
}
