import React from 'react';

declare global {
  interface Window {
    AfterPay: any;
  }
}

export type ButtonProps = {
  token: string;
  countryCode: string;
  behavior?: 'popup' | 'redirect';
  onComplete?: (event: any) => void;
  logo?: 'image' | 'text' | 'all';
  theme?: 'black-white';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};
