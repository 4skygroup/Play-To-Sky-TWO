import { useTranslation } from 'react-i18next';
import AgenceCard from './AgenceCard';

interface Agence {
    id: string;
    name: string;
    translationKey: string;
}

const agences: Agence[] = [
    { id: 'visuance-seofy', name: 'Visuance & Seofy', translationKey: 'agences.visuanceSeofy' },
    { id: 'cybersky', name: 'Cybersky', translationKey: 'agences.cybersky' },
    { id: 'pulsex-snackly', name: 'Pulse X & Snackly', translationKey: 'agences.pulsexSnackly' },
    { id: 'drox360-playtosky', name: 'Drox & Play To Sky', translationKey: 'agences.drox360PlayToSky' },
];

export default function AgenceList() {
    const { t } = useTranslation();

    return (
        <section className="bg-black py-24 px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-h6 md:text-h5 font-glacial font-bold text-white mb-4">{t('agences.title')}</h2>
                <p className="text-t5 font-glacial text-white/50">{t('agences.subtitle')}</p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {agences.map((agence) => (
                    <AgenceCard
                        key={agence.id}
                        name={agence.name}
                        category={t(`${agence.translationKey}.category`)}
                        description={t(`${agence.translationKey}.description`)}
                        tag={t(`${agence.translationKey}.tag`)}
                    />
                ))}
            </div>
        </section>
    );
}