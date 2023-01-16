import React,{FC} from "react";
import { StyleSheet, TouchableOpacity, View, ImageBackground } from "react-native";
import { Modal as DefModal, Portal } from "react-native-paper";
import ImageCropPicker from "react-native-image-crop-picker";
import { P } from "../p/p";
import { Colors } from "../../styles/styles";
import { VectorIcon } from "../vector-icon/vector-icon";

interface IImage {
  visible: boolean;
  onHide: () => void;
  getBase64: (key: string | null | undefined) => void;
}

export const ImageModal:FC<IImage> = ({ visible, onHide, getBase64 }) => {
  const galleryOptions = {
    width: 500,
    height: 400,
    cropping: true,
    freeStyleCropEnabled: true,
    hideBottomControls: true,
    includeBase64: true,
    cropperCancelText: "Cancel",
    cropperChooseText: "Choose"
  };
  const cameraOptions = {
    width: 1000,
    height: 1000,
    cropping: true,
    useFrontCamera: true,
    freeStyleCropEnabled: true,
    hideBottomControls: true,
    includeBase64: true
  };

  const handleOpenImageCropper = async (type: "camera" | "gallery") => {
    if (type === "gallery") {
      const response = await ImageCropPicker.openPicker(galleryOptions);
      if ("data" in response) {
        getBase64(response.data);
      }
    } else if (type === "camera") {
      const response = await ImageCropPicker.openCamera(cameraOptions);
      if ("data" in response) {
        getBase64(response.data);
      }
    } else {
      onHide();
    }
  };

  return (
    <Portal>
      <DefModal
        dismissable={false}
        visible={visible}
        contentContainerStyle={styles.containerStyle}>
        <View>
          <View style={styles.close}>
            <TouchableOpacity onPress={onHide}>
              <VectorIcon groupName="Ion" name="close" size={30} />
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 5 }}>
            <P style={{color: Colors.black}}>Type</P>
          </View>
          <View>
            <TouchableOpacity onPress={() => handleOpenImageCropper("gallery")} style={styles.btnWrapper}>
              <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.bg}
                               source={require("./img/gradient1.png")}>
                <View style={{ padding: 10 }}>
                  <P style={{ color: Colors.white }}>Upload from</P>
                  <P style={{
                    color: Colors.white, fontWeight: "bold",
                    fontSize: 15,
                    letterSpacing: 0
                  }}>Library</P>
                </View>
                <VectorIcon groupName={"En"} name={"images"} size={44} color={"#e8e8e8"}
                            style={styles.icon} />
              </ImageBackground>

            </TouchableOpacity>

              <TouchableOpacity onPress={() => handleOpenImageCropper("camera")} style={styles.btnWrapper}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.bg}
                                 source={require("./img/gradient4.png")}>
                  <View style={{ padding: 10 }}>
                    <P style={{ color: Colors.white }}>Open</P>
                    <P style={{
                      color: Colors.white, fontWeight: "bold",
                      fontSize: 15,
                      letterSpacing: 0
                    }}>Camera</P>

                  </View>

                  <VectorIcon color={"#e8e8e8"} size={44} groupName={"Ion"} name={"camera"}
                              style={[styles.icon, { right: 5 }]} />
                </ImageBackground>
              </TouchableOpacity>
          </View>
        </View>
      </DefModal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    right: 10,
    bottom: 0,
    transform: [{ rotate: "-30deg" }]
  },
  bg: { width: "100%", height: 60, borderRadius: 50, position: "relative" },
  btnWrapper: {
    marginVertical: 10,
    borderRadius: 10,
    height: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  containerStyle: {
    backgroundColor: "white",
    padding: 10,
    paddingBottom: 20,
    // width: "90%",
    marginHorizontal: 50,
    borderRadius: 10
  },
  close: {
    alignItems: "flex-end"
  },
  body: {
    alignItems: "center"
  },
  P: {
    marginVertical: 0,
    textAlign: "center",
    color: Colors.black,
    fontSize: 15
  },
  buttons: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%"
  },
  buttonText: {
    color: "#fff",
    fontSize: 17
  }
});
