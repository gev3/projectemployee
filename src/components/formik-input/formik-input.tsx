import React, { FC, memo } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
  TextInputProps,
  KeyboardTypeOptions
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Colors, Fonts } from "../../styles/styles";

interface localProps {
  name: string;
  required?: boolean;
  contentStyle?: ViewStyle;
  label?: string;
  value: string;
  maxLength?: number | undefined;
  handleChange: (value: string) => any;
  inputProps?: TextInputProps;
  placeholder?: string;
  errors?: { [key: string]: string | undefined };
  touched?: any;
  keyboardType?: KeyboardTypeOptions;
  eye?: boolean;
  secureTextEntry?: boolean;
  editable?: boolean;
  color?: string;
  emailKeyboard?: boolean;
  message?: boolean;
}

export const FormikInput: FC<localProps> = memo(props => {
  const error = props?.errors && props?.errors[props.name];
  const touched = props?.touched && props?.touched[props.name];

  return (
    <View style={[props.contentStyle]}>
      <View style={styles.inputWrapper}>
        <TextInput
          maxLength={props.maxLength}
          autoCapitalize="none"
          editable={props.editable}
          multiline={props.message}
          keyboardType={props.keyboardType}
          style={[styles.input, touched && error ? styles.error : {}]}
          onChangeText={props?.handleChange(props?.name)}
          value={props?.value || ""}
          placeholder={props?.placeholder || ""}
          placeholderTextColor={Colors.placeholder}
          {...props?.inputProps}
        />
      </View>
      {(error && touched) && <Animatable.Text animation={"fadeIn"} style={styles.errorText}>{error}</Animatable.Text>}

    </View>
  );
});

const styles = StyleSheet.create({
  input: {
    fontSize: Fonts.p,
    paddingHorizontal: 20,
    borderRadius: 100,
    marginBottom: 0

  },
  error: {
    borderColor: "#C62613"
  },
  errorText: {
    color: "#C62613",
    marginLeft: 20,
    marginVertical: 3
  },
  label: {
    color: "#676A6D",
    fontSize: 16,
    marginLeft: 20
  },
  inputWrapper: {
    borderRadius: 30,
    width: 330,
    marginVertical: 7,
    backgroundColor: Colors.inputBackground,
    justifyContent: "center",
    height: 45
  }
});
