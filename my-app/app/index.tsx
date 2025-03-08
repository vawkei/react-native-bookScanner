import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const API_URL =
    process.env.APP_ENV === "production"
      ? process.env.EXPO_PUBLIC_PROD_API_URL
      : process.env.EXPO_PUBLIC_DEV_API_URL;
  Alert.alert("API_URL:", API_URL);
  console.log("API_URL:", API_URL); //📒📒for debugging o

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.text}>Vawkei || Voke's</Text>
      <Text style={styles.text}>Book Scanner App</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth")}>
          <Text style={styles.buttonText}>Login || Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // color:Colors.customColors.gray700
  },
  buttonContainer: {
    marginTop: 18,
  },
  button: {
    backgroundColor: Colors.customColors.primary800,
    padding: 12,
    borderRadius: 12,
  },
  text: {
    //color:Colors.customColors.primary200,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonText: {
    color: "white",
  },
});
