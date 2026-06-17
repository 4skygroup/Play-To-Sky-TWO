interface TestimonialCardProps {
    name: string
    role: string
    quote: string
    initial?: string
}

export default function TestimonialCard({ name, role, quote, initial = "A" }: TestimonialCardProps) {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-sm font-bold text-white">
                    {initial}
                </div>
                <div className="flex flex-col">
                    <span className="text-t5 font-bold text-white">{name}</span>
                    <span className="text-t6 font-bold text-white/60">{role}</span>
                </div>
            </div>
            <p className="text-t6 leading-relaxed text-white/70">{quote}</p>
        </div>
    )
}