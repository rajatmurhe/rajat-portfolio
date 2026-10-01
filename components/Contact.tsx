'use client';
import { personal } from '@/lib/data';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-gray-800/50 bg-gradient-to-b from-[#080d14] to-[#05080c]">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-100 tracking-tight">
          Interested in building useful systems with AI?
        </h2>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          {personal.availability}. I'm currently looking for roles where I can bridge the gap between AI research and reliable software engineering.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <a 
            href={`mailto:${personal.email}`}
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2"
          >
            <Mail size={18} /> Email me
          </a>
          <a 
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-gray-900 border border-gray-800 text-gray-200 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a 
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-gray-900 border border-gray-800 text-gray-200 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            <Github size={18} /> GitHub
          </a>
        </div>

        <div className="pt-24 pb-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-mono text-gray-600 border-t border-gray-800/30">
          <div>© {new Date().getFullYear()} {personal.name}</div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-teal-500/50"></span>
            All systems operational
          </div>
        </div>
      </div>
    </section>
  );
}
