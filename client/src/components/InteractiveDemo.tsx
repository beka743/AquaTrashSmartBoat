import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InteractiveDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [step, setStep] = useState(0);
  const maxSteps = 5;

  const startDemo = () => {
    setIsPlaying(true);
    setStep(1);
  };

  const nextStep = () => {
    if (step < maxSteps) {
      setStep(step + 1);
    } else {
      // Reset to beginning when finished
      setStep(0);
      setIsPlaying(false);
    }
  };

  return (
    <div className="aspect-video bg-white rounded-lg shadow-md relative overflow-hidden">
      {!isPlaying ? (
        <div className="absolute inset-0 flex items-center justify-center bg-primary-light bg-opacity-10">
          <div className="text-center">
            <Button 
              onClick={startDemo}
              variant="ghost" 
              className="rounded-full p-4 mb-4"
            >
              <Play className="h-10 w-10 text-primary" />
            </Button>
            <p className="font-heading">Interactive Demo</p>
            <p className="text-sm">(Click to see the waste collection process)</p>
          </div>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div 
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 800 450" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Water background */}
              <rect width="800" height="450" fill="#E0F7FA" />
              
              {/* Waves */}
              <path d="M0,100 C100,80 200,120 300,100 C400,80 500,120 600,100 C700,80 800,120 800,100 L800,450 L0,450 Z" fill="#B2EBF2" />
              <path d="M0,150 C100,130 200,170 300,150 C400,130 500,170 600,150 C700,130 800,170 800,150 L800,450 L0,450 Z" fill="#80DEEA" />
              <path d="M0,200 C100,180 200,220 300,200 C400,180 500,220 600,200 C700,180 800,220 800,200 L800,450 L0,450 Z" fill="#4DD0E1" />
              
              {/* Boat */}
              <g transform="translate(350, 150)">
                <rect x="0" y="0" width="100" height="40" rx="10" fill="#1A5F7A" />
                <rect x="20" y="-15" width="60" height="15" rx="5" fill="#00A896" />
                <rect x="20" y="40" width="60" height="10" rx="5" fill="#00A896" />
              </g>
              
              {/* Demo content based on step */}
              {step >= 1 && (
                <g>
                  {/* Waste items */}
                  <motion.circle 
                    cx="500" 
                    cy="250" 
                    r="10" 
                    fill="#FF5722"
                    initial={{ x: 50, y: 0 }}
                    animate={{ x: step >= 2 ? -50 : 50, y: step >= 2 ? -50 : 0 }}
                    transition={{ duration: 2 }}
                  />
                  <motion.rect 
                    x="600" 
                    y="220" 
                    width="15" 
                    height="15" 
                    fill="#9C27B0"
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: step >= 3 ? -170 : 0, y: step >= 3 ? -10 : 0 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <motion.polygon 
                    points="200,250 220,240 210,270" 
                    fill="#4CAF50"
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: step >= 4 ? 170 : 0, y: step >= 4 ? -30 : 0 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </g>
              )}
              
              {/* Sensors detecting waste - step 1 */}
              {step >= 1 && (
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <circle cx="400" cy="150" r="50" fill="rgba(56, 229, 77, 0.2)" />
                  <circle cx="400" cy="150" r="30" fill="rgba(56, 229, 77, 0.3)" />
                </motion.g>
              )}
              
              {/* AI path planning - step 2 */}
              {step >= 2 && (
                <motion.path
                  d="M400,150 C420,170 450,200 460,220 C470,240 490,230 500,210"
                  stroke="#38E54D"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                  fill="none"
                />
              )}
              
              {/* Collection mechanism - step 3 */}
              {step >= 3 && (
                <motion.rect
                  x="430" 
                  y="190" 
                  width="40" 
                  height="10" 
                  fill="#00A896"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
              
              {/* Storage compartment - step 4 */}
              {step >= 4 && (
                <motion.rect
                  x="380" 
                  y="160" 
                  width="40" 
                  height="20" 
                  fill="rgba(0, 168, 150, 0.5)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
              
              {/* Data recording - step 5 */}
              {step >= 5 && (
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <rect x="320" y="50" width="160" height="60" rx="5" fill="white" stroke="#1A5F7A" />
                  <text x="335" y="80" fontFamily="sans-serif" fontSize="12" fill="#1A5F7A">
                    Data recorded: Waste collected
                  </text>
                </motion.g>
              )}
            </svg>
            
            {/* Next step button */}
            <Button 
              onClick={nextStep}
              className="absolute bottom-4 right-4"
            >
              {step < maxSteps ? "Next Step" : "Restart Demo"}
            </Button>
            
            {/* Step indicator */}
            <div className="absolute top-4 left-4 bg-white bg-opacity-80 p-2 rounded">
              <p className="font-medium">Step {step} of {maxSteps}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
