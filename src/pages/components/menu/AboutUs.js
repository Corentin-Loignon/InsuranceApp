import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import LegalNotice from "./LegalNotice";
import PrivacyPolicy from "./PrivacyPolicy";
import TCU from "./TCU";

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

function AboutUsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.bloc}>
          <View style={styles.aboutUsContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Mentions légales")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Mentions légales</Text>
              <Image
                source={require("../../../../assets/angle-right-icon.png")}
                style={styles.ImageIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Politique de confidentialité")
              }
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                Politique de confidentialité
              </Text>
              <Image
                source={require("../../../../assets/angle-right-icon.png")}
                style={styles.ImageIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Conditions générales d'utilisation")
              }
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                Conditions générales d'utilisation
              </Text>
              <Image
                source={require("../../../../assets/angle-right-icon.png")}
                style={styles.ImageIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const AboutUsStack = createNativeStackNavigator();

function AboutUsStackScreen() {
  return (
    <AboutUsStack.Navigator>
      <AboutUsStack.Screen
        options={{ headerShown: false }}
        name="AboutUs"
        component={AboutUsScreen}
      />
      <AboutUsStack.Screen
        options={{ headerShown: false }}
        name="Mentions légales"
        component={LegalNotice}
      />
      <AboutUsStack.Screen
        options={{ headerShown: false }}
        name="Politique de confidentialité"
        component={PrivacyPolicy}
      />
      <AboutUsStack.Screen
        options={{ headerShown: false }}
        name="Conditions générales d'utilisation"
        component={TCU}
      />
    </AboutUsStack.Navigator>
  );
}
export default AboutUsStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F6",
  },
  bloc: {
    marginTop: "10%",
    alignItems: "center",
  },
  aboutUsContainer: {
    alignItems: "center",
    width: "100%",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: windowW / 1.1,
    height: windowH / 15,
    paddingLeft: "2%",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: "3%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,

    elevation: 1,
  },
  buttonText: {
    color: "#08004e",
    fontSize: 17,
    fontFamily: "Outfit_500Medium",
  },
  ImageIcon: {
    padding: 5,
    marginRight: "5%",
    height: 10,
    width: 10,
    resizeMode: "stretch",
  },
});
