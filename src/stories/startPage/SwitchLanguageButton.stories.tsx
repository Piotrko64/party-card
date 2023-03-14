import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useTranslation } from "react-i18next";
import "../../App.scss";
import { LanguageToggleButton } from "../../ui/languageToggleButton/LanguageToggleButton";

export default {
    title: "startPage/SwitchLanguageButton",
    component: LanguageToggleButton,
} as ComponentMeta<typeof LanguageToggleButton>;

const Template: ComponentStory<typeof LanguageToggleButton> = () => {
    const { i18n } = useTranslation();

    return (
        <>
            <LanguageToggleButton />
            ActualLanguage: {i18n.language === "pl" ? "Polski/Polish" : "English/Angielski"}
        </>
    );
};

export const Primary = Template.bind({});
