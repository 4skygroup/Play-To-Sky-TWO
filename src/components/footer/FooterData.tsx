import { useTranslation } from "react-i18next";

export const useFooterData = () => {
    const { t } = useTranslation();

    const services = [
        { label: t("footer.services.community"), href: "" },
        { label: t("footer.services.creative"), href: "" },
        { label: t("footer.services.development"), href: "" },
        { label: t("footer.services.seo"), href: "https://seofyagency.com/" },
    ];

    const mentions = [
        { label: t("footer.mentions.legal"), href: "/projets" },
        { label: t("footer.mentions.privacy"), href: "/about" },
        { label: t("footer.mentions.cgv"), href: "/contact" },
        { label: t("footer.mentions.cgu"), href: "/contact" },
    ];

    return { services, mentions };
};

export const entites = [
    { label: "Visuance", href: "https://www.visuanceagency.com/" },
    { label: "Snackly", href: "https://snacklyagency.com/" },
    { label: "Pulse X", href: "https://www.pulsexagency.com/" },
    { label: "Pulse X Agency", href: "https://www.pulsexmanagement.com/" },
    { label: "CyberSky", href: "https://www.cyberskyagency.com/" },
    { label: "Seofy", href: "https://www.seofyagency.com/" },
    { label: "Drox 360", href: "https://drox360.com/" },
    { label: "Sky To Be Media", href: "https://www.skytobemedia.com/" },
    { label: "Play to sky production", href: "https://www.playtoskyproductions.com/" },
];

export const social = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/play-to-sky/about/",
        icon: (
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/playtoskyg?",
        icon: (
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
    },
    {
        label: "TikTok",
        href: "https://www.tiktok.com/@playtosky?",
        icon: (
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
        ),
    },
];