import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import DeclareAClaim from "../components/claim/DeclareAClaim";
import TrackMyClaims from "../components/claim/TrackMyClaims";
import ContactMyAssistance from "../components/claim/ContactMyAssistance";
import ContactMyManager from "../components/claim/ContactMyManager";
import MyAssistanceGuarantees from "../components/claim/MyAssistanceGuarantees";
import ChatScreen from "./Chat";

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

function Claim({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.claimcontainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Déclarer un sinistre")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Déclarer un sinistre</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Suivre mes sinistres")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Suivre mes sinistres</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contactcontainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Contacter mon assistance")}
            style={styles.squarebutton}
          >
            <Text style={styles.buttonText}>Contacter mon assistance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Contacter mon gestionnaire")}
            style={styles.squarebutton}
          >
            <Text style={styles.buttonText}>Contacter mon gestionnaire</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.guaranteecontainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Mes garanties d'assistance")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Mes garanties d'assistance</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const ClaimStack = createNativeStackNavigator();

function ClaimStackScreen() {
  return (
    <ClaimStack.Navigator
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
      <ClaimStack.Screen
        options={() => ({
          title: "Sinistre",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
          headerLeft: () => (
            <Ionicons name="warning" size={30} color="#08004e" />
          ),
        })}
        name="Mes Sinistres"
        component={Claim}
      />
      <ClaimStack.Screen
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
      <ClaimStack.Screen
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
        name="Déclarer un sinistre"
        component={DeclareAClaim}
      />
      <ClaimStack.Screen
        options={() => ({
          title: "Suivre mes sinistres",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Suivre mes sinistres"
        component={TrackMyClaims}
      />
      <ClaimStack.Screen
        options={() => ({
          title: "Contacter mon assistance",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Contacter mon assistance"
        component={ContactMyAssistance}
      />
      <ClaimStack.Screen
        options={() => ({
          title: "Contacter mon gestionnaire",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Contacter mon gestionnaire"
        component={ContactMyManager}
      />
      <ClaimStack.Screen
        options={() => ({
          title: "Mes garanties d'assistance",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Mes garanties d'assistance"
        component={MyAssistanceGuarantees}
      />
    </ClaimStack.Navigator>
  );
}
export default ClaimStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F6",
  },
  claimcontainer: {
    alignItems: "center",
  },
  contactcontainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  guaranteecontainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    width: "90%",
    height: windowH / 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: "10%",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,

    elevation: 1,
  },
  squarebutton: {
    backgroundColor: "white",
    width: windowW / 2.4,
    height: windowH / 6,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
    marginHorizontal: "3%",
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
    textAlign: "center",
  },
});
