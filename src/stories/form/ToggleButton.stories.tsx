import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../App.scss";
import { useEffect, useState } from "react";
import { userEvent, within } from "@storybook/testing-library";
import { ToggleButton } from "ui/form/toggleButton/ToggleButton";
import { expect } from "@storybook/jest";

export default {
    title: "form/toggle/ToggleButton",
    component: ToggleButton,
    argTypes: {
        isChecked: { control: "boolean" },
    },
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = ({ isChecked }) => {
    const [active, setActive] = useState<boolean>(isChecked);

    function toggleButton() {
        setActive((prev) => !prev);
    }

    useEffect(() => {
        setActive(isChecked);
    }, [isChecked]);

    return <ToggleButton isChecked={active} onChecked={toggleButton} />;
};

export const Primary = Template.bind({});
Primary.args = { isChecked: false };
Primary.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const toggleElement = canvas.getByText("", { selector: "input" }) as HTMLInputElement;

    await userEvent.click(toggleElement);

    expect(toggleElement.checked).toBe(true);
};
