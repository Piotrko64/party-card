import { useEffect, Suspense } from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "../src/i18n";

export const globalTypes = {
    locale: {
        name: "Locale",
        description: "Internationalization locale",
        toolbar: {
            icon: "globe",
            items: [
                { value: "en", right: "🇺🇸", title: "English" },
                { value: "pl", right: "PL", title: "Polish" },
            ],
            showName: true,
        },
    },
};

i18n.on("languageChanged", (locale) => {
    const direction = i18n.dir(locale);
    document.dir = direction;
});

const i18nextStoryDecorator = (Story, context) => {
    const { locale } = context.globals;

    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale]);

    return (
        <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18n}>
                <Story />
            </I18nextProvider>
        </Suspense>
    );
};

export const decorators = [i18nextStoryDecorator];
