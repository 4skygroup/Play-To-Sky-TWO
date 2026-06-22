import { useState } from "react";
import { useTranslation } from "react-i18next";
import FAQRow from "./FaqRow.tsx";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const FAQ = () => {
    const { t } = useTranslation();
    const faqData = t("faq.items", { returnObjects: true }) as FAQItem[];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full bg-black flex flex-col items-center px-6 py-16">

            <h2 className="font-glacial text-h7 text-white mb-12 tracking-widest uppercase">
                {t("faq.title")}
            </h2>

            <div className="w-full max-w-2xl">

                {faqData.map((item, index) => (
                    <FAQRow
                        key={item.id}
                        item={item}
                        isOpen={openIndex === index}
                        onToggle={() =>
                            setOpenIndex(
                                openIndex === index ? null : index
                            )
                        }
                    />
                ))}

            </div>

        </section>
    );
};

export default FAQ;