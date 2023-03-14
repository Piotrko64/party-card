import { ComponentStory, ComponentMeta } from "@storybook/react";
import { objectGif } from "../../components/generatorPage/form/sections/headerFormSection/formElements/gifSection/GifSection";
import { useState } from "react";
import "../../App.scss";
import { GifSection } from "../../ui/form/gifSection/GifSection";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
    title: "form/GifSection",
    component: GifSection,
} as ComponentMeta<typeof GifSection>;

const Template: ComponentStory<typeof GifSection> = ({ url: initialUrl }) => {
    const [url, setUrl] = useState(initialUrl);

    function changeUrl({ preview }: objectGif) {
        setUrl(preview.url);
    }

    return <GifSection url={url} changeGif={changeUrl} />;
};

export const Primary = Template.bind({});

export const WithInitialGif = Template.bind({});

WithInitialGif.args = { url: "https://media.tenor.com/KH6NJRDWZ6sAAAAM/nervous.gif" };

export const IsThereGif = Template.bind({});
IsThereGif.args = { url: "https://media.tenor.com/KH6NJRDWZ6sAAAAM/nervous.gif" };
IsThereGif.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const imgElement = canvas.getByAltText("gif");

    expect(imgElement).toBeInTheDocument();
};
