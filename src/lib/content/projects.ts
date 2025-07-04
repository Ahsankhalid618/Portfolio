import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'All Projects',
  projects: [
    {
      id: getId(),
      name: 'ASOPLUS SaaS',
      url: 'https://asoplus.vercel.app/',
      repo: '',
      img: '/asoplus.png',
      year: 2025,
      tags: ['NextJs', 'Appwrite', 'Canvas', 'ShadCN'],
      description: [
        'Built a multi-role SaaS platform using Next.js and Appwrite with SuperAdmin, Admin, User, and Customer hierarchies',
        'Implemented secure email-based invite system with automatic account creation and role-specific permissions',
        'Designed a dynamic dashboard with role-based access control and real-time company/user data management',
        'Developed drag-and-drop template editor with live customization and data binding for safety report creation',
        'Integrated PDF generation feature allowing users to export customized templates with company-specific branding',
        'Ensured data isolation and security for each company, supporting scalable and structured storage via Appwrite',
      ],

      images: [
        '/Asoplus/1.png',
        '/Asoplus/2.png',
        '/Asoplus/3.png',
        '/Asoplus/4.png',
        '/Asoplus/5.png',
        '/Asoplus/6.png',
        '/Asoplus/7.png',
        '/Asoplus/8.png',
        '/Asoplus/9.png',
        '/Asoplus/10.png',
        '/Asoplus/11.png',
        '/Asoplus/12.png',
        '/Asoplus/13.png',
        '/Asoplus/14.png',
        '/Asoplus/15.png',
        '/Asoplus/16.png',
      ],
    },
    {
      id: getId(),
      name: 'Plyzrx Online Game (Unity + React )',
      url: 'https://plyzrx.vercel.app/',
      repo: '',
      img: '/saas.png',
      description: [
        'Integrated Unity-based mobile game with a full-featured Next.js + Appwrite admin dashboard',
        'Implemented secure tier-based tournament access with PayPal and Bankful payment gateways',
        'Built real-time transaction logging and player activity tracking in the admin panel',
        'Designed player management tools including banning, tournament control, and gameplay logs',
        'Developed automated payout system to return winnings through original payment methods',
        'Enforced IP-based geo-restrictions for region-specific access and compliance',
      ],

      images: [
        '/plyzrx/1.png',
        '/plyzrx/2.png',
        '/plyzrx/3.png',
        '/plyzrx/4.png',
        '/plyzrx/5.png',
        '/plyzrx/6.png',
        '/plyzrx/7.png',
        '/plyzrx/8.jpg',
        '/plyzrx/9.jpg',
        '/plyzrx/10.png',
        '/plyzrx/11.png',
        '/plyzrx/12.png',
        '/plyzrx/13.png',
        '/plyzrx/14.png',
      ],
      year: 2025,
      tags: ['NextJs', 'Unity', 'PayPal', 'Bankful'],
    },
    {
      id: getId(),
      name: 'BlockchainCap',
      url: 'https://blockchain-fyp.vercel.app/',
      repo: '',
      img: '/fyp.png',
      description: [
        'Built a decentralized finance (DeFi) platform using Next.js, Node.js, and Web3.js on Ethereum',
        'Integrated CoinMarketCap API to display real-time crypto data including prices, charts, and trends',
        'Developed Uniswap-based token converter for live asset exchange and management',
        'Designed a secure system for handling and displaying transaction history using MongoDB',
        'Created a modern, responsive UI with Tailwind CSS for smooth user experience across devices',
        'Ensured decentralized authentication and blockchain interaction without deploying custom smart contracts',
      ],

      images: [
        '/BlockchainCap/1.png',
        '/BlockchainCap/2.png',
        '/BlockchainCap/3.png',
        '/BlockchainCap/4.png',
        '/BlockchainCap/5.png',
        '/BlockchainCap/6.png',
        '/BlockchainCap/7.png',
        '/BlockchainCap/8.png',
        '/BlockchainCap/9.png',
        '/BlockchainCap/10.png',
      ],
      year: 2024,
      tags: ['NextJs', 'TailwindCSS', 'Blockchain', 'Web3.js'],
    },
    {
      id: getId(),
      name: 'ChatWeb Room (Admin Controls)',
      url: 'https://chatroom111.netlify.app/',
      repo: '',
      img: '/ocr.png',
      description: [
        'Developed a real-time chat application using Socket.io with secure, private messaging architecture',
        'Implemented dynamic room creation with isolated Admin-to-User conversations and full moderation controls',
        'Built functionality for sending text, PDFs, documents, and images in real-time with upload previews',
        'Created user authentication and role-based access system for managing chat permissions',
        'Integrated MongoDB to persist messages and maintain structured chat history across sessions',
        'Designed a responsive, user-friendly UI for both desktop and mobile using modern web technologies',
      ],

      images: [
        '/chatweb/1.png',
        '/chatweb/2.png',
        '/chatweb/3.png',
        '/chatweb/4.png',
        '/chatweb/5.png',
        '/chatweb/6.png',
        '/chatweb/7.png',
        '/chatweb/8.png',
        '/chatweb/9.png',
      ],
      year: 2024,
      tags: ['ReactJS', 'Socket.io', 'NodeJS', 'MongoDB'],
    },
    {
      id: getId(),
      name: 'OCR Extractor',
      url: 'https://ocr-extractor.vercel.app/',
      repo: '',
      img: '/ocr.png',
      description: [
        'Built an advanced OCR tool using Llama-OCR for accurate text extraction from images and documents',
        'Designed a modern, user-friendly interface using ShadCN UI components for seamless interaction',
        'Implemented multi-format file support with efficient text parsing and processing pipeline',
        'Enabled automatic conversion of extracted text to Markdown format with styling preserved',
        'Added export options including PDF generation and integrated Text-to-Speech functionality',
        'Optimized accuracy and performance for handling diverse document types and use cases',
      ],

      images: ['/OCR/1.png', '/OCR/2.png'],
      year: 2024,
      tags: ['NextJs', 'Llama-OCR', 'ShadCN'],
    },

    {
      id: getId(),
      name: 'SkillSync',
      url: 'https://profile-sable-nu.vercel.app/',
      repo: '',
      img: '/profile.png',
      year: 2024,
      description: [
        'Built a developer-centric portfolio generator using Next.js 14, NextUI, and MongoDB',
        'Integrated GitHub and LeetCode APIs to automatically fetch projects, contributions, and achievements',
        'Implemented customizable profiles with user-uploaded banners, avatars, headlines, and contact info',
        'Created interactive skill visualizations and charts to highlight technical expertise',
        'Developed a secure authentication system with NextAuth and persistent user data storage',
        'Designed responsive and modern layouts using ShadCN components for a polished user experience',
      ],

      images: ['/skillsync/profile.png', '/skillsync/2.png'],
      tags: ['NextJs', 'GitHubAPI', 'MongoDB', 'ShadCN'],
    },
    {
      id: getId(),
      name: 'SaaS Business Website',
      url: 'https://saas-blush-beta.vercel.app/',
      repo: '',
      img: '/saas.png',
      description: [
        'Designed modern business website with sleek UI components',
        'Created smooth animations using Framer Motion',
        'Built responsive pricing plan comparison tables',
        'Implemented customer testimonial carousel for social proof',
        'Developed interactive product feature showcases',
        'Optimized performance with Next.js and TailwindCSS',
      ],
      images: [
        '/SaaS/1.png',
        '/SaaS/2.png',
        '/SaaS/3.png',
        '/SaaS/4.png',
        '/SaaS/5.png',
        '/SaaS/6.png',
        '/SaaS/7.png',
      ],
      year: 2024,
      tags: ['NextJs', 'TailwindCSS', 'Framer'],
    },
    {
      id: getId(),
      name: 'FAQ Genie',
      url: 'https://faq-genie.vercel.app/',
      repo: 'https://github.com/Ahsankhalid618/FaqGenie',
      img: '/FaqGenie.png',
      year: 2024,
      description: [
        'Built AI-powered FAQ generator using Google Gemini-flash',
        'Automated creation of comprehensive FAQ sections',
        'Analyzed website content to generate relevant questions',
        'Implemented natural language processing for answer generation',
        'Created user-friendly interface for FAQ customization',
        'Developed export options for generated FAQ content',
      ],
      tags: ['NextJs', 'TailwindCSS', 'Gemini-flash', 'Clerk'],
    },

    {
      id: getId(),
      name: 'RealEstate Pakistan',
      url: 'https://real-estate-pakistan.vercel.app/',
      repo: 'https://github.com/Ahsankhalid618/RealEstate-Pakistan',
      img: '/RealEstate.png',
      description: [
        'Developed comprehensive property listing platform for Pakistani market',
        'Built advanced search filters with location-based results',
        'Created detailed agent profiles and contact system',
        'Implemented property inquiry and messaging functionality',
        'Designed responsive UI with Material UI components',
        'Integrated map-based property visualization',
      ],
      images: [
        '/RealEstate/RealEstate.png',
        '/RealEstate/2.png',
        '/RealEstate/3.png',
        '/RealEstate/4.png',
        '/RealEstate/5.png',
        '/RealEstate/6.png',
      ],
      year: 2024,
      tags: ['ReactJs', 'MUI'],
    },
  ],
};
