import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

type TeamMember = {
  image: string;
  name: string;
  role: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
};

export function Team() {
  const teamMembers: TeamMember[] = [
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Bereket Kebede Bedada",
      role: "Mechanical Engineering student",
      bio: "Higher colleges of Technology",
      social: {
        linkedin: "#",
        email: "mailto:bereket.k@example.com",
      },
    },
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Bereket Gezahegn Markos",
      role: "Mechanical Engineering student",
      bio: "Higher colleges of Technology",
      social: {
        linkedin: "#",
        email: "mailto:bereket.g@example.com",
      },
    },
    {
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      name: "Ahmed Hassan",
      role: "Mechanical Engineering student",
      bio: "Higher colleges of Technology",
      social: {
        linkedin: "#",
        email: "mailto:ahmed.h@example.com",
      },
    },
    {
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      name: "Fatima Ali",
      role: "Mechanical Engineering student",
      bio: "Higher colleges of Technology",
      social: {
        linkedin: "#",
        email: "mailto:fatima.a@example.com",
      },
    },
    {
      image: "https://randomuser.me/api/portraits/men/23.jpg",
      name: "Mohammed Rahman",
      role: "Mechanical Engineering student",
      bio: "Higher colleges of Technology",
      social: {
        linkedin: "#",
        email: "mailto:mohammed.r@example.com",
      },
    },
    {
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      name: "Aisha Mohammed",
      role: "Mechanical Engineering student",
      bio: "Higher colleges of Technology",
      social: {
        linkedin: "#",
        email: "mailto:aisha.m@example.com",
      },
    },
    {
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      name: "Ibrahim Khan",
      role: "Mechanical Engineering student",
      bio: "Higher colleges of Technology",
      social: {
        linkedin: "#",
        email: "mailto:ibrahim.k@example.com",
      },
    },
    {
      image: "https://randomuser.me/api/portraits/women/54.jpg",
      name: "Zahra Omar",
      role: "Mechanical Engineering student",
      bio: "Higher colleges of Technology",
      social: {
        linkedin: "#",
        email: "mailto:zahra.o@example.com",
      },
    },
    {
      image: "https://randomuser.me/api/portraits/men/37.jpg",
      name: "Yasin Ahmed",
      role: "Mechanical Engineering student",
      bio: "Higher colleges of Technology",
      social: {
        linkedin: "#",
        email: "mailto:yasin.a@example.com",
      },
    },
    {
      image: "https://randomuser.me/api/portraits/women/37.jpg",
      name: "Maryam Abdullah",
      role: "Mechanical Engineering student",
      bio: "Higher colleges of Technology",
      social: {
        linkedin: "#",
        email: "mailto:maryam.a@example.com",
      },
    },
    {
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      name: "James Wilson",
      role: "Mechanical Engineer",
      bio: "Designs and optimizes the waste collection mechanisms for maximum efficiency.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:james.w@example.com",
      },
    },
    {
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      name: "Sarah Nguyen",
      role: "Software Developer",
      bio: "Creates the AI algorithms that power the SmartBoat's navigation and collection systems.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:sarah.n@example.com",
      },
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
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
            Meet the dedicated researchers and engineers behind the Aqua Trash
            SmartBoat project.
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
            <motion.div key={index} variants={item} className="text-center">
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
              <h3 className="font-heading font-semibold text-xl">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{member.role}</p>
              <p className="text-sm mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-3">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    className="text-primary hover:text-primary-light"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {member.social.email && (
                  <a
                    href={member.social.email}
                    className="text-primary hover:text-primary-light"
                    title="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    className="text-primary hover:text-primary-light"
                    title="Twitter Profile"
                  >
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
