import React from 'react';
import {
  StackActions,
  CommonActions,
  DrawerActions,
} from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigation(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}



export default {
  navigation,
  goBack,
  
};