'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const skills = [
      "Geolocation Algorithms",
      "n8n Automation",
      "Voice AI (Vapi, Bland)",
      "Real-time State Sync",
      "Next.js & React",
      "Node.js Backend"
    ];
  
    const projects = [
      { 
        title: "Safe Ride", 
        role: "Architecture & Logistics",
        desc: "Hyper-Local School Transport Platform.",
        points: ["Dynamic routing engine (3km radius)", "Biometric face scanning at pickup", "Live real-time location tracking for parents"]
      },
      { 
        title: "Medical ERP", 
        role: "Workflow Automation",
        desc: "Chat-to-Database Automated System.",
        points: ["n8n webhooks processing natural language", "Real-time inventory updates via custom JS nodes", "Reduced order processing time by 70%"] 
      },
      { 
        title: "Voice AI", 
        role: "Speech-to-Speech Engine",
        desc: "Low-Latency Receptionist Agent.", 
        points: ["Sub-2-second response via async parsing", "Vapi.ai + Twilio stack", "Filters out 100% of Tier-1 support calls"]
      }
    ];
  
    return (
      <section className="bg-[#121212] pt-12 pb-32 px-6 md:px-12 lg:px-24">
        
        {/* Architect Profile / Skills Section */}
        <div className="max-w-7xl mx-auto mb-32 border-t border-white/10 pt-16 mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm text-orange-500 font-mono tracking-widest uppercase mb-4">The Architect</h2>
              <h3 className="text-3xl md:text-5xl font-light text-white leading-tight mb-6">
                Result-oriented Full Stack Developer and Automation Architect.
              </h3>
              <p className="text-xl text-zinc-400 font-light leading-relaxed">
                Building complex, real-world systems. I bridge the gap between traditional engineering logic and modern AI automation pipelines.
              </p>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, i) => (
                  <span key={i} className="px-5 py-3 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm tracking-wide shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Key Projects Section */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl text-white font-bold mb-16 tracking-tighter" style={{ fontFamily: 'Syne, sans-serif' }}>
            KEY <span className="text-orange-500">PROJECTS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {projects.map((proj, i) => {
              const isExpanded = expandedId === i;
              
              return (
              <motion.div 
                layout
                key={i} 
                onClick={() => setExpandedId(isExpanded ? null : i)}
                className="group cursor-pointer relative flex flex-col p-8 rounded-3xl bg-[#1a1715] border border-white/5 overflow-hidden transition-colors duration-500 hover:border-orange-500/30 hover:bg-[#1f1b18]"
              >
                {/* Background ambient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:to-orange-500/5 transition-all duration-500"></div>
                
                <motion.div layout className="relative z-10 flex-grow">
                  <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-4 block">0{i + 1} / {proj.role}</span>
                  <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{proj.title}</h3>
                  <p className="text-orange-400/80 font-medium mb-4">{proj.desc}</p>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.ul 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3 mt-6 mb-4 overflow-hidden"
                      >
                        {proj.points.map((pt, idx) => (
                          <li key={idx} className="text-zinc-400 text-sm flex items-start gap-3">
                            <span className="text-orange-500 mt-1 text-xs">◆</span>
                            {pt}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                <motion.div layout className="relative z-10 mt-auto flex justify-between items-center pt-4 border-t border-white/5">
                  <span className="text-zinc-500 text-sm font-medium group-hover:text-orange-400 transition-colors">
                    {isExpanded ? 'Close Details' : 'Read Details'}
                  </span>
                  <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-orange-500 text-black border-orange-500 rotate-90' : 'group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                </motion.div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
