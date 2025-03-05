import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Card from "../ui/card/Card";
import { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";

import { useRouter } from "expo-router";
import { useRegisterMutation, useLoginMutation } from "@/store/rtk/authApi";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { AddDispatch, RootState } from "@/store/store";
import {
  RESET_AUTH,
  SET_LOGGEDIN_USER,
  SET_REGISTERED_USER,
} from "@/store/auth/authIndex";
import Loading from "../ui/loading/Loading";

const AuthForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [messageOnUi, setMessageOnUi] = useState("");
  const [haveAccount, setHaveAccount] = useState(false);

  const switchAuthModeHandler = () => {
    setHaveAccount((currState) => !currState);
  };

  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

  const { message, isLoggedIn, token } = useTypedSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch<AddDispatch>();

  const router = useRouter();
  const [registerUser,{isLoading:isRegistering}] = useRegisterMutation();
  const [loginUser,{isLoading:isLogginIn}] = useLoginMutation();

  const navigateToMainHome = () => {
    router.push("/");
  };

  const submitHandler = async () => {
    if (haveAccount) {
      //👇👇👇 Login===========================================>>
      if (
        enteredEmail.trim().length === 0 ||
        enteredPassword.trim().length < 6
      ) {
        Alert.alert(
          "please fill inputs. Password shouldn't be less than 6 letters"
        );
        console.log(
          "please fill inputs. Password shouldn't be less than 6 letters"
        );
        return;
      }

      const userData = {
        enteredEmail: enteredEmail,
        enteredPassword: enteredPassword,
      };
      console.log("user data:", userData);
      const response = await loginUser({ userData }).unwrap();
      console.log("register response from server:", response);
      dispatch(SET_LOGGEDIN_USER(response));
    } else {
      //👇👇👇 Register========================================>>
      if (
        enteredName.trim().length === 0 ||
        enteredEmail.trim().length === 0 ||
        enteredPassword.trim().length < 6
      ) {
        Alert.alert(
          "please fill inputs. Password shouldn't be less than 6 letters"
        );
        console.log(
          "please fill inputs. Password shouldn't be less than 6 letters"
        );
        return;
      }

      const userData = {
        enteredName: enteredName,
        enteredEmail: enteredEmail,
        enteredPassword: enteredPassword,
      };
      console.log("user data:", { userData });
      const response = await registerUser({ userData }).unwrap();
      console.log("register response from server:", response);

      dispatch(SET_REGISTERED_USER(response));

      setMessageOnUi("Please login...");

      setEnteredName("");
      setEnteredEmail("");
      setEnteredPassword("");
    }

    console.log("Hello world!");
  };

  // useEffect(() => {
  //   if (message === "registration successful") {
  //     setHaveAccount(true);
  //     dispatch(RESET_AUTH());
  //   }
  //   if (isLoggedIn && token) {
  //     router.push("/(tabs)/book-list");
  //     dispatch(RESET_AUTH());
  //   }
  // }, [message]);

  useEffect(() => {
    if (message === "registration successful") {
      setHaveAccount(true);
      dispatch(RESET_AUTH()); // Reset after setting state
    } else if (isLoggedIn && token) {
      router.push("/(tabs)/dashboard");
      dispatch(RESET_AUTH()); // Reset only after navigation
    }
  }, [message, isLoggedIn, token, dispatch, router]);

  return (
    <Card style={styles.cardStyle}>
      {isRegistering || isLogginIn && <Loading />}
      <Text style={{ color: "green", fontSize: 16 }}>{messageOnUi}</Text>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{haveAccount ? "Login" : "Register"}</Text>
        <Pressable
          style={styles.pressable}
          onPress={() => {
            console.log("pressable has been clicked, Lisa!");
            navigateToMainHome();
          }}>
          <Text style={styles.closeButton}>X</Text>
        </Pressable>
      </View>

      {haveAccount ? (
        <View>{null}</View>
      ) : (
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="enter name here"
            value={enteredName}
            onChangeText={(enteredText) => setEnteredName(enteredText)}
          />
        </View>
      )}

      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="enter email"
          value={enteredEmail}
          onChangeText={(enteredText) => setEnteredEmail(enteredText)}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="enter password"
          value={enteredPassword}
          onChangeText={(enteredText) => setEnteredPassword(enteredText)}
          secureTextEntry={true}
        />
      </View>
      <View>
        <Pressable style={styles.submitButton} onPress={submitHandler}>
          <Text style={styles.submitText}>
            {haveAccount ? "Login" : "Register"}
          </Text>
        </Pressable>
      </View>

      <View style={styles.switchAuthMode}>
        <Pressable onPress={switchAuthModeHandler}>
          <Text>{haveAccount ? "create an account" : "login"}</Text>
        </Pressable>
      </View>
    </Card>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  cardStyle: {
    width: "80%",
    padding: 20,
    marginTop: 20,
  },
  headingContainer: {
    position: "relative",
  },
  heading: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  pressable: {
    position: "absolute",
    top: 0,
    right: 10,
  },
  closeButton: {
    backgroundColor: Colors.customColors.primary800,
    borderRadius: 50,
    padding: 3,
  },
  textInputContainer: {
    padding: 12,
  },
  textInput: {
    padding: 12,
    borderRadius: 6,
    fontSize: 20,
  },
  submitButton: {
    backgroundColor: Colors.customColors.gray700,
    padding: 6,
    borderRadius: 6,
  },
  submitText: {
    color: "white",
    textAlign: "center",
  },
  switchAuthMode: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
  },
});
