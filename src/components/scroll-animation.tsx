import Screenshot from "./top-project/screenshot";
import Title from "./top-project/title";
import Description from "./top-project/description";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export function ScrollAnimation() {
  const containerRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageWidth = useTransform(
    scrollYProgress,
    [0.05, 0.3],
    ["100%", "60%"]
  );
  const imageOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const imageY = useTransform(scrollYProgress, [0, 0.2], [-180, 0]);

  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [-50, 0]);

  const descOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const descX = useTransform(scrollYProgress, [0.3, 0.4], [-100, 0]);

  return (
    <div
      ref={containerRef}
      className="container relative mx-auto overflow-clip h-screen max-w-7xl "
    >
      <div className="sticky top-20 flex flex-col gap-6">
        <motion.div style={{ y: titleY, opacity: titleOpacity }}>
          <div className="relative flex flex-col items-center text-center  w-full">
            <Title />
          </div>
        </motion.div>

        <div
          className="relative w-full"
          style={isMobile ? { display: "flex", flexDirection: "column" } : {}}
        >
          <motion.div
            style={{
              y: imageY,
              width: isMobile ? "100%" : imageWidth,
              opacity: imageOpacity,
              float: "right",
            }}
          >
            <div className="relative">
              <Screenshot />
            </div>
          </motion.div>

          <motion.div
            style={{
              x: descX,
              width: isMobile ? "100%" : "60%",
              opacity: descOpacity,
              position: "relative",
            }}
          >
            <div
              className="p-6"
              style={{ position: isMobile ? "relative" : "absolute" }}
            >
              <Description />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
