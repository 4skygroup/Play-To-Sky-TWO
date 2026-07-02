import { useTranslation } from "react-i18next"


export default function Groupe() {
    const { t } = useTranslation()

    return (
        <section className="bg-black py-16 px-6 md:py-24 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full">
                    <img src="/about.jpg" alt={t("genesis.imageAlt")} className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col gap-6">
                    <span className="inline-block w-fit border border-white/20 rounded-full px-4 py-1.5 text-t6 font-glacial tracking-widest text-white/80 uppercase">
                        {t("genesis.badge")}
                    </span>

                    <h2 className="font-glacial font-bold text-h7 md:text-h6 lg:text-h5 text-white leading-tight">
                        {t("genesis.title")}
                    </h2>

                    <p className="font-glacial text-t5 text-white/60 leading-relaxed max-w-xl">
                        {t("genesis.description")}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-2">
                        {(t("genesis.stats", { returnObjects: true }) as { value: string; label: string }[]).map((stat, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex-1 min-w-[140px]">
                                <div className="font-glacial font-bold text-t1 text-white">{stat.value}</div>
                                <div className="font-glacial text-t7 text-white/50 uppercase tracking-wider mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}