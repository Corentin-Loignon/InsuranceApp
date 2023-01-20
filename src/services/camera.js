import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Ionicons from "react-native-vector-icons/Ionicons";

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

export default function App() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [type, setType] = useState(CameraType.back);

  const [flashMode, setFlashMode] = React.useState("off");

  const __handleFlashMode = () => {
    if (flashMode === "on") {
      setFlashMode("off");
    } else if (flashMode === "off") {
      setFlashMode("on");
    } else {
      setFlashMode("auto");
    }
  };

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Demande d'autorisations...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        L'autorisation pour la caméra n'est pas accordée. Veuillez changer cela
        dans les paramètres.
      </Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };
    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.containerBis}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        <View style={styles.containerPreview}>
          <TouchableOpacity
            style={[styles.buttonPreview]}
            onPress={() => setPhoto(undefined)}
          >
            <Text style={styles.buttonTextPreview}>Reprendre</Text>
          </TouchableOpacity>
          {hasMediaLibraryPermission ? (
            <TouchableOpacity
              style={[styles.buttonPreview]}
              onPress={savePhoto}
            >
              <Text style={styles.buttonTextPreview}>Sauvegarder</Text>
            </TouchableOpacity>
          ) : undefined}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={cameraRef}
        type={type}
        flashMode={flashMode}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonReverse}
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          >
            <Ionicons name="camera-reverse-outline" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCamera}
            onPress={takePic}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonFlash]}
            onPress={__handleFlashMode}
          >
            <Ionicons
              name="flash-outline"
              size={40}
              color={flashMode === "off" ? "white" : "yellow"}
            />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "8%",
    marginHorizontal: "5%",
  },
  buttonReverse: {
    alignSelf: "flex-end",
  },
  buttonCamera: {
    justifyContent: "center",
    alignSelf: "flex-end",
    backgroundColor: "#ffffff",
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#dfdfdf",
    height: 70,
    width: 70,
  },
  buttonFlash: {
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  preview: {
    flex: 1,
    alignSelf: "stretch",
  },
  containerPreview: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "5%",
  },
  buttonPreview: {
    marginTop: "3%",
    height: windowH / 22,
    alignItems:"center"
  },
  buttonTextPreview: {
    color: "#08004e",
    fontSize: 17,
    fontFamily: "Outfit_500Medium",
  },
  containerBis: {
    flex: 1,
    backgroundColor: "#F3F5F6",
  },
});
