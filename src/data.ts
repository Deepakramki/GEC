import { CryptoToken, HotspotPin, VideoSeries } from './types';

export const INITIAL_TOKENS: CryptoToken[] = [
  {
    id: 'gec',
    name: 'Greencoin',
    symbol: 'GEC',
    price: '0.024$',
    change: '',
    isPositive: true,
    sparkline: [20, 24, 22, 28, 25, 30, 32, 38],
    category: 'major_markets',
    iconColor: 'bg-emerald-500',
    logoUrl: '/logo.png',
    volume24h: '$1.2M',
    marketCap: '$45.8M'
  },
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    price: '3400$',
    change: '',
    isPositive: true,
    sparkline: [12, 15, 18, 24, 22, 29, 35, 41],
    category: 'major_markets',
    iconColor: 'bg-blue-500',
    logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    volume24h: '$12.8B',
    marketCap: '$408.2B'
  },
  {
    id: 'usdt',
    name: 'Tether',
    symbol: 'USDT',
    price: '1.00$',
    change: '',
    isPositive: true,
    sparkline: [30, 32, 31, 36, 40, 38, 45, 52],
    category: 'major_markets',
    iconColor: 'bg-teal-600',
    logoUrl: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
    volume24h: '$44.1B',
    marketCap: '$112.5B'
  }
];

export const HOTSPOT_PINS: HotspotPin[] = [];

export const VIDEO_SERIES: VideoSeries[] = [
  {
    id: 'v1',
    title: 'Ep 1: Navigating Institutional Crypto Markets',
    duration: '04:15',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80',
    description: 'Learn how Tokenized architecture routes orders through high-frequency liquidity networks.'
  },
  {
    id: 'v2',
    title: 'Ep 2: Initial Coin Offering & IEO Risk Scoring',
    duration: '06:30',
    thumbnail: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?auto=format&fit=crop&w=600&q=80',
    description: 'Deep dive into smart contract verification, vesting schedules, and tokenomics auditing.'
  },
  {
    id: 'v3',
    title: 'Ep 3: Web 3.0 Decentralized Asset Management',
    duration: '05:48',
    thumbnail: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=600&q=80',
    description: 'Master non-custodial multi-sig vaults and automated yield diversification.'
  }
];
