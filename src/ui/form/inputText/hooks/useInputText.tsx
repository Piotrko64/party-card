import { ChangeEvent, FocusEvent, MouseEvent, RefObject, useId, useRef, useState } from "react";

type Props = {
    valueInput: string;
    callbackToChangeValueText: (inputNameProperty: string, newValue: string, lastProperty: "text") => void;
    namePropertyToChange: string;
    maxLength: number;
    input: RefObject<HTMLInputElement>;
};

export function useInputText({
    callbackToChangeValueText,
    namePropertyToChange,
    valueInput,
    maxLength,
    input,
}: Props) {
    const idInput = useId();
    const [isActiveEmojiPicker, setActiveEmojiPicker] = useState(false);

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
            callbackToChangeValueText(namePropertyToChange, valueInput + " " + emoji, "text");
        }
    }

    function changeValueByCallback(event: ChangeEvent) {
        callbackToChangeValueText(namePropertyToChange, (event.target as HTMLInputElement).value, "text");
    }
    return {
        changeValueByCallback,
        clickEmoji,
        onBlurPicker,
        togglePicker,
        idInput,
        setActiveEmojiPicker,
        isActiveEmojiPicker,
    };
}
