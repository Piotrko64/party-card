import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../App.scss";
import { OrdinaryColors } from "../../ui/form/inputColorSection/ordinaryColors/OrdinaryColors";
import { useState } from "react";

export default {
    title: "form/OrdinaryColors",
    component: OrdinaryColors,
} as ComponentMeta<typeof OrdinaryColors>;

const Template: ComponentStory<typeof OrdinaryColors> = (args) => {
    const [color, setColor] = useState("red");

    function changeColor(newColor: string) {
        setColor(newColor);
    }

    return <OrdinaryColors selectedColor={color} changeColor={changeColor} />;
};

export const Primary = Template.bind({});
