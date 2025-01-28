import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    
    {
      company: "Web Evolution",
      companyUrl: 'https://webevolutioncompany.com/',
      role: 'Associate Software Engineer',
      started: 'October 2023',
      upto: 'Present',
      tasks: [
        'Developed real time solutions like websockets with Node, streamlining data retrieval for improved site performance',
        'Developed responsive AI solutions with React applications, boosting user engagement and increasing retention by 25%',
        'Optimized and refactored code, reducing load times by 15% and boosting site performance across multiple platforms',
        'Developed Saas solution with React, NextJs, and MongoDB, improving quality and data management efficiency by 30%',
      ],
    },
    {
      company: 'Upwork-Freelance',
      companyUrl: 'https://www.upwork.com/',
      role: 'Software Engineer',
      started: 'August 2023',
      upto: 'Present',
      tasks: [
        'Developed custom web applications using React, Node.js, and Next.Js, improving client satisfaction and efficiency.',
        'Implemented end-to-end AI LLM solutions for clients, building real time dashboards and integrating third-party services.',
        'Developed real time features with WebSockets, optimizing the server-side and client-side code for seamless data flow',
        'Consistently delivered successful projects, exceeding client expectations.',
      ],
    },
    {
      company: "Bytewise Limited",
      companyUrl: 'https://www.bytewiseltd.com/',
      role: 'Intern Software Engineer',
      started: 'May 2023',
      upto: 'September 2023',
      tasks: [
        'Developed 100+ user-facing features in NextJs and Node, reducing latency by 20% and improving overall optimization',
        'Developed and optimized REST API’s with ReactJs and NextJs, enhancing dataset retrieval by 30% for 10k+ requests.',
        'Improved and optimized site performance by 25% for 1,000+ daily visitors through advanced Redux and Next.js SSR.',
        'Contributed to product improvements by implementing scalable web services in a cloud environment like (AWS, GCP).'
      ],
    }
,    
  ],
};
