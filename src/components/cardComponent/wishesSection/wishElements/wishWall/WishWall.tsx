import { WallWishType } from "types/stores/WishesSectionStore";
import { SingleWish } from "./singleWish/SingleWish";
import styles from "./wishWall.module.scss";

export function WishWall({ texts: wishes, color, font }: WallWishType) {
    return (
        <div className={styles.allWish}>
            {wishes.map((wish, index) => (
                <SingleWish
                    key={wish.id}
                    text={wish.content}
                    side={index % 2 === 0 ? "left" : "right"}
                    color={color}
                    font={font}
                />
            ))}
        </div>
    );
}
