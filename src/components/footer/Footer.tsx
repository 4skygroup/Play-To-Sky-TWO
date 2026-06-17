import React from "react";
import {entites, services, mentions, social} from "./FooterData.tsx";

const FooterColumn = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => (
    <div className="flex flex-col gap-4">
        <h4 className="text-t5 font-bold text-white">{title}</h4>
        <div className="flex flex-col gap-[0.55rem]">{children}</div>
    </div>
);

const FooterLink = ({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) => (
    <a
        href={href}
        className="text-t5 text-white hover:underline transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
    >
        {children}
    </a>
);

const Footer = () => {
    return (
        <footer className="relative w-full overflow-hidden bg-black pb-5">

            <div className="relative z-10 max-w-7xl mx-auto px-8 pt-12 pb-6">

                {/* Columns */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16">
                    {/* Logo */}
                    <div className="flex flex-col items-center mb-10 gap-5">
                        <a href="/" aria-label="Seofy – Accueil">
                            <img className="h-8" src="/playToSky.png" alt="Seofy" loading="lazy" />
                        </a>

                        <p className="text-white text-t5 text-center">
                            Follow our journey and connect with our community
                        </p>

                        <FooterColumn title="">
                            <div className="flex flex-wrap gap-3">
                                {social.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        aria-label={s.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-[38px] h-[38px] rounded-full border border-white/50 text-white hover:border-white hover:bg-white/10 transition-all duration-200"
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </FooterColumn>
                    </div>

                    <FooterColumn title="Services & Contact">
                        {services.map((link) => (
                            <FooterLink key={link.href} href={link.href}>
                                {link.label}
                            </FooterLink>
                        ))}
                    </FooterColumn>

                    <FooterColumn title="Mentions">
                        {mentions.map((link) => (
                            <FooterLink key={link.href} href={link.href}>
                                {link.label}
                            </FooterLink>
                        ))}
                    </FooterColumn>

                    <FooterColumn title="Play To Sky Group">
                        {entites.map((link) => (
                            <FooterLink key={link.href} href={link.href}>
                                {link.label}
                            </FooterLink>
                        ))}
                    </FooterColumn>

                </div>

                {/*/!* COPYRIGHT *!/*/}
                {/*<div className="mt-8 flex justify-center items-center gap-3 text-t3 font-regular text-white/60 tracking-normal">*/}
                {/*    <span>created by</span>*/}
                {/*    <img*/}
                {/*        src="/visuance.png"*/}
                {/*        alt="Visuance logo"*/}
                {/*        loading="lazy"*/}
                {/*        className="h-4"*/}
                {/*    />*/}
                {/*    <span>&</span>*/}
                {/*    <img*/}
                {/*        src="/play-to-sky.png"*/}
                {/*        alt="Play To Sky logo"*/}
                {/*        loading="lazy"*/}
                {/*        className="h-6"*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
        </footer>
    );
};

export default Footer;