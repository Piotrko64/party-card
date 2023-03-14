import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../../App.scss";
import { ChangeEvent, useEffect, useState } from "react";
import { InputRange } from "ui/form/inputRange/InputRange";

export default {
    title: "form/InputRange",
    component: InputRange,
} as ComponentMeta<typeof InputRange>;

const Template: ComponentStory<typeof InputRange> = ({ intensity, max }) => {
    const [range, setRange] = useState<number>(intensity);

    function changeRange(event: ChangeEvent) {
        setRange(+(event.target as HTMLInputElement).value);
    }

    useEffect(() => {
        setRange(intensity);
    }, [intensity]);

    return (
        <>
            <InputRange intensity={range} callbackToChangeRangeValue={changeRange} max={max || "50"} />
            {range}
        </>
    );
};

export const Primary = Template.bind({});
Primary.args = { intensity: 10 };

export const MoreMaxIntensity = Template.bind({});
MoreMaxIntensity.args = { intensity: 20, max: "1000" };
