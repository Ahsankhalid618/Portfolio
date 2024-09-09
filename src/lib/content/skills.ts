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
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },

        // { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
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
        "Contributed in Hacktoberfest-2023 with 5 successful PR's ",
        'Engaged in hackathons by MLH (Major League Hacking) to enhance skills',
        'Consistently contributed to multiple repositories on GitHub',
      ],
      softwareSkills: [
        { name: 'Github', icon: 'skill-icons:github-light' },
        { name: 'OpenSource', icon: 'logos:opensource' },
        { name: 'Programming', icon: 'ph:code-fill' },
        { name: 'Pull Request', icon: 'octicon:feed-pull-request-open-16' },
      ],
    },
  ],
};
