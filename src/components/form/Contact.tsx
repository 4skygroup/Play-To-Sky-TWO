import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm.tsx";
import ContactInfoCards from "./ContactInfoCards.tsx";
import SEO from "../SEO.tsx";

export default function Contact() {
    const { t } = useTranslation();

    return (
        <>
            <SEO
                title="Contact — Play To Sky"
                description="Contactez Play To Sky pour présenter votre projet et être orienté vers l'agence ou les expertises les plus adaptées à vos besoins."
                path="/contact"
            />

            <section className="min-h-screen w-full bg-[#0a0a0a] px-6 py-20 lg:px-16 mt-4 md:mt-8">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">

                    {/* Gauche */}
                    <div className="flex flex-col gap-10">

                        <div className="max-w-xl">
                            <h2 className="text-t3 font-bold leading-tight tracking-tight text-white md:text-h6">
                                {t("contact.title")}
                            </h2>

                            <p className="mt-4 text-base leading-relaxed text-white/50">
                                {t("contact.subtitle")}
                            </p>
                        </div>

                        <ContactInfoCards />

                    </div>

                    {/* Droite */}
                    <ContactForm />

                </div>
            </section>
        </>
    );
}