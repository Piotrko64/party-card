import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../App.scss";
import { useEffect, useState } from "react";
import { FontChoosingPanel } from "ui/form/fontChoosingPanel/FontChoosingPanel";
import { NamesFont } from "types/typesForStyles/NamesFont";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
    title: "form/FontPanel",
    component: FontChoosingPanel,
    argTypes: {
        isHeader: { control: "boolean" },
        nameSection: { control: "none" },
    },
} as ComponentMeta<typeof FontChoosingPanel>;

const Template: ComponentStory<typeof FontChoosingPanel> = ({ isHeader, font: initialFont }) => {
    const [font, setFont] = useState<NamesFont>(initialFont);

    function changeFont(_1: string, newValue: NamesFont, _2: string) {
        setFont(newValue);
    }

    useEffect(() => {
        setFont(initialFont);
    }, [initialFont]);

    return (
        <FontChoosingPanel font={font} nameSection="" callbackToSelectFont={changeFont} isHeader={isHeader} />
    );
};

export const Primary = Template.bind({});
export const CheckIsWhiteBackground = Template.bind({});

CheckIsWhiteBackground.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const fontOswaldElement = canvas.getByText("Oswald");

    await userEvent.click(fontOswaldElement);

    expect(fontOswaldElement.classList.length).toBe(2);
};
