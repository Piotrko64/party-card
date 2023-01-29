import { CardPageMainComponent } from "components/cardComponent/CardPageMainComponent";
import { useState } from "react";
import "./App.scss";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <CardPageMainComponent />
        </>
    );
}

export default App;
