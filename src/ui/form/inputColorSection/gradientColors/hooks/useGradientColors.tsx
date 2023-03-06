import { useState } from "react";
import { useTranslation } from "react-i18next";

type Props = (color: string, isGradient: true) => void;

export function useGradientColors(changeColor: Props) {
    const [isActivePicker, setActivePicker] = useState(false);

    const { t } = useTranslation("ui");

    function toggleActive() {
        setActivePicker((prevState) => !prevState);
    }

    function handleChange(color: string) {
        changeColor(color, true);
    }

    return {
        t,
        handleChange,
        toggleActive,
        isActivePicker,
    };
}
