'use client';
import { blurImageURL } from '@/lib/utils/config';

import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ImageGalleryModalProps {
  images: string[];
  projectName: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageGalleryModal = ({
  images,
  projectName,
  isOpen,
  onClose,
}: ImageGalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight')
        setCurrentIndex((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft')
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        onClick={onClose}
      >
        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl p-2 md:p-4 bg-bg-secondary rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-bg-primary hover:bg-accent transition-colors duration-300"
            aria-label="Close modal"
          >
            <Icon icon="mdi:close" width={24} height={24} />
          </button>

          {/* Project Name */}
          <h3 className="text-xl font-bold text-center mb-4 text-accent">
            {projectName}
          </h3>

          {/* Image Container */}
          <div className="relative h-[60vh] w-full overflow-hidden rounded-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`${projectName} - image ${currentIndex + 1}`}
                  fill
                  placeholder="blur"
                  blurDataURL={blurImageURL}
                  className="object-contain"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority
                  loading="eager"
                  quality={80}
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(
                  (prev) => (prev - 1 + images.length) % images.length
                );
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg-primary/70 hover:bg-accent transition-colors duration-300"
              aria-label="Previous image"
            >
              <Icon icon="mdi:chevron-left" width={28} height={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((prev) => (prev + 1) % images.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg-primary/70 hover:bg-accent transition-colors duration-300"
              aria-label="Next image"
            >
              <Icon icon="mdi:chevron-right" width={28} height={28} />
            </button>
          </div>

          {/* Image Pagination */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-accent scale-125' : 'bg-gray-400'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-bg-primary/70 px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageGalleryModal;
