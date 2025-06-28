'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';

import { Icon } from '@iconify/react';
import {
  AnimatePresence,
  motion,
  MotionProps,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ImageGalleryModal from './ImageGalleryModal';

const ProjectCard = ({
  name,
  url,
  repo,
  year,
  img,
  images,
  tags,
  description,
  ...rest
}: ProjectType & MotionProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // For image carousel
  const imageArray = images?.length ? images : [img, img, img]; // Use images array if available, otherwise use placeholder
  const [currentImage, setCurrentImage] = useState(0);

  // For modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Parallax effect for the image
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Auto-scroll images with staggered timing based on card id
  useEffect(() => {
    // Generate a random offset between 0-1000ms for staggered timing
    const randomOffset = Math.floor(Math.random() * 1000);

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageArray.length);
    }, 3000 + randomOffset); // Add random offset to the base interval

    return () => clearInterval(interval);
  }, [imageArray.length]);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  // Function to render description based on type
  const renderDescription = () => {
    if (!description) {
      return `A beautiful ${tags.join(
        ', '
      )} project showcasing modern web development techniques and best practices.`;
    }

    if (Array.isArray(description)) {
      return (
        <ul className="list-disc pl-5 space-y-1">
          {description.map((item, index) => (
            <li
              key={index}
              className="text-sm text-gray-600 dark:text-gray-300"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    }

    return description;
  };

  return domLoaded ? (
    <>
      <motion.div
        {...rest}
        ref={cardRef}
        className="w-full max-w-[900px] group"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row overflow-hidden transition-all duration-200 rounded-md shadow-xl bg-bg-secondary dark:shadow-2xl h-[28rem] border-2 border-accent">
          {/* Left side - Image carousel with parallax effect */}
          <div
            className="relative overflow-hidden md:w-1/2 h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
                style={{
                  scale: imageScale,
                  y: imageY,
                }}
                className="h-full w-full absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={imageArray[currentImage]}
                  alt={`${name} - image ${currentImage + 1}`}
                  fill
                  placeholder="blur"
                  blurDataURL={blurImageURL}
                  className="object-contain object-center h-full p-2"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={currentImage === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Explore button on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 z-10"
                >
                  <motion.button
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen(true);
                    }}
                    className="px-6 py-3 bg-accent text-white rounded-full flex items-center space-x-2 shadow-lg hover:bg-opacity-90 transition-all duration-300"
                  >
                    <Icon icon="ph:image-square-bold" width={20} height={20} />
                    <span>Open Gallery</span>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Image navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {imageArray.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentImage ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="p-6 md:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold capitalize group-hover:text-accent transition-colors duration-300">
                  {name}
                </h3>
                <span className="font-mono text-sm">{year}</span>
              </div>

              <p className="font-mono text-xs mb-6 capitalize">
                {tags.join(' | ')}
              </p>

              {/* Project description */}
              <div className="text-sm mt-8 text-gray-600 dark:text-gray-300">
                {renderDescription()}
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              {repo && (
                <a
                  href={repo}
                  className="flex items-center space-x-2 px-4 py-2 rounded-md bg-bg-primary hover:bg-accent hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="tabler:brand-github" width={20} height={20} />
                  <span className="text-sm">GitHub</span>
                </a>
              )}

              {url && (
                <a
                  href={url}
                  className="flex items-center space-x-2 px-4 py-2 rounded-md bg-accent text-white hover:bg-opacity-90 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="ci:external-link" width={20} height={20} />
                  <span className="text-sm">Preview</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Image Gallery Modal */}
      <ImageGalleryModal
        images={imageArray}
        projectName={name}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  ) : (
    <></>
  );
};

export default ProjectCard;
