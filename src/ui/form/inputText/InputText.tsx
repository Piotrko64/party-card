import EmojiPicker, { Theme, EmojiStyle } from "emoji-picker-react";
import { FocusEvent, MouseEvent, useId, useRef, useState } from "react";
import classes from "./inputText.module.scss";

type Props = {
    labelText: string;
    callback: () => void;
};

export function InputText({ labelText, callback }: Props) {
    const idInput = useId();
    const [isActiveEmojiPicker, setActiveEmojiPicker] = useState(false);
    const input = useRef<HTMLInputElement>(null);

    function togglePicker(e: MouseEvent) {
        e.preventDefault();

        setActiveEmojiPicker((prevState) => !prevState);
    }

    function onBlurPicker(event: FocusEvent<HTMLInputElement>) {
        if (event.relatedTarget || !isActiveEmojiPicker) return;

        setActiveEmojiPicker(false);
    }

    function clickEmoji({ emoji }: { emoji: string }) {
        input.current!.value = input.current!.value + emoji;
    }

    return (
        <div className={classes.inputContainer}>
            <label htmlFor={idInput} className={classes.label}>
                {labelText}
            </label>
            <div className="flexCenter">
                <input
                    id={idInput}
                    className={classes.input}
                    placeholder="text"
                    ref={input}
                    onInput={callback}
                    onFocus={() => setActiveEmojiPicker(false)}
                />
                <img
                    src="/icons/happyIcon.png"
                    alt="emoji"
                    onMouseDown={togglePicker}
                    className={classes.img}
                />
            </div>
            {/* <EmojiProposal /> */}
            {isActiveEmojiPicker && (
                <div onBlur={onBlurPicker} className={classes.picker} tabIndex={0}>
                    <EmojiPicker
                        theme={Theme.DARK}
                        emojiStyle={EmojiStyle.FACEBOOK}
                        onEmojiClick={clickEmoji}
                        autoFocusSearch
                    />
                </div>
            )}
        </div>
    );
}
