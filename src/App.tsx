import { StartPageMainComponent } from "components/startPageComponents/StartPageMainComponent";
import { CardPage } from "pages/CardPage";
import { GenerateCardPage } from "pages/GeneratorCardPage";
import { Heart } from "ui/svg/Heart";

import "./App.scss";

function App() {
    return (
        <>
            {/* <CardPage /> */}

            {/* <StartPageMainComponent /> */}
            <GenerateCardPage />
        </>
    );
}

export default App;
