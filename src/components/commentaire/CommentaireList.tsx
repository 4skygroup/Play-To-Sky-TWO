import { useTranslation } from "react-i18next"
import CommentaireCard from "./CommentaireCard"

export default function TestimonialList() {
    const { t } = useTranslation()

    const testimonials: { name: string; role: string; quote: string; initial: string }[] =
        t("testimonials.items", { returnObjects: true }) as { name: string; role: string; quote: string; initial: string }[]

    return (
        <section className="flex w-full flex-col items-center gap-16 bg-black px-6 py-20 md:px-16 lg:px-32">

            {/*/!* Bloc supérieur — trajectoire *!/*/}
            {/*<div className="flex max-w-3xl flex-col items-center gap-6 text-center">*/}
            {/*    <h2 className="text-h6 font-bold text-white md:text-h5">{t("testimonials.trajectoryTitle")}</h2>*/}
            {/*    <div className="h-px w-16 bg-white/20" />*/}
            {/*    <p className="text-t5 leading-relaxed text-white/60 md:text-t4">{t("testimonials.trajectorySubtitle")}</p>*/}
            {/*    <div className="h-px w-16 bg-white/20" />*/}
            {/*</div>*/}

            {/* Bloc inférieur — confiance */}
            <div className="flex w-full max-w-5xl flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h3 className="text-h7 font-bold text-white md:text-t1">{t("testimonials.trustTitle")}</h3>
                    <p className="text-t5 leading-relaxed text-white/60 md:text-t4">{t("testimonials.trustSubtitle")}</p>
                </div>

                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((item, i) => (
                        <CommentaireCard key={i} name={item.name} role={item.role} quote={item.quote} initial={item.initial} />
                    ))}
                </div>
            </div>

        </section>
    )
}