import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

type TeamMember = {
  image: string;
  name: string;
  role: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

export function Team() {
  const teamMembers: TeamMember[] = [
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Dr. Alex Chen",
      role: "Project Lead",
      bio: "Robotics & AI Specialist with 10+ years of experience in autonomous systems.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Dr. Maya Patel",
      role: "Environmental Scientist",
      bio: "Specializes in aquatic ecosystems and pollution mitigation strategies.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      name: "James Wilson",
      role: "Mechanical Engineer",
      bio: "Designs and optimizes the waste collection mechanisms for maximum efficiency.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      name: "Sarah Nguyen",
      role: "Software Developer",
      bio: "Creates the AI algorithms that power the SmartBoat's navigation and collection systems.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
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
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl mb-4">Our Team</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Meet the dedicated researchers and engineers behind the Aqua Trash SmartBoat project.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              variants={item} 
              className="text-center"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary"
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <h3 className="font-heading font-semibold text-xl">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{member.role}</p>
              <p className="text-sm mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-2">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} className="text-primary hover:text-primary-light">
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} className="text-primary hover:text-primary-light">
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
