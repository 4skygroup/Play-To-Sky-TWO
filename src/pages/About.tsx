import Groupe from "../components/Groupe.tsx";
import AgenceList from "../components/agences/AgenceList.tsx";
import HeroFooter from "../components/HeroFooter.tsx";

export default function About() {
    return (
        <>
            <Groupe />
            <AgenceList />
            <HeroFooter titleKey="hero-bot-about.title" ctaKey="hero-bot-about.cta" subtitleKey="hero-bot-about.subtitle" />
        </>
    );
}