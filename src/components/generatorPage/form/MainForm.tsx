import { useReactJoyRide } from "hooks/form/useReactJoyRide";
import Joyride from "react-joyride";
import { ButtonToGenerate } from "./buttonToGenerate/ButtonToGenerate";
import { BackgroundFormSection } from "./sections/backgroundFormSection/BackgroundFormSection";
import { HeaderFormSection } from "./sections/headerFormSection/HeaderFormSection";
import { WishesFormSection } from "./sections/wishesFormSection/WishesFormSection";

export function MainForm() {
    const { run, steps } = useReactJoyRide();

    return (
        <>
            <Joyride
                continuous
                hideCloseButton
                run={run}
                scrollToFirstStep
                showProgress
                showSkipButton
                steps={steps}
                styles={{
                    options: {
                        zIndex: 10000,
                    },
                }}
            />

            <HeaderFormSection />
            <BackgroundFormSection />
            <WishesFormSection />
            <ButtonToGenerate />
        </>
    );
}
