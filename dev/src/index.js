import React from 'react';
import ReactDOM from 'react-dom';

import CheckoutButton from '../../src';
import '../../src/button.scss';

const App = () => {
  return (
    <CheckoutButton countryCode="CA" token="1231">
      Shop now with
    </CheckoutButton>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
