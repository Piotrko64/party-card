import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const TIME_TO_REDIRECT = 7500;

export function useError404Screen() {
    const navigate = useNavigate();
    const { t } = useTranslation("page404");

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, TIME_TO_REDIRECT);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return { t };
}
