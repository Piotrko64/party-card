import { createBrowserRouter, Outlet, ScrollRestoration } from "react-router-dom";
import { CardPage } from "pages/CardPage";
import { GenerateCardPage } from "pages/GeneratorCardPage";
import { PreviewCardPage } from "./../../pages/PreviewCard";
import { StartPage } from "pages/StartPage";
import { QRPage } from "./../../pages/QRPage";
import { InfoPage } from "pages/InfoPage";
import { LocalMode } from "pages/LocaLmode";

import { ErrorScreen } from "./../../components/ErrorScreen/ErrorScreen";
import { Footer } from "components/footer/Footer";
import { Page404 } from "pages/Page404";

function Layout() {
    return (
        <>
            <Outlet />
            <ScrollRestoration
                getKey={(location) => {
                    return location.pathname;
                }}
            />
            <Footer />
        </>
    );
}

export const mainRouter = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <StartPage />,
            },
            {
                path: "/info",
                element: <InfoPage />,
            },
            { path: "/localMode", element: <LocalMode /> },
            {
                path: "/GenerateCard",
                element: <GenerateCardPage />,
            },
            {
                path: "/PreviewCard",
                element: <PreviewCardPage />,
            },
            {
                path: "/qrCode/:id",
                element: <QRPage />,
            },
            {
                path: "/card/:id",
                element: <CardPage />,
            },
            {
                path: "*",
                element: <Page404 />,
            },
        ],
    },
]);
