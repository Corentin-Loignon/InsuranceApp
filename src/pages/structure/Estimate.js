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
import RBSheet from "react-native-raw-bottom-sheet";
import React, { useRef } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import GetAnEstimate from "../components/estimate/GetAnEstimate";
import MyEstimates from "../components/estimate/MyEstimates";
import ChatScreen from "./Chat";

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

function Estimate({ navigation }) {
  const refRBSheet = useRef();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.estimateContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Recevoir un devis")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Recevoir un devis</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Mes devis")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Mes devis</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <Text style={styles.title}>Comment ça marche ?</Text>
            <Text style={styles.subtitle}>
              Seulement 3 petites étapes et vous êtes assuré(e) !
            </Text>
            <Text style={styles.subtext}>En savoir plus...</Text>
          </TouchableOpacity>
          <RBSheet
            ref={refRBSheet}
            height={windowH / 2.5}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                backgroundColor: "transparent",
              },
              draggableIcon: {
                backgroundColor: "#08004E",
              },
            }}
          >
            <View style={styles.textContainer}>
              <Text style={styles.titleSheet}>
                1# Remplissez notre questionnaire
              </Text>
              <Text style={styles.subtitleSheet}>
                Quelques questions simples sur vous et l'utilisation de votre
                deux-roues.
              </Text>
              <Text style={styles.titleSheet}>2# Recevez votre devis</Text>
              <Text style={styles.subtitleSheet}>
                ... en moins de cinq minutes, recevez votre devis détaillé ...
              </Text>
              <Text style={styles.titleSheet}>
                3# Finalisez votre souscription
              </Text>
              <Text style={styles.subtitleSheet}>
                ... Validez et le tour est joué ! Nous nous occupons même de
                résilier votre ancienne assurance si besoin.
              </Text>
            </View>
          </RBSheet>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const EstimateStack = createNativeStackNavigator();

function EstimateStackScreen() {
  return (
    <EstimateStack.Navigator
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
      <EstimateStack.Screen
        options={() => ({
          title: "Devis",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
          headerLeft: () => (
            <Ionicons name="add-circle" size={30} color="#08004e" />
          ),
        })}
        name="Nouveau Devis"
        component={Estimate}
      />
      <EstimateStack.Screen
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
      <EstimateStack.Screen
        options={() => ({
          title: "Mes devis",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Recevoir un devis"
        component={GetAnEstimate}
      />
      <EstimateStack.Screen
        options={() => ({
          title: "Mes devis",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Mes devis"
        component={MyEstimates}
      />
    </EstimateStack.Navigator>
  );
}
export default EstimateStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F6",
  },
  title: {
    fontFamily: "Outfit_500Medium",
    fontWeight: "bold",
    fontSize: 20,
    color: "#08004e",
    marginHorizontal: "4%",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Outfit_500Medium",
    marginVertical: "2%",
    color: "#08004e",
    marginHorizontal: "4%",
  },
  subtext: {
    fontSize: 16,
    fontFamily: "Outfit_500Medium",
    color: "#1705B5",
    fontStyle: "italic",
    marginHorizontal: "4%",
  },
  titleSheet: {
    fontFamily: "Outfit_500Medium",
    fontWeight: "bold",
    fontSize: 20,
    color: "#08004e",
    marginHorizontal: "4%",
  },
  subtitleSheet: {
    textAlign: "justify",
    fontSize: 16,
    fontFamily: "Outfit_500Medium",
    marginBottom: "3%",
    color: "#08004e",
    marginHorizontal: "4%",
  },
  estimateContainer: {
    alignItems: "center",
    marginTop: "10%",
  },
  button: {
    backgroundColor: "white",
    width: windowW / 1.1,
    height: windowH / 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
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
  buttonText: {
    color: "#08004e",
    fontSize: 17,
    fontFamily: "Outfit_500Medium",
  },
});
