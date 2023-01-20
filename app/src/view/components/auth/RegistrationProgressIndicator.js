import React from 'react';
import {View} from 'react-native';
import {COLORS} from '../../../conts';
export const RegistrationProgressIndicator = ({activeIndicator = 0}) => {
  return (
    <View style={{height: 50, flexDirection: 'row', justifyContent: 'center'}}>
      {['', ''].map((_, index) => (
        <View
          style={{
            height: 7,
            width: index == activeIndicator ? 20 : 7,
            borderRadius: 10,
            backgroundColor:
              index == activeIndicator ? COLORS.primary : '#AAA8FF',
            marginRight: 10,
          }}></View>
      ))}
    </View>
  );
};
