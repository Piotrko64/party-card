import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../App.scss";
import { useEffect, useState } from "react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { TextWithToggleButton } from "ui/form/textWithToggleButton/TextWithToggleButton";

export default {
    title: "form/toggle/TextWithToggleButton",
    component: TextWithToggleButton,
    argTypes: {
        isChecked: { control: "boolean" },
    },
} as ComponentMeta<typeof TextWithToggleButton>;

const Template: ComponentStory<typeof TextWithToggleButton> = ({ text, isChecked }) => {
    const [active, setActive] = useState<boolean>(isChecked);

    function toggleButton() {
        setActive((prev) => !prev);
    }

    useEffect(() => {
        setActive(isChecked);
    }, [isChecked]);

    return <TextWithToggleButton isChecked={active} callbackToToggle={toggleButton} text={text} />;
};

export const LongText = Template.bind({});
LongText.args = {
    isChecked: false,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
};
LongText.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const toggleElement = (await canvas.getByText("", { selector: "input" })) as HTMLInputElement;
    await console.log(toggleElement);
    await userEvent.click(toggleElement);

    expect(toggleElement.checked).toBe(true);
};

export const shortText = Template.bind({});
shortText.args = {
    isChecked: true,
    text: "Lorem Ipsum ...",
};
