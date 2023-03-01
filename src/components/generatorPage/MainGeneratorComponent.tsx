import { ScrollRestoration } from "react-router-dom";
import { PreviewButton } from "ui/form/inputText/buttons/previewButton/PreviewButton";
import { MainForm } from "./form/MainForm";
import classes from "./mainGeneratorComponent.module.scss";

export function MainGeneratorComponent() {
    return (
        <div className={classes.container}>
            <div className={classes.generator}>
                <h1> Stwórzmy ładną kartkę! 🥳</h1>
                <MainForm />
            </div>

            <PreviewButton />
            <ScrollRestoration
                getKey={(location, matches) => {
                    return location.pathname;
                }}
            />
        </div>
    );
}
