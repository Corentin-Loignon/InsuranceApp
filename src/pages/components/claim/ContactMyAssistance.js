import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Platform,
  Dimensions
} from "react-native";
import React from "react";
import PhoneIcon from "react-native-vector-icons/AntDesign";

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const makeCall = () => {
  let phoneNumber = "";

  if (Platform.OS === "android") {
    phoneNumber = "tel:${0158963478}";
  } else {
    phoneNumber = "telprompt:${0158963478}";
  }

  Linking.openURL(phoneNumber);
};

const ContactMyAssistance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>En cas d’urgence, contactez votre Assistance 24H/24, 7J/7 au 01 58 96 34 78 qui se chargera d'organiser pour vous les mesures qui s'imposent. </Text>
      <TouchableOpacity style={styles.button} onPress={makeCall}>
        <Text style={styles.buttonText}>Appeler</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactMyAssistance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F6",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    marginTop:'10%',
    marginHorizontal:'4%',
    color: "#08004e",
    fontSize: 17,
    textAlign: "left",
    fontFamily: "Outfit_500Medium",
    textAlign:'justify'
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:'30%',
    backgroundColor: "#1705B5",
    height: windowH / 15,
    width: windowW/1.1,
    borderRadius: 30,
    marginBottom: "10%",
    flexDirection:'row'
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "Outfit_500Medium",
  },
});
