import React, { memo, FC, Fragment, useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Colors } from "../../styles/styles";
import { ImageModal } from "../image-modal/image-modal";
import { P } from "../P/P";
import * as Animatable from "react-native-animatable";

interface IChange {
  userImage: string;
  handleGetImage: (key: string | null | undefined) => void;
}

export const ChangeProfilePhoto: FC<IChange> = memo(({
                                                       userImage,
                                                       handleGetImage
                                                     }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <Fragment>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={() => setIsVisible(true)} activeOpacity={0.9}
                          style={{ alignItems: "center", marginTop: 15 }}>
          {userImage ? <Animatable.Image animation={userImage ? "zoomIn" : ""}
                                         style={{ width: 100, height: 100, borderRadius: 100 }}
                                         source={{ uri: `data:image/jpeg;base64,${userImage}` }} /> :
            <Image style={{ width: 100, height: 100, borderRadius: 100 }}
                   source={require("../../assets/images/userDefault.png")} />}
          <P style={{ marginVertical: 10, color: Colors.p }}>Change profile photo</P>
        </TouchableOpacity>
      </View>
      <ImageModal
        getBase64={(base64: string | null | undefined) => {
          handleGetImage(base64);
          setIsVisible(false);
        }}
        onHide={() => setIsVisible(false)}
        visible={isVisible} />
    </Fragment>
  );
});
