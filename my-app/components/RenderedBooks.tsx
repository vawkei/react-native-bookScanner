import { Image, StyleSheet, Text, View } from "react-native";
import Card from "./ui/card/Card";
import { Colors } from "@/constants/Colors";
import React from "react";
import { Book } from "@/interfaces/interface";

const RenderedBooks: React.FC<{ secureImageUrl: string; itemData: Book }> = (
  props
) => {
  return (
    <Card style={styles.cardClass}>
      <View style={styles.innerContainer}>
        <View>
          {props.itemData.imageLinks?.smallThumbnail ? (
            <Image
              source={{
                // uri: itemData.item.volumeInfo.imageLinks
                //   ?.smallThumbnail,
                uri: props.secureImageUrl,
              }}
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
            />
          ) : (
            <Text>No Image Available</Text>
          )}
        </View>
        <Text style={styles.text}>{props.itemData.title}</Text>
        <Text style={styles.text}>
          <Text style={styles.writtenBy}>Written by:</Text>
          {props.itemData.author?.[0] ?? "Unknown Author"}
        </Text>
      </View>
    </Card>
  );
};

export default RenderedBooks;

const styles = StyleSheet.create({

  innerContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    // color: Colors.customColors.primary200,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  writtenBy: {
    fontSize: 12,
  },
  cardClass: {
    padding: 8,
    marginBottom: 12,
    paddingBottom: 16,
    // backgroundColor: "red",
  },
  itemSeparatorContainer: {
    backgroundColor: "yellow",
    height: 1.5,
    width: "50%",
    marginHorizontal: "auto",
  },
});
