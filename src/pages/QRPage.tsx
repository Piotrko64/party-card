import { ErrorScreen } from "components/errorScreen/ErrorScreen";
import { LoadingScreen } from "components/loadingScreen/LoadingScreen";
import { QRPageMainComponent } from "components/qrPage/QRPageMainComponent";
import { useChangesContentStoresByDatabaseInfo } from "hooks/useChangesContentStoresByDatabaseInfo";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export function QRPage() {
    const { id } = useParams();
    const changeStores = useChangesContentStoresByDatabaseInfo();
    const { isError, isLoading } = useQuery(`qr${id}`, () => changeStores(id!));

    if (isLoading) {
        return <LoadingScreen />;
    }

    if (isError) {
        return <ErrorScreen />;
    }

    return <QRPageMainComponent />;
}
