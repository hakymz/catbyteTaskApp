import React from 'react';
import {Text as RNText} from 'react-native';
import {s} from 'react-native-size-matters';
import {FONTS, COLORS} from '../../../../conts';
import {scaleFont} from '../../../../helper';

export const Text = ({
  light,
  regular,
  medium,
  bold,
  semiBold,
  fontType = 'gilroy',
  size,
  color,
  style,
  textAlign,
  lineHeight,
  children,
  ...props
}) => {
  const getFontFamily = () => {
    if (light) {
      return fontType == 'inter'
        ? FONTS.INTER_FONTS.light
        : FONTS.QUICK_SAND_FONTS.light;
    } else if (medium) {
      return fontType == 'inter'
        ? FONTS.INTER_FONTS.medium
        : FONTS.QUICK_SAND_FONTS.medium;
    } else if (semiBold) {
      return fontType == 'inter'
        ? FONTS.INTER_FONTS.semiBold
        : FONTS.QUICK_SAND_FONTS.semiBold;
    } else if (bold) {
      return fontType == 'inter'
        ? FONTS.INTER_FONTS.bold
        : FONTS.QUICK_SAND_FONTS.bold;
    } else {
      return fontType == 'inter'
        ? FONTS.INTER_FONTS.regular
        : FONTS.QUICK_SAND_FONTS.regular;
    }
  };
  return (
    <RNText
      style={
        Array.isArray(style)
          ? [
              {
                fontFamily: getFontFamily(),
                color: color || COLORS.black,
                lineHeight: s(lineHeight) || s(18),
                fontSize: s(size) || s(14),
                textAlign,
              },
              ...style,
            ]
          : {
              fontFamily: getFontFamily(),
              color: color || COLORS.black,
              lineHeight: s(lineHeight) || s(18),
              fontSize: s(size) || s(14),
              textAlign,
              ...style,
            }
      }
      {...props}>
      {children}
    </RNText>
  );
};
