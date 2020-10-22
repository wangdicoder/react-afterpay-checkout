export { Button as default } from './button';

if(!('Afterpay' in window)) {
  const element = document.createElement('script');
  element.src = 'https://portal.afterpay.com/afterpay.js';
  document.head.appendChild(element);
}
