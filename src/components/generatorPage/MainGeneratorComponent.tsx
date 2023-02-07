import { MainForm } from "./form/MainForm";
import classes from "./mainGeneratorComponent.module.scss";

export function MainGeneratorComponent() {
    return (
        <div className={classes.container}>
            <div className={classes.generator}>
                <h1> Stwórzmy ładną kartkę! 🥳</h1>
                <MainForm />
            </div>
        </div>
    );
}
