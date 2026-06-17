import React from "react";

export interface Logo {
    id: number;
    src: string;
    alt: string;
}

interface SliderInfiniProps {
    logos: Logo[];
}

export const SliderInfini: React.FC<SliderInfiniProps> = ({ logos }) => {
    const duplicatedLogos = [...logos, ...logos];

    return (
        <div className="w-full overflow-hidden py-5 flex items-center bg-black">
            <div className="flex w-max animate-slide-left">
                {duplicatedLogos.map((logo, index) => (
                    <div
                        key={`${logo.id}-${index}`}
                        className="flex-shrink-0 w-[200px] h-[100px] mx-[15px] flex justify-center items-center border rounded-[12px]"
                    >
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className="max-w-[80%] max-h-[60%] object-contain"
                            loading="lazy"
                        />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderInfini;