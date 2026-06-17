import Hero from "../components/Hero.tsx";
import Carousel from "../components/Carousel.tsx";
import FeatureList from "../components/feature/FeatureList.tsx";
import TestimonialList from "../components/commentaire/CommentaireList.tsx";
import SliderInfini, {type Logo} from "../components/SliderInfini.tsx";
import HeroFooter from "../components/HeroFooter.tsx";

export default function Home() {
    const partenaires: Logo[] = [
        { id: 1, src: "/logo/barriere.png", alt: "barriere" },
        { id: 2, src: "/logo/canalPlus.png", alt: "canal-plus" },
        { id: 3, src: "/logo/cartier.png", alt: "cartier" },
        { id: 4, src: "/logo/chopard.png", alt: "chopard" },
        { id: 5, src: "/logo/barriere.png", alt: "barriere" },
        { id: 6, src: "/logo/canalPlus.png", alt: "canal-plus" },
        { id: 7, src: "/logo/cartier.png", alt: "cartier" },
        { id: 8, src: "/logo/chopard.png", alt: "chopard" },
    ];

    const clients: Logo[] = [
        { id: 1, src: "/logo/tiktok.png", alt: "tiktol" },
        { id: 2, src: "/logo/meta.png", alt: "meta" },
        { id: 3, src: "/logo/tiktok.png", alt: "tiktol" },
        { id: 4, src: "/logo/meta.png", alt: "meta" },
        { id: 5, src: "/logo/tiktok.png", alt: "tiktol" },
        { id: 6, src: "/logo/meta.png", alt: "meta" },
    ];

    return (
        <>
            <Hero />
            <SliderInfini logos={partenaires} />
            <Carousel />
            <FeatureList />
            <TestimonialList />
            <SliderInfini logos={clients} />
            <HeroFooter />
        </>
    );
}