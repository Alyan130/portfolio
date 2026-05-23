import { 
  Workflow, 
  Zap, 
  Database, 
  Code, 
  Mic, 
  Bot,
  Terminal,
  Server,
  Globe
} from 'lucide-react';
import { Project, Experience, Education, Certification, StackItem, Award, Recommendation, Article } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Job Scraping System",
    category: "Automation",
    imageUrl: "https://res.cloudinary.com/duq3tnoxh/image/upload/v1779542505/Job_Scrapping_wthzwu.png",
    link: "#",
    problem: "The client was manually searching jobs on LinkedIn, checking if they matched their skills, writing cover letters, and managing everything in spreadsheets. The process was slow and repetitive.",
    whatIBuilt: [
      "Automated LinkedIn job scraping using RSS feeds",
      "AI-based filtering and scoring for relevant job opportunities",
      "Auto-generated personalized cover letters for high-match jobs",
      "Stored jobs, scores, and cover letters inside Google Sheets",
      "Weekly email summaries with top-rated opportunities"
    ],
    outcome: "Reduced the time spent on job hunting by showing only relevant opportunities. Improved application quality with personalized cover letters and automated tracking.",
    techStack: ["n8n", "OpenAI", "Google Sheets", "Gmail", "RSS Feed"]
  },
  {
    title: "Auto Posting System",
    category: "Automation",
    imageUrl: "https://res.cloudinary.com/duq3tnoxh/image/upload/v1779542506/Content_Automation_rg5hwt.jpg",
    link: "#",
    problem: "Writing and posting content manually across LinkedIn, X, and Facebook was taking too much time and making consistency difficult.",
    whatIBuilt: [
      "AI-powered content generation based on user topics and prompts",
      "Platform-specific posts for LinkedIn, X, and Facebook",
      "Review and approval flow before publishing",
      "One-click publishing across all platforms",
      "Trend research section for creating timely content"
    ],
    outcome: "Saved hours of manual content work and helped maintain consistent posting across platforms with minimal effort.",
    techStack: ["n8n", "React", "OpenAI"]
  },
  {
    title: "Lead Qualifier Outbound Agent",
    category: "Automation",
    imageUrl: "https://res.cloudinary.com/duq3tnoxh/image/upload/v1779542497/OUTBOUND_QAULIFIER_aqgapt.png",
    link: "#",
    problem: "The insurance agency manually called every lead, qualified them by hand, and updated CRM records manually, which caused delays and missed opportunities.",
    whatIBuilt: [
      "Automated outbound calling flow triggered after form submissions",
      "AI voice agent that qualifies leads in real time",
      "Automatic CRM logging and deal creation in HubSpot",
      "Follow-up calling sequence for unanswered leads"
    ],
    outcome: "Helped the agency respond to leads instantly, reduce manual work, and avoid missing potential customers.",
    techStack: ["VAPI", "n8n", "HubSpot CRM"]
  },
  {
    title: "HR Sales Recruitment Agent",
    category: "Automation",
    imageUrl: "https://res.cloudinary.com/duq3tnoxh/image/upload/v1779542465/RECRUITMENT_AGENT_yt6cxq.png",
    link: "#",
    problem: "The business was running job ads but had no proper system to engage, qualify, or schedule candidates after they filled out forms.",
    whatIBuilt: [
      "Conversational chat agent for Instagram and Facebook",
      "Automated candidate engagement and qualification",
      "Interview scheduling with calendar syncing",
      "Team notifications after successful scheduling",
      "Follow-ups and human handover for complex cases"
    ],
    outcome: "Improved candidate response handling and reduced manual coordination during the recruitment process.",
    techStack: ["GHL", "Manychat"]
  },
  {
    title: "Member Acquisition Automation",
    category: "Automation",
    imageUrl: "https://res.cloudinary.com/duq3tnoxh/image/upload/v1779542512/GYM_FUNNEL_if3jqx.png",
    link: "#",
    problem: "Gym leads were becoming cold because staff could not follow up quickly after users signed up for trial passes.",
    whatIBuilt: [
      "Automated pass delivery and booking emails",
      "CRM pipeline to track lead stages visually",
      "Reminder email sequence for inactive leads",
      "Automated movement between booking stages based on actions"
    ],
    outcome: "Every lead now receives a booking invite within seconds, improving response speed and increasing conversion chances.",
    techStack: ["GHL", "n8n"]
  },
  {
    title: "Logistics Operations System",
    category: "Automation",
    imageUrl: "https://res.cloudinary.com/duq3tnoxh/image/upload/v1779543532/ROUTE_muwoz3.png",
    link: "#",
    problem: "The client managed orders, driver coordination, and route planning manually through spreadsheets, leading to delays and higher fuel costs.",
    whatIBuilt: [
      "AI-powered order management system",
      "Telegram-based workflow for handling operations",
      "Automated route optimization for drivers",
      "Google Maps integration for efficient route calculation",
      "Continuous automation with minimal manual work"
    ],
    outcome: "Reduced manual operational work, improved delivery efficiency, and lowered fuel costs through optimized routing.",
    techStack: ["n8n", "Google Maps API", "OpenAI", "Telegram", "Google Sheets"]
  },
  {
    title: "Medicare Data Pipeline",
    category: "Custom Built",
    imageUrl: "https://res.cloudinary.com/duq3tnoxh/image/upload/v1779542516/Medicare_qbjql2.png",
    link: "#",
    problem: "The client manually collected CPT codes from multiple government sources and managed everything in spreadsheets, which became difficult for the team to handle.",
    whatIBuilt: [
      "ETL pipeline for scraping and cleaning CPT code data",
      "Structured SQL database with role-based access",
      "Interactive dashboard with filters, search, and charts",
      "Automated schedulers for regular database updates"
    ],
    outcome: "Replaced complex spreadsheet workflows with a clean and scalable dashboard that made data management easier for the entire team.",
    techStack: ["Playwright", "Next.js", "Supabase", "n8n", "Recharts"]
  },
  {
    title: "Lead Outreaching System",
    category: "Custom Built",
    imageUrl: "https://res.cloudinary.com/duq3tnoxh/image/upload/v1779542513/Lead_outreach_m1543f.png",
    link: "#",
    problem: "The outbound sales team struggled with scattered leads, delayed follow-ups, and poor visibility into campaign performance and lead intent.",
    whatIBuilt: [
      "Automated outreach through email, SMS, and AI voice agents",
      "Multi-touch follow-up system with intent tracking",
      "Centralized dashboard for managing campaigns and leads",
      "Automated notifications for high-intent prospects"
    ],
    outcome: "Improved lead handling efficiency by around 20% and reduced missed follow-ups across campaigns.",
    techStack: ["Supabase", "n8n", "React", "Apollo", "VAPI", "Twilio"]
  },
  {
    title: "Multi-tenant Podcast Content System",
    category: "Custom Built",
    imageUrl: "https://res.cloudinary.com/duq3tnoxh/image/upload/v1779543701/podcast_ank3wz.png",
    link: "#",
    problem: "The client managed prompts, content, and publishing workflows across different tools like Google Sheets and Notion, making everything scattered and hard to manage.",
    whatIBuilt: [
      "Centralized multi-user content management dashboard",
      "Integrations with Claude, ChatGPT, Webflow, Buzzsprout, YouTube, and Google Drive",
      "Scalable multi-tenant database architecture",
      "Built-in prompt management with 50+ starter prompts",
      "Content generation, editing, review, and publishing workflow"
    ],
    outcome: "Turned a scattered workflow into a centralized product that saved significant time and later evolved into a reusable multi-tenant platform.",
    techStack: ["React", "n8n", "Supabase", "FastAPI"]
  },
  {
    title: "Hive Mind",
    category: "Custom Built",
    imageUrl: "https://res.cloudinary.com/duq3tnoxh/image/upload/v1779542623/Screenshot_2026-05-21_231327_eow63i.png",
    link: "#",
    problem: "Project context and important decisions were getting lost over time, causing confusion, scope mismatches, and communication issues within teams.",
    whatIBuilt: [
      "AI-powered platform for long-term project context management",
      "Role-based access system for managers and team members",
      "ChatGPT-style interface connected to graph memory",
      "Automatic relationship and knowledge tracking over time",
      "Sub-agents for risk analysis, idea generation, and decision support"
    ],
    outcome: "Helped teams retrieve project knowledge easily, track decisions clearly, and maintain better alignment across projects.",
    techStack: ["FastAPI", "Next.js", "OpenAI Agents SDK", "Zep Graph Memory"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Barq Digital",
    role: "Automation Developer",
    location: "Karachi, Pakistan",
    period: "Aug 2025 – Present",
    description: [
      "Build agentic AI systems across customer support, marketing, and lead operations.",
      "Build ETL pipelines to process and structure healthcare data using Python automation.",
      "Implemented RAG-based systems to enable contextual responses for business use cases.",
      "Designed data pipelines and dashboards to enable better decision-making."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Dawood University of Engineering and Technology",
    degree: "Bachelor of Science in Computer Science",
    location: "Karachi",
    period: "Oct 2022 – 2026",
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
    description: "n8n, Make.com, GHL & Zapier",
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
    description: "Nextjs, React, FastAPI, Python, Docker, Lovable, Google AI Studio",
    icon: Code,
    iconColor: "text-blue-500"
  },
  {
    name: "AI Agents",
    description: "Openai AgentSDK, Langchain, Prompt engineering, Claude Code",
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
    name: "Scraping",
    description: "Playwright, Python, Apify, Selenium",
    icon: Globe,
    iconColor: "text-pink-500"
  }
];

export const AWARDS: Award[] = [];
export const RECOMMENDATIONS: Recommendation[] = [];
export const ARTICLES: Article[] = [];