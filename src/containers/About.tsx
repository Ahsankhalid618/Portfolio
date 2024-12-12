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
            Hi, I am Ahsan Khalid, a recent graduate with a BS in Software Engineering from <Link
              href="https://szabist-isb.edu.pk/"
              target="_blank"
              className="text-accent"
            >
              Szabist Islamabad - Pakistan. 
            </Link> I’m passionate about full-stack web development and skilled in using Next.js for both front-end and back-end solutions. My expertise extends to Node.js and Express.js for robust server-side development, with MongoDB and PostgreSQL handling diverse data needs. I focus on creating dynamic, responsive, and visually engaging web applications, and am proficient in JavaScript (ES6), CSS3, and Tailwind CSS. Additionally, I leverage Firebase for real-time functionalities and Git for effective project management and collaboration. Dedicated to user-centered design, I continually explore new technologies and trends to enhance my craft.
          </p>
          <h2>
            <b>Volunteering :</b>
          </h2>
          <p>
            Outside of academics, I was actively involved in the tech community. I served as an Ex-Microsoft Learn Student Ambassador (MLSA-BETA) and was the Membership Coordinator at MLSA-Szabist Islamabad. In these roles, I facilitated knowledge sharing and collaboration among students and professionals, contributing to a vibrant and engaged tech community.
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
