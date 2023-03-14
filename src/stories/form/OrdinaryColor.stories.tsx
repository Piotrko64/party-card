import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../App.scss";
import { OrdinaryColors } from "../../ui/form/inputColorSection/ordinaryColors/OrdinaryColors";
import { useEffect, useState } from "react";

export default {
    title: "form/OrdinaryColors",
    component: OrdinaryColors,
    argTypes: {
        withoutLabel: { control: "boolean" },
        selectedColor: { control: "color" },
    },
} as ComponentMeta<typeof OrdinaryColors>;

const Template: ComponentStory<typeof OrdinaryColors> = (args) => {
    const [color, setColor] = useState(args.selectedColor);

    function changeColor(newColor: string) {
        setColor(newColor);
    }

    useEffect(() => {
        setColor(args.selectedColor);
    }, [args.selectedColor]);

    return (
        <>
            <OrdinaryColors
                selectedColor={color}
                changeColor={changeColor}
                withoutLabel={args.withoutLabel}
            />
            <p>color: {color}</p>
        </>
    );
};

export const Primary = Template.bind({});
Primary.args = { withoutLabel: true, selectedColor: "red" };
