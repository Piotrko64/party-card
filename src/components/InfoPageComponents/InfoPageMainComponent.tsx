import { HomeLink } from "ui/homeLink/HomeLink";
import classes from "./infoPageMainComponent.module.scss";

export function InfoPageMainComponent() {
    return (
        <div className={classes.container}>
            <HomeLink />
            <h1> Jak to działa? </h1>
            <p>
                Dzięki Party Card stworzysz wyjątkową internetową kartkę z życzeniami dla dowolnej osoby z
                dowolnej okazji. Wystarczy skorzystać z naszego kreatora dzięki któremu stworzysz coś
                wyjątkowego i wygenerujesz kod QR. Taki kod lub link należy udostępnić osobie dla której jest
                ta kartka. Po wejściu w link ta osoba zobaczy twoją kartkę z życzeniami.
            </p>
            <h2>Tworzenie kartki </h2>
            <p>
                Przejdź do naszego generatora gdzie zobaczysz obszerny formularz z konfiguracją wyglądu
                kartki. W każdej chwili możesz użyć przycisku do podglądu. Polecam to robić jak najczęściej.
                Do dostosowania są trzy sekcje: Tło, Sekcja główna i Sekcja z życzeniami. Na końcu formularza
                zobaczysz przycisk z wygenerowaniem kodu QR i linku który możesz przesłać osobie którą chcesz
                obdarować.
            </p>
            <h2> Przykładowe użycie</h2>
            <p>
                Idealne stworzenie takiej kartki może nie być początkowo proste. Trzeba być ostrożnym w
                aspektach kolorystycznych. Aby lepiej zobrazować możliwości Party Card przygotowaliśmy kilka
                przykładowych użyć.
            </p>
        </div>
    );
}
