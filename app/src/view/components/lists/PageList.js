import React from "react";
import { View, TouchableOpacity } from "react-native";
import { s } from "react-native-size-matters";
import { COLORS } from "../../../conts";
import { Icons, Text } from "../general";
export const PageList = ({ title, name, onPress }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: 15,
        marginBottom: 10,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(33, 33, 32, 0.1)",
        paddingVertical: 15,
      }}
    >
      <Text bold> {title}:</Text>

      <Text
        size={13}
        color={"#212120"}
        style={{ paddingHorizontal: 10, flex: 1 }}
      >
        {name}
      </Text>
    </View>
  );
};
