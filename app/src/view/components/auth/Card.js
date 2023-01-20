import React from 'react';
import {View} from 'react-native';
import {COLORS} from '../../../conts';
export const Card = ({children}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: 32,
        flex: 1,
        marginTop: 30,
        padding: 30,
        paddingVertical: 40,
      }}>
      {children}
    </View>
  );
};
