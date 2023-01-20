import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {s} from 'react-native-size-matters';
import {COLORS} from '../../../../conts';
import {Text} from '../../general/text';
export const Button = ({
  type = 'primary',
  big,
  style,
  onPress,
  title = null,
  textColor,
  titleStyle,
  leftIcon,
  rightIcon,
  disabled,
  children,
  outline,
}) => {
  const configStyle = {
    primary: {
      backgroundColor: outline ? COLORS.white : COLORS.primary,
      textColor: outline ? COLORS.primary : COLORS.white,
    },
    secondary: {
      backgroundColor: outline ? COLORS.white : COLORS.secondary,
      textColor: outline ? COLORS.secondary : COLORS.white,
    },
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        height: s(48),
        backgroundColor: configStyle[type].backgroundColor,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: configStyle[type].textColor,
        borderRadius: 50,
        ...style,
      }}>
      {leftIcon && leftIcon}

      {title ? (
        <Text
          numberOfLines={1}
          semiBold
          size={14}
          color={textColor || configStyle[type].textColor}
          style={{
            flex: 1,
            textAlign: rightIcon ? 'left' : 'center',
            paddingHorizontal: 10,
            ...titleStyle,
          }}>
          {title}
        </Text>
      ) : (
        children
      )}
      {rightIcon && (
        <View style={{alignItems: 'flex-end', width: 35}}>{rightIcon}</View>
      )}
    </TouchableOpacity>
  );
};
