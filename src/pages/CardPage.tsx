import { CardPageMainComponent } from "components/cardComponent/CardPageMainComponent";
import { LoadingScreen } from "components/LoadingScreen/LoadingScreen";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useChangesContentStoresByDatabaseInfo } from "./../hooks/useChangesContentStoresByDatabaseInfo";

export function CardPage() {
    const { id } = useParams();

    const changeStoresData = useChangesContentStoresByDatabaseInfo();

    const { isLoading, error } = useQuery(`card/${id!}`, () => changeStoresData(id!));

    return (
        <>
            {isLoading ? <LoadingScreen /> : <CardPageMainComponent />}
            {error && "error"}
        </>
    );
}
