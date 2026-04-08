'use client';

import { useScroll, useTransform, motion } from 'framer-motion';

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1 (0% scroll): "My Name. Creative Developer." (Center) fade in early, fade out ~15%
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  // Section 2 (30% scroll): "I build digital experiences." (Left aligned) fade in ~25%, fade out ~40%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4], [50, -50]);

  // Section 3 (60% scroll): "Bridging design and engineering." (Right aligned) fade in ~55%, fade out ~70%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.7], [50, -50]);

  return (
    <>
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white text-center">
          Mehul Jhabak. <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Creative Developer.</span>
        </h1>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start pl-[10vw] pointer-events-none"
      >
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white max-w-lg leading-tight">
          I build digital <br />
          <span className="text-gray-400 font-serif italic">experiences.</span>
        </h2>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end pr-[10vw] pointer-events-none"
      >
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white max-w-lg text-right leading-tight">
          Bridging design <br />
          <span className="text-gray-400">& engineering.</span>
        </h2>
      </motion.div>
    </>
  );
}
