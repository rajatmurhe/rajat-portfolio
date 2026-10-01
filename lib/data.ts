export const personal = {
  name: 'Rajat Murhe',
  title: 'AI/ML Engineer',
  tagline: 'Building intelligent software systems.',
  bio: 'I build AI-powered products across LLMs, agents, retrieval, backend systems, and data infrastructure. Final-year CSE student at VIT Chennai.',
  status: 'AI/ML Intern @ Linkific',
  location: 'India',
  availability: 'Available for Software Engineering / AI opportunities',
  email: 'rajatmurhe1@gmail.com',
  phone: '+91 7507661881',
  linkedin: 'https://www.linkedin.com/in/rajat-murhe/',
  github: 'https://github.com/rajatmurhe',
  education: {
    degree: 'B.Tech Computer Science and Engineering',
    specialization: 'Artificial Intelligence and Machine Learning',
    institution: 'Vellore Institute of Technology (VIT), Chennai',
    period: 'Aug 2023 – Sep 2027',
    year: 'Final Year',
  },
};

export const philosophy = {
  statement:
    'I like building systems where AI is one component of a larger reliable software system.',
  pillars: ['AI', 'Backend', 'Data', 'Evaluation', 'Reliability'],
  principles: [
    {
      title: 'Build beyond the demo',
      body: 'Design AI around real system constraints, not just happy-path scenarios.',
    },
    {
      title: 'Make behavior observable',
      body: 'Logs, traces, structured outputs, and validation at every layer.',
    },
    {
      title: 'Test failure paths',
      body: 'Deliberately look for incorrect and unexpected model behavior before shipping.',
    },
    {
      title: 'Keep systems controlled',
      body: 'Use typed interfaces, guardrails, and explicit tool boundaries.',
    },
  ],
};

export const experience = [
  {
    id: 'linkific',
    company: 'Linkific',
    role: 'AI/ML Intern',
    period: 'Sep 2026 – Present',
    current: true,
    focus: 'Backend AI Systems · RAG · Embeddings · LLM Reliability',
    description: [
      'Built backend AI features in Python/FastAPI with REST APIs, PostgreSQL, structured JSON validation, RAG, embeddings, and controlled tool workflows.',
      'Added automated validation for LLM outputs to catch malformed responses before release.',
      'Tested AI/LLM behavior through logs and traces, performed root cause analysis, and documented reproducible failures and mitigation steps.',
      'Worked on making AI-driven backend systems reliable through controlled pipelines and structured output enforcement.',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'RAG', 'Embeddings', 'LLM APIs', 'REST APIs', 'Structured JSON'],
    highlight: 'AI reliability and structured validation in production backend',
  },
  {
    id: 'rungta',
    company: 'Rungta Ventures AI',
    role: 'AI Intern',
    period: 'Jul 2026 – Sep 2026',
    current: false,
    focus: 'Semantic Search · Document Intelligence · NLP',
    description: [
      'Engineered embedding-based semantic search for a live product and built Python document intelligence workflows using NLTK and spaCy.',
      'Validated extracted fields against noisy real-world inputs, investigated inconsistencies, and collaborated with a cross-functional team of ~10 people.',
      'Worked on structured extraction and validation of document fields at scale.',
    ],
    tech: ['Python', 'Embeddings', 'Semantic Search', 'NLTK', 'spaCy', 'Document Intelligence', 'NLP'],
    highlight: 'Live product semantic search with real-world noisy data',
  },
];

export const projects = [
  {
    id: 'clinicvoice',
    name: 'ClinicVoice AI',
    tagline: 'Voice-Enabled Clinical FAQ Assistant',
    category: 'AI Agents · Backend · Guardrails',
    emoji: '🏥',
    status: 'completed',
    featured: true,
    tech: ['Python', 'FastAPI', 'Node.js', 'Docker', 'Ollama', 'Whisper', 'REST APIs'],
    summary:
      'A multi-agent AI system with booking, refill, and escalation agents calling real backend tools through REST APIs. Features a four-layer guardrail architecture with deliberate failure testing.',
    problem:
      'Clinical FAQ systems need to handle diverse patient intents reliably without hallucinating information or creating unsupported workflows.',
    architecture: [
      { label: 'Browser / Voice Input', icon: '🎙️', layer: 'frontend' },
      { label: 'FastAPI Backend', icon: '⚡', layer: 'api' },
      { label: 'Whisper STT', icon: '🔊', layer: 'ai' },
      { label: 'Intent Router', icon: '🔀', layer: 'ai' },
      { label: 'Booking / Refill / Escalation Agents', icon: '🤖', layer: 'agents' },
      { label: 'Guardrail Stack (4 layers)', icon: '🛡️', layer: 'safety' },
      { label: 'Backend Tool APIs', icon: '🔧', layer: 'tools' },
      { label: 'Structured JSON Response', icon: '📋', layer: 'output' },
    ],
    guardrails: [
      { layer: 1, name: 'Input Protection', description: 'Sanitizes and validates raw voice input before processing.' },
      { layer: 2, name: 'Intent Handling', description: 'Constrains recognized intents to supported clinical workflows only.' },
      { layer: 3, name: 'Confidence Threshold', description: 'Blocks low-confidence model outputs from reaching tools.' },
      { layer: 4, name: 'Output Validation', description: 'Validates final structured JSON before returning to client.' },
    ],
    engineering: [
      'Separate booking, refill, and escalation agents with distinct tool scopes',
      'All agents call real backend tools through REST APIs with typed JSON contracts',
      'Structured JSON outputs with schema validation at each layer',
      'Deliberate adversarial testing: documented 12+ real bugs',
    ],
    bugFound: {
      title: 'Model invented an unsupported identity-verification step',
      description:
        'The model created a fake identity-verification flow that was never part of the system spec. This was caught through deliberate failure testing.',
      detection: 'Adversarial prompt testing revealed unexpected model behavior outside defined tool scope',
      rootCause: 'Model hallucinated a plausible-sounding but non-existent verification API endpoint',
      mitigation: 'Added explicit scope boundaries to agent system prompts and output schema enforcement',
    },
    github: 'https://github.com/rajatmurhe',
    outcome: 'Demonstrated production-grade AI agent reliability: 4-layer guardrails, 12+ documented bugs, structured tool boundaries.',
  },
  {
    id: 'fieldproof',
    name: 'FieldProof AI',
    tagline: 'AI-Powered Field Service Video QA Platform',
    category: 'Full-Stack · AI Integration · Async Backend',
    emoji: '📹',
    status: 'completed',
    featured: true,
    tech: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'PostgreSQL', 'Gemini'],
    summary:
      'A multi-tenant platform using Gemini for agentic video understanding. Checks technician job videos against predefined checklists, producing confidence scores and timestamped evidence. Features human-in-the-loop review.',
    problem:
      'Field service companies need scalable QA for job completion videos without manual review of every clip — but AI decisions still need human accountability.',
    architecture: [
      { label: 'Next.js Frontend', icon: '⚛️', layer: 'frontend' },
      { label: 'FastAPI Backend', icon: '⚡', layer: 'api' },
      { label: 'Async PostgreSQL Job Queue', icon: '🗄️', layer: 'data' },
      { label: 'Gemini Multimodal API', icon: '🤖', layer: 'ai' },
      { label: 'Checklist Engine', icon: '✅', layer: 'ai' },
      { label: 'Confidence + Evidence Generator', icon: '📊', layer: 'output' },
      { label: 'Human Review Workflow', icon: '👤', layer: 'evaluation' },
    ],
    engineering: [
      'Multi-tenant architecture with proper data isolation per organization',
      'Gemini API for agentic video understanding against job checklists',
      'Asynchronous PostgreSQL job queue with transactional job claiming',
      'Human-in-the-loop: real reviewer approves/rejects AI findings with audit trail',
      'Confidence scores and timestamped evidence per checklist item',
    ],
    github: 'https://github.com/rajatmurhe',
    outcome: 'Full-stack AI platform demonstrating agentic video QA, async queue reliability, and human-in-the-loop evaluation.',
  },
  {
    id: 'jobassistant',
    name: 'AI Job Assistant',
    tagline: 'AI-Powered Job Search & Application Platform',
    category: 'GenAI · Full-Stack · RAG · Vector DB',
    emoji: '💼',
    status: 'completed',
    featured: true,
    tech: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'n8n', 'Gemini', 'Ollama', 'Docker'],
    summary:
      'A full-stack AI platform that parses resumes and job descriptions, performs semantic matching, gap analysis, ATS optimization, and generates tailored applications. Built with pgvector retrieval, n8n automation, and modular LLM provider support.',
    problem:
      'Job application is repetitive and unoptimized. Most applicants send generic materials without understanding ATS filters or skill gaps against specific roles.',
    architecture: [
      { label: 'Next.js / React Frontend', icon: '⚛️', layer: 'frontend' },
      { label: 'FastAPI REST Layer', icon: '⚡', layer: 'api' },
      { label: 'PostgreSQL + pgvector', icon: '🗄️', layer: 'data' },
      { label: 'Redis Cache', icon: '⚡', layer: 'data' },
      { label: 'LLM Provider (Gemini/Ollama)', icon: '🤖', layer: 'ai' },
      { label: 'n8n Automation Workflows', icon: '🔄', layer: 'automation' },
      { label: 'Structured Validation', icon: '✅', layer: 'output' },
    ],
    engineering: [
      'pgvector for semantic resume-to-job-description matching and retrieval',
      'Modular AI provider architecture supporting Gemini, Ollama, and OpenAI patterns',
      'n8n automation for follow-up sequences and application tracking',
      'Structured JSON validation on all LLM-generated content (resumes, emails, letters)',
      'Tool calling for ATS analysis, skill gap detection, and cover letter generation',
    ],
    github: 'https://github.com/rajatmurhe',
    outcome: 'Demonstrates full GenAI product engineering: vector retrieval, tool calling, automation pipelines, structured outputs.',
  },
  {
    id: 'sentinel',
    name: 'SentinelAI',
    tagline: 'Adaptive Insider Threat Detection',
    category: 'ML Security · Explainable AI · Post-Quantum Crypto',
    emoji: '🛡️',
    status: 'completed',
    featured: true,
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'scikit-learn', 'SHAP', 'Post-Quantum Cryptography'],
    summary:
      'A 10-stage security evaluation pipeline integrating anomaly detection, explainability (Tree SHAP), security enforcement, audit logging, and multi-turn attack simulations. Includes a post-quantum cryptography layer using ML-KEM / ML-DSA.',
    problem:
      'Insider threat detection requires explainability, auditability, and resistance to adversarial manipulation — not just a model output.',
    architecture: [
      { label: 'React Frontend', icon: '⚛️', layer: 'frontend' },
      { label: 'FastAPI Security API', icon: '⚡', layer: 'api' },
      { label: 'PostgreSQL Audit Log', icon: '🗄️', layer: 'data' },
      { label: '10-Stage Evaluation Pipeline', icon: '🔍', layer: 'core' },
      { label: 'Anomaly Detection (scikit-learn)', icon: '🤖', layer: 'ai' },
      { label: 'Tree SHAP Explainability', icon: '📊', layer: 'explainability' },
      { label: 'PQ Cryptography (ML-KEM/ML-DSA)', icon: '🔐', layer: 'security' },
    ],
    engineering: [
      '10-stage pipeline: detection → explanation → policy → enforcement → audit',
      'Tree SHAP for per-decision explainability of threat scores',
      'Multi-turn attack simulations to stress-test detection robustness',
      'Post-quantum cryptography layer with ML-KEM and ML-DSA implementation',
      'Structured test case logging with resulting mitigation actions',
    ],
    github: 'https://github.com/rajatmurhe',
    outcome: 'Security system that is explainable, auditable, adversarially tested, and quantum-safe.',
  },
];

export const secondaryProjects = [
  {
    id: 'neuroai',
    name: 'NeuroAI',
    tagline: 'Alzheimer\'s Disease Detection',
    tech: ['Python', 'FastAPI', 'Hugging Face', 'PyTorch', 'SHAP'],
    summary:
      'Fine-tuned BERT on clinical biomarker data for Alzheimer\'s detection. Compared against Random Forest and XGBoost baselines with SHAP explainability layer. Served via FastAPI.',
    highlights: ['BERT fine-tuning', 'Baseline comparison (RF, XGBoost)', 'SHAP explainability', 'FastAPI serving'],
  },
  {
    id: 'creditx',
    name: 'CreditX',
    tagline: 'Explainable Credit Intelligence',
    tech: ['Python', 'scikit-learn', 'SHAP', 'Streamlit'],
    summary:
      'Extra Trees classifier on a 31,711-row dataset with 78.62% accuracy and 74.26% Macro F1. Stratified cross-validation, SHAP / Gini / MDI feature importance, Streamlit dashboard.',
    highlights: ['78.62% accuracy', '74.26% Macro F1', 'SHAP + Gini + MDI', 'Streamlit dashboard'],
  },
  {
    id: 'agrhinova',
    name: 'AGRHINOVA',
    tagline: 'Multimodal Crop Diagnostics Platform',
    tech: ['Multimodal AI', 'RAG', 'Vision', 'NLP'],
    summary:
      'Winner / First Prize at AGRHINOVA Hackathon, VIT Chennai (CeAT-RC). Built a multimodal crop diagnostics and vernacular advisory platform combining AI visual classification with a multilingual RAG assistant.',
    highlights: ['🏆 First Prize — AGRHINOVA Hackathon, VIT Chennai', 'Multimodal AI', 'Multilingual RAG'],
  },
];

export const skills = {
  languages: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'C', 'SQL'],
  aiml: ['PyTorch', 'scikit-learn', 'XGBoost', 'Hugging Face', 'NLP', 'Fine-tuning', 'SHAP'],
  genai: ['LLM APIs', 'RAG', 'LangChain', 'Agentic AI', 'Prompt Engineering', 'Embeddings', 'Vector Retrieval', 'Tool Calling', 'Gemini', 'Ollama'],
  backend: ['FastAPI', 'REST APIs', 'Node.js', 'Express.js', 'Next.js', 'React'],
  data: ['PostgreSQL', 'pgvector', 'MongoDB', 'Redis', 'MySQL', 'SQLite'],
  devops: ['Docker', 'Linux', 'Git', 'GitHub Actions', 'pytest', 'Debugging', 'Logs/Traces'],
  automation: ['n8n', 'Workflow Automation'],
  security: ['Guardrails', 'Structured Validation', 'AI Security', 'Post-Quantum Cryptography', 'Policy-Based Validation'],
};

export const certifications = [
  { name: 'IBM Advanced Generative AI', issuer: 'IBM' },
  { name: 'AI-300', issuer: 'Microsoft' },
  { name: 'Professional ML Engineer', issuer: 'Google Cloud' },
  { name: 'Cloud Practitioner', issuer: 'AWS' },
];

export const achievements = [
  {
    title: 'Avery Dennison Scholarship',
    detail: 'Rs. 1.5 lakh merit-based scholarship',
    icon: '🏅',
  },
  {
    title: 'AGRHINOVA Hackathon — Winner',
    detail: 'First Prize, VIT Chennai (CeAT-RC)',
    icon: '🏆',
  },
];

export const systemLayers = [
  {
    id: 'frontend',
    label: 'Frontend',
    sublabel: 'Next.js / React / TypeScript',
    icon: '⚛️',
    description: 'Type-safe React components with Next.js App Router. Responsive, accessible UIs with structured data flows.',
    relatedProjects: ['FieldProof AI', 'AI Job Assistant', 'SentinelAI'],
    color: 'indigo',
  },
  {
    id: 'api',
    label: 'API Layer',
    sublabel: 'FastAPI / REST',
    icon: '⚡',
    description: 'Python FastAPI for fast, type-annotated REST APIs. Pydantic validation, async endpoints, structured JSON contracts.',
    relatedProjects: ['ClinicVoice AI', 'FieldProof AI', 'AI Job Assistant'],
    color: 'indigo',
  },
  {
    id: 'data',
    label: 'Data Layer',
    sublabel: 'PostgreSQL / pgvector / Redis',
    icon: '🗄️',
    description: 'Relational data with PostgreSQL, vector similarity search with pgvector, caching and async queues with Redis.',
    relatedProjects: ['FieldProof AI', 'AI Job Assistant', 'SentinelAI'],
    color: 'teal',
  },
  {
    id: 'ai',
    label: 'AI Layer',
    sublabel: 'LLMs / Embeddings / Retrieval',
    icon: '🤖',
    description: 'LLM integration with structured outputs, embedding-based retrieval, RAG pipelines, and multimodal understanding.',
    relatedProjects: ['ClinicVoice AI', 'FieldProof AI', 'AI Job Assistant'],
    color: 'indigo',
  },
  {
    id: 'agents',
    label: 'Agent Layer',
    sublabel: 'Tools / Workflows / Actions',
    icon: '🔀',
    description: 'Agentic systems with scoped tool calling, intent routing, structured action execution, and workflow automation.',
    relatedProjects: ['ClinicVoice AI', 'AI Job Assistant'],
    color: 'indigo',
  },
  {
    id: 'validation',
    label: 'Validation',
    sublabel: 'Schemas / Guardrails / Evaluation',
    icon: '✅',
    description: 'Schema validation on all LLM outputs, multi-layer guardrails, confidence thresholds, and human-in-the-loop review.',
    relatedProjects: ['ClinicVoice AI', 'FieldProof AI'],
    color: 'teal',
  },
  {
    id: 'observability',
    label: 'Observability',
    sublabel: 'Logs / Traces / Debugging',
    icon: '📡',
    description: 'Structured logging, trace-based debugging, root cause analysis, and reproducible failure documentation.',
    relatedProjects: ['ClinicVoice AI', 'Linkific'],
    color: 'teal',
  },
];

export const reliabilityCards = [
  {
    problem: 'Malformed LLM output',
    solution: 'Structured JSON schema validation',
    detail: 'All LLM responses are validated against typed Pydantic schemas before use.',
    project: 'ClinicVoice AI, AI Job Assistant',
    icon: '📋',
  },
  {
    problem: 'Unsupported model behavior',
    solution: 'Guardrail layers + scope enforcement',
    detail: 'Explicit system prompt scoping + output validation catches hallucinated behaviors.',
    project: 'ClinicVoice AI',
    icon: '🛡️',
  },
  {
    problem: 'Low-confidence retrieval',
    solution: 'Confidence threshold + fallback',
    detail: 'Embedding similarity below threshold triggers graceful fallback or human escalation.',
    project: 'ClinicVoice AI, Rungta Ventures',
    icon: '📊',
  },
  {
    problem: 'Backend failure in AI pipeline',
    solution: 'Logging + root cause analysis',
    detail: 'Structured logs and reproducible failure docs for every AI system issue.',
    project: 'Linkific',
    icon: '🔍',
  },
  {
    problem: 'Concurrent job processing',
    solution: 'Transactional job claiming',
    detail: 'PostgreSQL transactional claiming prevents duplicate job execution in async queues.',
    project: 'FieldProof AI',
    icon: '⚙️',
  },
  {
    problem: 'Unexpected input to AI system',
    solution: 'Validation + controlled workflows',
    detail: 'Typed interfaces and explicit tool boundaries prevent uncontrolled model behavior.',
    project: 'ClinicVoice AI, SentinelAI',
    icon: '🔒',
  },
];

export const traceScenarios = [
  {
    id: 'rag',
    label: 'RAG Query',
    steps: [
      { label: 'Input', detail: 'Raw user query received', status: 'done' },
      { label: 'Embedding', detail: 'Query → vector via embedding model', status: 'done' },
      { label: 'Vector Search', detail: 'pgvector similarity search (top-k)', status: 'done' },
      { label: 'Context', detail: 'Relevant chunks assembled', status: 'done' },
      { label: 'LLM', detail: 'Prompt + context sent to LLM', status: 'done' },
      { label: 'Schema Validation', detail: 'Output validated against Pydantic schema', status: 'done' },
      { label: 'Response', detail: 'Structured JSON returned to client', status: 'done' },
    ],
  },
  {
    id: 'agent',
    label: 'Agent Tool Call',
    steps: [
      { label: 'Intent', detail: 'User intent parsed from input', status: 'done' },
      { label: 'Router', detail: 'Intent classified → agent selected', status: 'done' },
      { label: 'Tool Selection', detail: 'Agent picks tool from approved set', status: 'done' },
      { label: 'API Call', detail: 'REST API called with typed parameters', status: 'done' },
      { label: 'Structured Result', detail: 'API returns validated JSON', status: 'done' },
      { label: 'Validation', detail: 'Guardrail checks result before use', status: 'done' },
      { label: 'Response', detail: 'Controlled output returned', status: 'done' },
    ],
  },
  {
    id: 'videoqa',
    label: 'Video QA',
    steps: [
      { label: 'Video Upload', detail: 'Job completion video ingested', status: 'done' },
      { label: 'Multimodal Model', detail: 'Gemini analyzes video frames', status: 'done' },
      { label: 'Checklist Match', detail: 'AI checks items vs. job spec', status: 'done' },
      { label: 'Evidence', detail: 'Timestamps + confidence per item', status: 'done' },
      { label: 'Confidence Score', detail: 'Overall score computed', status: 'done' },
      { label: 'Human Review', detail: 'Reviewer approves/rejects findings', status: 'done' },
    ],
  },
  {
    id: 'extraction',
    label: 'Document Extraction',
    steps: [
      { label: 'Document Input', detail: 'Raw document ingested (PDF/text)', status: 'done' },
      { label: 'NLP Pipeline', detail: 'spaCy tokenization + entity extraction', status: 'done' },
      { label: 'Field Extraction', detail: 'Structured fields identified', status: 'done' },
      { label: 'Validation', detail: 'Fields validated against schema', status: 'done' },
      { label: 'Noise Handling', detail: 'Inconsistencies flagged for review', status: 'done' },
      { label: 'Structured Output', detail: 'Clean JSON record stored', status: 'done' },
    ],
  },
];

// Synthetic illustrative data for planning intelligence demo
export const planningDemo = {
  metrics: [
    { label: 'Revenue', value: '\$1.24M', change: '+4.2%', positive: true },
    { label: 'Operating Margin', value: '18.4%', change: '-0.8pp', positive: false },
    { label: 'Headcount', value: '142', change: '+6', positive: true },
    { label: 'Cash Runway', value: '11.2 mo', change: '-0.4 mo', positive: false },
  ],
  insight: {
    title: 'Revenue variance detected',
    drivers: [
      { label: 'North America', value: '+8.2%', positive: true },
      { label: 'Enterprise churn', value: '-2.1%', positive: false },
      { label: 'Pricing effect', value: '+3.7%', positive: true },
    ],
  },
  trace: [
    { step: 'Query', detail: '"Why did revenue change this quarter?"' },
    { step: 'Data Retrieval', detail: '14 entities matched' },
    { step: 'Driver Analysis', detail: 'variance decomposition' },
    { step: 'Validation', detail: 'schema ✓  policy ✓  confidence ✓' },
    { step: 'Explanation', detail: 'structured insight generated' },
  ],
};
