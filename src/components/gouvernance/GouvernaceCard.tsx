import { useTranslation } from "react-i18next";

interface GouvernanceCardProps {
    name: string;
    role: string;
    linkedinUrl?: string;
    letsTalkUrl?: string;
}

export default function GouvernanceCard({
    name,
    role,
    linkedinUrl = "#",
    letsTalkUrl = "#",
}: GouvernanceCardProps) {

    const { t } = useTranslation();

    return (
        <div className="flex flex-col justify-between items-center gap-3 bg-white rounded-2xl p-4 w-full h-full">
            <div className="flex flex-col gap-1">
                <p className="text-black font-bold text-t5 leading-tight">
                    {name}
                </p>

                <p className="text-pulse-x-card-gray text-t6 leading-snug">
                    {role}
                </p>
            </div>

            <div className="flex items-center gap-2">
                <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-7 h-7 rounded-md overflow-hidden shrink-0"
                >
                    <img
                        src="/linkedin.png"
                        alt="LinkedIn"
                        className="w-full h-full object-contain"
                    />
                </a>

                <a
                    href={letsTalkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-black text-white text-t6 font-bold px-3 py-1.5 rounded-lg whitespace-nowrap hover:opacity-80 transition-opacity"
                >
                    {t("governance.letsTalk")}
                    <span className="text-xs">↗</span>
                </a>
            </div>
        </div>
    );
}