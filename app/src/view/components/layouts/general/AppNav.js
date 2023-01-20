import {View} from 'react-native';
import React from 'react';
import {s} from 'react-native-size-matters';
import {CircleButton} from '../../general';
import {COLORS} from '../../../../conts';
const AppNav = ({backgroundColor, rightComponent}) => {
  return (
    <View
      style={{
        height: s(90),
        backgroundColor: backgroundColor || '#F3F7FF',
        borderRadius: 15,
        marginHorizontal: 10,
        marginTop: 5,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <CircleButton style={{backgroundColor: COLORS.white}} />
      <View style={{paddingRight: 10}}>{rightComponent}</View>
    </View>
  );
};

export default AppNav;
