'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';
import { MOCK_SERVICES, AI_SERVICE_CATEGORIES } from '../../lib/constants';
import { AIService } from '../../lib/types';

export function ServiceMarketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popular' | 'recent' | 'price'>('popular');

  const filteredServices = useMemo(() => {
    let filtered = MOCK_SERVICES.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = !selectedCategory || service.category === selectedCategory;
      
      return matchesSearch && matchesCategory && service.isActive;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.totalUsage - a.totalUsage;
        case 'recent':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'price':
          return a.unitPrice - b.unitPrice;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleUseService = async (serviceId: string) => {
    // Simulate service usage
    console.log('Using service:', serviceId);
    // In a real app, this would trigger the payment flow and AI service execution
    alert(`Service ${serviceId} would be executed here with Base wallet payment!`);
  };

  return (
    <section id="marketplace" className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">AI Service Marketplace</h2>
          <p className="text-gray-400">Discover and use AI-powered microservices</p>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-cyber-blue text-cyber-dark' : 'bg-gray-800 text-gray-400'}`}
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-cyber-blue text-cyber-dark' : 'bg-gray-800 text-gray-400'}`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search AI services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none"
          />
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyber-blue focus:outline-none"
        >
          <option value="">All Categories</option>
          {AI_SERVICE_CATEGORIES.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-cyber-blue focus:outline-none"
        >
          <option value="popular">Most Popular</option>
          <option value="recent">Most Recent</option>
          <option value="price">Lowest Price</option>
        </select>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-400">
          {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {/* Services Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {filteredServices.map(service => (
          <ServiceCard
            key={service.serviceId}
            service={service}
            variant="interactive"
            onUse={handleUseService}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <Filter className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </section>
  );
}
