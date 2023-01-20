import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {s} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONTS} from '../../../conts';
import {formatAmount} from '../../../helper';
import {useCartData} from '../../../hooks';
import {Button, Image, Text} from '../general';
export const SavedItemsList = ({item}) => {
  const {removeFromSavedItems} = useCartData();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductDetailsScreen', {item});
      }}
      style={{
        height: 116,
        backgroundColor: COLORS.white,
        marginBottom: 10,
        elevation: 5,
        shadowColor: COLORS.black,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: {height: 0},
        borderRadius: 10,
        flexDirection: 'row',
      }}>
      <Image
        source={{uri: item?.product_image}}
        style={{height: '100%', width: 100}}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          paddingVertical: 7,
          paddingRight: 10,
          paddingLeft: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flex: 1}}>
            <Text numberOfLines={1} size={14} bold color={COLORS.lightBlack}>
              {item?.product_name}
            </Text>
            <Text numberOfLines={1} color={COLORS.lightBlack}>
              ₦{formatAmount(item?.product_price)}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              removeFromSavedItems(item?.id);
            }}
            style={{
              height: s(45),
              width: s(45),
              backgroundColor: COLORS.lightRed,
              borderRadius: 100,
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="delete-outline" size={25} color={COLORS.white} />
          </TouchableOpacity>
          <Button
            onPress={() => {}}
            leftIcon={
              <Icon name="cart-outline" size={20} color={COLORS.white} />
            }
            titleStyle={{flex: 0, fontFamily: FONTS.QUICK_SAND_FONTS.bold}}
            style={{
              justifyContent: 'center',
              backgroundColor: COLORS.primary,
              flex: 1,
              height: s(45),
            }}
            title="Add To Cart"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
