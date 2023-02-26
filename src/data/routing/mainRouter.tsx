import { createBrowserRouter } from "react-router-dom";
import { CardPage } from "pages/CardPage";
import { GenerateCardPage } from "pages/GeneratorCardPage";
import { PreviewCardPage } from "./../../pages/PreviewCard";
import { StartPage } from "pages/StartPage";

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <StartPage />,
    },
    {
        path: "/CardPage",
        element: <CardPage />,
    },
    {
        path: "/GenerateCard",
        element: <GenerateCardPage />,
    },
    {
        path: "/PreviewCard",
        element: <PreviewCardPage />,
    },
]);
