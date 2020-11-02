import React from 'react';

export type ButtonProps = {
  token: string;
  countryCode: string | 'AU' | 'NZ' | 'GB' | 'US' | 'CA';
  behavior?: 'popup' | 'redirect';
  onComplete?: (event: any) => void;
  logo?: 'image' | 'text' | 'all';
  theme?: 'white-black' | 'black-mint' | 'mint-black';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};
