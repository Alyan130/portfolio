import { 
  Workflow, 
  Zap, 
  Database, 
  Code, 
  Mic, 
  Bot,
  Terminal,
  Server
} from 'lucide-react';
import { Project, Experience, Education, Certification, StackItem, Award, Recommendation, Article } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Appointment Booking Agent",
    category: "AI & Full Stack",
    imageUrl: "https://qygyhb50bt.ufs.sh/f/YxSUBdKLte16O17s9SmrgNyJ1oxRLS38pWdakeqY5OZUITlX",
    link: "#",
    keyFeatures: [
      "User-friendly chat with integrated form support",
      "Real-time availability checking",
      "Automated event booking based on collected details",
      "Email notifications sent to both customer and owner",
      "Storage of booking data in calendar and database"
    ],
    impact: "Eliminates manual scheduling, reduces booking errors, and saves time. Ideal for service providers (clinics, consultants, salons, event organizers) who need an efficient and reliable booking system.",
    techStack: ["ReactJs", "Fast API", "Supabase", "Google Calendar", "Gmail API", "MCP servers"]
  },
  {
    title: "Job Scrapping System",
    category: "Automation & AI",
    imageUrl: "https://qygyhb50bt.ufs.sh/f/YxSUBdKLte16MPVxfvY9Zcsuhby1zmJnQ37DESt4LljraoUX",
    link: "#",
    keyFeatures: [
      "Continuously scrape the latest and most relevant job listings from LinkedIn using RSS feeds",
      "Filter jobs based on user-defined criteria such as role, skills, location, and experience level",
      "Score each job opportunity out of 10 using AI-based relevance matching",
      "Automatically generate tailored cover letters for high-scoring jobs (8–9 range)",
      "Store filtered jobs, scores, and generated cover letters in Google Sheets for easy review",
      "Send a weekly email summary highlighting top-rated job opportunities directly to the user"
    ],
    impact: "Cuts down job hunting time dramatically by surfacing only high-quality opportunities. Improves application quality with personalized, role-specific cover letters. Keeps users consistently updated without manual searching or tracking.",
    techStack: ["n8n", "Google Sheets", "OpenAI", "Gmail", "RSS Feeds"]
  },
  {
    title: "Lead Generation CRM",
    category: "Automation & Scraping",
    imageUrl: "https://qygyhb50bt.ufs.sh/f/YxSUBdKLte16VdH09GvW9xAr5HeoI1YKEGf3wRLnFh8XsigP",
    link: "#",
    keyFeatures: [
      "Automatically scrapes all leads from different platforms",
      "Cold email leads from separate account",
      "Follow up leads and update the status",
      "Track all the leads in airtable powered dashboard"
    ],
    impact: "Improve sales. Businesses focus on productivity while this system handles automated work.",
    techStack: ["N8n", "React", "Apollo","Gmail api","Airtable"]
  },
  {
    title: "Meta Ads Automation System",
    category: "Automation & Advertising",
    imageUrl: "https://qygyhb50bt.ufs.sh/f/YxSUBdKLte16ZmzX5TQDwghx589E04LXRd6CbpaUGoBy1AIZ",
    link: "#",
    keyFeatures: [
      "Dynamically fetch ad copy, creatives, and campaign parameters from Google Sheets",
      "Automatically detect and handle creative formats (image or video) without manual intervention",
      "Launch ads using the Meta Marketing API with correct asset mapping",
      "Sync ad status, IDs, and publishing results back to the sheet in real time for tracking and reporting"
    ],
    impact: "Eliminates repetitive ad setup work and reduces human error. Speeds up ad launches from hours to minutes. Enables teams to scale Meta ad campaigns without increasing operational overhead.",
    techStack: ["n8n", "Google Sheets", "Meta Marketing API"]
  },
  {
    title: "Lead Qualifier Sales Agent",
    category: "AI Sales & CRM",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop",
    link: "#",
    keyFeatures: [
      "Triggers on every form filled on the site and calls the lead with a personalized script",
      "Qualifies the leads in realtime, by asking questions and analyzing them",
      "Log all the lead responses inside Hubspot CRM and creates a deal if qualified",
      "Apply a follow-up sequence within business hours if the lead didn’t answer"
    ],
    impact: "Businesses never miss a lead. Save a lot of time if done through manual calling.",
    techStack: ["VAPI", "n8n", "Hubspot CRM"]
  },
  {
    title: "Content Distribution System",
    category: "Automation & Content",
    imageUrl: "https://qygyhb50bt.ufs.sh/f/YxSUBdKLte16Qnuf7C7TKO40CkxZaYvF5gPm3JeSj8dyiwAV",
    link: "#",
    keyFeatures: [
      "Generate platform-specific content based on a topic and user-personalized prompts",
      "Create optimized posts for X (Twitter), LinkedIn, and Facebook in one flow",
      "Allow users to review, edit, and approve generated posts before publishing",
      "Auto-publish approved content across all three platforms simultaneously",
      "Market Insights tab to research trends and craft timely, high-impact content",
      "Editor tab to format, tweak tone, and customize posts exactly how the user wants"
    ],
    impact: "Saves hours of manual content creation and posting. Helps creators and businesses stay consistent across platforms. Turns ideas into published content with minimal effort and maximum reach.",
    techStack: ["n8n", "React"]
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Barq Digital",
    role: "Automation Developer",
    location: "Karachi, Pakistan",
    period: "Aug 2025 – Present",
    description: [
      "Building workflows and agents using modern AI tools.",
      "Developed content automation systems, RAG systems, voice AI agents and Dashboards using Lovable.",
      "Focused on solving real-world business problems through custom AI workflows and interactive interfaces.",
      "Helping businesses leverage AI to increase productivity."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Dawood University of Engineering and Technology",
    degree: "Bachelor of Science in Computer Science",
    location: "Karachi",
    period: "Oct 2022 – Present",
    description: "Gained hands-on experience with Object-Oriented Programming, Data Structures, and Algorithms through academic projects and problem-solving."
  },
  {
    institution: "Govt College Formen",
    degree: "Pre Engineering",
    location: "Karachi",
    period: "Aug 2020 – May 2022",
    description: "Grade A-1"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Cloud applied Agentic AI Initiative",
    organization: "Governor IT",
    year: "2024",
    link: "#"
  },
  {
    name: "AI Automation Internship",
    organization: "Barq Digital",
    year: "2025",
    link: "#"
  }
];

export const STACK: StackItem[] = [
  {
    name: "Automation",
    description: "n8n & Make.com",
    icon: Workflow,
    iconColor: "text-orange-500"
  },
  {
    name: "Voice Agents",
    description: "VAPI, Retell, Voiceflow",
    icon: Mic,
    iconColor: "text-purple-500"
  },
  {
    name: "Development",
    description: "Nextjs, React, FastAPI, Python, Docker",
    icon: Code,
    iconColor: "text-blue-500"
  },
  {
    name: "AI Agents",
    description: "Openai AgentSDK, Langchain, Prompt engineering, MCP",
    icon: Bot,
    iconColor: "text-green-500"
  },
  {
    name: "Databases",
    description: "Postgre SQL, MongoDB, Neo4j GraphDB",
    icon: Database,
    iconColor: "text-yellow-500"
  },
  {
    name: "No code",
    description: "Lovable, Google AI studio",
    icon: Server,
    iconColor: "text-red-500"
  }
];

export const AWARDS: Award[] = [];
export const RECOMMENDATIONS: Recommendation[] = [];
export const ARTICLES: Article[] = [];