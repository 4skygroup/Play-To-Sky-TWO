import { useTranslation } from "react-i18next";
import GouvernanceCard from "./GouvernaceCard.tsx";

interface GovernanceMember {
    name: string;
    role: string;
    linkedinUrl?: string;
    letsTalkUrl?: string;
}

export default function GouvernanceList() {
    const { t } = useTranslation();

    const members = t("governance.members", {
        returnObjects: true,
    }) as GovernanceMember[];

    return (
        <section className="bg-black px-6 py-12 md:px-16 md:py-20 w-full">
            <h2 className="text-white text-h6 md:text-h5 mb-10">
                {t("governance.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {members.map((member, index) => (
                    <GouvernanceCard
                        key={index}
                        name={member.name}
                        role={member.role}
                        linkedinUrl={member.linkedinUrl}
                        letsTalkUrl={member.letsTalkUrl}
                    />
                ))}
            </div>
        </section>
    );
}