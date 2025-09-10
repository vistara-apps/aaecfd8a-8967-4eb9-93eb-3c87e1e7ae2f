import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';
import { BillingCounterProps } from '../../lib/types';
import { formatCurrency, formatNumber } from '../../lib/utils';

export function BillingCounter({ variant, value, label, change }: BillingCounterProps) {
  const isPositiveChange = change && change > 0;
  const isNegativeChange = change && change < 0;

  const formatValue = (val: number) => {
    return variant === 'cost' ? formatCurrency(val) : formatNumber(val);
  };

  const getIcon = () => {
    return variant === 'cost' ? (
      <DollarSign className="w-5 h-5 text-cyber-blue" />
    ) : (
      <Activity className="w-5 h-5 text-cyber-blue" />
    );
  };

  return (
    <div className="cyber-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {getIcon()}
          <h3 className="text-sm font-medium text-gray-400">{label}</h3>
        </div>
        
        {change !== undefined && (
          <div className={`flex items-center gap-1 text-xs ${
            isPositiveChange ? 'text-green-400' : 
            isNegativeChange ? 'text-red-400' : 'text-gray-400'
          }`}>
            {isPositiveChange && <TrendingUp className="w-3 h-3" />}
            {isNegativeChange && <TrendingDown className="w-3 h-3" />}
            {Math.abs(change).toFixed(1)}%
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="text-2xl font-bold text-white text-glow">
          {formatValue(value)}
        </div>
        
        {change !== undefined && (
          <div className="text-xs text-gray-400">
            {isPositiveChange ? '+' : ''}{formatValue(value * (change / 100))} from last period
          </div>
        )}
      </div>

      {/* Visual indicator */}
      <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full animate-pulse-slow"
          style={{ width: '75%' }}
        />
      </div>
    </div>
  );
}
