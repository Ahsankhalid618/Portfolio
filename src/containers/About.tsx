'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5 text-justify">
          <p>
          Hi, I’m Ahsan Khalid, a graduate with a BS in Software Engineering from <Link
              href="https://szabist-isb.edu.pk/"
              target="_blank"
              className="text-accent"
            >
              Szabist Islamabad - Pakistan. 
            </Link> I specialize in crafting scalable, AI-driven web solutions using modern full-stack technologies. With 3+ years of hands-on experience, I excel in leveraging Next.js, React, and Node.js to build performant SaaS applications, real-time systems, and LLM-integrated platforms that solve complex user problems. My expertise spans end-to-end development, from architecting AI/LLM solutions (like OCR text extraction and chatbots) to optimizing server-side performance with Express.js, MongoDB, and PostgreSQL. I engineered AI-powered React applications that boosted user retention, while my freelance work on Upwork involved deploying custom LLM dashboards and WebSocket-driven features to streamline client workflows.
          </p>
          <h2>
            <b className='text-accent'>Activities :</b>
          </h2>
          <p>
          As a <strong>Microsoft Learn Student Ambassador</strong> and <strong>Membership Coordinator</strong> at MLSA-SZABIST, I organized tech workshops and events, bridging academia and industry trends while fostering innovation. Passionate about open-source, I actively contribute to global projects through <strong>Hacktoberfest</strong> and <strong>GSSoC</strong>, enhancing my collaborative coding and technical expertise. I excel in fast-paced, collaborative settings, having competed in <strong>META HackerCup</strong>, <strong>NASA Space Apps</strong>, and <strong>MLH hackathons</strong>, where I built functional prototypes and honed my problem-solving skills. My robust GitHub presence reflects my commitment to community-driven, real-world solutions.
          </p>
          <ul className="list-disc">
            <li className='text-accent'>
              
                Microsoft Learn Student Ambassador (MLSA-β)
              
            </li>
            <li>
              <Link
                href="https://commalliance.tech/team"
                target="_blank"
                className="text-accent"
              >
                Membership Coordinator, MLSA-Szabist Islamabad
              </Link>
            </li>
          </ul>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
