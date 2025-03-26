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
        
        <div className="mb-16">
          <div className="w-full">
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
