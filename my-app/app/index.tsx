import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  console.log("API Key:", process.env.EXPO_PUBLIC_APILAYER_API_KEY);

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
  buttonText:{
    color: "white",
  }
});
