import { useTranslation } from 'react-i18next'

interface FeatureCardProps {
    titleKey: string
    subtitleKey: string
    descriptionKey: string
}

export default function FeatureCard({ titleKey, subtitleKey, descriptionKey }: FeatureCardProps) {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 border border-[#2e2e2e] rounded-xl px-6 py-6 md:px-8 md:py-7 bg-transparent w-full">
            <div className="flex-shrink-0 md:w-52 w-full">
                <div className="flex items-start gap-2 mb-1">
                    <span className="inline-block w-3 h-3 rounded-full bg-pulse-x-black flex-shrink-0 mt-1" />
                    <h3 className="text-white font-bold text-t5 leading-snug font-glacial">{t(titleKey)}</h3>
                </div>
                <p className="text-pulse-x-card-gray text-t6 font-glacial leading-snug pl-5">{t(subtitleKey)}</p>
            </div>
            <p className="text-[#cccccc] text-t6 font-glacial leading-relaxed flex-1">{t(descriptionKey)}</p>
        </div>
    )
}