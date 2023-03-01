import { createBrowserRouter, Outlet, ScrollRestoration } from "react-router-dom";
import { CardPage } from "pages/CardPage";
import { GenerateCardPage } from "pages/GeneratorCardPage";
import { PreviewCardPage } from "./../../pages/PreviewCard";
import { StartPage } from "pages/StartPage";

function Layout() {
    return (
        <>
            <Outlet />
            <ScrollRestoration
                getKey={(location) => {
                    return location.pathname;
                }}
            />
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
        ],
    },
]);
