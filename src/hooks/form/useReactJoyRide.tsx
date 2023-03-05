import { useEffect } from "react";
import { useSetState } from "react-use";

export function useReactJoyRide() {
    const [{ run, steps }, setState] = useSetState({
        run: false,
        steps: [
            {
                content: (
                    <>
                        <h1> Witaj w kreatorze Kart z życzeniami </h1>
                        <div className="joyText">
                            Kreator Kart ma w sobie 3 sekcje pierwsza z nich to sekcja główna która jest
                            opcjonalna.
                        </div>
                    </>
                ),
                spotlightPadding: 20,
                placement: "center" as const,
                target: "body",
                floaterProps: {
                    disableAnimation: true,
                },
            },
            {
                content: (
                    <div className="joyText">
                        {" "}
                        W sekcji głównej możesz umieścić imię osoby oraz złożyć krótkie życzenia!
                    </div>
                ),
                floaterProps: {
                    disableAnimation: true,
                },
                target: ".headerSection",
                spotlightPadding: 20,
            },
            {
                content: (
                    <div className="joyText">
                        Pamiętaj że w każdej chwili możesz zobaczyć postępy swojej pracy!
                    </div>
                ),
                floaterProps: {
                    disableAnimation: true,
                },
                target: ".backButton",
                spotlightPadding: 20,
            },

            {
                content: (
                    <div className="joyText">
                        Druga sekcja dotyczy tła i efektów specjalnych gdzie międzyinnymi możesz dodać
                        fajerwerki!
                    </div>
                ),
                floaterProps: {
                    disableAnimation: true,
                },
                target: ".background",
                spotlightPadding: 20,
            },
            {
                content: (
                    <div className="joyText">
                        Ostatnia sekcja to sekcja z życzeniami. Możesz dodawać różne elementy i wykazać się
                        kreatywnością!
                    </div>
                ),
                floaterProps: {
                    disableAnimation: true,
                },
                target: ".wishes",
                spotlightPadding: 20,
            },
            {
                content: (
                    <div className="joyText">
                        Gdy skończysz możesz wygenerować kartkę wraz z linkiem i kodem QR do niej
                    </div>
                ),
                floaterProps: {
                    disableAnimation: true,
                },
                target: ".generate",
                spotlightPadding: 20,
            },
            {
                content: <div className="joyText">POWODZENIA!</div>,
                floaterProps: {
                    disableAnimation: true,
                },
                target: ".end",
                spotlightPadding: 20,
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
