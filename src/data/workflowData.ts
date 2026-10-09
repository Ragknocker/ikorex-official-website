import { WorkflowScenario } from '../types';

export const workflowScenarios: WorkflowScenario[] = [
  {
    id: 'ap',
    number: '01.',
    label: 'Invoices & Accounts Payable',
    name: 'Accounts Payable & Invoicing (O2C/P2P)',
    badge: 'Finance Operations',
    initialLog: 'AP Ingestion Pipeline initialized. Polling mailboxes and invoice webhooks.',
    nodes: [
      {
        step: '01',
        stageName: 'INPUT',
        title: 'Multi-Channel Ingest',
        desc: 'Invoices received via email attachment, portal, or WhatsApp snapshot.',
        telemetry: 'RAW: INV-2041.pdf (Acme)',
        detailTitle: '01 / INPUT - Multi-Channel Ingest',
        detailText: 'Invoices received via email attachment, portal, or WhatsApp snapshot. Continuous intake pipeline operating with zero manual indexing.',
        metricTime: '< 1.8s',
        metricAccuracy: '99.8%'
      },
      {
        step: '02',
        stageName: 'PROCESS',
        title: 'Cognitive AI Extraction',
        desc: 'Computer vision & OCR extract line items, totals, GST, and dates.',
        telemetry: 'PARSED: Total $4,820.00',
        detailTitle: '02 / PROCESS - Cognitive AI Extraction',
        detailText: 'Multi-modal optical models parse headers, line items, ABN registration, tax breakdowns, and payment bank account details into structured JSON.',
        metricTime: '2.1s',
        metricAccuracy: '99.9%'
      },
      {
        step: '03',
        stageName: 'DECISION',
        title: '3-Way Rules Validation',
        desc: 'System matches invoice lines against PO-0778 and goods receipt note.',
        telemetry: 'MATCH: PO-0778 [PASS]',
        detailTitle: '03 / DECISION - 3-Way Rules Validation',
        detailText: 'Automated 3-way reconciliation verifies purchase order numbers, unit pricing, receiving slips, and approved delegations with deterministic audit trails.',
        metricTime: '< 0.5s',
        metricAccuracy: '100%'
      },
      {
        step: '04',
        stageName: 'SYNC',
        title: 'Connected Systems Sync',
        desc: 'UiPath bot creates approved bill in Xero/MYOB and notifies approver.',
        telemetry: 'SYNC: Xero API Bill Created',
        detailTitle: '04 / SYNC - Connected Systems Sync',
        detailText: 'Software bots dispatch API transactions to Xero or MYOB, attach the original PDF audit source, and prepare scheduled ABA payment batches.',
        metricTime: '1.2s',
        metricAccuracy: '100%'
      },
      {
        step: '05',
        stageName: 'OUTCOME',
        title: 'Automated Post & Audit',
        desc: 'Payment scheduled, immutable audit log created, zero manual keying.',
        telemetry: 'AUDIT: 100% Stamped',
        detailTitle: '05 / OUTCOME - Automated Post & Audit',
        detailText: 'End-to-end straight-through processing completed in under 6 seconds. Zero manual keyboard strokes, fully compliant with AASB standards.',
        metricTime: '< 0.3s',
        metricAccuracy: '100%'
      }
    ]
  },
  {
    id: 'vision',
    number: '02.',
    label: 'AI Loss Prevention & Security',
    name: 'AI Camera Vision & Loss Prevention',
    badge: 'Edge Intelligence',
    initialLog: 'Edge video feed stream connected. Anonymized gesture models active.',
    nodes: [
      {
        step: '01',
        stageName: 'STREAM',
        title: 'RTSP Stream Sampling',
        desc: 'Direct RTSP frame ingestion from existing in-store overhead cameras.',
        telemetry: 'CAM-04: 1080p @ 15fps',
        detailTitle: '01 / STREAM - RTSP Stream Sampling',
        detailText: 'Secure video ingestion over local network requiring no camera hardware upgrades. Real-time stream feeds on-premise or cloud inference worker.',
        metricTime: '< 40ms',
        metricAccuracy: '99.5%'
      },
      {
        step: '02',
        stageName: 'DETECT',
        title: 'Behavioral Gesture Classification',
        desc: 'Computer vision identifies rapid concealment and bag-stuffing gestures.',
        telemetry: 'TRIGGER: Concealment [P=0.94]',
        detailTitle: '02 / DETECT - Behavioral Gesture Classification',
        detailText: 'Deep neural networks analyze body dynamics and pocket/bag concealment motions without facial recognition, strictly preserving Australian privacy compliance.',
        metricTime: '110ms',
        metricAccuracy: '98.7%'
      },
      {
        step: '03',
        stageName: 'VERIFY',
        title: 'Multi-Frame Confirmation',
        desc: 'Temporal verification filters out false positives and normal browsing.',
        telemetry: 'CONFIRMED: 4-sec Window',
        detailTitle: '03 / VERIFY - Multi-Frame Confirmation',
        detailText: 'Rolling temporal buffer verifies movement sequence across multiple camera perspectives to discard casual customer handling or phone checks.',
        metricTime: '< 200ms',
        metricAccuracy: '99.2%'
      },
      {
        step: '04',
        stageName: 'DISPATCH',
        title: 'Instant Floor Team Alert',
        desc: 'Floor managers receive 4-second video clip and aisle location on handheld.',
        telemetry: 'DISPATCH: Aisle 3 (Handset 2)',
        detailTitle: '04 / DISPATCH - Instant Floor Team Alert',
        detailText: 'Ultra-low latency push notification delivers a clean, looping 4-second proof snippet directly to floor staff mobile devices or customer service podiums.',
        metricTime: '< 1.5s',
        metricAccuracy: '100%'
      },
      {
        step: '05',
        stageName: 'INCIDENT',
        title: 'Loss Prevented & Incident Logged',
        desc: 'Staff provides customer service presence; shrink prevented in real time.',
        telemetry: 'RESOLVED: Shrink Averted',
        detailTitle: '05 / INCIDENT - Loss Prevented & Incident Logged',
        detailText: 'Gentle customer service intervention stops loss before stock exits the door. Timestamped incident telemetry logged for inventory shrinkage audits.',
        metricTime: 'Real-time',
        metricAccuracy: '100%'
      }
    ]
  },
  {
    id: 'reconcile',
    number: '03.',
    label: 'Bank Reconciliation & Ledger',
    name: 'Automated Daily Bank Feed & Ledger Audit',
    badge: 'Chartered Accounting AI',
    initialLog: 'Direct bank feed stream synchronized. Continuous ledger auditor online.',
    nodes: [
      {
        step: '01',
        stageName: 'FEEDS',
        title: 'Live Bank Feed Ingestion',
        desc: 'Automated morning feed capture across ANZ, CBA, NAB, and Westpac.',
        telemetry: 'FEEDS: 384 Transactions',
        detailTitle: '01 / FEEDS - Live Bank Feed Ingestion',
        detailText: 'Scheduled bot agents capture cleared and pending bank transactions across institutional Australian bank connections at 06:00 AEST daily.',
        metricTime: '< 3.0s',
        metricAccuracy: '100%'
      },
      {
        step: '02',
        stageName: 'MATCH',
        title: 'Deterministic & Fuzzy Matching',
        desc: 'Matching bank reference strings to outstanding accounts receivable & payable.',
        telemetry: 'MATCHED: 371 of 384',
        detailTitle: '02 / MATCH - Deterministic & Fuzzy Matching',
        detailText: 'High-precision reconciliation algorithm matches invoice numbers, reference numbers, amounts, and historical transaction patterns across all accounts.',
        metricTime: '< 1.2s',
        metricAccuracy: '99.9%'
      },
      {
        step: '03',
        stageName: 'RULES',
        title: 'GST & Chart of Accounts Coding',
        desc: 'Automated tax code allocation complying with Australian ATO rules.',
        telemetry: 'TAX: BAS Codes Applied',
        detailTitle: '03 / RULES - GST & Chart of Accounts Coding',
        detailText: 'Rule sets supervised by Chartered Accountants verify BAS GST codes (GST, FRE, INP), job costing categories, and general ledger allocations.',
        metricTime: '< 0.8s',
        metricAccuracy: '100%'
      },
      {
        step: '04',
        stageName: 'POST',
        title: 'Direct Cloud Ledger Posting',
        desc: 'Matched items posted directly into Xero/MYOB with complete audit notes.',
        telemetry: 'POSTED: 96.6% Straight-Through',
        detailTitle: '04 / POST - Direct Cloud Ledger Posting',
        detailText: 'Bots automatically mark invoices paid, reconcile bank balances, and flag only true exceptions into a dedicated morning review queue.',
        metricTime: '< 2.0s',
        metricAccuracy: '100%'
      },
      {
        step: '05',
        stageName: 'REPORT',
        title: 'Daily Cash Position Dashboard',
        desc: 'Leadership receives clean daily cash balance & 30-day forecast by 8:00 AM.',
        telemetry: 'REPORT: Executive Summary Out',
        detailTitle: '05 / REPORT - Daily Cash Position Dashboard',
        detailText: 'Financial stakeholders receive daily automated cash position reports and runway projections before business opens, turning month-end wait into daily clarity.',
        metricTime: '< 0.5s',
        metricAccuracy: '100%'
      }
    ]
  }
];
