export interface LegalLink {
    text: string;
    href: string;
}

export interface LegalSection {
    title: string;
    paragraphs?: string[];
    list?: string[];
    footer?: string;
    links?: LegalLink[];
}