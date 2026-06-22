interface FAQItem {
    id: number;
    question: string;
    answer: string;
}
const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 ease-in-out shrink-0"
        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
    >
        <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="#F23333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

interface FAQRowProps {
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
}

const FAQRow = ({
    item,
    isOpen,
    onToggle,
}: FAQRowProps) => {

    return (
        <div className="border-b border-[#2A2A2A]">

            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-5 px-0 text-left group"
                aria-expanded={isOpen}
            >
                <span
                    className="font-glacial text-t5 transition-colors duration-200 pr-4"
                    style={{ color: isOpen ? "#F23333" : "#E5E5E5" }}
                >
                    {item.question}
                </span>

                <ChevronIcon isOpen={isOpen} />
            </button>

            <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <p className="font-glacial text-t5 text-pulse-x-subtitle-gray pb-5 leading-relaxed">
                    {item.answer}
                </p>
            </div>

        </div>
    );
};

export default FAQRow;