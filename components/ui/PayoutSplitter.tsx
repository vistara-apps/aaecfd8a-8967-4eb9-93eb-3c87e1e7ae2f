import { PieChart, DollarSign, Users } from 'lucide-react';
import { PayoutSplitterProps } from '../../lib/types';
import { formatCurrency, formatPercentage } from '../../lib/utils';

export function PayoutSplitter({ splits, variant = 'detailed', totalAmount }: PayoutSplitterProps) {
  const roleColors = {
    creator: 'text-green-400 bg-green-400',
    platform: 'text-blue-400 bg-blue-400',
    contributor: 'text-purple-400 bg-purple-400',
    'model-provider': 'text-orange-400 bg-orange-400',
  };

  const roleLabels = {
    creator: 'Creator',
    platform: 'Platform',
    contributor: 'Contributors',
    'model-provider': 'Model Provider',
  };

  if (variant === 'summary') {
    return (
      <div className="cyber-card">
        <div className="flex items-center gap-2 mb-4">
          <PieChart className="w-5 h-5 text-cyber-blue" />
          <h3 className="text-lg font-semibold text-white">Revenue Split</h3>
        </div>
        
        <div className="space-y-2">
          {splits.map((split, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div 
                  className={`w-3 h-3 rounded-full ${roleColors[split.role]?.replace('text-', 'bg-').replace(' bg-', ' ')}`}
                />
                <span className="text-sm text-gray-300">
                  {roleLabels[split.role]}
                </span>
              </div>
              <span className="text-sm font-medium text-white">
                {formatPercentage(split.percentage / 100)}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="cyber-card">
      <div className="flex items-center gap-2 mb-6">
        <DollarSign className="w-5 h-5 text-cyber-blue" />
        <h3 className="text-lg font-semibold text-white">Revenue Distribution</h3>
        <span className="ml-auto text-sm text-gray-400">
          Total: {formatCurrency(totalAmount)}
        </span>
      </div>

      <div className="space-y-4">
        {splits.map((split, index) => (
          <div key={index} className="border border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full ${roleColors[split.role]?.replace('text-', 'bg-').replace(' bg-', ' ')}`} />
                <div>
                  <h4 className="font-medium text-white">
                    {roleLabels[split.role]}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {formatPercentage(split.percentage / 100)} of total revenue
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-white">
                  {formatCurrency(split.amount)}
                </div>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${roleColors[split.role]?.replace('text-', 'bg-').replace(' bg-', ' ')}`}
                style={{ width: `${split.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400 flex items-center gap-1">
            <Users className="w-4 h-4" />
            {splits.length} recipients
          </span>
          <span className="text-white font-medium">
            Total: {formatCurrency(totalAmount)}
          </span>
        </div>
      </div>
    </div>
  );
}
