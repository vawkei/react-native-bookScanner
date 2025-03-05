// import CameraScreen from "@/components/Image/CameraScreen";
import CameraScreen from "../../components/image/CameraScreen";
import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

export default function BookScanner() {
  return (
    <View style={styles.booklistContainer}>
      <Text style={styles.text}>Book Scanner</Text>
      <CameraScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  booklistContainer: {
    flex: 1,
    backgroundColor: Colors.customColors.gray700,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginTop: 24,
    fontSize: 24,
    fontWeight: "bold",
  },
});
