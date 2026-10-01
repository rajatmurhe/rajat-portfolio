'use client';
import { motion } from 'framer-motion';
import { philosophy } from '@/lib/data';
import { Server, Database, Shield, Zap, GitCommit } from 'lucide-react';

const icons = [Server, Database, Shield, Zap, GitCommit];

export default function Philosophy() {
  return (
    <section id="about" className="py-24 px-6 border-t border-gray-800/50 bg-[#080d14]">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div 
          initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-100">
            {philosophy.statement}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            {philosophy.pillars.map((pillar, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={pillar} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-gray-300 text-sm font-medium">
                  <Icon size={14} className="text-indigo-400" />
                  {pillar}
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {philosophy.principles.map((p, i) => (
            <motion.div 
              key={p.title}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i * 0.1}}
              className="p-6 rounded-xl bg-gray-900/30 border border-gray-800/50 card-hover"
            >
              <h3 className="text-lg font-medium text-gray-200 mb-2">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
