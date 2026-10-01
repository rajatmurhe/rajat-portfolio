'use client';
import { motion } from 'framer-motion';
import { experience } from '@/lib/data';
import { Calendar, Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-gray-800/50 relative overflow-hidden">
      <div className="grid-texture absolute inset-0 opacity-10"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12">
          <span className="mono-tag text-indigo-400 mb-2 block">Experience</span>
          <h2 className="text-3xl font-semibold text-gray-100">Where I&apos;ve built</h2>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
          {experience.map((exp, i) => (
            <motion.div 
              key={exp.id}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i * 0.1}}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 bg-gray-900 text-indigo-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={16} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-gray-900/40 border border-gray-800/60 card-hover">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100">{exp.role}</h3>
                    <div className="text-indigo-400 font-medium">{exp.company}</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500 bg-gray-900/80 px-2.5 py-1 rounded-md border border-gray-800 shrink-0">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                </div>
                
                <div className="mb-4 text-sm font-medium text-gray-300 border-l-2 border-indigo-500/30 pl-3">
                  {exp.focus}
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-indigo-500/50 mt-1.5">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span key={t} className="px-2 py-1 rounded bg-gray-800/50 text-gray-300 text-xs border border-gray-700/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
