interface SectionTitleProps {
    title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
    return (
        <section className="bg-black px-4">
            <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-t-[28px] bg-black">

                {/* Dégradé bleu */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
                            linear-gradient(
                                180deg,
                                #020B6A 0%,
                                #01074A 40%,
                                #000000 100%
                            )
                        `,
                    }}
                />

                {/* Contenu */}
                <div className="relative z-10 flex items-center justify-center px-6 py-12">
                    <h2 className="font-glacial text-white text-t3 md:text-h5 font-normal text-center">
                        {title}
                    </h2>
                </div>

            </div>
        </section>
    );
}