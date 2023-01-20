import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {s} from 'react-native-size-matters';
import {BottomSheets, Icons} from '../general';
import {Text} from '../general';
import {COLORS} from '../../../conts';
import {GiftCardOptions, Topup} from '../bottomSheetModal/content';
import {useNavigation} from '@react-navigation/native';

const menus = [
  {
    name: 'Top-up',
    Icon: <Icons.TopUp size={35} />,
    onPress: () =>
      BottomSheets.show({
        component: <Topup />,
        backgroundColor: COLORS.lightGrey,
        customSnapPoints: [600, 600],
      }),
  },
  {
    name: 'Crypto',
    Icon: <Icons.Crypto size={35} />,
    onPress: navigation => {
      navigation.navigate('CryptoScreen');
    },
  },
  {
    name: 'Bills',
    Icon: <Icons.Bills size={35} />,
    onPress: navigation => {
      navigation.navigate('BillsScreen');
    },
  },
  {
    name: 'Giftcard',
    Icon: <Icons.GiftCard size={40} />,
    onPress: () =>
      BottomSheets.show({
        component: <GiftCardOptions />,
        backgroundColor: COLORS.white,
        customSnapPoints: [500, 500],
      }),
  },
];

const Button = ({item}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => item?.onPress?.(navigation)}
        activeOpacity={0.7}
        style={{
          height: s(60),
          width: s(60),
          backgroundColor: '#DCE1FA',
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {item.Icon}
      </TouchableOpacity>
      <Text
        color={COLORS.primary}
        size={14}
        medium
        style={{textAlign: 'center', paddingTop: 2}}>
        {item.name}
      </Text>
    </View>
  );
};
export const MenuButtons = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        paddingHorizontal: 10,
      }}>
      {menus.map(item => (
        <Button item={item} />
      ))}
    </View>
  );
};
