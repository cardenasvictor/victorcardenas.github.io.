// Single source of truth for site content.
// Edit here; every page reads from this file.

export const site = {
  name: 'Victor Cardenas-Santiago',
  tagline: 'Disaster Finance & Climate Credit Risk',
  url: 'https://victorcardenas.org',
  email: 'victor@cardenas-santiago.com',
  phone: '+1 236 885 3132',
  city: 'Vancouver, British Columbia, Canada',
  linkedin: 'https://www.linkedin.com/in/victorcardenas/',
  scholar: 'https://scholar.google.ca/citations?user=lY58DkwAAAAJ&hl=en',
  calendly: 'https://calendly.com/cardenas-victor/30min',
  description:
    'Climate adaptation and sustainability advisory for corporates and organizations. Sovereign disaster risk finance for governments.',
};

export const nav = [
  { label: 'Government', href: 'government' },
  { label: 'Corporate', href: 'corporate' },
  { label: 'Research', href: 'research' },
  { label: 'About', href: 'about' },
  { label: 'Selected Work', href: 'work' },
];

export const metrics = [
  { value: '30+', label: 'Countries with operational engagements across Latin America, the Caribbean, Africa and the Pacific' },
  { value: '2006', label: "Year of Mexico's first sovereign catastrophe bond — among the earliest in any emerging economy" },
  { value: '25K', label: 'Critical infrastructure assets analysed under multi-hazard climate scenarios' },
  { value: '5', label: 'Continents with active engagements: Latin America, Africa, Asia, the Caucasus and the Pacific' },
];

export const partners = [
  { name: 'World Bank Group', file: 'world-bank.png' },
  { name: 'UNDP', file: 'undp.png', tall: true },
  { name: 'Inter-American Development Bank', file: 'idb.png' },
  { name: 'Asian Development Bank', file: 'adb.png' },
  { name: 'UNFCCC', file: 'unfccc.png' },
  { name: 'The Nature Conservancy', file: 'nature-conservancy.png' },
];

export const governmentServices = [
  {
    n: '01',
    title: 'Catastrophe Bonds & Parametric Insurance',
    body: 'Design, structuring and placement of multi-peril sovereign risk transfer. Conceived the first sovereign cat bond in a developing economy and led its restructuring.',
  },
  {
    n: '02',
    title: 'Disaster Fund Design & Operation',
    body: 'National financing architectures — governance, eligibility and disbursement frameworks. End-to-end support to design disaster finance strategies, propose and implement the regulatory framework, and put the proposed design into operation.',
  },
  {
    n: '03',
    title: 'Policy & Risk Layering Strategy',
    body: 'Fiscal resilience diagnostics and cost-benefit analysis of financing instruments, from reserves and contingent credit to market-based transfer.',
  },
];

export const corporateServices = [
  {
    n: '01',
    title: 'Physical Climate Risk Assessment',
    body: 'Asset-level exposure analysis at portfolio scale (25,000+ assets). Multi-hazard average annual loss and exceedance curves under RCP and SSP scenarios.',
  },
  {
    n: '02',
    title: 'Adaptation Strategy & Prioritization',
    body: 'Cost-benefit valuation frameworks for resilience investment. Roadmaps that rank interventions by avoided loss per dollar.',
  },
  {
    n: '03',
    title: 'Disclosure & Executive Reporting',
    body: 'TCFD, IFRS S2 and OSFI B-15 alignment. Board-ready dashboards and scenario narratives that survive audit committee scrutiny.',
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  region: string;
  track: 'Government' | 'Corporate';
  context: string;
  instrument: string;
  role: string;
  outcome: string;
};

export const cases: CaseStudy[] = [
  {
    slug: 'mexico-cat-bond',
    title: 'Mexico Sovereign Catastrophe Bonds',
    client: 'Ministry of Finance (SHCP) / World Bank',
    region: 'Mexico',
    track: 'Government',
    context: 'Mexico needed liquidity within weeks of a major earthquake or hurricane, without waiting for budget reallocation or emergency borrowing.',
    instrument: 'Parametric catastrophe bond triggered by earthquake magnitude and hurricane pressure thresholds. The 2006 transaction seeded the World Bank\u2019s MultiCat Program; the 2009 issuance was the first placed under it.',
    role: 'Led the technical design from the Government of Mexico in 2006; joined the World Bank team for the 2009 issuance under the MultiCat Program.',
    outcome: 'First sovereign cat bond issued by a developing economy. Template reused by subsequent sovereign issuers in Latin America and the Pacific.',
  },
  {
    slug: 'vanuatu-disaster-financing',
    title: 'Vanuatu National Disaster Financing Strategy',
    client: 'UNDP / Government of Vanuatu',
    region: 'Pacific',
    track: 'Government',
    context: 'A small island state facing cyclone, earthquake and volcanic risk with limited fiscal space and heavy donor dependence after each event.',
    instrument: 'Risk-layered national strategy combining contingency reserves, contingent credit and regional parametric cover.',
    role: 'Lead advisor on diagnostics, instrument sequencing and the governance framework for the national disaster fund.',
    outcome: 'Strategy adopted as the financing backbone of the national disaster risk management framework.',
  },
  {
    slug: 'ccrif-evaluation',
    title: 'Caribbean CCRIF Parametric Evaluation',
    client: 'World Bank',
    region: 'Caribbean',
    track: 'Government',
    context: 'Member governments questioned whether the regional parametric facility was paying out when losses actually occurred.',
    instrument: 'Independent evaluation of basis risk, trigger design and payout history across the facility.',
    role: 'Technical lead on the quantitative assessment and recommendations.',
    outcome: 'Findings informed trigger redesign and member-country communication on basis risk.',
  },
  {
    slug: 'mozambique-disaster-fund',
    title: 'Mozambique Disaster Management Fund',
    client: 'World Bank / Government of Mozambique',
    region: 'East Africa',
    track: 'Government',
    context: 'Recurrent flooding and cyclones required a standing financing mechanism rather than ad-hoc appeals.',
    instrument: 'National disaster fund with defined eligibility, replenishment rules and disbursement protocols.',
    role: 'Design of fund architecture, governance and operating rules.',
    outcome: 'First dedicated disaster fund in East Africa.',
  },
  {
    slug: 'latam-infrastructure-climate-risk',
    title: 'Critical Infrastructure Climate Risk',
    client: "Latin America's largest telecommunications operator",
    region: 'Latin America',
    track: 'Corporate',
    context: 'A portfolio of roughly 25,000 assets valued near USD 20 billion, with no consistent view of physical climate exposure.',
    instrument: 'Asset-level multi-hazard assessment producing average annual loss and exceedance curves under climate scenarios.',
    role: 'Lead modeller and author of the executive risk report.',
    outcome: 'Prioritised adaptation portfolio and a catastrophe reinsurance premium impact analysis used in renewal negotiations.',
  },
  {
    slug: 'financial-institutions-tcfd',
    title: 'Climate Risk for Financial Institutions',
    client: 'Banks and insurers (confidential)',
    region: 'Latin America / Canada',
    track: 'Corporate',
    context: 'Regulators and investors expected scenario-based physical risk disclosure; internal teams lacked the models.',
    instrument: 'Portfolio climate risk under RCP scenarios, mapped to TCFD and IFRS S2 disclosure requirements.',
    role: 'Design of the assessment methodology and board-level reporting.',
    outcome: 'Disclosure-grade scenario analysis and a repeatable internal process.',
  },
];

export type ResearchLine = { title: string; body: string; points?: string[] };

export const researchLines: ResearchLine[] = [
  {
    title: 'Physical climate risk in credit models',
    body: 'How catastrophe-model output should cross the interface into bank credit systems — and what today\u2019s practice loses on the way.',
    points: [
      'From expected loss to concentration. Measuring what the industry-standard interface — a single average annual loss per exposure — withholds from credit models: nothing at the rating-materiality scale, but 28–41% of 1-in-100-year expected credit loss, nearly all of it unexpected loss concentrated in a single name.',
      'Calibrating the margin of conservatism. Replacing judgement-based climate add-ons to PD and LGD with a number derived from damage-function uncertainty, through an admissibility protocol for vulnerability curves and a declared quantile rule that maps to prudential MoC categories.',
      'What to request from a catastrophe model. A methodology for credit risk managers to select, transform and qualify catastrophe-model outputs without access to model internals, with each resulting credit metric labelled by the mathematical guarantee it carries.',
      'The value of knowing the net loss curve. Quantifying when, and by how much, knowledge of the disaster-net credit loss distribution improves a bank\u2019s retention and capital decisions, and how that value shifts when external protections such as sovereign disaster finance change.',
    ],
  },
  {
    title: 'Optimal risk layering for disaster finance',
    body: 'Formal theory of how sovereigns and firms should combine reserves, contingent credit and risk transfer across a severity continuum.',
  },
  {
    title: 'Compound flood risk to coastal infrastructure',
    body: 'CLIMADA-based hazard and loss modelling for the Fraser River Delta, integrating riverine, tidal and storm-surge drivers.',
  },
  {
    title: 'Climate disasters and financial institutions',
    body: 'Causal identification of disaster impacts on microfinance performance using climatological instrumental variables.',
  },
  {
    title: 'Self-reported disasters and household welfare',
    body: 'Panel household survey evidence from Peru on who bears losses after natural disasters, validated against satellite and climate data.',
  },
];

export const skills = [
  'Probabilistic catastrophe risk modelling',
  'Sovereign risk transfer structuring',
  'Climate scenario analysis (RCP / SSP)',
  'Disaster fund and policy design',
  'Executive and board reporting',
  'CLIMADA · Python · QGIS · R',
];

export const bio = {
  short:
    'Senior advisor with 20+ years designing sovereign catastrophe risk transfer instruments across 30 countries. Conceived Mexico’s first sovereign cat bond (2006) and led its restructuring. Recent work includes Vanuatu’s national disaster financing strategy with UNDP and a 25,000-asset climate risk assessment for Latin America’s largest telecom.',
  long: [
    'Senior advisor with more than twenty years designing sovereign catastrophe risk transfer instruments across thirty countries. Conceived Mexico\u2019s first sovereign catastrophe bond in 2006 from within the Ministry of Finance \u2014 the transaction that seeded the World Bank\u2019s MultiCat Program \u2014 and in 2009, as part of the World Bank team, helped structure its first issuance under that program. Built the first ENSO-linked parametric risk financing instrument for microfinance in South America.',
    'Recent work spans Asia and the Pacific (Cambodia, Sri Lanka, Fiji, Vanuatu), the Caucasus (Armenia) and West Africa (Niger, Burkina Faso) with UNDP and ADB; disaster risk financing support across Central and South America; the first sovereign-developed disaster fund in East Africa; and \u2014 in the private sector \u2014 a critical infrastructure climate risk assessment covering 25,000 assets for Latin America\u2019s largest telecommunications operator.',
    'Doctoral candidate at the University of British Columbia\u2019s Institute for Resources, Environment and Sustainability. Research spans climate credit risk, compound flood risk to coastal infrastructure, climate risk disclosure by British Columbia companies, and the cost of capital of renewable versus fossil-fuel energy projects. Trusted advisor to the World Bank, UNDP, IDB, ADB and national governments. Combines rigorous analytics with executive communication.',
  ],
};
