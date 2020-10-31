import React from 'react';
import './button.scss';
import { ButtonProps } from './types';

const lineHeight = 20;

export const Button = (props: ButtonProps) => {
  const { token, countryCode, onComplete, behavior = 'popup', logo = 'all', children } = props;

  const onBtnClick = () => {
    const { AfterPay } = window;
    AfterPay.initialize({ countryCode });
    if (behavior === 'popup') {
      AfterPay.open();
      AfterPay.onComplete = onComplete;
      AfterPay.transfer({ token });
    } else if (behavior === 'redirect') {
      AfterPay.redirect({ token });
    }
  };

  const labelLogoSrc = () =>
    countryCode === 'GB'
      ? require('./assets/cp-logo-text.svg')
      : require('./assets/ap-logo-text.svg');

  const renderLogo = () => {
    switch (logo) {
      case 'image':
        return <img src={require('./assets/ap-logo.svg')} alt="afterpay" height={lineHeight} />;
      case 'text':
        return <img src={labelLogoSrc()} alt="afterpay" height={lineHeight} />;
      case 'all':
        return (
          <>
            <img src={labelLogoSrc()} alt="afterpay" height={lineHeight} />
            <img src={require('./assets/ap-logo.svg')} alt="afterpay" height={lineHeight} />
          </>
        );
    }
  };

  return (
    <button className="afterpay-checkout-btn" onClick={onBtnClick}>
      <div className="afterpay-checkout-btn__wrapper">
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
