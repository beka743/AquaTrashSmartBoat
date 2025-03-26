import { motion } from "framer-motion";
import { WaveDivider } from "@/components/ui/wave-divider";
import { Button } from "@/components/ui/button";
import boatImage from "../assets/3d-boat.png";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="pt-24 bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading font-bold text-4xl md:text-5xl leading-tight mb-4"
            >
              Autonomous Waste Collection for Cleaner Waters
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg mb-8 text-neutral"
            >
              The Aqua Trash SmartBoat project is developing autonomous boats that actively collect waste from water bodies, helping to reduce water pollution and protect aquatic ecosystems.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                onClick={() => scrollToSection("technology")}
                className="bg-[#38E54D] text-dark hover:bg-[#50F265] font-heading font-semibold"
                size="lg"
              >
                Explore Technology
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-black text-white hover:bg-gray-800 font-heading font-semibold border-2 border-black"
                size="lg"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="min-h-[350px] bg-gradient-to-b from-[#1B3E5D] to-[#40A0FF] rounded-lg overflow-hidden relative shadow-xl p-4"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="w-4/5 md:w-3/4 lg:w-2/3"
                >
                  <img 
                    src={boatImage} 
                    alt="Aqua Trash SmartBoat 3D Model" 
                    className="w-full h-auto object-contain max-h-[300px]"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <WaveDivider position="top" />
    </section>
  );
}
