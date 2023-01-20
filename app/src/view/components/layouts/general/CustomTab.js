import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {s} from 'react-native-size-matters';
import {COLORS, FONTS} from '../../../../conts';
import {useLayouts} from '../../../../hooks';
import {Text} from '../../general';
export const CustomTab = ({
  tabList,
  selectedCategoryIndex,
  selectDataIndex,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const currentButtonPosition = React.useRef();
  const {width} = useLayouts();

  const scrollRef = React.useRef();

  React.useEffect(() => {
    setCurrentIndex(selectedCategoryIndex);

    setTimeout(() => {
      const scrollIndex =
        selectedCategoryIndex == 0 ? 0 : currentButtonPosition.current;
      scrollRef?.current?.scrollTo({x: scrollIndex, animated: true});
    }, 50);
  }, [selectedCategoryIndex]);
  return (
    <View>
      <View
        style={{
          height: s(80),
          backgroundColor: COLORS.white,
          marginVertical: 30,
          flexDirection: 'row',
          paddingHorizontal: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <ScrollView
          ref={scrollRef}
          contentContainerStyle={{
            justifyContent: 'space-between',
            minWidth: '100%',
          }}
          showsHorizontalScrollIndicator={false}
          horizontal>
          {tabList?.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onLayout={event => {
                const {width, x} = event.nativeEvent.layout;
                if (index == currentIndex) {
                  currentButtonPosition.current = x - width / 2 + 50;
                  console.log(currentButtonPosition.current);
                }
              }}
              onPress={() => {
                setCurrentIndex(index);
                selectDataIndex?.(index);
              }}
              style={{
                height: s(48),
                backgroundColor:
                  index == currentIndex ? COLORS.primary : COLORS.background,
                flex: 1,
                borderRadius: 8,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontFamily:
                    index == currentIndex
                      ? FONTS.GILROY_FONTS.semiBold
                      : FONTS.GILROY_FONTS.regular,
                }}
                color={index == currentIndex ? COLORS.white : COLORS.black}>
                {item?.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
