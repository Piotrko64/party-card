import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translationEN.json";
import translationPL from "./locales/pl/translationPL.json";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: "en",
        resources: {
            en: {
                home: translationEN,
            },
            pl: {
                home: translationPL,
            },
        },
    });
