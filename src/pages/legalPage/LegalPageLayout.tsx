import { useTranslation } from "react-i18next";
import type { LegalSection } from "./Types.ts";

interface LegalPageLayoutProps {
    translationKey: string;
}

export default function LegalPageLayout({ translationKey }: LegalPageLayoutProps) {
    const { t } = useTranslation();
    const pageTitle = t(`${translationKey}.pageTitle`);
    const sections = t(`${translationKey}.sections`, { returnObjects: true }) as LegalSection[];

    return (
        <main className="min-h-screen bg-black font-glacial px-6 py-20 md:px-16 lg:px-32">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-h6 font-bold text-white mb-8">{pageTitle}</h1>

                <div className="space-y-10">
                    {sections.map((section) => (
                        <section key={section.title}>
                            <h2 className="text-t2 font-bold text-white mb-3">{section.title}</h2>

                            <div className="text-t5 text-white leading-relaxed space-y-3">
                                {section.paragraphs?.map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}

                                {section.list && section.list.length > 0 && (
                                    <ul className="space-y-1 list-none">
                                        {section.list.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0 mt-2"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {section.footer && <p>{section.footer}</p>}

                                {section.links?.map((link, i) => (
                                    <p key={i}>
                                        {link.text}{" "}
                                        <a
                                            href={link.href}
                                            className="underline"
                                            target={link.href.startsWith("http") ? "_blank" : undefined}
                                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        >
                                            {link.href.replace("mailto:", "")}
                                        </a>
                                    </p>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}