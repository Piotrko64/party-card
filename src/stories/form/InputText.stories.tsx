import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputText } from "../../ui/form/inputText/InputText";
import "../../App.scss";
import { useHeaderSectionStore } from "../../stores/HeaderSectionStore/HeaderSectionStore";

export default {
    title: "form/InputText",
    component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => {
    const { changeValueInput, name } = useHeaderSectionStore();

    return (
        <InputText
            namePropertyToChange="name"
            callbackToChangeValueText={changeValueInput}
            valueInput={name.text}
            maxLength={50}
            labelText={args.labelText}
            placeholder={args.placeholder}
        />
    );
};

export const WithoutLabel = Template.bind({});

export const Placeholder = Template.bind({});

Placeholder.args = {
    labelText: "Secondary label",
    valueInput: "",
    placeholder: "I am placeholder",
};
