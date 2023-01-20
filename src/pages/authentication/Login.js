import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useDispatch } from "react-redux";
import { Login } from "../../store/action";

const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Login(email, password));
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/logo.png")} />
      <Text style={styles.slogan}>La néo-assurance deux roues</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Adresse e-mail..."
          keyboardType="email-address"
          placeholderTextColor="#8b8b8b"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Mot de passe..."
          placeholderTextColor="#8b8b8b"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Mot de passe oublié?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={submit} style={styles.loginBtn}>
        <Text style={styles.loginText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signupText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaedffff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: windowW / 1.5,
    height: windowH / 7,
    marginBottom: '2%',
  },
  slogan: {
    fontSize: 18,
    color: "#08004e",
    marginBottom: 80,
    fontFamily: "Outfit_500Medium",
  },
  inputView: {
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    height: 50,
    marginBottom: "5%",
    justifyContent: "center",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,

    elevation: 1,
  },
  inputText: {
    fontSize: 16,
    height: 50,
    color: "#08004e",
    fontFamily: "Outfit_500Medium",
  },
  forgot: {
    color: "#08004e",
    fontSize: 15,
    marginLeft: windowW / 2.5,
    fontFamily: "Outfit_500Medium",
  },
  loginBtn: {
    width: "90%",
    backgroundColor: "#08004e",
    borderRadius: 10,
    height: windowH / 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: '10%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,

    elevation: 1,
  },
  signupBtn: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    height: windowH / 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,

    elevation: 1,
  },
  loginText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Outfit_500Medium",
  },
  signupText: {
    fontSize: 16,
    color: "#08004e",
    fontFamily: "Outfit_500Medium",
  },
});
