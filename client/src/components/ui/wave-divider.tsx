import { cn } from "@/lib/utils";

interface WaveDividerProps {
  position?: "top" | "bottom";
  className?: string;
}

export function WaveDivider({ position = "top", className }: WaveDividerProps) {
  const svgPathBottom = `M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,106.7C672,96,768,96,864,128C960,160,1056,224,1152,224C1248,224,1344,160,1392,128L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z`;
  
  const svgPathTop = `M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,192C960,160,1056,96,1152,96C1248,96,1344,160,1392,192L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z`;

  const svgPath = position === "top" ? svgPathTop : svgPathBottom;
  
  return (
    <div className={cn("w-full h-16 relative overflow-hidden", className)}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320" 
        className="absolute w-full h-full"
        preserveAspectRatio="none"
      >
        <path 
          fill="hsl(var(--primary))" 
          fillOpacity="1" 
          d={svgPath}
        />
      </svg>
    </div>
  );
}
