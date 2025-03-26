import { motion } from "framer-motion";

interface WaterAnimationProps {
  children: React.ReactNode;
  className?: string;
}

export function WaterAnimation({ children, className = "" }: WaterAnimationProps) {
  return (
    <div className={`water-animation relative aspect-square bg-[#1B3E5D] rounded-lg p-4 overflow-hidden ${className}`}>
      <motion.div
        className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-[rgba(0,168,150,0.2)] rounded-[40%]"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-[rgba(26,95,122,0.2)] rounded-[40%]"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
