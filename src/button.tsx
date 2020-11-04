import React, { useEffect } from 'react';
import './button.scss';
import { ButtonProps } from './types';
import { Logo } from './logo';

const lineHeight = 20;

export const Button = (props: ButtonProps): JSX.Element => {
  const {
    behavior = 'popup',
    logo = 'all',
    theme = 'white-black',
    token,
    countryCode,
    onComplete,
    style,
    className,
    children,
  } = props;

  const onBtnClick = (): void => {
    // @ts-ignore
    const AfterPay: any = window['AfterPay'];
    if (!AfterPay) {
      return console.error('AfterPay is undefined.');
    }

    AfterPay.initialize({ countryCode });
    if (behavior === 'popup') {
      AfterPay.open();
      AfterPay.onComplete = onComplete;
      AfterPay.transfer({ token });
    } else if (behavior === 'redirect') {
      AfterPay.redirect({ token });
    }
  };

  const LabelLogo = (): React.ReactElement =>
    countryCode === 'GB' ? (
      <Logo.CPTextLogo height={lineHeight} />
    ) : (
      <Logo.APTextLogo height={lineHeight} />
    );

  const getWrapperStyle = (): React.CSSProperties => {
    switch (theme) {
      case 'black-mint':
        return { color: '#000', background: '#B2FCE3' };

      case 'mint-black':
        return { color: '#B2FCE3', background: '#000' };

      default:
        return { color: '#fff', background: '#000' };
    }
  };

  const renderLogo = (): React.ReactElement => {
    switch (logo) {
      case 'image':
        return <Logo.APLogo height={lineHeight} />;
      case 'text':
        return <LabelLogo />;
      case 'all':
        return (
          <>
            <LabelLogo />
            <Logo.APLogo height={lineHeight} />
          </>
        );
    }
  };

  useEffect(() => {
    if ('AfterPay' in window) return;

    const element = document.createElement('script');
    const baseUrl =
      process.env.NODE_ENV === 'production'
        ? countryCode === 'GB'
          ? 'portal.clearpay.co.uk'
          : 'portal.afterpay.com'
        : countryCode === 'GB'
        ? 'portal.sandbox.clearpay.co.uk'
        : 'portal.sandbox.afterpay.com';
    element.src = `https://${baseUrl}/afterpay.js`;
    document.head.appendChild(element);
  }, []);

  return (
    <button
      className={`afterpay-checkout-btn${className ? ` ${className}` : ''}`}
      onClick={onBtnClick}
      type="button"
      style={style}>
      <div className="afterpay-checkout-btn__wrapper" style={getWrapperStyle()}>
        <div
          className={`afterpay-checkout-btn__children${
            children ? ' afterpay-checkout-btn__children_margin' : ''
          }`}>
          {children}
        </div>
        {renderLogo()}
      </div>
    </button>
  );
};
