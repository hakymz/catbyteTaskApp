import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, GENERAL} from '../../../../conts';

export const CustomSafeAreaView = ({style, scrollable, children, ...props}) => {
  const {top} = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{backgroundColor: COLORS.background, flex: 1, ...style}}
      {...props}>
      {GENERAL.platform == 'ios' && (
        <View
          style={{
            height: top,
            position: 'absolute',
            width: '100%',
            backgroundColor: COLORS.primaryDark,
          }}
        />
      )}
      <StatusBar barStyle={'light-content'} />

      {children}
    </SafeAreaView>
  );
};
