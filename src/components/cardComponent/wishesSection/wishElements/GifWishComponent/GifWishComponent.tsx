import classes from "./gifWishComponent.module.scss";

type Props = { url: string };

export function GifWishComponent({ url }: Props) {
    return (
        <>
            <img src={url} alt="gif" className={classes.gif} />
        </>
    );
}
