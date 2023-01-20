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

import RegisteringMyVehicle from "./RegisteringMyVehicle";
import ChangeOfVehicle from "./ChangeOfVehicle";
import ChangeOfContactInformation from "./ChangeOfContactInformation";
import ManageMyOptions from "./ManageMyOptions";
import ChangeOfPlan from "./ChangeOfPlan";
import ChangeMyPaymentMethod from "./ChangeMyPaymentMethod";
import ChangeMySplit from "./ChangeMySplit";
import Cancel from "./Cancel";

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

function EditDocuments({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.editContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Déclarer l’immatriculation de mon véhicule")
            }
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Immatriculer mon véhicule
            </Text>
            <Image
              source={require("../../../../assets/angle-right-icon.png")}
              style={styles.ImageIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Changement de véhicule")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Changement de véhicule</Text>
            <Image
              source={require("../../../../assets/angle-right-icon.png")}
              style={styles.ImageIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Changement des coordonnées")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Changement des coordonnées</Text>
            <Image
              source={require("../../../../assets/angle-right-icon.png")}
              style={styles.ImageIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Changement de formule")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Changement de formule</Text>
            <Image
              source={require("../../../../assets/angle-right-icon.png")}
              style={styles.ImageIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Gérer ses options")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Gérer ses options</Text>
            <Image
              source={require("../../../../assets/angle-right-icon.png")}
              style={styles.ImageIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Modifier mon moyen de paiement")
            }
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Modifier mon moyen de paiement
            </Text>
            <Image
              source={require("../../../../assets/angle-right-icon.png")}
              style={styles.ImageIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Modifier mon fractionnement")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Modifier mon fractionnement</Text>
            <Image
              source={require("../../../../assets/angle-right-icon.png")}
              style={styles.ImageIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Résilier")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Résilier</Text>
            <Image
              source={require("../../../../assets/angle-right-icon.png")}
              style={styles.ImageIcon}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const EditStack = createNativeStackNavigator();

function EditStackScreen() {
  return (
    <EditStack.Navigator>
      <EditStack.Screen
        options={{ headerShown: false }}
        name="Mes documents"
        component={EditDocuments}
      />
      <EditStack.Screen
        options={() => ({
          title: "Immatriculer mon véhicule",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Déclarer l’immatriculation de mon véhicule"
        component={RegisteringMyVehicle}
      />
      <EditStack.Screen
        options={() => ({
          title: "Changement de véhicule",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Changement de véhicule"
        component={ChangeOfVehicle}
      />
      <EditStack.Screen
        options={() => ({
          title: "Changement des coordonnées",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Changement des coordonnées"
        component={ChangeOfContactInformation}
      />
      <EditStack.Screen
        options={() => ({
          title: "Changement de formule",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Changement de formule"
        component={ManageMyOptions}
      />
      <EditStack.Screen
        options={() => ({
          title: "Gérer ses options",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Gérer ses options"
        component={ChangeOfPlan}
      />
      <EditStack.Screen
        options={() => ({
          title: "Modifier mon moyen de paiement",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Modifier mon moyen de paiement"
        component={ChangeMyPaymentMethod}
      />
      <EditStack.Screen
        options={() => ({
          title: "Modifier mon fractionnement",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Modifier mon fractionnement"
        component={ChangeMySplit}
      />
      <EditStack.Screen
        options={() => ({
          title: "Résilier",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Résilier"
        component={Cancel}
      />
    </EditStack.Navigator>
  );
}

export default EditStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F6",
  },
  editContainer: {
    alignItems: "center",
    marginTop: "10%",
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
