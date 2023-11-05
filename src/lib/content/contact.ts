import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
    title: 'get in touch',
    subtitle: "what's next",
    paragraphs: [
    'I am eager to collaborate and expand my knowledge.',
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
    ],
    link: `mailto:${author.email}`,
};