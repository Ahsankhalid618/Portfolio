import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static/dynamic websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Converting Figma designs into Webpages',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'ExpressJs', icon: 'simple-icons:express' },
        { name: 'mongoDB', icon: 'logos:mongodb-icon' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
        { name: 'PostgreSQL', icon: 'vscode-icons:file-type-pgsql' },
        { name: 'Appwrite', icon: 'devicon:appwrite' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'Figma', icon: 'devicon:figma' },

        // { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'TypeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },

        // { name: 'angularjs', icon: 'logos:angular-icon' },

        { name: 'Git', icon: 'vscode-icons:file-type-git' },
      ],
    },
    {
      id: getId(),
      title: 'OpenSource Contributions',
      lottie: {
        light: '/lotties/opensource.json',
        dark: '/lotties/opensource.json',
      },
      points: [
        "Achieved 12+ successful PRs in Hacktoberfest 2023 & 2024, showcasing consistent open-source contributions.",
        'Top 200 in GSSoC among 5000 participants, excelling in open-source development.',
        'Competed in META HackerCup, NASA Space Apps, and MLH hackathons, sharpening problem-solving and teamwork.',
        'Active GitHub contributor, building a strong open-source presence and technical expertise.'
      ],
      softwareSkills: [
        { name: 'Github', icon: 'skill-icons:github-light' },
        { name: 'Major League Hacking', icon: 'simple-icons:majorleaguehacking' },
        { name: 'Devpost', icon: 'simple-icons:devpost' },
        { name: 'GSSoC', icon: 'octicon:feed-pull-request-open-16' },
      ],
    },
  ],
};
