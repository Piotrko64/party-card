import { CardPageMainComponent } from "components/cardComponent/CardPageMainComponent";
import { ErrorScreen } from "components/ErrorScreen/ErrorScreen";
import { LoadingScreen } from "components/LoadingScreen/LoadingScreen";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useChangesContentStoresByDatabaseInfo } from "./../hooks/useChangesContentStoresByDatabaseInfo";

export function CardPage() {
    const { id } = useParams();

    const changeStoresData = useChangesContentStoresByDatabaseInfo();

    const { isLoading, isError } = useQuery(`card/${id!}`, () => changeStoresData(id!));

    return <>{isLoading ? <LoadingScreen /> : isError ? <ErrorScreen /> : <CardPageMainComponent />}</>;
}
