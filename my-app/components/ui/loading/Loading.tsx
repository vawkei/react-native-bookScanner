import {  Image, StyleSheet, Text, View } from "react-native";
import spinner from "../../../assets/images/spinner.jpg";

export default function Loading() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.messsage}>Loading...</Text>
      {/* <ActivityIndicator size={"large"} color="#007AFF"/> */}
      <Image source={spinner} style={styles.gif} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  messsage: {
    fontSize: 16,
    marginBottom: 12,
  },
  gif: {
    width: 100,  // Adjust width
    height: 100, // Adjust height
  },
});
