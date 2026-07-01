interface AgenceCardProps {
    category: string;
    name: string;
    description: string;
    tag: string;
}

export default function AgenceCard({ category, name, description, tag }: AgenceCardProps) {
    return (
        <div className="flex flex-col h-full gap-4 p-8 border border-white/10 rounded-lg">
            <span className="text-t6 uppercase tracking-widest text-white/40 font-glacial">{category}</span>
            <h3 className="text-h7 font-glacial font-bold text-white">{name}</h3>
            <p className="text-t5 leading-relaxed text-white/60 font-glacial flex-1">{description}</p>
            <span className="text-t6 font-glacial font-bold text-white mt-auto pt-2">{tag}</span>
        </div>
    );
}