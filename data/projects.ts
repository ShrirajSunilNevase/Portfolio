import type { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'Smart Farm Management System',
    category: 'Full Stack',
    description: 'AI-powered agriculture platform for centralized land records, crop monitoring, equipment sharing, marketplace operations and role-based administration, with chatbot support, notifications and external APIs.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB / MySQL', 'REST APIs', 'JavaScript'],
    image: '/images/projects/smart-farm.png',
    liveUrl: 'https://smart-farm-management-system-ji82l70c3.vercel.app/',
    featured: true,
  },
  {
    title: 'LuminaNLP',
    category: 'AI / ML',
    description: 'Deep linguistic, sentiment and readability analysis interface for exploring natural-language inputs with structured NLP metrics and interactive linguistic breakdowns.',
    technologies: ['React.js', 'NLP', 'Sentiment Analysis', 'Readability', 'JavaScript'],
    image: '/images/projects/lumina-nlp.png',
    liveUrl: 'https://lumina-nlp-five.vercel.app/',
  },
  {
    title: 'CogniShieldAI',
    category: 'AI / ML',
    description: 'Explainable scam and spam detection experience that lets users inspect suspicious digital content and understand the associated risk.',
    technologies: ['AI', 'Scam Detection', 'Explainable Analysis', 'Web App'],
    image: '/images/projects/cognishield-ai.png',
    liveUrl: 'https://cognishieldai.shrirajnevase.workers.dev/',
  },
  {
    title: 'Smart Parking System',
    category: 'Full Stack',
    description: 'A focused smart-parking interface for viewing parking slots and interacting with slot booking controls through a clean real-time-style dashboard.',
    technologies: ['React.js', 'JavaScript', 'Web UI', 'Booking Flow'],
    image: '/images/projects/smart-parking.png',
    liveUrl: 'https://smart-parking-system-cyan.vercel.app/',
  },
  {
    title: 'Advanced Doctor Management System',
    category: 'Full Stack',
    description: 'Healthcare management platform for structured doctor, patient and specialization data with database-oriented functionality.',
    technologies: ['JavaScript', 'Database', 'CRUD', 'Healthcare Management'],
    image: '/images/projects/doctor-management-placeholder.svg',
  },
];
