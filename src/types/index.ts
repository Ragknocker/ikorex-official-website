export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  categorySlug: 'strategy' | 'ai' | 'connected';
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  metaDescription: string;
  keywords: string[];
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  contentHtml?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  topic: 'all' | 'integration' | 'security' | 'delivery' | 'governance';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  initials?: string;
  credential?: string;
}

export interface Founder {
  name: string;
  role: string;
  meta: string;
  image: string;
}

export interface WorkflowNode {
  step: string;
  stageName: string;
  title: string;
  desc: string;
  telemetry: string;
  detailTitle: string;
  detailText: string;
  metricTime: string;
  metricAccuracy: string;
}

export interface WorkflowScenario {
  id: string;
  label: string;
  number: string;
  name: string;
  badge: string;
  nodes: WorkflowNode[];
  initialLog: string;
}
