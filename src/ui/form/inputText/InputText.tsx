import EmojiPicker, { Theme, EmojiStyle } from "emoji-picker-react";
import { useRef } from "react";
import { useInputText } from "./hooks/useInputText";
import classes from "./inputText.module.scss";
type Props = {
    labelText?: string;
    callbackToChangeValueText: (inputNameProperty: string, newValue: string, lastProperty: "text") => void;
    namePropertyToChange: string;
    valueInput: string;
    maxLength: number;
    placeholder?: string;
};
export function InputText({
    labelText = "",
    callbackToChangeValueText,
    namePropertyToChange,
    valueInput,
    maxLength,
    placeholder = "",
}: Props) {
    const input = useRef<HTMLInputElement>(null);

    const {
        changeValueByCallback,
        clickEmoji,
        onBlurPicker,
        togglePicker,
        idInput,
        setActiveEmojiPicker,
        isActiveEmojiPicker,
    } = useInputText({ callbackToChangeValueText, namePropertyToChange, valueInput, maxLength, input });

    return (
        <div className={classes.inputContainer}>
            <label htmlFor={idInput} className={classes.label}>
                {labelText}
            </label>
            <div className="flexCenter">
                <input
                    id={idInput}
                    className={classes.input}
                    placeholder={placeholder}
                    ref={input}
                    onChange={changeValueByCallback}
                    onFocus={() => setActiveEmojiPicker(false)}
                    maxLength={maxLength}
                    value={valueInput}
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
