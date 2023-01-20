import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../../conts";
import { Text } from "../general";
const Card = ({ item, children, style, ...props }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation?.navigate("DetailsScreen", item);
      }}
      style={{
        padding: 20,
        height: 200,
        elevation: 3,
        shadowColor: COLORS.black,
        shadowOpacity: 0.15,
        shadowRadius: 10,
        backgroundColor: COLORS.white,
        flex: 1,
        marginHorizontal: 10,
        borderRadius: 10,
        marginBottom: 20,
        ...style,
      }}
      {...props}
    >
      <Image
        style={{ height: "100%", width: "100%" }}
        source={{ uri: item?.image }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          paddingHorizontal: 10,
          width: "100%",
          paddingBottom: 10,
        }}
      >
        <Text
          lineHeight={10}
          semiBold
          size={10}
        >{`${item?.firstName} ${item?.lastName},  ${item?.age}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
