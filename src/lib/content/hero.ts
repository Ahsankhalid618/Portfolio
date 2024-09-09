import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Ahsan Khalid.',
    tagline: 'I create visually pleasing solutions for the web.',
    description:
    "I'm a Full-Stack Web Developer who turns ideas into dynamic web experiences. With Next.js for both front-end and back-end, Node.js and Express.js for powerful server-side solutions, and MongoDB and PostgreSQL for versatile data management.",
    specialText: 'Currently available for a job & freelance',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};