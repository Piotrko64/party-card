import { mainRouter } from "data/routing/mainRouter";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import { RouterProvider, useParams } from "react-router-dom";
import "./App.scss";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={mainRouter} />
        </QueryClientProvider>
    );
}

export default App;
