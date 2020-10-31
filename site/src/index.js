import React from "react";
import ReactDOM from 'react-dom';

import CheckoutButton from '../../src';

const App = () => {
  return (<CheckoutButton countryCode="AU" token="1231">Shop now with</CheckoutButton>);
};

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
