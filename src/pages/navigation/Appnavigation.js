import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Dimensions, Platform } from "react-native";
// Screens
import HomeScreen from "../../pages/structure/Home";
import DocumentsScreen from "../../pages/structure/Documents";
import ClaimScreen from "../../pages/structure/Claim";
import EstimateScreen from "../../pages/structure/Estimate";
import MenuScreen from "../../pages/structure/Menu";

const windowH = Dimensions.get("window").height;

const Tab = createBottomTabNavigator();

function Appnavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Accueil"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let rn = route.name;

          if (rn === "Accueil") {
            iconName = focused ? "home" : "home";
          } else if (rn === "Documents") {
            iconName = focused ? "folder" : "folder";
          } else if (rn === "Sinistre") {
            iconName = focused ? "warning" : "warning";
          } else if (rn === "Devis") {
            iconName = focused ? "add-circle" : "add-circle";
          } else if (rn === "Menu") {
            iconName = focused ? "menu" : "menu";
          }

          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: "#08004e",
        tabBarInactiveTintColor: "#a8a8a8",
        labelPosition: "below-icon",
        tabBarLabelStyle: {
          paddingBottom: "3%",
          fontSize: 12,
          fontFamily: "Outfit_500Medium",
        },
        tabBarStyle: [
          { display: "flex", height: Platform.OS === 'ios' ? windowH / 10 : windowH / 14, paddingTop: "1%" },
          null,
        ],
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Accueil"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Documents"
        component={DocumentsScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Sinistre"
        component={ClaimScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Devis"
        component={EstimateScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Menu"
        component={MenuScreen}
      />
    </Tab.Navigator>
  );
}

export default Appnavigation;
