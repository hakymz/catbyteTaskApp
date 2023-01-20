import React from "react";
import { StyleSheet, View, Keyboard } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import {
  Button,
  CustomSafeAreaView,
  Input,
  KeyboardAvoidingViewWrapper,
} from "../components/general";
import Header from "../components/layouts/general/Header";
import { useUser } from "../../hooks";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("Enter first name"),
  lastName: yup.string().required("Enter last name"),
  age: yup.string().required("Enter age"),
  address: yup.string().required("Enter address"),
  postalCode: yup.string().required("Enter postalCode"),
  state: yup.string().required("Enter state"),
  image: yup.string().required("Enter image"),
});

export const AddUserScreen = ({ route, navigation }) => {
  const { addUser } = useUser();

  return (
    <CustomSafeAreaView>
      <Header titleStyle={{ textAlign: "center" }} title="Update Profile" />
      <KeyboardAvoidingViewWrapper
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            age: "",
            address: "",
            postalCode: "",
            state: "",
            image: "",
          }}
          onSubmit={(values) => {
            addUser({
              firstName: values?.firstName,
              lastName: values?.lastName,
              age: values?.age,
              image: values?.image,
              address: {
                address: values?.address,
                postalCode: values?.postalCode,
                state: values?.state,
              },
            });
            navigation.goBack();
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldTouched,
            setFieldValue,
          }) => (
            <View style={{ marginTop: 30 }}>
              <Input
                label="First Name"
                placeholder="Enter first name"
                value={values.firstName}
                error={touched.firstName && errors?.firstName}
                onChangeText={handleChange("firstName")}
                onBlur={() => setFieldTouched("firstName", true)}
              />
              <Input
                label="Last Name"
                placeholder="Enter last name"
                value={values.lastName}
                error={touched.lastName && errors?.lastName}
                onChangeText={handleChange("lastName")}
                onBlur={() => setFieldTouched("lastName", true)}
              />

              <Input
                label="Age"
                placeholder="Enter last name"
                value={values.age}
                error={touched.age && errors?.age}
                onChangeText={handleChange("age")}
                onBlur={() => setFieldTouched("age", true)}
              />
              <Input
                label="Address"
                placeholder="Enter address"
                value={values.address}
                error={touched.address && errors?.address}
                onChangeText={handleChange("address")}
                onBlur={() => setFieldTouched("address", true)}
              />
              <Input
                label="PostalCode"
                placeholder="Enter Postal Code"
                value={values.postalCode}
                error={touched.postalCode && errors?.postalCode}
                onChangeText={handleChange("postalCode")}
                onBlur={() => setFieldTouched("postalCode", true)}
              />
              <Input
                label="State"
                placeholder="Enter State"
                value={values.state}
                error={touched.state && errors?.state}
                onChangeText={handleChange("state")}
                onBlur={() => setFieldTouched("state", true)}
              />
              <Input
                label="Image Link"
                placeholder="Enter Image link"
                value={values.image}
                error={touched.image && errors?.image}
                onChangeText={handleChange("image")}
                onBlur={() => setFieldTouched("image", true)}
              />

              <Button
                title="Add User"
                style={{ marginTop: 20 }}
                onPress={() => {
                  Keyboard.dismiss();
                  handleSubmit();
                }}
              />
            </View>
          )}
        </Formik>
      </KeyboardAvoidingViewWrapper>
    </CustomSafeAreaView>
  );
};
