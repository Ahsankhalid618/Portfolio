'use client';
import { projectsSection } from '@/lib/content/projects';
import { PROJECTS_INITIALLY } from '@/lib/utils/config';
import { sortByYear } from '@/lib/utils/helper';

import { Button, ProjectCard, Wrapper } from '@/components';

import { getSectionAnimation, projectVariants } from '@/styles/animations';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const { projects, title } = projectsSection;
  const [showMore, setShowMore] = useState(false);
  const topProjects = projects.slice(0, PROJECTS_INITIALLY);

  const visibleProjects = showMore ? projects : topProjects;

  return (
    <Wrapper id="projects" animate={false} {...getSectionAnimation}>
      <motion.h2 className="heading-secondary text-center !mb-16">
        {title}
      </motion.h2>
      <div className="flex flex-col items-center gap-16 max-w-6xl mx-auto">
        {sortByYear(visibleProjects).map((project, i) => {
          if (i < PROJECTS_INITIALLY) {
            return (
              <ProjectCard
                {...project}
                key={project.id}
                variants={projectVariants}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
              />
            );
          }

          return (
            <ProjectCard
              {...project}
              key={project.id}
              variants={projectVariants}
              initial="hidden"
              animate="show"
              custom={i - PROJECTS_INITIALLY}
            />
          );
        })}
      </div>
      {projects.length > PROJECTS_INITIALLY && (
        <Button
          size="lg"
          className="!mt-24"
          center
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'show less' : 'show more'}
        </Button>
      )}
    </Wrapper>
  );
};

export default Projects;
