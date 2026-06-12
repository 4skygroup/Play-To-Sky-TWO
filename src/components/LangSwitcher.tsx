import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LangSwitcher() {
    const { i18n } = useTranslation();

    return (
        <button
            onClick={() =>
                i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")
            }
            className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm shadow-[0_2px_0_rgba(0,0,0,0.5)]"
        >
            <Globe size={16} />
            {i18n.language === "fr" ? "Français" : "English"}
        </button>
    );
}