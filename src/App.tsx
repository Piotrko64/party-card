import { LoadingScreen } from "components/LoadingScreen/LoadingScreen";
import { mainRouter } from "data/routing/mainRouter";
import { Suspense } from "react";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import { RouterProvider } from "react-router-dom";
import "./App.scss";
import "./i18n.ts";
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<LoadingScreen />}>
                <RouterProvider router={mainRouter} />
            </Suspense>
        </QueryClientProvider>
    );
}

export default App;
