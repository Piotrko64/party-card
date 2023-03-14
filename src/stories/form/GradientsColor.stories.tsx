import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../App.scss";
import { useEffect, useState } from "react";
import { GradientColors } from "ui/form/inputColorSection/gradientColors/GradientsColors";
import { isGradient } from "./../../utils/isGradient";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
    title: "form/GradientsColor",
    component: GradientColors,
    argTypes: {
        withoutLabel: { control: "boolean" },
        selectedColor: { control: "color" },
    },
} as ComponentMeta<typeof GradientColors>;

const Template: ComponentStory<typeof GradientColors> = (args) => {
    const [color, setColor] = useState(args.selectedColor);

    function changeColor(newColor: string) {
        setColor(newColor);
    }

    useEffect(() => {
        setColor(args.selectedColor);
    }, [args.selectedColor]);

    return (
        <>
            <GradientColors selectedColor={color} changeColor={changeColor} />
            <p> Is selected color is gradient? {isGradient(color) ? "YES" : "NO"} </p>
        </>
    );
};

export const Primary = Template.bind({});
Primary.args = { selectedColor: "linear-gradient(40deg, rgb(185, 43, 39) 0%, rgb(21, 101, 192) 100%)" };

export const SelectGradient = Template.bind({});
SelectGradient.args = { selectedColor: "green" };

SelectGradient.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const firstColor = canvas.getByTestId(0);
    await userEvent.click(firstColor);

    expect(canvas.getByText("Is selected color is gradient? YES")).toBeInTheDocument();
};
