import { useTranslation } from "react-i18next";

export const useFooterData = () => {
    const { t } = useTranslation();

    const services = [
        { label: t("footer.services.community"), href: "/mentions-legales" },
        { label: t("footer.services.creative"), href: "/confidentialite" },
        { label: t("footer.services.development"), href: "/mentions-legales" },
        { label: t("footer.services.seo"), href: "/confidentialite" },
        { label: t("footer.services.contact"), href: "/mentions-legales" },
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
        href: "https://linkedin.com",
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
        href: "https://instagram.com",
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
        href: "https://tiktok.com",
        icon: (
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
        ),
    },
    {
        label: "Behance",
        href: "https://behance.net",
        icon: (
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.97 11.2733C14.7428 11.3057 14.8808 11.3219 15.6841 11.727C16.1871 11.9863 16.7388 12.5859 17.0228 13.1936C17.2338 13.6392 17.2663 13.8093 17.2663 14.3684C17.2581 15.4379 16.8362 16.2481 15.9518 16.8558L15.5786 17.107L15.8707 17.2123C16.5766 17.4554 17.3555 18.1684 17.6557 18.849C17.9154 19.4404 17.9478 20.5343 17.7206 21.2067C17.4042 22.1466 16.8281 22.8677 16.0979 23.2404C15.3027 23.6456 15.0755 23.6699 11.1322 23.7023L7.41608 23.7428V11.2328L10.97 11.2733ZM9.93135 21.62H11.7976C12.8199 21.62 13.8341 21.5795 14.0532 21.539C14.7915 21.3769 15.2865 20.7854 15.2865 20.0643C15.2865 19.2946 14.9538 18.7842 14.2723 18.4844C13.9964 18.3709 13.6232 18.3385 11.9436 18.3142L9.93135 18.2818V21.62ZM9.93135 16.1995L13.7855 16.1509L14.1587 15.9321C14.613 15.6648 14.7997 15.3164 14.7997 14.733C14.7996 14.0929 14.4913 13.6392 13.9153 13.4447C13.7448 13.388 12.9578 13.3556 11.7894 13.3556H9.93135V16.1995Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M22.1021 14.2468C22.3455 14.2063 22.8405 14.1983 23.1975 14.2226C24.4795 14.3117 25.2422 14.6277 26.0454 15.4217C26.8568 16.2239 27.2301 17.1961 27.3437 18.8409L27.4005 19.5944H21.0392L21.096 19.9752C21.2502 21.0285 21.9317 21.7253 22.9054 21.8388C23.5951 21.9198 24.3334 21.5552 24.5931 21.0042L24.731 20.7287H27.3193L27.2625 20.988C27.1814 21.4012 26.727 22.0818 26.2564 22.5194C25.2097 23.4835 23.6032 23.8481 21.8831 23.524C19.7329 23.1108 18.5077 21.466 18.5077 18.9867C18.5158 17.6255 18.7998 16.6452 19.4327 15.8025C20.0412 15.0004 21.0554 14.4089 22.1021 14.2468ZM23.595 16.1266C22.8405 15.8997 22.1508 16.078 21.6477 16.6209C21.3151 16.9936 21.1284 17.4392 21.1284 17.8848V18.136H24.8609V17.9496C24.8608 17.2042 24.2523 16.3292 23.595 16.1266Z" fill="white"/>
                <path d="M25.4694 12.991H20.4388L20.3901 11.8161H25.5181L25.4694 12.991Z" fill="white"/>
            </svg>
        ),
    },
];