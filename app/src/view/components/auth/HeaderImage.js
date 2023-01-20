import React from 'react';
import {Image, StatusBar, View} from 'react-native';
import {s} from 'react-native-size-matters';
import {COLORS, IMAGES} from '../../../conts';
export const HeaderImage = () => {
  return (
    <View style={{alignItems: 'center', marginTop: 40}}>
      <StatusBar backgroundColor={COLORS.background} barStyle="dark-content" />
      <Image
        source={IMAGES.Logo2}
        style={{width: s(120), height: s(120), resizeMode: 'contain'}}
      />
    </View>
  );
};
