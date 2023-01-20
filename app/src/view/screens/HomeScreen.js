import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, View } from "react-native";
import { useUser } from "../../hooks";
import Card from "../components/cards/Card";
import { Button, CustomSafeAreaView } from "../components/general";
import Header from "../components/layouts/general/Header";
export const HomeScreen = () => {
  const { users, getUsers } = useUser();
  const navigation = useNavigation();

  React.useEffect(() => {
    getUsers();
  }, []);
  return (
    <CustomSafeAreaView style={{ flex: 1 }}>
      <Header leftIcon={<></>} title={"Home"} />
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: 20,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={users}
        renderItem={({ item }) => <Card item={item} />}
      />
      <View
        style={{
          position: "absolute",
          height: 70,
          width: "100%",
          bottom: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          title={"Add"}
          style={{ width: 200 }}
          onPress={() => {
            navigation.navigate("AddUserScreen");
          }}
        />
      </View>
    </CustomSafeAreaView>
  );
};
