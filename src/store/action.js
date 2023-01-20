import AsyncStorage from "@react-native-async-storage/async-storage";
import users from "../database/users";


// Actions Login
export const Init = () => {
  return async (dispatch) => {
    let token = await AsyncStorage.getItem("token");
    if (token !== null) {
      console.log("token fetched");
      dispatch({
        type: "LOGIN",
        payload: token,
      });
    }
  };
};

var isLogged = function (email, password) {
  for (let i = 0; i < users.length; i++) {
    if (email === users[i].email && password === users[i].password) {
      return true;
    }
  }
};

export const Login = (email, password) => {
  return async (dispatch) => {
    let token = null;
    if (isLogged(email, password)) {
      token = email + password;
      await AsyncStorage.setItem("token", token);
      console.log("token stored");
    }
    dispatch({
      type: "LOGIN",
      payload: token,
    });
  };
};

export const Logout = () => {
  return async (dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: "LOGOUT",
    });
  };
};


