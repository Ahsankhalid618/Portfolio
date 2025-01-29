import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Ahsan Khalid.',
  tagline: 'I build complex ideas into scalable web ecosystems',
  description:
    'I design and deploy full-stack solutions that solve real-world problems, From dynamic SaaS platforms to fully AI-integrated web applications. My toolkit? Next.js for speed, Node.js for power, and SQL/NoSQL databases for precision.',
  specialText: 'Currently available for a job & freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
