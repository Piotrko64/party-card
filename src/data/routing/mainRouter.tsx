import { createBrowserRouter, Outlet, ScrollRestoration } from "react-router-dom";
import { CardPage } from "pages/CardPage";
import { GenerateCardPage } from "pages/GeneratorCardPage";
import { PreviewCardPage } from "pages/PreviewCard";
import { StartPage } from "pages/StartPage";
import { QRPage } from "pages/QRPage";
import { InfoPage } from "pages/InfoPage";
import { LocalMode } from "pages/LocaLmode";
import { Footer } from "components/footer/Footer";
import { Page404 } from "pages/Page404";
import { ExamplePage } from "pages/ExamplesPage";

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
                path: "/examples/:id",
                element: <ExamplePage />,
            },
            {
                path: "/info",
                element: <InfoPage />,
            },
            { path: "/localMode", element: <LocalMode /> },
            {
                path: "/generateCard",
                element: <GenerateCardPage />,
            },
            {
                path: "/previewCard",
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
                path: "/404",
                element: <Page404 />,
            },
            {
                path: "*",
                element: <Page404 />,
            },
        ],
    },
]);
