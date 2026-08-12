export interface CryptoToken {
  id: string;
  name: string;
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
  sparkline: number[];
  category: 'initial_coin' | 'ieo' | 'both' | 'major_markets';
  iconColor: string;
  logoUrl?: string;
  volume24h?: string;
  marketCap?: string;
}

export interface HotspotPin {
  id: string;
  label: string;
  top: string;
  left: string;
  description: string;
}

export interface VideoSeries {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  description: string;
}
