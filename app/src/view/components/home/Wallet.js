import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {s} from 'react-native-size-matters';
import {COLORS, GENERAL} from '../../../conts';
import {useLayouts, usePayments, useUser} from '../../../hooks';
import {DisplayAmount, Icons, Text} from '../general';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {BottomSheets} from '../../components/bottomSheetModal';
import {AddBank, Withdraw} from '../bottomSheetModal/content';
import {selectTotalCryptoBalance} from '../../../selectors.js';
export const Wallet = () => {
  const {width, height} = useLayouts();
  const {data} = useUser();
  const {myBanks} = usePayments();

  const activeSide = React.useRef('left');
  const leftConInactiveWidth = 65;
  const rightConInactiveWidth = 100;
  const rightConActiveWidth = width - (40 + leftConInactiveWidth + 7);
  const leftConActiveWidth = width - (40 + rightConInactiveWidth + 7);

  const rightConWidth = useSharedValue(rightConInactiveWidth);
  const leftConWidth = useSharedValue(leftConActiveWidth);
  const coinImageTopPosition = useSharedValue(20);
  const coinImageLeftPosition = useSharedValue(12);

  const rightConAnimatedStyles = useAnimatedStyle(() => {
    return {
      width: rightConWidth.value,
    };
  });
  const leftConAnimatedStyles = useAnimatedStyle(() => {
    return {
      width: leftConWidth.value,
    };
  });

  const animateLayout = () => {
    const rightConActiveWidthAniValue =
      width >= height
        ? GENERAL.platform == 'ios'
          ? rightConActiveWidth - (GENERAL.statusBarHeight + 40)
          : rightConActiveWidth
        : rightConActiveWidth;
    const leftConActiveWidthAniValue =
      width >= height
        ? GENERAL.platform == 'ios'
          ? leftConActiveWidth - (GENERAL.statusBarHeight + 40)
          : leftConActiveWidth
        : leftConActiveWidth;

    if (activeSide.current == 'left') {
      //Animate the crypto icon
      coinImageTopPosition.value = withTiming(42.5, {
        duration: 300,
      });
      coinImageLeftPosition.value = withTiming(15, {
        duration: 300,
      });
      rightConWidth.value = withTiming(rightConActiveWidthAniValue, {
        duration: 300,
      });
      leftConWidth.value = withTiming(leftConInactiveWidth, {
        duration: 300,
      });

      activeSide.current = 'right';
    } else if (activeSide.current == 'right') {
      //Animate the crypto icon
      coinImageTopPosition.value = withTiming(20, {
        duration: 300,
      });
      coinImageLeftPosition.value = withTiming(11, {
        duration: 300,
      });

      rightConWidth.value = withTiming(rightConInactiveWidth, {
        duration: 300,
      });
      leftConWidth.value = withTiming(leftConActiveWidthAniValue, {
        duration: 300,
      });
      activeSide.current = 'left';
    }
  };
  React.useEffect(() => {
    //Animate the crypto icon
    coinImageTopPosition.value = withTiming(20, {
      duration: 300,
    });
    coinImageLeftPosition.value = withTiming(11, {
      duration: 300,
    });

    rightConWidth.value = withTiming(rightConInactiveWidth, {
      duration: 300,
    });
    leftConWidth.value = withTiming(
      width >= height
        ? GENERAL.platform == 'ios'
          ? leftConActiveWidth - (GENERAL.statusBarHeight + 40)
          : leftConActiveWidth
        : leftConActiveWidth,
      {
        duration: 300,
      },
    );
    activeSide.current = 'left';
  }, [width]);

  const totalCryptoBalance = selectTotalCryptoBalance(data);

  return (
    <View style={{height: s(115), marginTop: 30, flexDirection: 'row'}}>
      <Animated.View style={[style.leftCon, leftConAnimatedStyles]}>
        <View
          style={{
            ...style.cryptoIconCon,
            width: leftConInactiveWidth,
            zIndex: 10,
          }}>
          <TouchableOpacity onPress={animateLayout} activeOpacity={0.7}>
            <Animated.Image
              style={[
                {
                  height: 35,
                  width: 35,
                  resizeMode: 'contain',
                },
                useAnimatedStyle(() => {
                  return {
                    top: coinImageTopPosition.value,
                    left: coinImageLeftPosition.value,
                  };
                }),
              ]}
              source={require('../../../assets/images/crypto/home/crypto.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            flex: 1,
          }}>
          <View
            style={{
              width: leftConActiveWidth - (leftConInactiveWidth + 10),
              flex: 1,
              paddingHorizontal: 5,
              justifyContent: 'center',
            }}>
            <DisplayAmount
              maxWidth={leftConActiveWidth - (leftConInactiveWidth + 10)}
              iconColor={COLORS.voodoo}
              iconSize={15}
              textStyle={{paddingTop: 12, paddingRight: 10}}
              color={COLORS.voodoo}
              amount={totalCryptoBalance}
              mainSize={25}
              decimalSize={20}
            />

            <Text
              color={COLORS.voodoo}
              style={{textAlign: 'center', width: '100%'}}>
              Crypto Balance
            </Text>
          </View>
        </View>
      </Animated.View>
      <Animated.View style={[style.rightCon, rightConAnimatedStyles]}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <TouchableOpacity
            onPress={() => {
              animateLayout();
              if (myBanks?.length == 0) {
                BottomSheets.show({
                  component: <AddBank />,
                  backgroundColor: COLORS.lightGrey,
                  customSnapPoints: [600, 600],
                });
              } else {
                BottomSheets.show({
                  component: <Withdraw />,
                  backgroundColor: COLORS.lightGrey,
                  customSnapPoints: [600, 600],
                });
              }
            }}
            activeOpacity={0.7}
            style={{
              height: s(45),
              width: s(100),
              justifyContent: 'center',
              backgroundColor: '#BCDFFF',
              borderRadius: 25,
              zIndex: 0,
              right: -20,
            }}>
            <Text color={COLORS.primary} style={{textAlign: 'center'}}>
              Withdraw
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...style.walletIconCon,
            width: rightConInactiveWidth,
            backgroundColor: COLORS.lighterBlue,
          }}>
          <TouchableOpacity onPress={animateLayout} activeOpacity={0.7}>
            <Icons.Wallet />
            <Text medium color={COLORS.lightBlue} style={{paddingTop: 5}}>
              Wallet
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const style = StyleSheet.create({
  leftCon: {
    height: '100%',
    backgroundColor: COLORS.lightGrey,
    borderTopLeftRadius: 17,
    borderBottomLeftRadius: 17,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  rightCon: {
    height: '100%',
    marginLeft: 7,
    backgroundColor: COLORS.lighterBlue,
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  walletIconCon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    right: 0,
  },
  cryptoIconCon: {
    height: '100%',
    backgroundColor: COLORS.lightGrey,
  },
});
