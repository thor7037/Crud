import React from 'react';

import { Provider } from 'react-redux';
import store from './src/Redux/store';
import { NavigationContainer } from '@react-navigation/native';
import  MainStack  from '../crud/src/Navigation/MainStack'
const App = () => {
  return (
    <>
    <Provider store={store}>
      <NavigationContainer >
        <MainStack />
      </NavigationContainer>
    </Provider>
    </>
  );

};
export default App;
