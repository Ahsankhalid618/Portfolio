import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Ahsan Khalid.',
    tagline: 'I create visually pleasing interfaces for the web.',
    description:
    "I'm a passionate Front-End web developer having an experience of web applications with React.js & Next.js with CSS3 (alongside TailwindCSS and Bootstrap5).",
    specialText: 'Currently available for a job & freelance',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};