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
            Hi, I am Ahsan Khalid, a final-year student of BS Software Engineering at <Link
              href="https://szabist-isb.edu.pk/"
              target="_blank"
              className="text-accent"
            >
              Szabist-Islamabad Pakistan
            </Link>
            , with a passion for front-end development. I have honed my skills
            in React.js, Next.js, JavaScript (ES6), CSS3, Bootstrap 5, and
            Tailwind CSS to build dynamic, interactive, responsive, and visually
            appealing user interfaces. I am also proficient in Firebase and Git,
            which I use to manage my projects and collaborate with others.I am a
            strong believer in user-centered design and always strive to create
            user-friendly and intuitive interfaces. I am also a keen learner and
            constantly exploring new technologies and trends.
          </p>
          <h2>
            <b>Volunteering :</b>
          </h2>
          <p>
            Outside of academics, I am actively involved in the tech community.
            I am a Microsoft Learn Student Ambassador (MLSA-Alpha) and Membership Coordinator at MLSA-Szabist Islamabad. In these roles, I work to facilitate knowledge sharing and collaboration among fellow students and professionals.
          </p>
          <ul className="list-disc">
            <li>
              <Link
                href="https://shorturl.at/bpEFG"
                target="_blank"
                className="text-accent"
              >
                Microsoft Learn Student Ambassador (MLSA-Alpha)
              </Link>
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
