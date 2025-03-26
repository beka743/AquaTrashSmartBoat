import { motion } from "framer-motion";
import { Satellite, Cog, PanelTop, Brain } from "lucide-react";
import { WaterAnimation } from "./WaterAnimation";
import { InteractiveDemo } from "./InteractiveDemo";

type TechComponent = {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function Technology() {
  const techComponents: TechComponent[] = [
    {
      icon: <Satellite className="h-5 w-5" />,
      title: "Navigation System",
      description: "GPS and computer vision technology for precise navigation and obstacle avoidance."
    },
    {
      icon: <Cog className="h-5 w-5" />,
      title: "Collection Mechanism",
      description: "Specialized intake system that efficiently captures floating waste without harming aquatic life."
    },
    {
      icon: <PanelTop className="h-5 w-5" />,
      title: "Power Source",
      description: "Solar-powered system with efficient energy storage for extended operation."
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: "AI Control System",
      description: "Machine learning algorithms that optimize collection routes and identify waste hotspots."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="technology" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl mb-4">The SmartBoat Technology</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Our autonomous waste collection boats combine cutting-edge AI, robotics, and environmental engineering.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap items-center mb-16">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative mx-auto max-w-md">
              <WaterAnimation>
                <svg 
                  width="100%" 
                  height="100%" 
                  viewBox="0 0 400 400" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="rounded-lg shadow-md"
                >
                  {/* Technical diagram of boat */}
                  <rect width="400" height="400" fill="#0B2E4D" opacity="0.8" />
                  
                  {/* Boat outline */}
                  <path d="M100,250 L300,250 L280,300 L120,300 Z" stroke="#38E54D" strokeWidth="2" fill="none" />
                  <path d="M120,300 L120,350 L280,350 L280,300" stroke="#38E54D" strokeWidth="2" fill="none" />
                  
                  {/* Components */}
                  <rect x="160" y="260" width="80" height="30" stroke="#00A896" strokeWidth="2" fill="none" />
                  <text x="175" y="280" fill="#00A896" fontFamily="monospace" fontSize="12">CPU</text>
                  
                  <circle cx="140" cy="330" r="15" stroke="#00A896" strokeWidth="2" fill="none" />
                  <text x="130" y="335" fill="#00A896" fontFamily="monospace" fontSize="12">M1</text>
                  
                  <circle cx="260" cy="330" r="15" stroke="#00A896" strokeWidth="2" fill="none" />
                  <text x="250" y="335" fill="#00A896" fontFamily="monospace" fontSize="12">M2</text>
                  
                  <rect x="180" y="310" width="40" height="20" stroke="#00A896" strokeWidth="2" fill="none" />
                  <text x="185" y="325" fill="#00A896" fontFamily="monospace" fontSize="12">BIN</text>
                  
                  <rect x="170" y="220" width="60" height="10" stroke="#00A896" strokeWidth="2" fill="none" />
                  <text x="173" y="214" fill="#00A896" fontFamily="monospace" fontSize="12">SOLAR</text>
                  
                  <circle cx="200" cy="190" r="10" stroke="#00A896" strokeWidth="2" fill="none" />
                  <text x="185" y="175" fill="#00A896" fontFamily="monospace" fontSize="12">CAM</text>
                  
                  {/* Sensors */}
                  <path d="M100,250 L80,270 L80,310 L100,330" stroke="#1A5F7A" strokeWidth="2" fill="none" strokeDasharray="4" />
                  <path d="M300,250 L320,270 L320,310 L300,330" stroke="#1A5F7A" strokeWidth="2" fill="none" strokeDasharray="4" />
                  
                  {/* Water detection */}
                  <path d="M80,310 C60,320 40,320 20,310" stroke="#4DD0E1" strokeWidth="2" fill="none" />
                  <path d="M320,310 C340,320 360,320 380,310" stroke="#4DD0E1" strokeWidth="2" fill="none" />
                  
                  {/* Legend */}
                  <text x="20" y="50" fill="#FFFFFF" fontFamily="monospace" fontSize="14" fontWeight="bold">SMARTBOAT TECHNICAL DIAGRAM</text>
                  <line x1="20" y1="70" x2="40" y2="70" stroke="#38E54D" strokeWidth="2" />
                  <text x="50" y="75" fill="#38E54D" fontFamily="monospace" fontSize="12">Structure</text>
                  
                  <line x1="20" y1="90" x2="40" y2="90" stroke="#00A896" strokeWidth="2" />
                  <text x="50" y="95" fill="#00A896" fontFamily="monospace" fontSize="12">Components</text>
                  
                  <line x1="20" y1="110" x2="40" y2="110" stroke="#1A5F7A" strokeWidth="2" strokeDasharray="4" />
                  <text x="50" y="115" fill="#1A5F7A" fontFamily="monospace" fontSize="12">Sensors</text>
                  
                  <line x1="20" y1="130" x2="40" y2="130" stroke="#4DD0E1" strokeWidth="2" />
                  <text x="50" y="135" fill="#4DD0E1" fontFamily="monospace" fontSize="12">Detection Range</text>
                </svg>
              </WaterAnimation>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h3 className="font-heading font-semibold text-2xl mb-4">Key Components</h3>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {techComponents.map((component, index) => (
                <motion.div key={index} variants={item} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                    {component.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-heading font-medium text-xl">{component.title}</h4>
                    <p>{component.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Interactive Demo Section */}
        <div className="bg-[#F5F9FA] p-8 rounded-lg">
          <h3 className="font-heading font-semibold text-2xl mb-4 text-center">How It Works: Interactive Demonstration</h3>
          
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 p-4">
              <InteractiveDemo />
            </div>
            
            <div className="w-full lg:w-1/2 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h4 className="font-heading font-semibold text-xl mb-4">Collection Process</h4>
                <ol className="space-y-4">
                  {[
                    "The SmartBoat uses sensors to detect waste in the water.",
                    "AI algorithms determine the optimal collection path.",
                    "The collection mechanism activates and gathers waste materials.",
                    "Collected waste is stored in onboard compartments for later disposal.",
                    "Data on collection location and waste type is recorded for analysis."
                  ].map((step, index) => (
                    <motion.li 
                      key={index} 
                      className="flex"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-2">
                        {index + 1}
                      </span>
                      <p>{step}</p>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
