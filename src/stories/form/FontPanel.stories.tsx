import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../App.scss";
import { useEffect, useState } from "react";
import { FontChoosingPanel } from "ui/form/fontChoosingPanel/FontChoosingPanel";
import { NamesFont } from "types/typesForStyles/NamesFont";

export default {
    title: "form/FontPanel",
    component: FontChoosingPanel,
    argTypes: {
        isHeader: { control: "boolean" },
    },
} as ComponentMeta<typeof FontChoosingPanel>;

const Template: ComponentStory<typeof FontChoosingPanel> = ({ isHeader, font: initialFont }) => {
    const [font, setFont] = useState<NamesFont>(initialFont);

    function changeFont(_1: string, newValue: NamesFont, _2: string) {
        setFont(newValue);
    }

    useEffect(() => {
        setFont(font);
    }, [font]);

    return (
        <>
            <FontChoosingPanel
                font={font}
                nameSection=""
                callbackToSelectFont={changeFont}
                isHeader={isHeader}
            />
        </>
    );
};

export const Primary = Template.bind({});
