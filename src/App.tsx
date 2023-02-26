import { mainRouter } from "data/routing/mainRouter";
import { GenerateCardPage } from "pages/GeneratorCardPage";
import { RouterProvider } from "react-router-dom";

import "./App.scss";

function App() {
    return (
        <>
            <RouterProvider router={mainRouter} />
        </>
    );
}

export default App;
