import { useState } from "react";
import { motion } from "framer-motion";
import { GalleryLightbox } from "./GalleryLightbox";

// Using random high-quality water/ocean/tech related images from Unsplash
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1527100673774-cce25eafaf7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "SmartBoat prototype on water"
  },
  {
    src: "https://images.unsplash.com/photo-1621265423975-d9195d692168?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Collection mechanism closeup"
  },
  {
    src: "#",
    alt: "Technical team working on SmartBoat"
  },
  {
    src: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Waste collection results"
  },
  {
    src: "#",
    alt: "SmartBoat navigation system"
  },
  {
    src: "#" ,
    alt: "Testing in controlled environment"
  }
];

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % galleryImages.length
    );
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="gallery" className="py-16 bg-[#F5F9FA]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl mb-4">Project Gallery</h2>
          <p className="max-w-3xl mx-auto text-lg">
            See the SmartBoat in action and explore our development process.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => openLightbox(index)}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-64 w-full relative">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <GalleryLightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={goToPrevious}
        onNext={goToNext}
      />
    </section>
  );
}
