import classes from "./gifWishComponent.module.scss";

type Props = { url: string };

export function GifWishComponent({ url }: Props) {
    return (
        <div className="flexCenter">
            <img src={url} alt="gif" className={classes.gif} />
        </div>
    );
}
