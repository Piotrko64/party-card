import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import qrPageEN from "./locales/en/qrPageEN.json";
import qrPagePL from "./locales/pl/qrPagePL.json";
import footerPL from "./locales/pl/footerPL.json";
import footerEN from "./locales/en/footerEN.json";
import startPagePL from "./locales/pl/startPagePL.json";
import startPageEN from "./locales/en/startPageEN.json";
import infoPagePL from "./locales/pl/infoPagePL.json";
import infoPageEN from "./locales/en/infoPageEN.json";
import uiPL from "./locales/pl/uiPL.json";
import uiEN from "./locales/en/uiEN.json";
import generatePL from "./locales/pl/generatePL.json";
import generateEN from "./locales/en/generateEN.json";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                // home: translationEN,
                qrPage: qrPageEN,
                footer: footerEN,
                startPage: startPageEN,
                infoPage: infoPageEN,
                ui: uiEN,
                generate: generateEN,
            },
            pl: {
                // home: translationPL,
                qrPage: qrPagePL,
                startPage: startPagePL,
                footer: footerPL,
                infoPage: infoPagePL,
                ui: uiPL,
                generate: generatePL,
            },
        },
    });
