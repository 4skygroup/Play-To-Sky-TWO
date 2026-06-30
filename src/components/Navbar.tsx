import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LangSwitcher from "./LangSwitcher.tsx";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const { t } = useTranslation();

    const navItems = [
        { labelKey: "navbar.localisation", path: "/localisation" },
        { labelKey: "navbar.about",        path: "/about" },
        { labelKey: "navbar.contact",      path: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black flex items-center justify-between px-8 py-5">

            {/* Logo : à gauche en mobile, centré par rapport au header en desktop */}
            <NavLink
                to="/"
                className="shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2"
            >
                <img src="/playToSky.png" alt="play to sky logo" className="h-6" />
            </NavLink>

            {/* Lang switcher (desktop uniquement, à droite du logo dans le flux) */}
            <div className="hidden md:block">
                <LangSwitcher />
            </div>

            {/* ── Desktop nav ── */}
            <ul className="hidden md:flex items-center gap-10">
                {navItems.map(({ labelKey, path }) => (
                    <li key={path} className="relative">
                        <NavLink
                            to={path}
                            className={({ isActive }) =>
                                `font-glacial text-t5 transition-colors duration-200 flex items-center gap-1 ${
                                    isActive ? "text-white" : "text-white hover:text-gray-400"
                                }`
                            }
                        >
                            {t(labelKey)}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Hamburger (mobile uniquement, à droite) */}
            <button
                className={`md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50 relative ${menuOpen ? "invisible" : ""}`}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
            >
                <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>

            {/* ── Mobile menu ── */}
            <div
                className={`fixed inset-0 bg-black md:hidden flex flex-col transition-all duration-300 ${
                    menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                style={{ zIndex: 40 }}
            >
                {/* Croix de fermeture */}
                <button
                    className="absolute top-5 right-8 text-white text-3xl font-light leading-none"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Fermer le menu"
                >
                    ✕
                </button>

                {/* Logo centré */}
                <div className="flex justify-center mt-16 mb-12">
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>
                        <img src="/playToSky.png" alt="Pulse X" className="h-12" />
                    </NavLink>
                </div>

                {/* Lang switcher (mobile) */}
                <div className="flex justify-center mb-10">
                    <LangSwitcher />
                </div>

                {/* Items centrés */}
                <ul className="flex flex-col items-center gap-8 flex-1">
                    {navItems.map(({ labelKey, path }) => (
                        <li key={path} className="text-center">
                            <NavLink
                                to={path}
                                onClick={() => setMenuOpen(false)}
                                className="font-glacial text-t3 text-white"
                            >
                                {t(labelKey)}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mention en bas */}
                <p className="text-center text-white/50 text-t5 pb-8 font-glacial">
                    A Play To Sky Group Entity
                </p>
            </div>
        </nav>
    );
}