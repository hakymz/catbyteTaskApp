import React from 'react';
import {View} from 'react-native';
import {s} from 'react-native-size-matters';
import {Switch} from '..';
import {COLORS} from '../../../../conts';
import {Text} from '../text';

export const ToggleInput = ({
  title,
  enableSwitch,
  onValueChange,
  style,
  click,
}) => {
  return (
    <View
      style={{
        height: s(55),
        backgroundColor: COLORS.white,
        borderRadius: 40,
        paddingHorizontal: 20,
        paddingLeft: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-between',
        ...style,
      }}>
      <Text medium color={COLORS.primary}>
        {title}
      </Text>
      <Switch
        enabled={enableSwitch}
        onValueChange={onValueChange}
        onPress={click}
      />
    </View>
  );
};
