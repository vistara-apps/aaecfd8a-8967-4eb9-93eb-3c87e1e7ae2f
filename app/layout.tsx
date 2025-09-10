import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EtherealPay - Monetize AI with Micro-transactions',
  description: 'A platform for creators to offer AI-powered features as microservices, with automated revenue sharing for users and contributors.',
  keywords: ['AI', 'micro-transactions', 'Base', 'blockchain', 'revenue sharing'],
  openGraph: {
    title: 'EtherealPay',
    description: 'Monetize your AI with micro-transactions & automated revenue share.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen cyber-grid">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
