'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate dynamic, cinematic background gradient 
  // It shifts from dark navy/charcoal to warm fiery orange as you scroll
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.5, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Massive heroic 3D Scrub calculations for the single user portrait
  const rotationY = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const rotationZ = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.0, 1.1]);
  const yPos = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  return (
    <div ref={containerRef} className="h-[500vh] relative w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-[1000px]">
        
        {/* Dynamic Background to simulate the AI "Google Whisk" vibe lighting */}
        <motion.div 
           style={{ opacity: bgOpacity, scale: bgScale }}
           className="absolute inset-0 bg-gradient-to-b from-[#12100e] via-[#e65100] to-[#12100e] z-0"
        />

        {/* 3D Scroll-Driven Character "Sequence" Alternative */}
        <motion.div 
            style={{ 
                rotateY: rotationY, 
                rotateZ: rotationZ, 
                scale: scale, 
                y: yPos,
                opacity: opacity
            }}
            className="relative z-10 w-full h-[90vh] flex items-end justify-center pointer-events-none transform-style-3d origin-bottom"
        >
            <img 
                src="/mehul-portfolio/mehul_transparent-removebg-preview.png" 
                alt="Mehul Hero" 
                className="w-auto h-full object-contain filter drop-shadow-[0_-20px_50px_rgba(230,81,0,0.4)]"
            />
        </motion.div>

        {/* Render overlay elements on top of the character */}
        <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
           {children}
        </div>
      </div>
    </div>
  );
}
