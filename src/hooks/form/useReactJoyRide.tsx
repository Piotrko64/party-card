import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSetState } from "react-use";

export function useReactJoyRide() {
    const { t } = useTranslation("joyRide");
    const locale = {
        skip: <strong>{t("skip")}</strong>,
        next: <b> {t("next")} </b>,
        back: <b>{t("back")} </b>,
        last: t("last"),
    };

    const [{ run, steps }, setState] = useSetState({
        run: false,
        steps: [
            {
                content: (
                    <>
                        <h1> {t("step1Heading")} </h1>
                        <div className="joyText">{t("step1")}</div>
                    </>
                ),
                locale,
                spotlightPadding: 20,
                placement: "center" as const,
                target: "body",
            },
            {
                content: <div className="joyText"> {t("step2")}</div>,

                target: ".headerSection",
                spotlightPadding: 20,
                locale,
            },
            {
                content: <div className="joyText">{t("step3")}</div>,

                target: ".backButton",
                spotlightPadding: 5,
                locale,
            },

            {
                content: <div className="joyText">{t("step4")}</div>,

                target: ".background",
                spotlightPadding: 20,
                locale,
            },
            {
                content: <div className="joyText">{t("step5")}</div>,

                target: ".wishes",
                spotlightPadding: 20,
                locale,
            },
            {
                content: <div className="joyText">{t("step6")}</div>,

                target: ".generate",
                spotlightPadding: 20,
                locale,
            },
            {
                content: <b className="joyText">{t("step7")}</b>,

                target: ".end",
                spotlightPadding: 15,
                locale,
            },
        ],
    });

    useEffect(() => {
        if (!localStorage.getItem("wasJoyride")) {
            setState({
                run: true,
            });
        }

        localStorage.setItem("wasJoyride", "yes");
    }, []);

    return { run, steps };
}
