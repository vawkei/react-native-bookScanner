import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as SecureStore from "expo-secure-store";
import { AuthState } from "@/interfaces/interface";

const initialAuthState: AuthState = {
  isLoggedIn: false,
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: "",
  user: null,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    SET_REGISTERED_USER(state, action: any) {
      console.log("authSliceRegister:", action.payload);

      state.message = action.payload.msg;
    },
    SET_LOGGEDIN_USER(state, action) {
      console.log("authSliceLoggedin:", action.payload);

      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.message = action.payload.msg;

      storeToken(action.payload.token);
    },
    SET_LOGGEDOUT_USER(state) {
      state.token = "";
      state.isLoggedIn = false;
      removeTokenAndBooks(); //this clears our entire storage
    },
    SET_AUTH_STATE(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    RESET_AUTH(state) {
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
});

export const {
  SET_REGISTERED_USER,
  SET_AUTH_STATE,
  SET_LOGGEDIN_USER,
  SET_LOGGEDOUT_USER,
  RESET_AUTH,
} = authSlice.actions;

//  👇👇 ========================ASYNC STORAGE ===============================👇👇

async function storeToken(token: string) {
  try {
    await AsyncStorage.setItem("authToken", token);
    const authToken = await AsyncStorage.getItem("authToken");
    console.log("storing token:", authToken);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log("error storing token:", message);
  }
}

async function removeTokenAndBooks() {
  try {
    await AsyncStorage.clear();
    console.log("storage cleared successfully.");
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log("error removing token:", message);
  }
}
