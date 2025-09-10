'use client';

import { useState } from 'react';
import { Plus, Settings, TrendingUp, DollarSign, Users, Zap } from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';
import { CreateServiceModal } from './CreateServiceModal';
import { MOCK_SERVICES } from '../../lib/constants';
import { formatCurrency, formatNumber } from '../../lib/utils';

export function CreatorDashboard() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'earnings'>('overview');

  // Mock creator data
  const creatorStats = {
    totalEarnings: 36.6,
    totalServices: 3,
    totalUsage: 1220,
    monthlyGrowth: 23.5,
  };

  const creatorServices = MOCK_SERVICES.filter(service => service.creatorId === 'creator1');

  return (
    <section id="create" className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Creator Dashboard</h2>
          <p className="text-gray-400">Manage your AI services and track earnings</p>
        </div>
        
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="btn-primary inline-flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Create New Service
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700">
        {[
          { id: 'overview', label: 'Overview', icon: TrendingUp },
          { id: 'services', label: 'My Services', icon: Zap },
          { id: 'earnings', label: 'Earnings', icon: DollarSign },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-cyber-blue text-cyber-blue'
                : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cyber-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Total Earnings</h3>
                  <p className="text-2xl font-bold text-white text-glow">
                    {formatCurrency(creatorStats.totalEarnings)}
                  </p>
                </div>
              </div>
              <div className="text-xs text-green-400">
                +{creatorStats.monthlyGrowth}% this month
              </div>
            </div>

            <div className="cyber-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Active Services</h3>
                  <p className="text-2xl font-bold text-white">
                    {creatorStats.totalServices}
                  </p>
                </div>
              </div>
              <div className="text-xs text-gray-400">
                All services active
              </div>
            </div>

            <div className="cyber-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Total Usage</h3>
                  <p className="text-2xl font-bold text-white">
                    {formatNumber(creatorStats.totalUsage)}
                  </p>
                </div>
              </div>
              <div className="text-xs text-purple-400">
                +15% this week
              </div>
            </div>

            <div className="cyber-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Avg. Revenue</h3>
                  <p className="text-2xl font-bold text-white">
                    {formatCurrency(creatorStats.totalEarnings / creatorStats.totalServices)}
                  </p>
                </div>
              </div>
              <div className="text-xs text-orange-400">
                Per service
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="cyber-card">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[
                { action: 'Service used', service: 'Smart Contract Auditor', amount: 0.05, time: '2 min ago' },
                { action: 'Service used', service: 'NFT Description Writer', amount: 0.02, time: '5 min ago' },
                { action: 'Service used', service: 'Smart Contract Auditor', amount: 0.05, time: '12 min ago' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-b-0">
                  <div>
                    <p className="text-white font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-400">{activity.service}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-medium">+{formatCurrency(activity.amount)}</p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'services' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creatorServices.map(service => (
              <div key={service.serviceId} className="relative">
                <ServiceCard service={service} variant="preview" />
                <button className="absolute top-4 right-4 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Settings className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'earnings' && (
        <div className="space-y-6">
          <div className="cyber-card">
            <h3 className="text-lg font-semibold text-white mb-4">Earnings Breakdown</h3>
            <div className="space-y-4">
              {creatorServices.map(service => (
                <div key={service.serviceId} className="flex items-center justify-between py-3 border-b border-gray-800 last:border-b-0">
                  <div>
                    <h4 className="font-medium text-white">{service.name}</h4>
                    <p className="text-sm text-gray-400">{service.totalUsage} uses</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-white">{formatCurrency(service.totalRevenue)}</p>
                    <p className="text-xs text-gray-400">Total earned</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Create Service Modal */}
      <CreateServiceModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </section>
  );
}
