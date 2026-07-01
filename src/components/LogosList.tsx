import React from "react";

export interface Logo {
    id: number;
    src: string;
    alt: string;
}

interface LogosGridProps {
    logos: Logo[];
}

export const LogosList: React.FC<LogosGridProps> = ({ logos }) => {
    return (
        <div className="w-full py-5 bg-black">
            <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center">
                {logos.map((logo) => (
                    <div key={logo.id} className="w-[200px] h-[100px] flex justify-center items-center border rounded-[12px]">
                        <img src={logo.src} alt={logo.alt} className="max-w-[80%] max-h-[60%] object-contain" loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogosList;