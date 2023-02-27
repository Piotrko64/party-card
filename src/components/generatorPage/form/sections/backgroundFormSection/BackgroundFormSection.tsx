import { BackgroundForm } from "./formElements/backgroundColorForm/BackgroundForm";
import { FireworksManage } from "./formElements/fireworksManage/FireworksManage";
import { ConfettiManage } from "./formElements/confettiManage/ConfettiManage";
import { DecorationPanel } from "./formElements/decorationsPanel/DecorationsPanel";

export function BackgroundFormSection() {
    return (
        <>
            <h2>Tło i poboczne efekty</h2>
            <p>Nadaj koloru oraz wykaż się kreatywnością poprzez nasz panel w którym zadbasz o efekt WoW!</p>
            <div className="grayBlock">
                <BackgroundForm />
            </div>
            <div className="grayBlock">
                <FireworksManage />
            </div>
            <div className="grayBlock">
                <ConfettiManage />
            </div>
            <div className="grayBlock">
                <DecorationPanel />
            </div>
        </>
    );
}
