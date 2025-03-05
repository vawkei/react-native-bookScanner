import AuthForm from "@/components/auth-form/AuthForm";
import { StyleSheet, Text, View } from "react-native";

export default function Auth(){

    return(
        <View>
            <Text style={styles.heading}>Auth Form</Text>
            <AuthForm />
        </View>
    )
};

const styles = StyleSheet.create({
    heading:{
        // color:Colors.customColors.primary200,
        color:"white",
        textAlign:"center",
        fontSize: 24,
        fontWeight: "bold",
        marginTop:24,
    }
})