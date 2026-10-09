export interface SolutionCard {
  id: string;
  pill: string;
  title: string;
  highlight: string;
  challenge: string;
  approach: string;
  considerations: string;
  checklist: string[];
  ctaText: string;
}

export const solutionsList: SolutionCard[] = [
  {
    id: 'o2c',
    pill: 'Order to Cash · O2C',
    title: 'Accelerate Collection. ',
    highlight: 'Automate Invoicing.',
    challenge: 'Delayed debtor collections, manual re-keying between CRM and accounting ledgers, and time wasted manually checking PO numbers and chasing unpaid accounts.',
    approach: 'End-to-end invoice automation that generates billing records from delivery confirmations, performs automated sanity checks, and dispatches electronic invoices with smart payment links.',
    considerations: 'Requires clean customer master data and enabled REST API access in your cloud accounting system (Xero/MYOB). Highly customized billing rules are mapped during discovery.',
    checklist: [
      'Automated billing checks and secure electronic invoice delivery',
      'Real-time invoice generation and multi-platform balance matching',
      'Automated payment reminders and dispute escalation routing',
      'Demonstrated potential to compress debtor turnaround by days'
    ],
    ctaText: 'Consult on O2C →'
  },
  {
    id: 'p2p',
    pill: 'Procure to Pay · P2P',
    title: 'Control Company Spend. ',
    highlight: 'Verify Every Supplier Bill.',
    challenge: 'Staff manually matching paper or PDF invoices against purchase orders and receiving logs, resulting in payment bottlenecks and duplicate payment risks.',
    approach: 'Automated 3-way matching engine extracting line items with AI, cross-referencing POs and delivery dockets, and routing only verified bills for payment approval.',
    considerations: 'Suppliers must provide legible PDF or high-resolution photo invoices. Requires defined managerial approval thresholds and PO system discipline.',
    checklist: [
      'Purchase requisition and PO approval automated workflows',
      'Automated 3-way record validation (PO, invoice, receiving log)',
      'Supplier ledger exception reporting and automated status dashboards',
      'Eliminates manual re-entry and prevents accidental duplicate payments'
    ],
    ctaText: 'Consult on P2P →'
  },
  {
    id: 'loss-prevention',
    pill: 'Loss Prevention · AI Vision',
    title: 'Protect Your Stock. ',
    highlight: 'Detect Theft in Real Time.',
    challenge: 'Retail inventory shrinkage often goes unnoticed until stocktake, while traditional security cameras only provide forensic evidence after goods have walked out.',
    approach: 'Behavioral computer vision models analyzed on existing camera feeds detecting concealment gestures and sending 4-second video verification clips to floor staff instantly.',
    considerations: 'Requires RTSP network camera access with adequate lighting and camera angles covering key retail aisles. Operates without facial recognition to ensure strict compliance with Australian privacy standards.',
    checklist: [
      'Real-time in-aisle gesture classification (e.g., product concealment, bag stuffing)',
      'Instant mobile push alerts with short video clips for floor team intervention',
      '100% anonymous behavioral modeling strictly preserving customer privacy',
      'Zero expensive new camera hardware requirements'
    ],
    ctaText: 'Consult on AI Vision →'
  },
  {
    id: 'finance',
    pill: 'Intelligent Finance & Accounting',
    title: 'Close the Month in Days. ',
    highlight: 'Report Numbers You Can Trust.',
    challenge: 'Finance teams bogged down in daily bank feed reconciliation, spreadsheet formula troubleshooting, and protracted month-end close cycles.',
    approach: 'Automated ledger validation, continuous daily bank feed matching, and CA-verified compliance checks keeping accounts current and audit-ready.',
    considerations: 'Requires direct cloud bank feed authorization and defined chart of accounts structure. Supervised by qualified Chartered Accountants (CAs).',
    checklist: [
      'Continuous bank feed balancing and cloud accounting application matching',
      'AASB and IFRS compliance mapping with instant ledger validation',
      'Real-time profit & loss, balance sheet, and cash position visibility',
      'Reduces month-end reporting delay from over a week to 2–3 days'
    ],
    ctaText: 'Consult on Finance →'
  }
];
