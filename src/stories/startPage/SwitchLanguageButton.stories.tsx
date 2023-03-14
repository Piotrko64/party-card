import { expect } from "@storybook/jest";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { useTranslation } from "react-i18next";
import "../../App.scss";
import { LanguageToggleButton } from "../../ui/languageToggleButton/LanguageToggleButton";
import { useEffect } from "react";

export default {
    title: "startPage/SwitchLanguageButton",
    component: LanguageToggleButton,
} as ComponentMeta<typeof LanguageToggleButton>;

const Template: ComponentStory<typeof LanguageToggleButton> = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage("en-us");
    }, []);

    return (
        <>
            <LanguageToggleButton />
            ActualLanguage: <p>{i18n.language === "pl" ? "Polski/Polish" : "English/Angielski"}</p>
        </>
    );
};

export const Primary = Template.bind({});
export const CheckLanguage = Template.bind({});
CheckLanguage.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const buttonPL = canvas.getByText("PL", {
        selector: "button",
    });

    userEvent.click(buttonPL);

    await waitFor(() => {
        expect(
            canvas.getByText("Polski/Polish", {
                selector: "p",
            })
        ).toBeInTheDocument();
    });
};
