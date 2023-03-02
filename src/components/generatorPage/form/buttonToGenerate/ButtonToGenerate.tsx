import { useGenerateCard } from "./hooks/useGenerateCard";

export function ButtonToGenerate() {
    const generate = useGenerateCard();
    return (
        <>
            <button onClick={() => generate()}> Wygeneruj kartkę </button>
        </>
    );
}
