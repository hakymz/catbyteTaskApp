import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {s} from 'react-native-size-matters';
import {COLORS} from '../../../../conts';
const width = s(40);
export const Switch = ({enabled, onValueChange = () => {}, onPress}) => {
  const thumbPostion = useSharedValue(0);
  // const backgroundColor = useSharedValue('rgb(183, 198, 226)');
  const backgroundColorProgress = useSharedValue(1);

  // const [enabled, setEnabled] = React.useState(false);
  const thumbAnimatedStyle = useAnimatedStyle(() => {
    return {
      left: thumbPostion.value,
    };
  });
  const backgroundAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      backgroundColorProgress.value,
      [0, 1],
      ['rgba(183, 198, 226,1)', 'rgba(75, 42, 133,1)'],
    );
    return {
      backgroundColor,
    };
  });

  const toggleSwitch = () => {
    if (enabled) {
      thumbPostion.value = withTiming(width - 29, {
        duration: 300,
      });
      backgroundColorProgress.value = withTiming(1, {
        duration: 300,
      });
    } else {
      thumbPostion.value = withTiming(0, {
        duration: 300,
      });
      backgroundColorProgress.value = withTiming(0, {
        duration: 300,
      });
    }
  };

  React.useEffect(() => {
    toggleSwitch();
    onValueChange(enabled);
  }, [enabled]);

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Animated.View style={[style.switch, backgroundAnimatedStyle]}>
        <Animated.View style={[style.thumb, thumbAnimatedStyle]} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  switch: {
    height: s(25),
    width,
    borderRadius: 40,
    justifyContent: 'center',
    paddingHorizontal: 5,
    backgroundColor: COLORS.primary,
  },
  thumb: {
    height: s(18),
    width: s(18),
    backgroundColor: COLORS.white,
    borderRadius: 18,
  },
});
