import { Link } from "react-router-dom";
import classes from "./errorScreen.module.scss";

export function ErrorScreen() {
    return (
        <>
            <div className={classes.screen}>
                <h1>Oops..!!</h1>
                <h2> Coś poszło nie tak </h2>

                <div className={classes.links}>
                    <Link to="/" className={classes.home}>
                        {" "}
                        Przejdź do strony głównej
                    </Link>
                    <Link to="/GeneratePage" className={classes.generate}>
                        {" "}
                        Przejdź do generatora kart{" "}
                    </Link>
                </div>
            </div>
        </>
    );
}
