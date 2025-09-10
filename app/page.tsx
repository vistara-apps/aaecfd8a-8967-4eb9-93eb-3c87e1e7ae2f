import { Suspense } from 'react';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/layout/Hero';
import { ServiceMarketplace } from '../components/features/ServiceMarketplace';
import { CreatorDashboard } from '../components/features/CreatorDashboard';
import { RevenueAnalytics } from '../components/features/RevenueAnalytics';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8 space-y-12">
        <Hero />
        
        <Suspense fallback={<LoadingSpinner />}>
          <ServiceMarketplace />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <RevenueAnalytics />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <CreatorDashboard />
        </Suspense>
      </div>
    </main>
  );
}
