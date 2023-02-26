import EmojiPicker, { Theme, EmojiStyle } from "emoji-picker-react";
import { ChangeEvent, FocusEvent, MouseEvent, useId, useRef, useState } from "react";
import { PossiblePropertySectionToChange } from "types/stores/HeaderSection";
import classes from "./inputText.module.scss";

type Props = {
    labelText: string;
    callback: (
        inputNameProperty: PossiblePropertySectionToChange,
        newValue: string,
        lastProperty: "text"
    ) => void;
    namePropertyToChange: PossiblePropertySectionToChange;
    valueInput: string;
    maxLength: number;
};

export function InputText({ labelText, callback, namePropertyToChange, valueInput, maxLength }: Props) {
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
        if (valueInput.length + 1 < maxLength) {
            input.current!.value = input.current!.value + " " + emoji;
            callback(namePropertyToChange, valueInput + " " + emoji, "text");
        }
    }

    function changeValueByCallback(event: ChangeEvent) {
        callback(namePropertyToChange, (event.target as HTMLInputElement).value, "text");
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
                    onChange={changeValueByCallback}
                    onFocus={() => setActiveEmojiPicker(false)}
                    maxLength={maxLength}
                />
                <img
                    src="/icons/happyIcon.png"
                    alt="emoji"
                    onMouseDown={togglePicker}
                    className={classes.img}
                />
            </div>
            <div className={classes.counter}>
                {valueInput.length}/{maxLength.toString()}
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
