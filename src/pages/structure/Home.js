import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Linking,
  Platform,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "./Chat";
import Ionicons from "react-native-vector-icons/Ionicons";
import PhoneIcon from "react-native-vector-icons/AntDesign";
import MyContracts from "../components/documents/MyContracts";
import MyInformationStatement from "../components/documents/MyInformationStatement";
import DeclareAClaim from "../components/claim/DeclareAClaim";
import GetAnEstimate from "../components/estimate/GetAnEstimate";
import CarouselScreen from "../../services/CarouselScreen";
import FAQ from "../components/menu/Faq";
import Sponsor from "../components/menu/Sponsorship";
import Information from "../components/menu/Information";

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const makeCall = () => {
  let phoneNumber = "";

  if (Platform.OS === "android") {
    phoneNumber = "tel:${0123456798}";
  } else {
    phoneNumber = "telprompt:${0123456798}";
  }

  Linking.openURL(phoneNumber);
};

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.firstBloc}>
          <Text style={styles.text}>
            Bienvenue dans votre espace client Qivio. Retrouvez vos documents et
            effectuez vos demandes.
          </Text>
          <CarouselScreen />
        </View>
        <View style={styles.consultantBloc}>
          <View>
            <Text style={styles.textConsultant}>
              Besoin d'une information ?
            </Text>
            <Text style={styles.textConsultant}>
              Contactez votre conseiller
            </Text>
          </View>
          <View style={styles.iconConsultant}>
            <TouchableOpacity onPress={makeCall}>
              <PhoneIcon name="phone" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.title}>Mon assurance</Text>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MyContracts")}
            style={styles.button}
          >
            <Ionicons
              style={styles.buttonIcon}
              name="document-text-outline"
              size={40}
              color="white"
            />
            <Text style={styles.buttonText}>Mes contrats</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("MyInformationStatement")}
            style={styles.button}
          >
            <Ionicons
              style={styles.buttonIcon}
              name="document-text-outline"
              size={40}
              color="white"
            />
            <Text style={styles.buttonText}>Mes relevés d'information</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Mes demandes</Text>
        <View style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.navigate("DeclareAClaim")}
            style={styles.button}
          >
            <Ionicons
              style={styles.buttonIcon}
              name="warning-outline"
              size={40}
              color="white"
            />
            <Text style={styles.buttonText}>Déclarer un sinistre</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("GetAnEstimate")}
            style={styles.button}
          >
            <Ionicons
              style={styles.buttonIcon}
              name="add-outline"
              size={40}
              color="white"
            />
            <Text style={styles.buttonText}>Recevoir un devis</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={30}
              color="#1705B5"
            />
          </TouchableOpacity>
        ),
      })}
    >
      <HomeStack.Screen
        options={() => ({
          title: "Accueil",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
          headerLeft: () => (
              <Ionicons
                name="home"
                size={30}
                color="#08004e"
              />
          ),
        })}
        name="Home"
        component={Home}
      />
      <HomeStack.Screen
        options={() => ({
          title: "Chat",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Chat"
        component={ChatScreen}
      />
      <HomeStack.Screen
        options={() => ({
          title: "Mes contrats",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="MyContracts"
        component={MyContracts}
      />
      <HomeStack.Screen
        options={() => ({
          title: "Mon relevé d'information",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="MyInformationStatement"
        component={MyInformationStatement}
      />
      <HomeStack.Screen
        options={() => ({
          title: "Déclarer un sinistre",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="DeclareAClaim"
        component={DeclareAClaim}
      />
      <HomeStack.Screen
        options={() => ({
          title: "Recevoir un devis",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="GetAnEstimate"
        component={GetAnEstimate}
      />
      <HomeStack.Screen
        options={() => ({
          title: "FAQ",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="FAQ"
        component={FAQ}
      />
      <HomeStack.Screen
        options={() => ({
          title: "Parrainage",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Sponsor"
        component={Sponsor}
      />
      <HomeStack.Screen
        options={() => ({
          title: "Informations",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Information"
        component={Information}
      />
    </HomeStack.Navigator>
  );
}
export default HomeStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F6",
  },
  firstBloc: {
    height: windowH / 2.6,
    backgroundColor: "#08004E",
  },
  text: {
    marginVertical: "5%",
    marginHorizontal: "5%",
    color: "white",
    fontSize: 15,
    textAlign: "justify",
    fontFamily: "Outfit_500Medium",
  },
  consultantBloc: {
    height: windowH / 10,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10%",
  },
  textConsultant: {
    marginLeft: "8%",
    marginVertical: "1%",
    fontSize: 17,
    color: "#08004e",
    fontFamily: "Outfit_500Medium",
  },
  iconConsultant: {
    height: windowH / 10,
    alignItems: "center",
    justifyContent: "center",
    width: windowW / 5,
    backgroundColor: "#1705B5",
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "#08004e",
    width: windowW / 2.4,
    height: windowH / 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "10%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,

    elevation: 1,
  },
  buttonIcon: {
    marginTop: "26%",
  },
  buttonText: {
    marginTop: "6%",
    color: "white",
    fontSize: 17,
    fontFamily: "Outfit_500Medium",
    textAlign: "center",
  },
  title: {
    marginLeft: "4%",
    marginBottom: "5%",
    color: "#08004e",
    fontSize: 20,
    fontFamily: "Outfit_500Medium",
  },
});
