import { useTranslation } from "react-i18next";

export default function HeroFooter() {
    const { t } = useTranslation();

    return (
        <section className="bg-black py-16 px-4">
            <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-b-[28px] bg-black">

                {/* Dégradé cyan */}
                <div
                    className="absolute inset-x-0 bottom-0 h-[180px]"
                    style={{
                        background: `
                    linear-gradient(
                        to bottom,
                        rgba(7,240,248,0) 0%,
                        rgba(7,240,248,0.15) 20%,
                        rgba(7,240,248,0.45) 45%,
                        rgba(7,240,248,0.8) 75%,
                        #07F0F8 100%
                    )
                `,
                    }}
                />

                {/* contenu */}
                <div className="relative z-10 flex flex-col items-center gap-8 py-24 px-6 text-center">
                    {/* Contenu */}
                    <div className="relative z-10 flex flex-col items-center gap-8 md:gap-10 text-center max-w-4xl mx-auto">

                        <h1 className="font-glacial font-bold text-white leading-tight text-h6 md:text-h5 lg:text-h5">
                            {t("hero.title")}
                        </h1>

                        <button className="font-glacial font-normal text-black bg-white rounded-full px-6 py-3 text-t4 flex items-center gap-2 hover:bg-white/90 transition-colors">
                            {t("hero.cta")}
                            <span className="text-t3">↘</span>
                        </button>

                        <p className="font-glacial font-normal text-white/70 text-t5 md:text-t4 max-w-2xl">
                            {t("hero.subtitle")}
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
}