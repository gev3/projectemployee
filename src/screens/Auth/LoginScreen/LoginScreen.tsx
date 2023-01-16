import React, { FC } from "react";
import { View, TouchableOpacity } from "react-native";
import { P } from "../../../components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<{ RegisterScreen: { text: string } }>;

export const LoginScreen: FC<Props> = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen", { text: "Gev" })}>
        <P>Hello world</P>
      </TouchableOpacity>
    </View>
  );
};
