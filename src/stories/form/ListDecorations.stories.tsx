import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import "../../App.scss";
import { ListDecorations } from "./../../components/generatorPage/form/sections/backgroundFormSection/formElements/decorationsPanel/listDecorations/ListDecorations";

export default {
    title: "form/ListDecorations",
    component: ListDecorations,
} as ComponentMeta<typeof ListDecorations>;

const Template: ComponentStory<typeof ListDecorations> = () => {
    const { backgroundDecorations: decorations } = useBackgroundStore();

    return (
        <>
            <ListDecorations />
            Kind of decoration: {decorations.kindDecorations}
        </>
    );
};

export const Primary = Template.bind({});
Primary.args = {};
