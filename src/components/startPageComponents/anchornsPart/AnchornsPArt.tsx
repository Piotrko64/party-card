import { anchornsStartPage } from "data/startPage/anchornsStartPage";
import { SingleAnchor } from "./SingleAnchor/SingleAnchor";

export function AnchornsPart() {
    return (
        <>
            {anchornsStartPage.map((anchor) => (
                <SingleAnchor {...anchor} />
            ))}
        </>
    );
}
