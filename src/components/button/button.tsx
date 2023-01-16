import React from "react";
import { FC } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../styles/styles";
import { P } from "../p/p";

interface IButton {
  body: string,
  style?: {},
  textStyle?: {},
  onPress: () => void;
  isPressed?: boolean;
  disabled?: boolean;
  width: string;
  bgColor?: string
}

export const Button: FC<IButton> = ({
                                      body,
                                      style,
                                      textStyle,
                                      disabled,
                                      onPress,
                                      width,
                                      bgColor,
                                      isPressed = false
                                    }) => {
  return (
    <TouchableOpacity style={[styles.style,
      style,
      { width },
      isPressed && { opacity: 0.74 },
      bgColor && { backgroundColor: bgColor }
    ]}
                      onPress={onPress} disabled={disabled || isPressed}
                      activeOpacity={0.8}>
      <P style={[{ color: Colors.white }, textStyle]}>{body}</P>
    </TouchableOpacity>
  );
};

const styles = StyleSheet?.create({
  animateWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  style: {
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: Colors.default,
    justifyContent: "center",
    height: 45
  },
  emptyStyle: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    height: 45
  },
  textStyle: {
    color: Colors.white,
    fontWeight: "500",
    fontSize: 15
  },
  emptyTextStyle: {
    color: Colors.black,
    fontWeight: "500",
    fontSize: 15
  }
});
