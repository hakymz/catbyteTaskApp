import React from 'react';
import {COLORS, FONTS, GENERAL} from '../../../../conts';
import {
  View,
  StyleSheet,
  Platform,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import {Icons, Text} from '..';
import {s} from 'react-native-size-matters';
import RNPickerSelect from 'react-native-picker-select';

export const CustomPicker = ({
  label,
  onValueChange = () => {},
  error,
  data = [],
  style,
  placeholder,
  enabled = true,
  conStyle,
  value = '',
  defaultValue = '',
  showText = true,
  fontFamily = FONTS.QUICK_SAND_FONTS.regular,
  clearError = () => {},
  setTouched = () => {},
}) => {
  const colorScheme = useColorScheme();

  let itemColor =
    colorScheme == 'dark'
      ? Platform.OS == 'ios'
        ? COLORS.grey
        : COLORS.white
      : COLORS.black;

  const dataSet = (data ?? []).map(item => ({
    ...item,
    label: item?.name?.toString?.()?.trim?.(),
    value: item,
    color: itemColor,
  }));
  const [selectedValue, setSelectedValue] = React.useState(defaultValue);

  React.useEffect(() => {
    setSelectedValue(value);
  }, [value]);
  React.useEffect(() => {
    if (defaultValue) {
      setSelectedValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <View
      style={{
        marginBottom: 20,
        ...conStyle,
      }}>
      {label && (
        <Text size={10} color={COLORS.primary}>
          {label}
        </Text>
      )}
      <View
        style={[
          styles.inputContainer,
          {
            ...style,
            backgroundColor: COLORS.white,
            borderColor: error ? COLORS.red : 'rgba(34, 32, 87, 0.28)',
            ...style,
          },
        ]}>
        <View style={{flex: 1, zIndex: 2, paddingRight: 20}}>
          <RNPickerSelect
            onOpen={setTouched}
            useNativeAndroidPickerStyle={false}
            style={
              Platform.OS == 'ios'
                ? {
                    inputIOS: {
                      color: !showText
                        ? 'transparent'
                        : error
                        ? COLORS.red
                        : COLORS.lightBlack,
                      fontSize: s(12),
                      fontFamily,
                    },
                    placeholder: {
                      fontSize: s(11),
                      color: error ? COLORS.red : COLORS.lightBlack,
                    },
                  }
                : {
                    inputAndroid: {
                      color: !showText
                        ? 'transparent'
                        : error
                        ? COLORS.red
                        : COLORS.lightBlack,
                      fontSize: s(12),
                      fontFamily,
                    },
                    placeholder: {
                      fontSize: s(11),
                      color: error ? COLORS.red : COLORS.lightBlack,
                    },
                    inputAndroidContainer: {
                      textAlign: 'center',
                    },
                  }
            }
            value={selectedValue}
            placeholder={{
              value: '',
              label: placeholder,
              color: itemColor,
            }}
            onValueChange={value => {
              onValueChange(value);
            }}
            items={dataSet}
          />
        </View>
        <View
          style={{
            right: 20,
            position: 'absolute',
          }}>
          {/* <Icons.AngleArrow size={15} /> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: COLORS.white,
    height: '100%',
    borderColor: COLORS.grey,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    height: s(40),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
