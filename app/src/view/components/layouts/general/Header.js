import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StatusBar, TouchableOpacity, Image } from "react-native";
import { s } from "react-native-size-matters";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, GENERAL, IMAGES } from "../../../../conts";
import { useCartData } from "../../../../hooks";
import { Icons, Text } from "../../general";

export const Header = ({
  title,
  titleStyle,
  leftIcon,
  rightIcon,
  subRightIcon,
  subTitle,
  showEcommerceMenu,
}) => {
  const navigation = useNavigation();

  return (
    <View>
      {GENERAL.platform == "ios" && (
        <View
          style={{
            position: "absolute",
            width: "100%",
            backgroundColor: COLORS.primaryDark,
            height: GENERAL.statusBarHeight,
            zIndex: 10,
            top: -GENERAL.statusBarHeight,
          }}
        />
      )}

      <View
        style={{
          height: s(70),
          backgroundColor: COLORS.primaryDark,
          width: "100%",
          flexDirection: "row",
          paddingHorizontal: 20,
          alignItems: "center",
        }}
      >
        {leftIcon ? (
          leftIcon
        ) : (
          <Icons.ArrowWhite size={20} onPress={navigation.goBack} />
        )}

        <Text
          style={{ flex: 1, paddingHorizontal: 20, ...titleStyle }}
          size={18}
          bold
          color={COLORS.white}
        >
          {title}
        </Text>
        {rightIcon}
      </View>
      {subTitle && (
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text bold size={14} color={"#75898C"}>
            {subTitle}
          </Text>
          {showEcommerceMenu && (
            <View style={{ flexDirection: "row" }}>
              <Icon
                onPress={() => {
                  navigation.navigate("SavedItemsScreen");
                }}
                color={"#75898C"}
                size={28}
                name="heart-outline"
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("CartScreen");
                }}
              >
                {totalItemsInCart > 0 && (
                  <View
                    style={{
                      height: 15,
                      width: 15,
                      backgroundColor: COLORS.primary,
                      position: "absolute",
                      right: 0,
                      borderRadius: 20,
                      zIndex: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{ padding: 0, margin: 0, top: -2 }}
                      lineHeight={0}
                      bold
                      color={COLORS.white}
                      size={7}
                    >
                      {totalItemsInCart}
                    </Text>
                  </View>
                )}

                <Icon
                  color={"#75898C"}
                  style={{ marginLeft: 5 }}
                  size={28}
                  name="cart-outline"
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default Header;
