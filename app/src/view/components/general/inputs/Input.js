import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {COLORS, FONTS, GENERAL} from '../../../../conts';
import {Text} from '..';
import {s} from 'react-native-size-matters';
import {Icons} from '../others';

export const Input = React.forwardRef(
  (
    {
      error = null,
      type = 'white',
      name,
      style,
      conStyle,
      inputStyle,
      backgroundColor,
      textColor,
      onFocus = () => {},
      onBlur = () => {},
      centerText,
      editable = true,
      password,
      light,
      big,
      value,
      rightIcon,
      leftIcon,
      border = true,
      label,
      hidePasswordText = '',
      rightTextOnpress,
      ...props
    },
    ref,
  ) => {
    const [focused, setFocused] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(password || false);

    const inputStyleConfig = {
      white: {
        backgroundColor: {
          active: COLORS.white,
          blur: 'rgba(255, 255, 255, 0.2)',
        },
        textColor: {active: COLORS.lightBlack, blur: COLORS.lightBlack},
      },
    };

    const getTextColor = () => {
      if (textColor) {
        if (typeof textColor == 'object') {
          return focused ? textColor.active : textColor.blur;
        } else {
          return textColor;
        }
      } else {
        return focused
          ? inputStyleConfig[type].textColor.active
          : inputStyleConfig[type].textColor.blur;
      }
    };

    return (
      <View
        style={{
          width: '100%',
          marginBottom: 20,
          ...conStyle,
        }}>
        <Text size={10} color={COLORS.primary}>
          {label}
        </Text>
        <View
          style={[
            styles.inputContainer,
            {
              height: s(40),
              alignItems: 'center',
              backgroundColor: COLORS.white,
              borderColor: focused
                ? COLORS.primary
                : !focused && error
                ? COLORS.red
                : 'rgba(34, 32, 87, 0.28)',
              ...style,
            },
          ]}>
          {leftIcon && <View style={{left: 0}}>{leftIcon}</View>}
          <TextInput
            secureTextEntry={!focused && error ? false : showPassword}
            onFocus={() => {
              onFocus();
              setFocused(true);
            }}
            onBlur={() => {
              onBlur();
              setFocused(false);
            }}
            placeholderTextColor={'#4D5657'}
            style={{
              fontSize: s(11),
              ...styles.input,
              color: !focused && error ? COLORS.red : getTextColor(),
              textAlign: centerText ? 'center' : 'left',
              ...inputStyle,
            }}
            ref={ref}
            editable={editable}
            value={!focused && error ? error : value?.trimStart?.() ?? ''}
            {...props}
          />
          {rightIcon ? (
            <View style={{right: -20}}>{rightIcon}</View>
          ) : (
            password && (
              <View style={{right: -10}}>
                {password ? (
                  <Icons.Eye
                    size={20}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <View style={{right: -20}}>{rightIcon}</View>
                )}
              </View>
            )
          )}
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  input: {
    color: COLORS.grey,
    fontFamily: FONTS.QUICK_SAND_FONTS.regular,
    flex: 1,
  },
});
