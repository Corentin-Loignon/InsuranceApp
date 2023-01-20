import LoginScreen from "./src/pages/authentication/Login";
import Appnavigation from "./src/pages/navigation/Appnavigation";
import { store } from "./src/store/store";
import { Init } from "./src/store/action";

import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ActivityIndicator } from "react-native-paper";
import AppLoading from "expo-app-loading";
import { useFonts, Outfit_500Medium } from "@expo-google-fonts/outfit";
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

const AppStack = () => {
  return <Appnavigation />;
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  const token = useSelector((state) => state.isLogged.authToken);
  console.log(token);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {token === null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

const App = () => {
  let [fontsLoaded] = useFonts({
    Outfit_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <StatusBar style="dark"/>
      <RootNavigation />
    </Provider>
  );
};

export default App;
