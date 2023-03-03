import { useGenerateCard } from "./hooks/useGenerateCard";
import { useChangesContentStoresByDatabaseInfo } from "./../../../../hooks/useChangesContentStoresByDatabaseInfo";
import classes from "./buttonToGenerate.module.scss";
import { v4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function ButtonToGenerate() {
    const generate = useGenerateCard();
    const changeContentStore = useChangesContentStoresByDatabaseInfo();
    const navigate = useNavigate();

    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);

    function goToQRCode() {
        const id = v4();
        try {
            setLoading(true);

            changeContentStore(id);
        } catch (err) {
            setLoading(false);
            setError(true);
            throw err;
        }
        navigate("/qrCode/" + id);
    }

    return (
        <>
            <h2> Generowanie kartki </h2>
            <p> Poniższy przycisk wygeneruje twoją kartkę z życzeniami jak i kod QR </p>
            <button className={classes.generate} onClick={goToQRCode} disabled={isLoading || isError}>
                {isLoading ? "Ładowanie..." : "Wygeneruj kartkę"}
            </button>
            {isError && (
                <p className={classes.error}>
                    Oops! Wygląda na to że coś poszło nie tak. Spróbuj później lub użyj trybu lokalnego
                    znajdującego się poniżej{" "}
                </p>
            )}

            <h2 className={classes.localMode}> Tryb lokalny </h2>
            <p>
                {" "}
                W razie problemów lub chęci pokazania kartki natychmiastowo bez generowania kodu QR możesz
                włączyć tryb lokalny. Przeniesie Cię on do zrobionej kartki. Jest to dobra funckja jeżeli
                chciałbyś pokazać kartkę znajomemu z poziomu swojego telefonu bez tworzenia kodu bądź linku.{" "}
            </p>
            <Link to="/localMode"> Przejdź do trybu lokalnego </Link>
        </>
    );
}
