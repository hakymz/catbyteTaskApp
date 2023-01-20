import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export const Rating = ({rate, iconSize, style}) => {
  if (rate < 1) {
    return null;
  }
  return (
    <View style={{flexDirection: 'row', ...style}}>
      {['', '', '', '', '']?.map((_, index) => (
        <Icon
          color={'#FFCC00'}
          name={index < rate ? 'star' : 'star-outline'}
          size={iconSize}
        />
      ))}
    </View>
  );
};
