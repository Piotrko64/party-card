import { ComponentStory, ComponentMeta } from "@storybook/react";

import "../../App.scss";
import { ListInputElement } from "ui/form/listInputElements/ListInputElements";
import { exampleWishElements } from "data/form/wishesSection/exampleWishesElement";
import { useWishesSectionStore } from "stores/WishesSectionStore/WishesSectionStore";
import { useEffect } from "react";
import { UnionWishElementsWithTexts } from "types/stores/WishesSectionStore";

export default {
    title: "form/ListInputElement",
    component: ListInputElement,
} as ComponentMeta<typeof ListInputElement>;

const Template: ComponentStory<typeof ListInputElement> = () => {
    const { setWishesElements, elements } = useWishesSectionStore();

    useEffect(() => {
        setWishesElements(exampleWishElements);
    }, []);

    const wishWallTextElement = (elements[0] as UnionWishElementsWithTexts)?.texts;

    return <ListInputElement idElement="test" texts={wishWallTextElement} />;
};

export const Primary = Template.bind({});
Primary.args = {};
