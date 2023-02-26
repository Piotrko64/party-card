import { StartPageMainComponent } from "components/startPageComponents/StartPageMainComponent";
import { createBrowserRouter } from "react-router-dom";
import { CardPage } from "pages/CardPage";
import { GenerateCardPage } from "pages/GeneratorCardPage";

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <StartPageMainComponent />,
    },
    {
        path: "/CardPage",
        element: <CardPage />,
    },
    {
        path: "/GenerateCard",
        element: <GenerateCardPage />,
    },
]);