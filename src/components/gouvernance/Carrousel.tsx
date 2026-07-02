import { useState, useRef, useEffect } from "react";
import { pers } from "./PersData.ts";
import PersCard from "./PersCard.tsx";
import {useTranslation} from "react-i18next";

const CARD_WIDTH = 300;
const GAP = 50;

export default function Carrousel() {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(0);
    const wrapRef = useRef(null);
    const [perView, setPerView] = useState(3);

    useEffect(() => {
        function updatePerView() {
            if (!wrapRef.current) return;
            const w = (wrapRef.current as HTMLDivElement).offsetWidth;
            const count = Math.max(1, Math.floor((w + GAP) / (CARD_WIDTH + GAP)));
            setPerView(Math.min(count, pers.length));
        }
        updatePerView();
        window.addEventListener("resize", updatePerView);
        return () => window.removeEventListener("resize", updatePerView);
    }, []);

    const maxIndex = Math.max(0, pers.length - perView);

    const goTo = (idx: number) => {
        setCurrent(Math.max(0, Math.min(idx, maxIndex)));
    };

    const offset = current * (CARD_WIDTH + GAP);

    // Touch support
    const touchStartX = useRef<null | number>(null);
    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
        touchStartX.current = null;
    };

    return (
        <div className="w-full py-10 px-17 relative">
            {/* Track */}
            <button
                onClick={() => goTo(current - 1)}
                disabled={current === 0}
                aria-label="Précédent"
                className="absolute left-0 w-13 h-13 top-1/2 -translate-y-1/2 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>
            <div
                ref={wrapRef}
                className="overflow-hidden"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <div
                    className="flex relative"
                    style={{
                        gap: `${GAP}px`,
                        transform: `translateX(-${offset}px)`,
                        transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                >
                    {pers.map((pers, index) => (
                        <PersCard
                            key={index}
                            name={pers.name}
                            description={t(pers.descriptionKey)}
                            link={pers.link}
                        />
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-5">
                {/* Dots */}
                <div className="flex items-center gap-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            aria-label={`Aller à ${i + 1}`}
                            className="h-1.5 rounded-full transition-all duration-200"
                            style={{
                                width: i === current ? 18 : 6,
                                backgroundColor: i === current ? "#3d1fc8" : "#d1d5db",
                                border: "none",
                                padding: 0,
                                cursor: "pointer",
                            }}
                        />
                    ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-2"></div>
            </div>
            <button
                onClick={() => goTo(current + 1)}
                disabled={current >= maxIndex}
                aria-label="Suivant"
                className="absolute right-0 w-13 h-13 top-1/2 -translate-y-1/2 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>
        </div>
    );
}