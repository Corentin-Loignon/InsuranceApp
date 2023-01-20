import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import TutoScreen from "./InformationsTuto";
import PartnerScreen from "./InformationsPartner";
import ArticleScreen from "./InformationsArticle";

const TabInfo = createMaterialTopTabNavigator();

function InfoNavigation() {
  return (
    <TabInfo.Navigator
      initialRouteName="Informations"
      screenOptions={() => ({
        tabBarActiveTintColor: "#08004e",
        tabBarInactiveTintColor: "#a8a8a8",
        tabBarLabelStyle: {
          fontSize: 15,
          fontFamily: "Outfit_500Medium",
        },
        tabBarStyle: [
          {
            display: "flex",
            height: 60,
            paddingTop: 5,
            backgroundColor: "#F3F5F6",
          },
          null,
        ],
      })}
    >
      <TabInfo.Screen
        options={{ headerShown: false }}
        name="Tutoriels"
        component={TutoScreen}
      />
      <TabInfo.Screen
        options={{ headerShown: false }}
        name="Articles"
        component={ArticleScreen}
      />
      <TabInfo.Screen
        options={{ headerShown: false }}
        name="Partenaires"
        component={PartnerScreen}
      />
    </TabInfo.Navigator>
  );
}

export default InfoNavigation;
