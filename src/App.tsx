import { mainRouter } from "data/routing/mainRouter";
import { RouterProvider } from "react-router-dom";
import "./App.scss";
import GifPicker from "gif-picker-react";
import { tenorKey } from "config/tenorKey";

function App() {
    return (
        <>
            <RouterProvider router={mainRouter} />
            <GifPicker tenorApiKey={tenorKey} />
        </>
    );
}

export default App;
