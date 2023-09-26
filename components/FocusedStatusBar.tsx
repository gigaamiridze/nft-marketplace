import React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/core';
import { IFocusedStatusBarProps } from '../interfaces';

function FocusedStatusBar(props: IFocusedStatusBarProps) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
}

export default FocusedStatusBar;
