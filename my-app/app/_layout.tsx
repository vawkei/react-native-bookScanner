import { Colors } from "@/constants/Colors";
import { SET_AUTH_STATE } from "@/store/auth/authIndex";
import { AddDispatch, RootState, store } from "@/store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
// import "react-native-reanimated";
import { Provider } from "react-redux";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { jwtDecode } from "jwt-decode";

export function App() {
  const dispatch = useDispatch<AddDispatch>();

  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { isLoggedIn, token } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("authToken");
        if (!storedToken) {
          router.push("/");
          return;
        }

        //so i gatta extract the information of the token on nextline👇
        const decodedToken = jwtDecode(storedToken);
        const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds

        if (!decodedToken.exp || decodedToken.exp < currentTime) {
          await AsyncStorage.removeItem("authToken");
          router.push("/");
        } else {
          dispatch(SET_AUTH_STATE(decodedToken));
        }
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "something went wrong";
        console.log("asyncStorageError:", message);
      }
    };
    fetchToken();
  }, [dispatch]);

  // useEffect(() => {
  //   async function removeTokenAndBooks() {
  //     try {
  //       await AsyncStorage.clear();
  //       console.log("storage cleared successfully.");
  //     } catch (error) {
  //       const message =
  //         error instanceof Error ? error.message : "something went wrong";
  //       console.log("error removing token:", message);
  //     }
  //   }
  //   removeTokenAndBooks();
  // }, []);

  useEffect(() => {
    if (isLoggedIn && token) {
      router.replace("/(tabs)/dashboard");
    } else {
      router.push("/auth");
    }
  }, [isLoggedIn, token]);

  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.customColors.primary500 },
          headerTintColor: Colors.customColors.gray700,
          contentStyle: { backgroundColor: Colors.customColors.gray700 },
        }}>
        <Stack.Screen
          name="index"
          options={{ headerTitle: "Home", headerShown: true }}
        />
        <Stack.Screen
          name="auth"
          options={{ headerTitle: "Auth", headerShown: true }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Slot />

        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
