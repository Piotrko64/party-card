import { CardPageMainComponent } from "components/cardComponent/CardPageMainComponent";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useChangesContentStoresByDatabaseInfo } from "./../hooks/useChangesContentStoresByDatabaseInfo";

export function CardPage() {
    const { id } = useParams();

    const changeStoresData = useChangesContentStoresByDatabaseInfo(id!);

    const { isLoading, error } = useQuery(id!, changeStoresData);

    return (
        <>
            {isLoading && "loading"}
            {error && "error"}
            <CardPageMainComponent />
        </>
    );
}
