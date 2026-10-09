import { FaqItem } from '../types';

export const faqList: FaqItem[] = [
  {
    id: 'faq-1',
    topic: 'integration',
    question: 'How does iKOREX integrate with our current accounting and ERP systems?',
    answer: 'We connect directly into your existing software (such as Xero, MYOB, SAP, or Microsoft Dynamics) using secure REST APIs, enterprise webhooks, or robotic desktop agents (UiPath / Power Automate). Your team does not need to migrate to a new system or change their daily interface.'
  },
  {
    id: 'faq-2',
    topic: 'security',
    question: 'Do we need new cameras or specialized hardware for AI security monitoring?',
    answer: 'No. Our computer vision models operate with your existing IP/RTSP camera feeds. We process the video stream locally or via private cloud inference, requiring no expensive camera hardware overhaul.'
  },
  {
    id: 'faq-3',
    topic: 'security',
    question: 'How is customer and company data kept private and compliant?',
    answer: 'Data privacy is central to our engineering. For vision models, we use 100% anonymous body motion and gesture classification—zero facial recognition is performed, preserving customer privacy under Australian privacy laws. For financial systems, all transit is encrypted via TLS 1.3 with role-based access controls and audit logging.'
  },
  {
    id: 'faq-4',
    topic: 'delivery',
    question: 'How long does an automation deployment typically take?',
    answer: 'A focused process workflow (such as automated accounts payable or debtor reconciliation) is typically audited, designed, and deployed within 2 to 4 weeks. We focus on rapid proof-of-value before compounding automation to adjacent business processes.'
  },
  {
    id: 'faq-5',
    topic: 'governance',
    question: 'What happens when an unhandled exception or data mismatch occurs?',
    answer: 'Every automated workflow is engineered with deterministic fallback logic and human-in-the-loop review queues. If an invoice has an unregistered ABN or exceeds tolerance thresholds, it is flagged with a detailed reason and routed to a human operator rather than making assumptions.'
  }
];
