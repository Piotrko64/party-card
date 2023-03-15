import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { useGenerateCard } from "./useGenerateCard";

export function useButtonToGenerate() {
    const generate = useGenerateCard();
    const navigate = useNavigate();
    const { t } = useTranslation("generate");
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);

    async function goToQRCode() {
        const id = v4();

        try {
            setError(false);
            setLoading(true);

            await generate(id);
            navigate(`/qrCode/${id}`);
        } catch (err) {
            setLoading(false);
            setError(true);
            throw new Error("Something went wrong...");
        }
    }

    return { goToQRCode, t, isError, isLoading };
}
