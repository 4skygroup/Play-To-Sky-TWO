import Hero from "../components/Hero.tsx";
import Carousel from "../components/Carousel.tsx";
import FeatureList from "../components/feature/FeatureList.tsx";

export default function Home() {
    return (
        <>
            <Hero />
            <Carousel />
            <FeatureList />
        </>
    );
}