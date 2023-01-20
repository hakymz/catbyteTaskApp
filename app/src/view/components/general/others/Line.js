import React from 'react';
import {View} from 'react-native';
import {COLORS} from '../../../../conts';
export const Line = ({style}) => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        marginVertical: 20,
        ...style,
      }}
    />
  );
};
