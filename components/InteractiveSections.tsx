'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { systemLayers, traceScenarios, planningDemo, reliabilityCards } from '@/lib/data';
import { Activity, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function SystemsMap() {
  const [activeLayer, setActiveLayer] = useState(systemLayers[0].id);

  return (
    <section id="systems" className="py-24 px-6 border-t border-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="mono-tag text-indigo-400 mb-2 block">Architecture</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-100">From model call to reliable product</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            How I structure full-stack AI applications for observability, speed, and safety.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start">
          <div className="w-full md:w-1/2 flex flex-col relative before:absolute before:left-[1.35rem] before:top-4 before:bottom-4 before:w-px before:bg-gray-800">
            {systemLayers.map((layer) => (
              <div 
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`relative pl-12 py-4 cursor-pointer transition-colors ${activeLayer === layer.id ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
              >
                <div className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-[#080d14] z-10 transition-colors ${activeLayer === layer.id ? 'border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'border-gray-700'}`} />
                <h3 className={`text-lg font-medium transition-colors ${activeLayer === layer.id ? 'text-indigo-300' : 'text-gray-300'}`}>
                  {layer.label}
                </h3>
                <p className="text-sm text-gray-500 font-mono mt-1">{layer.sublabel}</p>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2 sticky top-32">
            {systemLayers.map((layer) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: activeLayer === layer.id ? 1 : 0, x: activeLayer === layer.id ? 0 : 20 }}
                className={`${activeLayer === layer.id ? 'block' : 'hidden'} p-8 rounded-xl bg-gray-900/50 border border-gray-800`}
              >
                <div className="text-4xl mb-4">{layer.icon}</div>
                <h4 className="text-xl font-semibold text-gray-100 mb-3">{layer.label}</h4>
                <p className="text-gray-300 leading-relaxed mb-6">{layer.description}</p>
                <div>
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">Implemented In</div>
                  <div className="flex flex-wrap gap-2">
                    {layer.relatedProjects.map(p => (
                      <span key={p} className="px-3 py-1 rounded bg-[#080d14] border border-gray-800 text-xs text-gray-400">{p}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SystemTrace() {
  const [activeScenario, setActiveScenario] = useState(traceScenarios[0]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setCurrentStep(0);
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < activeScenario.steps.length) return prev + 1;
        return prev;
      });
    }, 800);
    return () => clearInterval(interval);
  }, [activeScenario]);

  return (
    <section className="py-24 px-6 border-t border-gray-800/50 bg-[#0d1117]/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="mono-tag text-teal-400 mb-2 block">Observability</span>
          <h2 className="text-3xl font-semibold text-gray-100 mb-6">Interactive System Trace</h2>
          <div className="flex flex-wrap gap-2">
            {traceScenarios.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveScenario(s)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeScenario.id === s.id ? 'bg-indigo-600 text-white' : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-gray-200 border border-gray-800'}`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-10 rounded-xl bg-[#080d14] border border-gray-800 font-mono shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-teal-400 to-indigo-500 opacity-20"></div>
          <div className="space-y-4">
            {activeScenario.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: i <= currentStep ? 1 : 0.2, y: i <= currentStep ? 0 : 10 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1">
                  {i < currentStep ? (
                    <CheckCircle2 size={16} className="text-teal-400" />
                  ) : i === currentStep ? (
                    <Activity size={16} className="text-indigo-400 animate-pulse" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-gray-700" />
                  )}
                </div>
                <div>
                  <div className={`text-sm ${i <= currentStep ? 'text-gray-200' : 'text-gray-600'}`}>[{step.label}]</div>
                  {i <= currentStep && (
                    <div className="text-xs text-gray-500 mt-1">{step.detail}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          {currentStep >= activeScenario.steps.length && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} className="mt-8 pt-4 border-t border-gray-800 text-xs text-indigo-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              TRACE_COMPLETE // STATUS_OK
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export function PlanningDemo() {
  return (
    <section className="py-24 px-6 border-t border-gray-800/50 bg-[#080d14]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <span className="mono-tag text-indigo-400 mb-2 block">Concept</span>
          <h2 className="text-3xl font-semibold text-gray-100">Planning Intelligence Demo</h2>
          <p className="mt-3 text-sm text-gray-500 max-w-xl mx-auto">Illustrative product concept inspired by enterprise finance workflows. Demonstrates understanding of how data, models, and UI interact.</p>
        </div>

        <div className="rounded-xl border border-gray-800 bg-[#0b1018] shadow-2xl overflow-hidden">
          <div className="bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            <div className="ml-4 text-xs font-mono text-gray-500">app.oculon.mock / dashboard</div>
          </div>
          <div className="p-6 md:p-10 flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-6">
              <h3 className="text-lg font-medium text-gray-200">Q3 Performance Snapshot</h3>
              <div className="grid grid-cols-2 gap-4">
                {planningDemo.metrics.map(m => (
                  <div key={m.label} className="p-4 rounded-lg border border-gray-800 bg-[#080d14]">
                    <div className="text-xs text-gray-400 mb-1">{m.label}</div>
                    <div className="text-2xl font-semibold text-gray-100">{m.value}</div>
                    <div className={`text-xs mt-2 font-medium ${m.positive ? 'text-teal-400' : 'text-red-400'}`}>
                      {m.change} vs prior
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-80 flex flex-col gap-4">
              <div className="p-5 rounded-lg border border-indigo-500/20 bg-indigo-500/5 shadow-[0_0_15px_rgba(99,102,241,0.05)]">
                <div className="flex items-center gap-2 mb-4 text-indigo-300">
                  <Activity size={16} />
                  <span className="text-sm font-medium">AI Analysis</span>
                </div>
                <h4 className="text-gray-100 text-sm font-medium mb-3">{planningDemo.insight.title}</h4>
                <div className="space-y-2">
                  {planningDemo.insight.drivers.map(d => (
                    <div key={d.label} className="flex justify-between text-sm">
                      <span className="text-gray-400">{d.label}</span>
                      <span className={d.positive ? 'text-teal-400' : 'text-red-400'}>{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[#080d14] border border-gray-800 font-mono text-[10px] text-gray-500 space-y-2">
                <div className="text-gray-400 mb-2">// System Trace</div>
                {planningDemo.trace.map(t => (
                  <div key={t.step} className="flex justify-between">
                    <span>{t.step}</span>
                    <span className="text-indigo-400/70">{t.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Reliability() {
  return (
    <section className="py-24 px-6 border-t border-gray-800/50 bg-[#0d1117]/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <span className="mono-tag text-teal-400 mb-2 block">Quality Bar</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-100">Things I test before I trust an AI system</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reliabilityCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i * 0.1}}
              className="p-6 rounded-xl bg-[#080d14] border border-gray-800 hover:border-gray-700 transition-colors flex flex-col h-full"
            >
              <div className="text-2xl mb-4">{card.icon}</div>
              <h3 className="text-sm font-semibold text-gray-300 mb-1">{card.problem}</h3>
              <div className="text-indigo-400 text-sm font-medium mb-3 flex items-center gap-1">
                <ArrowRight size={14} /> {card.solution}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{card.detail}</p>
              <div className="text-xs font-mono text-gray-600 pt-3 border-t border-gray-800/50">
                Found in: {card.project}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
