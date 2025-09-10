import { useState } from 'react';
import { Zap, TrendingUp, Users, Clock } from 'lucide-react';
import { AIService, ServiceCardProps } from '../../lib/types';
import { formatCurrency, formatNumber } from '../../lib/utils';

export function ServiceCard({ service, variant = 'interactive', onUse }: ServiceCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleUse = async () => {
    if (!onUse) return;
    
    setIsLoading(true);
    try {
      await onUse(service.serviceId);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="cyber-card group hover:scale-105 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-glow">
            {service.name}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {service.description}
          </p>
        </div>
        <div className="flex items-center gap-1 bg-cyber-blue bg-opacity-20 px-2 py-1 rounded-md">
          <Zap className="w-3 h-3 text-cyber-blue" />
          <span className="text-xs text-cyber-blue font-medium">
            {service.category}
          </span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {service.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <TrendingUp className="w-4 h-4 text-green-400" />
          </div>
          <div className="text-sm font-semibold text-white">
            {formatCurrency(service.totalRevenue)}
          </div>
          <div className="text-xs text-gray-400">Revenue</div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Users className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-sm font-semibold text-white">
            {formatNumber(service.totalUsage)}
          </div>
          <div className="text-xs text-gray-400">Uses</div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Clock className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-sm font-semibold text-white">
            {formatCurrency(service.unitPrice)}
          </div>
          <div className="text-xs text-gray-400">
            {service.pricingModel === 'per-request' ? 'Per Use' : 
             service.pricingModel === 'per-token' ? 'Per Token' : 'Fixed'}
          </div>
        </div>
      </div>

      {/* Action Button */}
      {variant === 'interactive' && (
        <button
          onClick={handleUse}
          disabled={isLoading || !service.isActive}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-cyber-dark border-t-transparent rounded-full animate-spin" />
              Processing...
            </div>
          ) : (
            `Use Service - ${formatCurrency(service.unitPrice)}`
          )}
        </button>
      )}

      {variant === 'preview' && (
        <div className="text-center py-2">
          <span className="text-sm text-gray-400">Preview Mode</span>
        </div>
      )}
    </div>
  );
}
