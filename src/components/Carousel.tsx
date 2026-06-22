import { useState } from "react";

type Slide = {
    src: string;
    bg?: string;
    border?: string;
    href: string;
};

const slides: Slide[] = [
    { src: "/carousel/visuance.webp", bg: "#000000", border: "#ffffff", href:"https://www.visuanceagency.com/"},
    { src: "/carousel/pulseX.webp", bg: "#ffffff", border: "#ffffff", href:"https://www.pulsexagency.com/"},
    { src: "/carousel/pulseXManagement.webp", bg: "#EF5A98", border: "#ffffff" , href:"https://www.pulsexmanagement.com/"},

    { src: "/carousel/snackly.webp", bg: "#7209B7", border: "#ffffff" , href:"https://snacklyagency.com/"},
    { src: "/carousel/seofy.webp", bg: "#11676A", border: "#ffffff" , href:"https://www.seofyagency.com/"},
    { src: "/carousel/drox360.webp", bg: "#FC64IC", border: "#ffffff" , href:"https://drox360.com/"},

    { src: "/carousel/skyToBeMedia.webp", bg: "#111E85", border: "#ffffff" , href:"https://www.skytobemedia.com/"},
    { src: "/carousel/playToSkyProd.webp", bg: "#171717", border: "#ffffff" , href:"https://www.playtoskyproductions.com/"},
    { src: "/carousel/cybersky.webp", bg: "#F23333", border: "#ffffff" , href:"https://www.cyberskyagency.com/"},
];

export default function Carousel() {
    const [start, setStart] = useState(0);
    const prev = () => setStart((s) => (s - 1 + slides.length) % slides.length);
    const next = () => setStart((s) => (s + 1) % slides.length);
    const three = [
        slides[start % slides.length],
        slides[(start + 1) % slides.length],
        slides[(start + 2) % slides.length],
    ];

    return (
        <div className="min-h-1/2 bg-black flex items-center justify-center gap-6 md:gap-10 px-6 md:px-16 py-10 relative">
            <button onClick={prev} aria-label="Previous" className="text-white text-lg md:text-2xl opacity-60 hover:opacity-100 transition-opacity shrink-0 p-2">←</button>

            <div className="flex gap-3 md:gap-6 flex-1 justify-center">
                {three.map((slide, i) => (
                    <div
                        key={(start + i) % slides.length}
                        className={`group relative aspect-square flex items-center justify-center shrink-0 w-[60vw] md:w-[min(280px,28vw)] ${i > 0 ? "hidden md:flex" : ""}`}
                        style={{ backgroundColor: slide.bg, border: slide.border ? `2px solid ${slide.border}` : "none" }}
                    >
                        <a href={slide.href} className="relative w-full h-full flex items-center justify-center">
                            <img src={slide.src} alt={`Slide ${(start + i) % slides.length + 1}`} className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-50" />
                            <span className="absolute top-2 right-2 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
                        </a>
                    </div>
                ))}
            </div>

            <button onClick={next} aria-label="Next" className="text-white text-lg md:text-2xl opacity-60 hover:opacity-100 transition-opacity shrink-0 p-2">→</button>

        </div>
    );
}