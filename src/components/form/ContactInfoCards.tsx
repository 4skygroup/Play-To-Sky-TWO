import { Mail, Phone, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ContactInfoCards() {
    const { t } = useTranslation();

    const cards = [
        {
            icon: <Mail className="w-5 h-5 text-white" />,
            label: t("contact.info.email.label"),
            value: t("contact.info.email.value"),
        },
        {
            icon: <Phone className="w-5 h-5 text-white" />,
            label: t("contact.info.phone.label"),
            value: t("contact.info.phone.value"),
        },
        {
            icon: <Clock className="w-5 h-5 text-white" />,
            label: t("contact.info.hours.label"),
            value: t("contact.info.hours.value"),
        },
    ];

    return (
        <div className="flex flex-col gap-4">
            {cards.map((card) => (
                <div
                    key={card.label}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
                >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        {card.icon}
                    </div>
                    <div>
                        <p className="text-t6 font-medium uppercase tracking-widest text-white/40">
                            {card.label}
                        </p>
                        <p className="mt-0.5 text-t5 font-medium text-white">{card.value}</p>
                    </div>
                </div>
            ))}

            <div className="mt-2 flex items-center gap-6">
                <img
                    src="/playToSky.png"
                    alt="logo"
                    className="h-5 w-auto object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                />
                <p className="text-t6 md:text-t5 leading-relaxed text-white/40">
                    {t("contact.footerNote")}
                </p>
            </div>
        </div>
    );
}