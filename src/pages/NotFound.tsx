import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Page affichee pour une adresse qui n'existe pas.
// « noindex » : Google ne doit pas l'enregistrer comme une vraie page.
export default function NotFound() {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = `${t("notFound.title")} — Play To Sky`;
        const robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
        const avant = robots?.content ?? "index, follow";
        if (robots) robots.content = "noindex";
        const canonique = document.querySelector('link[rel="canonical"]');
        canonique?.remove();
        return () => {
            if (robots) robots.content = avant;
            if (canonique) document.head.appendChild(canonique);
        };
    }, [t]);

    return (
        <main className="min-h-[70vh] bg-black font-glacial flex flex-col items-center justify-center text-center px-6 py-24">
            <p className="text-white/60 text-t5 mb-4">404</p>
            <h1 className="text-h6 font-bold text-white mb-4">{t("notFound.title")}</h1>
            <p className="text-white/80 text-t5 max-w-xl mb-8">{t("notFound.text")}</p>
            <Link
                to="/"
                className="px-6 py-2.5 rounded-full bg-white text-black font-medium text-t5 hover:bg-white/90 transition-colors"
            >
                {t("notFound.cta")}
            </Link>
        </main>
    );
}
