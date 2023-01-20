import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {s} from 'react-native-size-matters';
import {COLORS, FONTS, GENERAL} from '../../../../conts';
import {Button, CircleButton} from '../../general';
import {Icons} from '../../general';
export const HeaderButton = ({
  title,
  onPress = () => {},
  route,
  backButtonOnPress,
}) => {
  const navigation = useNavigation();
  return (
    <View
      onLayout={event => {}}
      style={{
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        position: 'absolute',
        top: GENERAL.platform == 'ios' ? GENERAL.statusBarHeight : 0,
        width: '100%',
        zIndex: 10,
        backgroundColor: COLORS.lightGrey,
        flexDirection: 'row',
        justifyContent: !backButtonOnPress ? 'flex-end' : 'space-between',
      }}>
      {backButtonOnPress && (
        <CircleButton
          style={{backgroundColor: COLORS.white}}
          onPress={backButtonOnPress}
        />
      )}

      <Button
        onPress={() => {
          onPress();
          navigation.navigate(route);
        }}
        titleStyle={{
          fontFamily: FONTS.FREDOKA_FONTS.semiBold,
          paddingHorizontal: 0,
          paddingLeft: 10,
        }}
        type="white"
        title={title}
        style={{width: 145}}
        rightIcon={<Icons.CircleArrowForwardGold size={35} />}
      />
    </View>
  );
};
