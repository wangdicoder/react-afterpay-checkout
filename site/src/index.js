import React from "react";
import ReactDOM from 'react-dom';

import CheckoutButton from '../../src';

const App = () => {
  return (<CheckoutButton countryCode="AU" token="1231" behavior="redirect"/>);
};

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
