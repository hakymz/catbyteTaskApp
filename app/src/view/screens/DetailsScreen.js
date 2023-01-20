import React from "react";
import { ScrollView, View } from "react-native";
import { CustomSafeAreaView, Image } from "../components/general";
import Header from "../components/layouts/general/Header";
import { PageList } from "../components/lists/PageList";
export const DetailsScreen = ({ route }) => {
  const details = route?.params;
  console.log(details);
  return (
    <CustomSafeAreaView style={{ flex: 1 }}>
      <Header title={"Details"} />
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <Image style={{ height: 300 }} source={{ uri: details?.image }} />
        <View style={{ paddingHorizontal: 20 }}>
          <PageList title="First Name" name={details?.firstName} />
          <PageList title="Last Name" name={details?.lastName} />
          <PageList title="Age" name={details?.age} />
          <PageList title="Address" name={details?.address?.address} />
          <PageList title="Postal Code" name={details?.address?.postalCode} />
          <PageList title="State" name={details?.address?.state} />
        </View>
      </ScrollView>
    </CustomSafeAreaView>
  );
};
