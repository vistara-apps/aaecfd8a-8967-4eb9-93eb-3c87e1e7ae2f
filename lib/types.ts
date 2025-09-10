// Core data model types
export interface User {
  userId: string;
  walletAddress: string;
  username: string;
  createdAt: Date;
}

export interface AIService {
  serviceId: string;
  creatorId: string;
  name: string;
  description: string;
  pricingModel: 'per-request' | 'per-token' | 'fixed';
  unitPrice: number;
  category: string;
  tags: string[];
  createdAt: Date;
  isActive: boolean;
  totalRevenue: number;
  totalUsage: number;
}

export interface Transaction {
  transactionId: string;
  userId: string;
  serviceId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  timestamp: Date;
  payouts: RevenueSplit[];
  metadata?: {
    tokensUsed?: number;
    requestType?: string;
    result?: string;
  };
}

export interface CreatorProfile {
  creatorId: string;
  bio: string;
  socialLinks: {
    twitter?: string;
    github?: string;
    website?: string;
  };
  payoutDetails: {
    walletAddress: string;
    preferredCurrency: string;
  };
  totalEarnings: number;
  servicesCount: number;
}

export interface RevenueSplit {
  recipient: string;
  percentage: number;
  amount: number;
  role: 'creator' | 'platform' | 'contributor' | 'model-provider';
}

// UI Component types
export interface ServiceCardProps {
  service: AIService;
  variant?: 'interactive' | 'preview';
  onUse?: (serviceId: string) => void;
}

export interface PayoutSplitterProps {
  splits: RevenueSplit[];
  variant?: 'detailed' | 'summary';
  totalAmount: number;
}

export interface BillingCounterProps {
  variant: 'usage' | 'cost';
  value: number;
  label: string;
  change?: number;
}

// API types
export interface AIServiceRequest {
  serviceId: string;
  prompt: string;
  parameters?: Record<string, any>;
}

export interface AIServiceResponse {
  result: string;
  tokensUsed: number;
  cost: number;
  transactionId: string;
}

export interface CreateServiceRequest {
  name: string;
  description: string;
  pricingModel: AIService['pricingModel'];
  unitPrice: number;
  category: string;
  tags: string[];
  revenueSplits?: Omit<RevenueSplit, 'amount'>[];
}
