import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";

// Define the tech stack with their respective icons and colors
const technologies = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    bgColor: "rgba(247, 223, 30, 0.15)",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    bgColor: "rgba(49, 120, 198, 0.15)",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    bgColor: "rgba(97, 218, 251, 0.15)",
  },
  {
    name: "Vue.js",
    icon: SiVuedotjs,
    color: "#4FC08D",
    bgColor: "rgba(79, 192, 141, 0.15)",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#FFFFFF",
    bgColor: "rgba(255, 255, 255, 0.15)",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    bgColor: "rgba(51, 103, 145, 0.15)",
  },
];

// function FloatingTechCubes() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     return () => setMounted(false);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {technologies.map((tech, index) => {
//         // Calculate positions based on index to distribute cubes evenly
//         const positionFactor = index / technologies.length;
//         const xPos = 10 + positionFactor * 80; // Distribute horizontally
//         const yPos = 20 + (index % 3) * 25; // Stagger vertically

//         // Animation duration and delay
//         const duration = 20 + index * 2;
//         const delay = index * 0.5;

//         // Cube size varies slightly
//         const size = 80 + Math.random() * 20;

//         // Half of the cube size - used for translations
//         const halfSize = size / 2;

//         return (
//           <motion.div
//             key={tech.name}
//             className="absolute"
//             style={{
//               left: `${xPos}%`,
//               top: `${yPos}%`,
//               width: size,
//               height: size,
//               perspective: 1200,
//             }}
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: delay * 0.5 }}
//           >
//             <motion.div
//               className="w-full h-full"
//               style={{
//                 transformStyle: "preserve-3d",
//                 transform: "rotateX(0deg) rotateY(0deg)",
//               }}
//               animate={{
//                 x: [0, -50, 50, 0],
//                 y: [0, 30, -30, 0],
//                 rotateX: [0, 360],
//                 rotateY: [0, 360],
//                 rotateZ: [0, 360],
//               }}
//               transition={{
//                 duration: duration,
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "loop",
//                 ease: "linear",
//                 delay: delay,
//               }}
//             >
//               {/* Cube container with enhanced 3D effect */}
//               <div
//                 className="w-full h-full relative"
//                 style={{
//                   transformStyle: "preserve-3d",
//                   transform: `translateZ(-${halfSize}px)`,
//                 }}
//               >
//                 {/* Front face */}
//                 <div
//                   className={`absolute inset-0 flex items-center justify-center border border-${tech.color}`}
//                   style={{
//                     transform: `translateZ(${halfSize}px)`,
//                     backgroundColor: tech.bgColor,
//                     boxShadow: `0 0 20px 5px ${tech.bgColor}`,
//                     backfaceVisibility: "hidden",
//                   }}
//                 >
//                   <tech.icon
//                     className="w-12 h-12"
//                     style={{ color: tech.color }}
//                   />
//                 </div>

//                 {/* Back face */}
//                 <div
//                   className={`absolute inset-0 flex items-center justify-center border border-${tech.color}`}
//                   style={{
//                     transform: `rotateY(180deg) translateZ(${halfSize}px)`,
//                     backgroundColor: tech.bgColor,
//                     boxShadow: `0 0 20px 5px ${tech.bgColor}`,
//                     backfaceVisibility: "hidden",
//                   }}
//                 >
//                   <tech.icon
//                     className="w-12 h-12"
//                     style={{ color: tech.color }}
//                   />
//                 </div>

//                 {/* Right face */}
//                 <div
//                   className={`absolute inset-0 flex items-center justify-center border border-${tech.color}`}
//                   style={{
//                     transform: `rotateY(90deg) translateZ(${halfSize}px)`,
//                     backgroundColor: tech.bgColor,
//                     boxShadow: `0 0 20px 5px ${tech.bgColor}`,
//                     backfaceVisibility: "hidden",
//                   }}
//                 >
//                   <p
//                     className="text-sm font-medium text-center"
//                     style={{ color: tech.color }}
//                   >
//                     <tech.icon
//                       className="w-12 h-12"
//                       style={{ color: tech.color }}
//                     />
//                   </p>
//                 </div>

//                 {/* Left face */}
//                 <div
//                   className={`absolute inset-0 flex items-center justify-center border border-${tech.color}`}
//                   style={{
//                     transform: `rotateY(-90deg) translateZ(${halfSize}px)`,
//                     backgroundColor: tech.bgColor,
//                     boxShadow: `0 0 20px 5px ${tech.bgColor}`,
//                     backfaceVisibility: "hidden",
//                   }}
//                 >
//                   <p
//                     className="text-sm font-medium text-center"
//                     style={{ color: tech.color }}
//                   >
//                     <tech.icon
//                       className="w-12 h-12"
//                       style={{ color: tech.color }}
//                     />
//                   </p>
//                 </div>

//                 {/* Top face */}
//                 <div
//                   className={`absolute inset-0 flex items-center justify-center border border-${tech.color}`}
//                   style={{
//                     transform: `rotateX(90deg) translateZ(${halfSize}px)`,
//                     backgroundColor: tech.bgColor,
//                     boxShadow: `0 0 20px 5px ${tech.bgColor}`,
//                     backfaceVisibility: "hidden",
//                   }}
//                 >
//                   <tech.icon
//                     className="w-10 h-10"
//                     style={{ color: tech.color }}
//                   />
//                 </div>

//                 {/* Bottom face */}
//                 <div
//                   className={`absolute inset-0 flex items-center justify-center border border-${tech.color}`}
//                   style={{
//                     transform: `rotateX(-90deg) translateZ(${halfSize}px)`,
//                     backgroundColor: tech.bgColor,
//                     boxShadow: `0 0 20px 5px ${tech.bgColor}`,
//                     backfaceVisibility: "hidden",
//                   }}
//                 >
//                   <tech.icon
//                     className="w-10 h-10"
//                     style={{ color: tech.color }}
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }

// export default FloatingTechCubes;

export default function FloatingTechCubes() {
  const [mounted, setMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    setMounted(true);

    // Handle resize events
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      setMounted(false);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!mounted) return null;

  // Calculate base size based on viewport width
  // This creates a responsive sizing formula
  const calculateBaseSize = () => {
    const baseSize = Math.max(Math.min(windowSize.width / 12, 80), 50);
    return baseSize;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {technologies.map((tech, index) => {
        // Calculate positions based on index to distribute cubes evenly
        const positionFactor = index / technologies.length;
        const xPos = 10 + positionFactor * 80; // Distribute horizontally
        const yPos = 20 + (index % 3) * 25; // Stagger vertically

        // Animation duration and delay
        const duration = 20 + index * 2;
        const delay = index * 0.5;

        // Cube size varies slightly
        const baseSize = calculateBaseSize();
        const size = baseSize + Math.random() * baseSize * 0.2;

        // Half of the cube size - used for translations
        const halfSize = size / 2;

        return (
          <motion.div
            key={tech.name}
            className="absolute"
            style={{
              left: `${xPos}%`,
              top: `${yPos}%`,
              width: size,
              height: size,
              perspective: 1200,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: delay * 0.5 }}
          >
            <motion.div
              className="w-full h-full"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(0deg) rotateY(0deg)",
              }}
              animate={{
                x: [0, -50, 50, 0],
                y: [0, 30, -30, 0],
                rotateX: [0, 360],
                rotateY: [0, 360],
                rotateZ: [0, 360],
              }}
              transition={{
                duration: duration,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "linear",
                delay: delay,
              }}
            >
              {/* Cube container with enhanced 3D effect */}
              <div
                className="w-full h-full relative"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `translateZ(-${halfSize}px)`,
                }}
              >
                {/* Front face */}
                <div
                  className={`absolute inset-0 flex items-center justify-center border border-${tech.color}`}
                  style={{
                    transform: `translateZ(${halfSize}px)`,
                    backgroundColor: tech.bgColor,
                    boxShadow: `0 0 20px 5px ${tech.bgColor}`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <tech.icon
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    style={{ color: tech.color }}
                  />
                </div>

                {/* Back face */}
                <div
                  className={`absolute inset-0 flex items-center justify-center border border-${tech.color}`}
                  style={{
                    transform: `rotateY(180deg) translateZ(${halfSize}px)`,
                    backgroundColor: tech.bgColor,
                    boxShadow: `0 0 20px 5px ${tech.bgColor}`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <tech.icon
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    style={{ color: tech.color }}
                  />
                </div>

                {/* Right face */}
                <div
                  className={`absolute inset-0 flex items-center justify-center border border-${tech.color}`}
                  style={{
                    transform: `rotateY(90deg) translateZ(${halfSize}px)`,
                    backgroundColor: tech.bgColor,
                    boxShadow: `0 0 20px 5px ${tech.bgColor}`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <p
                    className="text-sm font-medium text-center"
                    style={{ color: tech.color }}
                  >
                    <tech.icon
                      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                      style={{ color: tech.color }}
                    />
                  </p>
                </div>

                {/* Left face */}
                <div
                  className={`absolute inset-0 flex items-center justify-center border border-${tech.color}`}
                  style={{
                    transform: `rotateY(-90deg) translateZ(${halfSize}px)`,
                    backgroundColor: tech.bgColor,
                    boxShadow: `0 0 20px 5px ${tech.bgColor}`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <p
                    className="text-sm font-medium text-center"
                    style={{ color: tech.color }}
                  >
                    <tech.icon
                      className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                      style={{ color: tech.color }}
                    />
                  </p>
                </div>

                {/* Top face */}
                <div
                  className={`absolute inset-0 flex items-center justify-center border border-${tech.color}`}
                  style={{
                    transform: `rotateX(90deg) translateZ(${halfSize}px)`,
                    backgroundColor: tech.bgColor,
                    boxShadow: `0 0 20px 5px ${tech.bgColor}`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <tech.icon
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    style={{ color: tech.color }}
                  />
                </div>

                {/* Bottom face */}
                <div
                  className={`absolute inset-0 flex items-center justify-center border border-${tech.color}`}
                  style={{
                    transform: `rotateX(-90deg) translateZ(${halfSize}px)`,
                    backgroundColor: tech.bgColor,
                    boxShadow: `0 0 20px 5px ${tech.bgColor}`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <tech.icon
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                    style={{ color: tech.color }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
