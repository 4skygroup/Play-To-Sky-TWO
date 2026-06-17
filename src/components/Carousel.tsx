import { useState } from "react";

type Slide = {
    src: string;
    bg?: string;
    border?: string;
    href: string;
};

const slides: Slide[] = [
    { src: "/carousel/visuance.png", bg: "#000000", border: "#ffffff", href:"https://www.visuanceagency.com/"},
    { src: "/carousel/pulseX.png", bg: "#ffffff", border: "#ffffff", href:"https://www.pulsexagency.com/"},
    { src: "/carousel/pulseXManagement.png", bg: "#EF5A98", border: "#ffffff" , href:"https://www.pulsexmanagement.com/"},

    { src: "/carousel/snackly.png", bg: "#7209B7", border: "#ffffff" , href:"https://snacklyagency.com/"},
    { src: "/carousel/seofy.png", bg: "#11676A", border: "#ffffff" , href:"https://www.seofyagency.com/"},
    { src: "/carousel/drox360.png", bg: "#FC64IC", border: "#ffffff" , href:"https://drox360.com/"},

    { src: "/carousel/skyToBeMedia.png", bg: "#111E85", border: "#ffffff" , href:"https://www.skytobemedia.com/"},
    { src: "/carousel/playToSkyProd.png", bg: "#171717", border: "#ffffff" , href:"https://www.playtoskyproductions.com/"},
    { src: "/carousel/cybersky.png", bg: "#F23333", border: "#ffffff" , href:"https://www.cyberskyagency.com/"},
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
                        className={`aspect-square flex items-center justify-center shrink-0 w-[60vw] md:w-[min(280px,28vw)] ${i > 0 ? "hidden md:flex" : ""}`}
                        style={{ backgroundColor: slide.bg, border: slide.border ? `2px solid ${slide.border}` : "none" }}
                    >
                        <a href={slide.href}>
                            <img src={slide.src} alt={`Slide ${(start + i) % slides.length + 1}`} className="w-full h-full object-contain" />
                        </a>
                    </div>
                ))}
            </div>

            <button onClick={next} aria-label="Next" className="text-white text-lg md:text-2xl opacity-60 hover:opacity-100 transition-opacity shrink-0 p-2">→</button>

            {/*<div className="absolute bottom-3 flex gap-2">*/}
            {/*    {slides.map((_, i) => (*/}
            {/*        <button key={i} onClick={() => setStart(i)} aria-label={`Slide ${i + 1}`} className={`w-2 h-2 rounded-full transition-colors ${i === start ? "bg-white" : "bg-neutral-600"}`} />*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
}