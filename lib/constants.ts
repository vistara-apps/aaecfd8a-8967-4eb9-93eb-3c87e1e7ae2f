export const AI_SERVICE_CATEGORIES = [
  'Text Generation',
  'Image Generation',
  'Code Generation',
  'Translation',
  'Summarization',
  'Analysis',
  'Conversation',
  'Creative Writing',
] as const;

export const PRICING_MODELS = [
  { value: 'per-request', label: 'Per Request', description: 'Fixed price per API call' },
  { value: 'per-token', label: 'Per Token', description: 'Price based on tokens used' },
  { value: 'fixed', label: 'Fixed Price', description: 'One-time payment' },
] as const;

export const REVENUE_SPLIT_ROLES = [
  { value: 'creator', label: 'Creator', description: 'Service creator' },
  { value: 'platform', label: 'Platform', description: 'EtherealPay platform fee' },
  { value: 'contributor', label: 'Contributor', description: 'Code/model contributors' },
  { value: 'model-provider', label: 'Model Provider', description: 'AI model provider' },
] as const;

export const DEFAULT_REVENUE_SPLITS = [
  { role: 'creator' as const, percentage: 70 },
  { role: 'platform' as const, percentage: 20 },
  { role: 'model-provider' as const, percentage: 10 },
];

export const MOCK_SERVICES: AIService[] = [
  {
    serviceId: '1',
    creatorId: 'creator1',
    name: 'Smart Contract Auditor',
    description: 'AI-powered smart contract security analysis and vulnerability detection',
    pricingModel: 'per-request',
    unitPrice: 0.05,
    category: 'Analysis',
    tags: ['security', 'smart-contracts', 'audit'],
    createdAt: new Date('2024-01-15'),
    isActive: true,
    totalRevenue: 12.5,
    totalUsage: 250,
  },
  {
    serviceId: '2',
    creatorId: 'creator2',
    name: 'DeFi Strategy Generator',
    description: 'Generate personalized DeFi investment strategies based on risk tolerance',
    pricingModel: 'per-token',
    unitPrice: 0.001,
    category: 'Analysis',
    tags: ['defi', 'strategy', 'investment'],
    createdAt: new Date('2024-01-20'),
    isActive: true,
    totalRevenue: 8.3,
    totalUsage: 180,
  },
  {
    serviceId: '3',
    creatorId: 'creator1',
    name: 'NFT Description Writer',
    description: 'Create compelling descriptions for NFT collections and individual pieces',
    pricingModel: 'per-request',
    unitPrice: 0.02,
    category: 'Creative Writing',
    tags: ['nft', 'creative', 'marketing'],
    createdAt: new Date('2024-01-25'),
    isActive: true,
    totalRevenue: 15.8,
    totalUsage: 790,
  },
];

export const ANIMATION_DURATION = {
  fast: 100,
  base: 200,
  slow: 300,
} as const;
