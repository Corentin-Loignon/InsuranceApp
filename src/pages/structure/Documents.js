import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyContracts from "../components/documents/MyContracts";
import MyDebitTable from "../components/documents/MyDebitTable";
import DuplicateGreenCard from "../components/documents/DuplicateGreenCard";
import MyDueNotice from "../components/documents/MyDueNotice";
import MyInformationStatement from "../components/documents/MyInformationStatement";
import ModelOfAmicableSettlement from "../components/documents/ModelOfAmicableSettlement";
import MyReceipts from "../components/documents/MyReceipts";
import SendDocuments from "../components/documents/SendDocuments";
import ChatScreen from "./Chat";

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

function Documents({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.documentContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Mes contrats")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Mes contrats</Text>
            <Image
              source={require("../../../assets/angle-right-icon.png")}
              style={styles.ImageIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Mes relevés d'information")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Mes relevés d'information</Text>
            <Image
              source={require("../../../assets/angle-right-icon.png")}
              style={styles.ImageIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Mon avis d'échéance")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Mon avis d'échéance</Text>
            <Image
              source={require("../../../assets/angle-right-icon.png")}
              style={styles.ImageIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Mon tableau de prélèvements")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Mon tableau de prélèvements</Text>
            <Image
              source={require("../../../assets/angle-right-icon.png")}
              style={styles.ImageIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Mes quittances")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Mes quittances</Text>
            <Image
              source={require("../../../assets/angle-right-icon.png")}
              style={styles.ImageIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Modèle de constat à l'amiable")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Modèle de constat à l'amiable</Text>
            <Image
              source={require("../../../assets/angle-right-icon.png")}
              style={styles.ImageIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Duplicata de carte verte")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Duplicata de carte verte</Text>
            <Image
              source={require("../../../assets/angle-right-icon.png")}
              style={styles.ImageIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Envoyer des documents")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Envoyer des documents</Text>
            <Image
              source={require("../../../assets/angle-right-icon.png")}
              style={styles.ImageIcon}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const DocumentsStack = createNativeStackNavigator();

function DocumentsStackScreen() {
  return (
    <DocumentsStack.Navigator
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
      <DocumentsStack.Screen
        options={() => ({
          title: "Mes documents",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
          headerLeft: () => (
            <Ionicons name="folder" size={30} color="#08004e" />
          ),
        })}
        name="Mes documents"
        component={Documents}
      />
      <DocumentsStack.Screen
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
      <DocumentsStack.Screen
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
        name="Mes contrats"
        component={MyContracts}
      />
      <DocumentsStack.Screen
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
        name="Mes relevés d'information"
        component={MyInformationStatement}
      />
      <DocumentsStack.Screen
        options={() => ({
          title: "Mon avis d'échéance",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Mon avis d'échéance"
        component={MyDueNotice}
      />
      <DocumentsStack.Screen
        options={() => ({
          title: "Mon tableau de prélèvements",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Mon tableau de prélèvements"
        component={MyDebitTable}
      />
      <DocumentsStack.Screen
        options={() => ({
          title: "Mes quittances",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Mes quittances"
        component={MyReceipts}
      />
      <DocumentsStack.Screen
        options={() => ({
          title: "Modèle de constat à l'amiable",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Modèle de constat à l'amiable"
        component={ModelOfAmicableSettlement}
      />
      <DocumentsStack.Screen
        options={() => ({
          title: "Duplicata de carte verte",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Duplicata de carte verte"
        component={DuplicateGreenCard}
      />
      <DocumentsStack.Screen
        options={() => ({
          title: "Envoyer des documents",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Envoyer des documents"
        component={SendDocuments}
      />
    </DocumentsStack.Navigator>
  );
}
export default DocumentsStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F6",
  },
  documentContainer: {
    alignItems: "center",
    marginTop: "10%",
  },
  text: {
    color: "#08004e",
    fontSize: 20,
    textAlign: "left",
    fontFamily: "Outfit_500Medium",
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
