# React Afterpay Checkout

[![npm](https://img.shields.io/npm/v/react-afterpay-checkout.svg?style=flat-square)](https://www.npmjs.com/package/react-afterpay-checkout)
[![npm](https://img.shields.io/npm/dm/react-afterpay-checkout.svg?style=flat-square)](https://www.npmjs.com/package/react-afterpay-checkout)
[![GitHub](https://img.shields.io/github/license/wangdicoder/react-afterpay-checkout?style=flat-square)](https://github.com/wangdicoder/react-afterpay-checkout/blob/master/LICENSE)

A React button component wrapping [Afterpay.js](https://developers.afterpay.com/afterpay-online/reference#javascript-afterpayjs) to provide a checkout utility.

## 📦 Install

```bash
npm install react-afterpay-checkout
```

or

```bash
yarn add react-afterpay-checkout
```

## 🔨 Usage

```jsx
import CheckoutButton from 'react-afterpay-checkout';

const App = () => (
  <>
    <CheckoutButton token="123" countryCode="AU">Shop now with</CheckoutButton>
  </>
);
```

## ⌨️ Development

Clone it locally

```bash
$ git clone git@github.com:wangdicoder/react-afterpay-checkout.git
$ cd react-afterpay-checkout
$ npm install
$ npm run dev
```

## 📄 License

MIT
