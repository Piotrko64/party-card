import { BackgroundFormSection } from "./sections/backgroundFormSection/BackgroundFormSection";
import { HeaderFormSection } from "./sections/headerFormSection/HeaderFormSection";
import { WishesFormSection } from "./sections/wishesFormSection/WishesFormSection";

export function MainForm() {
    return (
        <>
            <HeaderFormSection />
            <BackgroundFormSection />
            <WishesFormSection />
        </>
    );
}
