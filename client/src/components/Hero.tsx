import { motion } from "framer-motion";
import { WaveDivider } from "@/components/ui/wave-divider";
import { Button } from "@/components/ui/button";

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
              className="aspect-video bg-[#1B3E5D] rounded-lg overflow-hidden relative"
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
                  className="max-w-xs"
                >
                  <svg 
                    width="400" 
                    height="250" 
                    viewBox="0 0 400 250" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                  >
                    <path d="M340 100H60C26.9 100 0 126.9 0 160V220C0 236.6 13.4 250 30 250H370C386.6 250 400 236.6 400 220V160C400 126.9 373.1 100 340 100Z" fill="#00A896"/>
                    <path d="M80 100H320L300 50H100L80 100Z" fill="#1A5F7A"/>
                    <rect x="150" y="60" width="100" height="30" rx="5" fill="#38E54D"/>
                    <circle cx="120" cy="170" r="15" fill="#F5F9FA"/>
                    <circle cx="280" cy="170" r="15" fill="#F5F9FA"/>
                    <path d="M170 180H230V210C230 215.5 225.5 220 220 220H180C174.5 220 170 215.5 170 210V180Z" fill="#1A5F7A"/>
                    <rect x="180" y="10" width="40" height="40" rx="5" fill="#1A5F7A"/>
                    <rect x="190" y="0" width="20" height="15" rx="2" fill="#38E54D"/>
                  </svg>
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
