import React, { FC, useState } from "react";
import { KeyboardAvoidingView, ScrollView, Alert } from "react-native";
import { useFormik } from "formik";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { isIOS } from "../../../helpers/helpers";
import { validationRegister } from "../../../helpers/yup-validations";
import { Button, FormikInput, ChangeProfilePhoto } from "../../../components";
import { handleUpdateCoords, hasLocationPermission } from "../../../helpers/geo";

type Props = NativeStackScreenProps<{ RegisterScreen: { text: string } }>;

export const RegisterScreen: FC<Props> = ({ navigation }) => {
  const initialValues = { first_name: "", last_name: "", image: "" };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationRegister,
    onSubmit: async (formValues) => {

    }
  });


  const [currentLocation, setCurrentLocation] = useState<{ lat: string | number | null, lng: string | number | null }>({
    lat: null,
    lng: null
  });
  const handleGetCoords = async () => {
    const hasIosLocation = await hasLocationPermission();
    if (hasIosLocation) {
      await handleUpdateCoords(setCurrentLocation);

    }
  };
  console.log(currentLocation, 'currentLocation');
  const { values, handleSubmit, errors, touched, setFieldValue } = formik;
  return (
    <KeyboardAvoidingView style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
                          behavior={isIOS ? "padding" : "height"}
                          enabled keyboardVerticalOffset={100}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: "center" }}
                  style={{ paddingBottom: 50 }}>
        <ChangeProfilePhoto
          userImage={values.image}
          handleGetImage={(image) => setFieldValue("image", image)} />
        <FormikInput
          maxLength={50}
          errors={errors}
          value={values.first_name}
          touched={touched}
          handleChange={formik.handleChange}
          placeholder={"Name"}
          name="first_name"
        />
        <FormikInput
          maxLength={60}
          errors={errors}
          value={values.last_name}
          touched={touched}
          handleChange={formik.handleChange}
          placeholder={"Last name"}
          name="last_name"
        />
        <Button body={"Next"} onPress={handleSubmit} width={"40%"} style={{ marginTop: 20 }} />
        <Button body={"Get"} onPress={() => handleGetCoords()} width={"40%"} style={{ marginTop: 20 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
