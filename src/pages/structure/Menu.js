import React, { useCallback } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Linking,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "../components/menu/Profile";
import Information from "../components/menu/Information";
import Sponsorship from "../components/menu/Sponsorship";
import Faq from "../components/menu/Faq";
import ApplicationSettings from "../components/menu/ApplicationSettings";
import ContactUs from "../components/menu/ContactUs";
import AboutUs from "../components/menu/AboutUs";
import { Logout } from "../../store/action";
import ChatScreen from "./Chat";

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

function Menu({ navigation }) {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(Logout());
  };
  const _openAppSetting = useCallback(async () => {
    await Linking.openSettings();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.bloc}>
          <View style={styles.Menucontainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Profil")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Profil</Text>
              <Image
                source={require("../../../assets/angle-right-icon.png")}
                style={styles.ImageIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Informations")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Informations</Text>
              <Image
                source={require("../../../assets/angle-right-icon.png")}
                style={styles.ImageIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Parrainage")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Parrainage</Text>
              <Image
                source={require("../../../assets/angle-right-icon.png")}
                style={styles.ImageIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("FAQ")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>FAQ</Text>
              <Image
                source={require("../../../assets/angle-right-icon.png")}
                style={styles.ImageIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Nous contacter")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Nous contacter</Text>
              <Image
                source={require("../../../assets/angle-right-icon.png")}
                style={styles.ImageIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={_openAppSetting} style={styles.button}>
              <Text style={styles.buttonText}>Paramètres de l'application</Text>
              <Image
                source={require("../../../assets/angle-right-icon.png")}
                style={styles.ImageIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("À propos")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>À propos</Text>
              <Image
                source={require("../../../assets/angle-right-icon.png")}
                style={styles.ImageIcon}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={logout} style={styles.button}>
              <Text style={styles.buttonText}>Se déconnecter</Text>
              <AntDesign
                style={styles.Icon}
                name="poweroff"
                size={20}
                color="#08004e"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const MenuStack = createNativeStackNavigator();

function MenuStackScreen() {
  return (
    <MenuStack.Navigator
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
      <MenuStack.Screen
        options={{
          title: "Menu",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
          headerLeft: () => <Ionicons name="menu" size={30} color="#08004e" />,
        }}
        name="Mon Menu"
        component={Menu}
      />
      <MenuStack.Screen
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
      <MenuStack.Screen
        options={() => ({
          title: "Profil",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Profil"
        component={Profile}
      />
      <MenuStack.Screen
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
        name="Informations"
        component={Information}
      />
      <MenuStack.Screen
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
        name="Parrainage"
        component={Sponsorship}
      />
      <MenuStack.Screen
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
        component={Faq}
      />
      <MenuStack.Screen
        options={() => ({
          title: "Nous contacter",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Nous contacter"
        component={ContactUs}
      />
      <MenuStack.Screen
        options={() => ({
          title: "Paramètres de l'application",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="Paramètres de l'application"
        component={ApplicationSettings}
      />
      <MenuStack.Screen
        options={() => ({
          title: "À propos",
          headerTitleStyle: {
            fontFamily: "Outfit_500Medium",
            fontSize: 21,
          },
          headerTintColor: "#08004E",
          headerStyle: { backgroundColor: "#F3F5F6" },
          headerShadowVisible:false,
        })}
        name="À propos"
        component={AboutUs}
      />
    </MenuStack.Navigator>
  );
}
export default MenuStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F6",
  },
  bloc: {
    marginTop: "10%",
    alignItems: "center",
  },
  Menucontainer: {
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
  Icon: {
    marginRight: 15,
  },
});
