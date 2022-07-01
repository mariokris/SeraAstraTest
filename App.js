import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import Routes from './src/navigation/Routes';
import {store} from './src/redux';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
