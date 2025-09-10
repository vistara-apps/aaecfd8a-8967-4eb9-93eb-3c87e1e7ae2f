'use client';

import { useState } from 'react';
import { Wallet, Menu, X, Zap } from 'lucide-react';
import { useMiniKit } from '@coinbase/minikit';
import { truncateAddress } from '../../lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useMiniKit();

  return (
    <header className="border-b border-gray-800 bg-gray-900 bg-opacity-50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white text-glow">EtherealPay</h1>
              <p className="text-xs text-gray-400 hidden sm:block">AI Micro-transactions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#marketplace" className="text-gray-300 hover:text-cyber-blue transition-colors">
              Marketplace
            </a>
            <a href="#create" className="text-gray-300 hover:text-cyber-blue transition-colors">
              Create Service
            </a>
            <a href="#analytics" className="text-gray-300 hover:text-cyber-blue transition-colors">
              Analytics
            </a>
          </nav>

          {/* Wallet Connection */}
          <div className="flex items-center gap-4">
            {user?.walletAddress ? (
              <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg border border-gray-700">
                <Wallet className="w-4 h-4 text-cyber-blue" />
                <span className="text-sm text-white">
                  {truncateAddress(user.walletAddress)}
                </span>
              </div>
            ) : (
              <button className="btn-secondary text-sm">
                Connect Wallet
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col gap-4">
              <a 
                href="#marketplace" 
                className="text-gray-300 hover:text-cyber-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </a>
              <a 
                href="#create" 
                className="text-gray-300 hover:text-cyber-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Create Service
              </a>
              <a 
                href="#analytics" 
                className="text-gray-300 hover:text-cyber-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Analytics
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
