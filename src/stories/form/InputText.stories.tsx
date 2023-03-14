import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputText } from "../../ui/form/inputText/InputText";
import "../../App.scss";
import { useHeaderSectionStore } from "../../stores/HeaderSectionStore/HeaderSectionStore";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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

export const Typing = Template.bind({});
Typing.args = {
    labelText: "Interact",
};

Typing.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByLabelText("Interact", {
        selector: "input",
    }) as HTMLInputElement;

    userEvent.clear(input);

    await userEvent.type(input, "Hello", { delay: 200 });

    await expect(input.value).toBe("Hello");
};
