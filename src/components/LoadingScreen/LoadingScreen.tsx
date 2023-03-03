import classes from "./loadingScreen.module.scss";

export function LoadingScreen() {
    return (
        <>
            <div className={classes.screen}>
                <h1>Ładowanie...</h1>
            </div>
        </>
    );
}
