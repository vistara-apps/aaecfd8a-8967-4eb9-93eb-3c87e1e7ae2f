import { Sparkles, ArrowRight, Zap, DollarSign, Users } from 'lucide-react';

export function Hero() {
  return (
    <section className="text-center py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 rounded-3xl blur-3xl" />
      
      <div className="relative z-10">
        {/* Main Heading */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Monetize Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple text-glow">
              AI Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Create AI-powered microservices with automated revenue sharing. 
            Pay-per-use billing on Base blockchain.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-gray-900 bg-opacity-50 px-4 py-2 rounded-full border border-gray-700">
            <Zap className="w-4 h-4 text-cyber-blue" />
            <span className="text-sm text-gray-300">Instant Payments</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-900 bg-opacity-50 px-4 py-2 rounded-full border border-gray-700">
            <DollarSign className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300">Auto Revenue Split</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-900 bg-opacity-50 px-4 py-2 rounded-full border border-gray-700">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Creator Friendly</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
            <Sparkles className="w-5 h-5" />
            Explore Services
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4">
            Create AI Service
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-blue text-glow mb-2">50+</div>
            <div className="text-gray-400">AI Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-blue text-glow mb-2">$12.5K</div>
            <div className="text-gray-400">Total Revenue</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-blue text-glow mb-2">1.2K</div>
            <div className="text-gray-400">Transactions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
