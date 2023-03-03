import { Link } from "react-router-dom";
import classes from "./footer.module.scss";

export function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.party}>PARTY CARD </div>
            <div className={classes.links}>
                <Link to="/"> Przejdź na stronę główną Party Card</Link>
                <Link to="/generateCard"> Przejdź do generatora</Link>
            </div>
            <div className={classes.linkToPortfolio}>
                <p>
                    Pomysł i realizacja projektu: <br></br>
                    <a href="http://piotrkolodziejczyk.vercel.app" target="_blank">
                        Piotr Kołodziejczyk
                    </a>
                </p>
                <img src="logoPK.png" alt="logo" />
            </div>
        </footer>
    );
}
