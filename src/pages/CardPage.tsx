import { CardPageMainComponent } from "components/cardComponent/CardPageMainComponent";
import { ErrorScreen } from "components/errorScreen/ErrorScreen";
import { LoadingScreen } from "components/loadingScreen/LoadingScreen";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useChangesContentStoresByDatabaseInfo } from "./../hooks/useChangesContentStoresByDatabaseInfo";

export function CardPage() {
    const { id } = useParams();
    const changeStoresData = useChangesContentStoresByDatabaseInfo();
    const { isLoading, isError } = useQuery(`card/${id!}`, () => changeStoresData(id!));

    if (isLoading) {
        return <LoadingScreen />;
    }

    if (isError) {
        return <ErrorScreen />;
    }

    return <CardPageMainComponent />;
}
