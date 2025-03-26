import { motion } from "framer-motion";
import { Cpu, Recycle, LineChart } from "lucide-react";

type MissionPoint = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export function Mission() {
  const missionPoints: MissionPoint[] = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Autonomous Collection",
      description: "Self-navigating boats that intelligently identify and collect waste from water bodies.",
      color: "bg-primary"
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Waste Processing",
      description: "Efficient sorting and processing of collected waste for proper disposal and recycling.",
      color: "bg-[#00A896]" // secondary color
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Data Collection",
      description: "Gathering valuable environmental data to monitor water quality and pollution patterns.",
      color: "bg-[#38E54D]" // accent color
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
    <section className="bg-[#F5F9FA] py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl mb-4">Our Mission</h2>
          <p className="max-w-3xl mx-auto text-lg">
            To develop innovative, autonomous solutions for water pollution reduction, preserving aquatic ecosystems for future generations.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {missionPoints.map((point, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center ${point.color} rounded-full text-white`}>
                {point.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">{point.title}</h3>
              <p>{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
