import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SingleAnchor } from "../../../components/startPageComponents/anchorns/SingleAnchor/SingleAnchor";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
    title: "startPage/SingleAnchorn",
    component: SingleAnchor,
    decorators: [withRouter],
    argTypes: {
        color: { control: "color" },
    },
} as ComponentMeta<typeof SingleAnchor>;

const Template: ComponentStory<typeof SingleAnchor> = (args) => <SingleAnchor {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    text: "Test",
    color: "red",
};

export const Secondary = Template.bind({});

Secondary.args = {
    text: "Polish Text",
    color: "violet",
    textEN: "English Text",
};
