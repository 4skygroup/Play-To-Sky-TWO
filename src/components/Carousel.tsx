import { useState } from "react";

type Slide = {
    src: string;
    bg?: string;
    border?: string;
};

const slides: Slide[] = [
    { src: "/carousel/pulseX.png",          bg: "#ffffff", border: "#ffffff" },
    { src: "/carousel/visuance.png",         bg: "#000000", border: "#ffffff" },
    { src: "/carousel/pulseXManagement.png", bg: "#000000", border: "#ffffff" },
];

export default function Carousel() {
    const [start, setStart] = useState(0);
    const prev = () => setStart((s) => (s - 1 + slides.length) % slides.length);
    const next = () => setStart((s) => (s + 1) % slides.length);
    const two = [slides[start % slides.length], slides[(start + 1) % slides.length]];

    return (
        <div className="min-h-screen bg-black flex items-center justify-center gap-6 md:gap-10 px-6 md:px-16 py-10 relative">
            <button onClick={prev} aria-label="Previous" className="text-white text-lg md:text-2xl opacity-60 hover:opacity-100 transition-opacity shrink-0 p-2">←</button>

            <div className="flex gap-3 md:gap-6 flex-1 justify-center">
                {two.map((slide, i) => (
                    <div key={(start + i) % slides.length} className={`aspect-square flex items-center justify-center shrink-0 w-[60vw] md:w-[min(420px,42vw)] ${i === 1 ? "hidden md:flex" : ""}`} style={{ backgroundColor: slide.bg, border: slide.border ? `2px solid ${slide.border}` : "none" }}>
                        <img src={slide.src} alt={`Slide ${(start + i) % slides.length + 1}`} className="w-full h-full object-contain" />
                    </div>
                ))}
            </div>

            <button onClick={next} aria-label="Next" className="text-white text-lg md:text-2xl opacity-60 hover:opacity-100 transition-opacity shrink-0 p-2">→</button>

            <div className="absolute bottom-6 flex gap-2">
                {slides.map((_, i) => (
                    <button key={i} onClick={() => setStart(i)} aria-label={`Slide ${i + 1}`} className={`w-2 h-2 rounded-full transition-colors ${i === start ? "bg-white" : "bg-neutral-600"}`} />
                ))}
            </div>
        </div>
    );
}