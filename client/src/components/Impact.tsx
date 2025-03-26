import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { WaveDivider } from "@/components/ui/wave-divider";
import { Fish, Heart, Database, Leaf } from "lucide-react";

type StatItem = {
  value: number;
  label: string;
}

type BenefitItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function Impact() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.5 });
  
  const stats: StatItem[] = [
    { value: 500, label: "kg of Waste Collected" },
    { value: 85, label: "% Plastic Materials" },
    { value: 20, label: "Water Bodies Serviced" },
    { value: 95, label: "% Collection Efficiency" },
  ];
  
  const benefits: BenefitItem[] = [
    {
      icon: <Fish className="h-6 w-6" />,
      title: "Aquatic Life Protection",
      description: "Removing harmful waste prevents ingestion by marine creatures and protects their habitats from degradation."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Water Quality Improvement",
      description: "Cleaner water supports all forms of life and reduces health risks for communities that depend on these water sources."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Pollution Data Collection",
      description: "Our SmartBoats gather valuable data on pollution patterns, helping researchers address root causes."
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Sustainable Operation",
      description: "Solar-powered design ensures our solution has minimal environmental impact while solving pollution problems."
    }
  ];
  
  return (
    <section id="impact" className="py-16 bg-primary text-white">
      <WaveDivider position="bottom" className="mb-16" />
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl mb-4">Environmental Impact</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Our technology makes a significant difference in preserving water ecosystems and reducing pollution.
          </p>
        </motion.div>
        
        {/* Stats Section */}
        <div 
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white text-dark p-6 rounded-lg shadow-md text-center"
            >
              <StatNumber value={stat.value} isVisible={isInView} />
              <p className="font-heading font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#38E54D] flex items-center justify-center text-dark">
                {benefit.icon}
              </div>
              <div className="ml-4">
                <h4 className="font-heading font-semibold text-xl mb-2">{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatNumberProps {
  value: number;
  isVisible: boolean;
}

function StatNumber({ value, isVisible }: StatNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = Math.ceil(value / (duration / 50)); // Update every 50ms
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(start);
        }
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [isVisible, value]);
  
  return (
    <div className="text-[2.5rem] font-bold text-[#00A896]">
      {displayValue}
    </div>
  );
}
