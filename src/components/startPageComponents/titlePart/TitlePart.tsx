import classes from "./titlePArt.module.scss";

export function TitlePart() {
    return (
        <>
            <h1 className={classes.title}>
                <div className={classes.titleName}>PARTY CARD </div>
                🎉
            </h1>
        </>
    );
}
