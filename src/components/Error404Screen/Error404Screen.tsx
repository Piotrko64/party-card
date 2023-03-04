import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./error404Screen.module.scss";

const TIME_TO_REDIRECT = 7500;

export function Error404Screen() {
    const navigate = useNavigate();

    useEffect(() => {
        let timer = setTimeout(() => {
            navigate("/");
        }, TIME_TO_REDIRECT);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className={classes.screen}>
            <h1>404</h1>
            <h2> Nie znaleziono strony </h2>
            <p>
                {" "}
                <Link to="/"> Kliknij tutaj</Link> lub poczekaj aby przenieść się do strony głównej
            </p>
        </div>
    );
}
