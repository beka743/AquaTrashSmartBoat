import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function GalleryLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent scrolling when lightbox is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-4xl mx-auto px-4">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none z-10"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lightbox-content"
            >
              <img
                src={images[currentIndex]?.src}
                alt={images[currentIndex]?.alt}
                className="max-h-[80vh] max-w-full mx-auto"
              />
              <p className="text-white mt-4 text-center font-heading">
                {images[currentIndex]?.alt}
              </p>
            </motion.div>

            <button
              onClick={onPrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>

            <button
              onClick={onNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
