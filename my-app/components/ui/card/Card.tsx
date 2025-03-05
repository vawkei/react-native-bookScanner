import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface CardProps{
    children:React.ReactNode,
    style?: StyleProp<ViewStyle>
}

export default function Card(props:CardProps){
    return(
        <View style={[styles.cardContainer,props.style]}>
            {props.children}
        </View>
    )
};

const styles= StyleSheet.create({
    cardContainer:{
        width:"90%",
        margin:"auto",
        // backgroundColor:"white",
        backgroundColor:Colors.customColors.primary500,
        borderRadius:12,
        shadowRadius:8,
        shadowOpacity:0.9
    }
})