import { useTranslation } from "react-i18next";
import LangSwitcher from "./LangSwitcher";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section
            className="relative min-h-screen overflow-hidden flex items-center justify-center p-4 sm:p-6"
            style={{
                  background: `
                    linear-gradient(
                        180deg,
                        #00090a 0%,
                        #01383a 20%,
                        #05aeb5 60%,
                        #07F0F8 100%
                    )
                `,
            }}
        >
            {/* Carte noire */}
            <div className="relative w-[95%] h-[88vh] bg-black rounded-[32px] flex items-center justify-center overflow-hidden">

                {/* Contenu */}
                <div className="relative z-10 flex flex-col items-center text-center w-full px-4 sm:px-8 md:px-12">

                    {/* Titre */}
                    <h1 className="font-glacial font-normal text-white leading-tight tracking-tight
                        text-h6 sm:text-h7 md:text-h6 lg:text-h4">
                        {t("home.hero.title")}
                    </h1>

                    {/* Sous-titre */}
                    <p className="mt-4 text-white/80 font-glacial text-t6 sm:text-t5 md:text-t4 max-w-3xl">
                        {t("home.hero.subtitle")}
                    </p>

                    {/* Boutons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                        <button className="px-6 py-2.5 rounded-full bg-white text-black
                            shadow-[0_4px_0_rgba(0,0,0,0.6)] flex items-center justify-center gap-2
                            font-medium font-glacial text-t6 sm:text-t5 hover:bg-white/90 transition-colors whitespace-nowrap">
                            {t("home.hero.cta_project")}
                            <span>↘</span>
                        </button>

                        <button className="px-6 py-2.5 rounded-full bg-white text-black
                            shadow-[0_4px_0_rgba(0,0,0,0.6)] flex items-center justify-center gap-2
                            font-medium font-glacial text-t6 sm:text-t5 hover:bg-white/90 transition-colors whitespace-nowrap">
                            {t("home.hero.cta_locations")}
                            <span>↘</span>
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3 text-white/80 font-glacial text-t7 sm:text-t6 md:text-t5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                        </svg>
                        <span>{t("home.hero.stats")}</span>
                    </div>
                </div>

                {/* Langue */}
                <div className="absolute bottom-7 right-7 sm:bottom-8 sm:right-8 md:bottom-16 md:right-16 z-20">
                    <LangSwitcher />
                </div>
            </div>
        </section>
    );
}