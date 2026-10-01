'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data';
import { Github, ExternalLink, X, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const project = projects.find(p => p.id === selectedProject);

  return (
    <section id="work" className="py-24 px-6 border-t border-gray-800/50 bg-[#080d14]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <span className="mono-tag text-indigo-400 mb-2 block">Engineering Work</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-100">Case Studies</h2>
          <p className="mt-4 text-gray-400 max-w-2xl">
            Detailed breakdowns of systems I've built, focusing on architecture, engineering decisions, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i * 0.1}}
              className="group cursor-pointer p-1 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-800/80 hover:border-indigo-500/30 transition-all duration-300"
              onClick={() => setSelectedProject(p.id)}
            >
              <div className="h-full bg-[#0b1018] rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{p.emoji}</span>
                    <span className="text-xs font-mono text-gray-500 bg-gray-900 px-2 py-1 rounded-full border border-gray-800">{p.category}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-100 group-hover:text-indigo-300 transition-colors">{p.name}</h3>
                  <p className="text-sm font-medium text-indigo-400/80 mb-4">{p.tagline}</p>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{p.summary}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.slice(0, 4).map(t => (
                      <span key={t} className="px-2 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-300">{t}</span>
                    ))}
                    {p.tech.length > 4 && <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-500">+{p.tech.length - 4}</span>}
                  </div>
                  <div className="flex items-center text-sm font-medium text-indigo-400 group-hover:translate-x-1 transition-transform">
                    View case study <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && project && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div 
              initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
              className="absolute inset-0 bg-[#080d14]/90 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div 
              initial={{opacity:0, scale:0.95, y:20}} animate={{opacity:1, scale:1, y:0}} exit={{opacity:0, scale:0.95, y:20}}
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#0d1117] rounded-2xl border border-gray-800 shadow-2xl overflow-y-auto custom-scrollbar flex flex-col"
            >
              <div className="sticky top-0 bg-[#0d1117]/90 backdrop-blur border-b border-gray-800 p-4 sm:p-6 flex justify-between items-center z-10">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{project.emoji}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100">{project.name}</h3>
                    <p className="text-xs text-gray-400 font-mono">{project.tagline}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedProject(null)} className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 sm:p-10 space-y-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-sm font-mono text-indigo-400 mb-2 uppercase tracking-wider">The Problem</h4>
                      <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono text-indigo-400 mb-2 uppercase tracking-wider">Engineering Focus</h4>
                      <ul className="space-y-2">
                        {project.engineering.map((e, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <span className="text-indigo-500 mt-1">▹</span>
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-mono text-gray-500 mb-2 uppercase tracking-wider">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="px-2 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-300">{t}</span>
                        ))}
                      </div>
                    </div>
                    <a href={project.github} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium text-white transition-colors">
                      <Github size={16} /> View Repository
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-mono text-indigo-400 mb-6 uppercase tracking-wider text-center">System Architecture</h4>
                  <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800/50">
                    {project.architecture.map((node, i) => (
                      <div key={i} className="flex items-center">
                        <div className="flex flex-col items-center p-3 sm:p-4 bg-[#080d14] border border-gray-800 rounded-lg min-w-[120px] shadow-sm">
                          <span className="text-xl mb-2">{node.icon}</span>
                          <span className="text-xs font-medium text-gray-300 text-center">{node.label}</span>
                          <span className="text-[10px] text-gray-600 font-mono mt-1 uppercase">{node.layer}</span>
                        </div>
                        {i < project.architecture.length - 1 && (
                          <div className="hidden md:block w-8 h-px bg-gray-700 relative">
                            <ArrowRight size={12} className="absolute -right-1 -top-1.5 text-gray-600" />
                          </div>
                        )}
                        {i < project.architecture.length - 1 && (
                          <div className="md:hidden h-6 w-px bg-gray-700 relative my-1 mx-auto"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {project.guardrails && (
                  <div>
                    <h4 className="text-sm font-mono text-indigo-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                      <ShieldAlert size={16} /> Reliability & Guardrails
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.guardrails.map(g => (
                        <div key={g.layer} className="p-4 bg-gray-900 border border-gray-800 rounded-lg">
                          <div className="text-xs font-mono text-gray-500 mb-1">LAYER {g.layer}</div>
                          <div className="text-sm font-medium text-gray-200 mb-2">{g.name}</div>
                          <div className="text-sm text-gray-400">{g.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.bugFound && (
                  <div className="p-6 bg-red-950/20 border border-red-900/30 rounded-xl">
                    <h4 className="text-sm font-mono text-red-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                      <Cpu size={16} /> Deliberate Failure Testing
                    </h4>
                    <h5 className="text-lg font-medium text-gray-200 mb-2">{project.bugFound.title}</h5>
                    <p className="text-sm text-gray-400 mb-4">{project.bugFound.description}</p>
                    <div className="space-y-3">
                      <div className="text-sm"><span className="text-red-400/80 font-mono text-xs uppercase mr-2">Detection:</span><span className="text-gray-300">{project.bugFound.detection}</span></div>
                      <div className="text-sm"><span className="text-orange-400/80 font-mono text-xs uppercase mr-2">Root Cause:</span><span className="text-gray-300">{project.bugFound.rootCause}</span></div>
                      <div className="text-sm"><span className="text-green-400/80 font-mono text-xs uppercase mr-2">Mitigation:</span><span className="text-gray-300">{project.bugFound.mitigation}</span></div>
                    </div>
                  </div>
                )}
                
                <div className="border-t border-gray-800 pt-6">
                  <h4 className="text-sm font-mono text-indigo-400 mb-2 uppercase tracking-wider">Outcome</h4>
                  <p className="text-gray-300">{project.outcome}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
