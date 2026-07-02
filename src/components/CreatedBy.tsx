import {useTranslation} from "react-i18next";

export default function CreatedBy() {
    const { t } = useTranslation();

    return (
        <div className="bg-black flex items-center justify-center gap-12 text-gray-white max-sm:flex-col pb-5">
              <span className="text-sm font-extralight tracking-[0.2em] uppercase text-white">
                {t("footer-bas.desc")}
              </span>
            <a
                href="https://visuanceagency.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                tabIndex={0}
                style={{ transform: "none" }}
            >
                <div className="relative overflow-hidden rounded-2xl p-1 bg-linear-to-br from-gray-50 to-gray-100 shadow-sm group-hover:shadow-md transition-all duration-700">
                    <img
                        src="/visuance-logo.webp"
                        alt="Visuance"
                        className="scale-140 h-16 w-auto opacity-85 group-hover:opacity-100 transition-all duration-700 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-linear-to-tr from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
            </a>
            <div className="w-px h-8 bg-linear-to-b from-transparent via-gray-300 to-transparent max-sm:rotate-90"></div>
            <a
                href="https://playtosky.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                tabIndex={0}
                style={{ transform: "none" }}
            >
        <span className="text-sm font-extralight tracking-[0.2em] uppercase text-white group-hover:text-gray-white transition-all duration-500 relative">
          Play to Sky
          <div className="absolute -bottom-1 left-0 w-0 h-px bg-linear-to-r from-gray-white to-gray-white group-hover:w-full transition-all duration-500"></div>
        </span>
            </a>
        </div>
    );
}