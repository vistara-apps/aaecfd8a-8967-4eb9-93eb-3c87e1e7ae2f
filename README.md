# EtherealPay - AI Micro-transactions Platform

A Base Mini App for creators to offer AI-powered features as microservices, with automated revenue sharing and micro-transaction billing.

## Features

- **AI Service Marketplace**: Browse and use AI-powered microservices
- **Creator Dashboard**: Manage your AI services and track earnings
- **Automated Revenue Splitting**: Fair distribution of earnings to creators, platform, and contributors
- **Base Wallet Integration**: Seamless payments using Base blockchain
- **Real-time Analytics**: Track performance and revenue insights

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (via MiniKit and OnchainKit)
- **Styling**: Tailwind CSS with custom cyber theme
- **TypeScript**: Full type safety throughout
- **UI Components**: Custom components with futuristic design

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Add your API keys:
   - `NEXT_PUBLIC_MINIKIT_API_KEY`
   - `NEXT_PUBLIC_ONCHAINKIT_API_KEY`
   - `OPENROUTER_API_KEY`

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Core Components

### Service Marketplace
- Browse available AI services
- Filter by category and search
- Pay-per-use with Base wallet

### Creator Dashboard
- Create new AI services
- Track earnings and usage
- Manage service settings

### Revenue Analytics
- Real-time performance metrics
- Revenue distribution visualization
- Growth insights and trends

## Data Model

- **User**: Wallet-based identity with usage tracking
- **AIService**: Configurable AI microservices with pricing
- **Transaction**: Payment records with automated splits
- **CreatorProfile**: Enhanced creator information and settings

## Revenue Sharing

Default revenue splits:
- Creator: 70%
- Platform: 20%
- Model Provider: 10%

## Deployment

This app is designed to run as a Base Mini App within the Base App ecosystem. Follow the Base Mini App deployment guidelines for production deployment.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details
