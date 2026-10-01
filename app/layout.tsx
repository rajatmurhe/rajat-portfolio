import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rajat Murhe — AI/ML Engineer | GenAI | Software Engineering',
  description:
    'Rajat Murhe is a final-year Computer Science student building AI-powered software systems across LLMs, agents, backend engineering, retrieval, and data infrastructure.',
  keywords: [
    'Rajat Murhe',
    'AI/ML Engineer',
    'GenAI',
    'Software Engineering',
    'FastAPI',
    'Next.js',
    'TypeScript',
    'Python',
    'PostgreSQL',
    'RAG',
    'LLM',
    'AI agents',
  ],
  authors: [{ name: 'Rajat Murhe', url: 'https://github.com/rajatmurhe' }],
  creator: 'Rajat Murhe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Rajat Murhe — AI/ML Engineer | GenAI | Software Engineering',
    description:
      'Building AI-powered software systems across LLMs, agents, backend engineering, retrieval, and data infrastructure.',
    siteName: 'Rajat Murhe Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajat Murhe — AI/ML Engineer | GenAI | Software Engineering',
    description:
      'Building AI-powered software systems across LLMs, agents, backend engineering, retrieval, and data infrastructure.',
    creator: '@rajatmurhe',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
