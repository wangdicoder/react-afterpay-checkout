import React  from 'react';
import './button.scss';
import { ButtonProps } from './types';

export const Button = (props: ButtonProps) => {
  const {token, countryCode, onComplete, behavior = 'popup'} = props;

  const onBtnClick = () => {
    const {AfterPay} = window;
    AfterPay.initialize({countryCode});
    if (behavior === 'popup') {
      AfterPay.open();
      AfterPay.onComplete = onComplete;
      AfterPay.transfer({token});
    } else if (behavior === 'redirect') {
      AfterPay.redirect({token});
    }
  };

  return (
    <button className="afterpay-checkout-btn" onClick={onBtnClick}>
      <div>
        Buy with Afterpay
      </div>
    </button>
  );
}
