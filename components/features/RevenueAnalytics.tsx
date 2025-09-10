'use client';

import { useState } from 'react';
import { BarChart3, TrendingUp, DollarSign, Activity, Calendar } from 'lucide-react';
import { BillingCounter } from '../ui/BillingCounter';
import { PayoutSplitter } from '../ui/PayoutSplitter';
import { formatCurrency } from '../../lib/utils';

export function RevenueAnalytics() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  // Mock analytics data
  const analyticsData = {
    totalRevenue: 156.8,
    totalTransactions: 2340,
    averageTransaction: 0.067,
    revenueGrowth: 23.5,
    transactionGrowth: 18.2,
  };

  const mockRevenueSplits = [
    { role: 'creator' as const, percentage: 70, amount: 109.76, recipient: '0x123...abc' },
    { role: 'platform' as const, percentage: 20, amount: 31.36, recipient: '0x456...def' },
    { role: 'model-provider' as const, percentage: 10, amount: 15.68, recipient: '0x789...ghi' },
  ];

  const chartData = [
    { day: 'Mon', revenue: 12.5, transactions: 180 },
    { day: 'Tue', revenue: 18.3, transactions: 240 },
    { day: 'Wed', revenue: 15.7, transactions: 210 },
    { day: 'Thu', revenue: 22.1, transactions: 320 },
    { day: 'Fri', revenue: 28.4, transactions: 380 },
    { day: 'Sat', revenue: 31.2, transactions: 420 },
    { day: 'Sun', revenue: 28.6, transactions: 390 },
  ];

  return (
    <section id="analytics" className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Revenue Analytics</h2>
          <p className="text-gray-400">Track your AI service performance and earnings</p>
        </div>
        
        <div className="flex items-center gap-2">
          {(['7d', '30d', '90d'] as const).map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                timeRange === range
                  ? 'bg-cyber-blue text-cyber-dark'
                  : 'bg-gray-800 text-gray-400 hover:text-gray-300'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <BillingCounter
          variant="cost"
          value={analyticsData.totalRevenue}
          label="Total Revenue"
          change={analyticsData.revenueGrowth}
        />
        
        <BillingCounter
          variant="usage"
          value={analyticsData.totalTransactions}
          label="Total Transactions"
          change={analyticsData.transactionGrowth}
        />
        
        <BillingCounter
          variant="cost"
          value={analyticsData.averageTransaction}
          label="Avg Transaction"
          change={5.2}
        />
        
        <BillingCounter
          variant="usage"
          value={156}
          label="Active Users"
          change={12.8}
        />
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="cyber-card">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-cyber-blue" />
            <h3 className="text-lg font-semibold text-white">Revenue Trend</h3>
          </div>
          
          <div className="space-y-4">
            {chartData.map((data, index) => (
              <div key={data.day} className="flex items-center gap-4">
                <div className="w-8 text-sm text-gray-400">{data.day}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-300">{formatCurrency(data.revenue)}</span>
                    <span className="text-xs text-gray-400">{data.transactions} txns</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="h-2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"
                      style={{ width: `${(data.revenue / 35) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Distribution */}
        <PayoutSplitter
          splits={mockRevenueSplits}
          variant="detailed"
          totalAmount={analyticsData.totalRevenue}
        />
      </div>

      {/* Performance Insights */}
      <div className="cyber-card">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-cyber-blue" />
          <h3 className="text-lg font-semibold text-white">Performance Insights</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
            <h4 className="font-semibold text-white mb-1">Growing Revenue</h4>
            <p className="text-sm text-gray-400">
              Your services are generating {analyticsData.revenueGrowth}% more revenue than last period
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Activity className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="font-semibold text-white mb-1">High Activity</h4>
            <p className="text-sm text-gray-400">
              Transaction volume increased by {analyticsData.transactionGrowth}% this period
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="font-semibold text-white mb-1">Optimal Pricing</h4>
            <p className="text-sm text-gray-400">
              Your average transaction value is {formatCurrency(analyticsData.averageTransaction)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
