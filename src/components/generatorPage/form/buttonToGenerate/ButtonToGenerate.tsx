import { useGenerateCard } from "./hooks/useGenerateCard";
import { useChangesContentStoresByDatabaseInfo } from "./../../../../hooks/useChangesContentStoresByDatabaseInfo";

export function ButtonToGenerate() {
    const generate = useGenerateCard();
    const change = useChangesContentStoresByDatabaseInfo("f019394a-66db-485f-97c5-8f0d9a5cc163");
    return (
        <>
            <button onClick={() => generate()}> Wygeneruj kartkę </button>
            <button onClick={change}> change stores </button>
        </>
    );
}
