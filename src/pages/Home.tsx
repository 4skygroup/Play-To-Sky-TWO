import Hero from "../components/Hero.tsx";
import Carousel from "../components/Carousel.tsx";
import FeatureList from "../components/feature/FeatureList.tsx";
import TestimonialList from "../components/commentaire/CommentaireList.tsx";
import SliderInfini, { type Logo } from "../components/SliderInfini.tsx";
import HeroFooter from "../components/HeroFooter.tsx";
import SectionTop from "../components/SectionTop.tsx";
import Faq from "../components/faq/Faq.tsx";
import LogosList from "../components/LogosList.tsx";
import SEO from "../components/SEO.tsx";

export default function Home() {
  const partenaires: Logo[] = [
    { id: 1, src: "/logo/barriere.webp", alt: "barriere" },
    { id: 2, src: "/logo/canalPlus.webp", alt: "canal-plus" },
    { id: 3, src: "/logo/cartier.webp", alt: "cartier" },
    { id: 4, src: "/logo/chopard.webp", alt: "chopard" },
    { id: 5, src: "/logo/barriere.webp", alt: "barriere" },
    { id: 6, src: "/logo/canalPlus.webp", alt: "canal-plus" },
    { id: 7, src: "/logo/cartier.webp", alt: "cartier" },
    { id: 8, src: "/logo/chopard.webp", alt: "chopard" },
  ];

  const clients: Logo[] = [
    { id: 1, src: "/logo/meta.webp", alt: "meta" },
    { id: 2, src: "/logo/tiktok.webp", alt: "tiktok" },
    { id: 3, src: "/logo/youtube.webp", alt: "youtube" },
    { id: 4, src: "/logo/google.webp", alt: "google" },
  ];

  return (
    <>

        <SEO
            title="Play To Sky — Groupe d'agences créatives, digitales et technologiques"
            description="Play To Sky est le portail central d'un groupe d'agences spécialisées dans le branding, le digital, l'IT, le contenu, les médias et la production."
            path="/"
        />

      <Hero />
      <SliderInfini logos={partenaires} />
      <SectionTop title="home.titles.agency" />
      <Carousel />
      <FeatureList />
      <TestimonialList />
      <SectionTop title="home.titles.leaders" />
      <LogosList logos={clients} />
      <Faq />
      <HeroFooter
        titleKey="hero-bot.title"
        ctaKey="hero-bot.cta"
        subtitleKey="hero-bot.subtitle"
      />
    </>
  );
}
