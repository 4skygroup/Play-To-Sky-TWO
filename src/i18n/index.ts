import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import fr from './locales/fr.json'

i18n
    .use(LanguageDetector)   // détecte la langue du navigateur auto
    .use(initReactI18next)
    .init({
        resources: { en: { translation: en }, fr: { translation: fr } },
        // Francais par defaut (visiteurs ET robot de Google). L'anglais seulement si le
        // visiteur l'a choisi avec le bouton de langue (choix memorise dans le navigateur).
        fallbackLng: 'fr',
        supportedLngs: ['fr', 'en'],
        detection: { order: ['localStorage'], caches: ['localStorage'] },
        interpolation: { escapeValue: false }
    })

// La langue de la page (<html lang>) suit la langue affichee.
const majLang = (lng: string) => { document.documentElement.lang = (lng || 'fr').slice(0, 2) }
majLang(i18n.language)
i18n.on('languageChanged', majLang)

export default i18n