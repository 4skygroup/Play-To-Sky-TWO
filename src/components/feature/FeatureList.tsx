import { useTranslation } from 'react-i18next'
import FeatureCard from './FeatureCard'

const features = [
    {
        titleKey: 'acquisition.features.data.title',
        subtitleKey: 'acquisition.features.data.subtitle',
        descriptionKey: 'acquisition.features.data.description',
    },
    {
        titleKey: 'acquisition.features.clarity.title',
        subtitleKey: 'acquisition.features.clarity.subtitle',
        descriptionKey: 'acquisition.features.clarity.description',
    },
    {
        titleKey: 'acquisition.features.algo.title',
        subtitleKey: 'acquisition.features.algo.subtitle',
        descriptionKey: 'acquisition.features.algo.description',
    },
]

export default function FeatureList() {
    const { t } = useTranslation()

    return (
        <section className="bg-black min-h-screen w-full flex flex-col items-center px-4 py-16 md:py-24">
            <div className="max-w-5xl w-full mx-auto flex flex-col items-center gap-10">
                <div className="text-center">
                    <h1 className="text-white font-bold font-glacial text-h6 md:text-h5 leading-tight mb-4">{t('acquisition.hero.title')}</h1>
                    <p className="text-pulse-x-subtitle-gray font-glacial text-t5 md:text-t4 max-w-2xl mx-auto leading-relaxed">{t('acquisition.hero.subtitle')}</p>
                </div>
                <div className="flex flex-col gap-5 w-full">
                    {features.map((f) => (
                        <FeatureCard key={f.titleKey} titleKey={f.titleKey} subtitleKey={f.subtitleKey} descriptionKey={f.descriptionKey} />
                    ))}
                </div>
            </div>
        </section>
    )
}