'use client';
import { motion } from 'framer-motion';
import { personal } from '@/lib/data';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative">
      <div className="flex-1 space-y-8 relative z-10">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-mono">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            {personal.status}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-100">
            {personal.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 font-medium">
            AI/ML Engineer building <span className="text-gray-200">intelligent software systems</span>.
          </h2>
        </motion.div>

        <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="text-lg text-gray-400 max-w-xl leading-relaxed">
          {personal.bio}
        </motion.p>

        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.2}} className="flex flex-wrap gap-4 pt-4">
          <a href="#work" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors">
            View Engineering Work <ArrowRight size={18} />
          </a>
          <div className="flex gap-4 items-center px-4">
            <a href={personal.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay: 0.3}} className="flex-1 w-full max-w-md hidden md:block relative z-10">
        <div className="p-6 rounded-xl border border-indigo-500/20 bg-[#0d1117]/80 backdrop-blur-sm glow-indigo relative overflow-hidden">
          <div className="grid-texture absolute inset-0 opacity-40"></div>
          <div className="relative z-10 space-y-6">
            <div className="text-xs font-mono text-gray-500 mb-4 border-b border-gray-800 pb-2">AI SYSTEM TRACE_</div>
            {[
              { label: 'REQUEST', val: '"Why did revenue change?"', icon: '📥' },
              { label: 'RETRIEVAL', val: '12 relevant entities', icon: '🔍' },
              { label: 'MODEL', val: 'driver analysis', icon: '🧠' },
              { label: 'VALIDATION', val: 'schema ✓ policy ✓ confidence ✓', icon: '🛡️' },
              { label: 'OUTPUT', val: 'structured insight', icon: '📈', highlight: true }
            ].map((step, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center shrink-0 border border-gray-800 text-sm group-hover:border-indigo-500/50 transition-colors">
                  {step.icon}
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="text-[10px] font-mono text-gray-500 tracking-wider mb-1">{step.label}</div>
                  <div className={`text-sm ${step.highlight ? 'text-indigo-300 font-medium' : 'text-gray-300'}`}>{step.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-4">
          <span className="text-[10px] text-gray-600 font-mono tracking-widest uppercase">Illustrative engineering concept</span>
        </div>
      </motion.div>
    </section>
  );
}
