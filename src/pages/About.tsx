import Groupe from "../components/Groupe.tsx";
import AgenceList from "../components/agences/AgenceList.tsx";
import HeroFooter from "../components/HeroFooter.tsx";
import Carrousel from "../components/gouvernance/Carrousel.tsx";
import {t} from "i18next";

export default function About() {
    return (
        <>
            <Groupe />
            <AgenceList />

            <section className="bg-black flex flex-col max-sm:px-5 max-sm:py-15 sm:p-25 gap-y-17.5 items-center">
                <p className="text-h6 md:text-h5 font-glacial font-bold text-white mb-4">
                    {t("gouvernance.title")}
                </p>
                <div className="relative overflow-x-hidden w-full max-w-310">
                    <div className="flex overflow-x-scroll gap-12.5 max-w-310 py-1.25 no-scrollbar max-xl:w-full min-w-75">
                        <Carrousel />
                    </div>
                </div>
            </section>

            <HeroFooter titleKey="hero-bot-about.title" ctaKey="hero-bot-about.cta" subtitleKey="hero-bot-about.subtitle" />
        </>
    );
}