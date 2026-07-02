import type { PersProp } from "./PersProp.tsx";

export default function PersCard({ name, description, link }: PersProp) {
    return (
        <a href={link}>
            <article className="flex flex-col items-center max-md:gap-y-8 md:gap-y-26.25 max-md:px-6 max-md:py-8 md:px-15 md:py-12.5 bg-snackly-blue max-md:w-[250px] md:w-fit h-fit rounded-r3 text-white">
                <img src="/linkedin.webp" alt="LinkedIn Logo" className="max-md:w-28 md:w-40" loading="lazy" />
                <div className="max-md:w-36 md:w-45 h-fit max-md:gap-y-6 md:gap-y-15 flex flex-col items-center text-center">
                    <span className="font-bold lg:text-t3 max-lg:text-t5">{name}</span>
                    <span className="lg:text-t4 max-lg:text-t5">{description}</span>
                </div>
            </article>
        </a>
    );
}