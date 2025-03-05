import { Colors } from "@/constants/Colors";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { AddDispatch } from "@/store/store";
import { SET_LOGGEDOUT_USER } from "@/store/auth/authIndex";
import { useGetBooksQuery } from "../../store/rtk/bookApi";
import RenderedBooks from "@/components/RenderedBooks";
import Card from "@/components/ui/card/Card";

export default function BookList() {
  const dispatch = useDispatch<AddDispatch>();

  const logoutUserHandler = () => {
    dispatch(SET_LOGGEDOUT_USER());
  };

  const { data, error } = useGetBooksQuery(undefined);
  // console.log("data from backend dashboard.tsx:", data);

  if (!data) {
    return <Text>Loading...</Text>; // Or show a loading spinner
  }

  if (error) {
    console.log("data from backend:", error);
  }

  const ItemSeparator = () => {
    return <View style={styles.itemSeparatorContainer} />;
  };

  return (
    <View style={styles.booklistContainer}>
      <Text style={styles.text}>Book List</Text>

      <View style={styles.top}>
        <Pressable style={styles.button}>
          <Text style={styles.topText}>Search History</Text>
        </Pressable>
        <Pressable onPress={logoutUserHandler} style={styles.buttonLogOut}>
          <FontAwesome name="power-off" size={18} style={styles.buttonText} />
        </Pressable>
      </View>

      <View style={styles.container}>
        {data?.books?.length !== 0 ? (
          <SafeAreaView>
            <FlatList
              data={data?.books}
              keyExtractor={(item) => item._id}
              ListEmptyComponent={<Text>No Books Available</Text>}
              alwaysBounceVertical={true}
              // ListHeaderComponent={<Text>Books Found</Text>}
              ListHeaderComponentStyle={styles.headerComponentStyle}
              ListFooterComponent={<Text>Voke || Vawkei</Text>}
              ItemSeparatorComponent={ItemSeparator}
              contentContainerStyle={styles.flatListContainer}
              renderItem={(itemData) => {
                const imageUrl = itemData.item.imageLinks?.smallThumbnail;

                // //Ensure URL uses HTTPS
                // const secureImageUrl = imageUrl?.startsWith("http://")
                //   ? imageUrl.replace("http://", "https://")
                //   : imageUrl;
                const secureImageUrl = imageUrl?.startsWith("http://")
                ? imageUrl.replace("http://", "https://")
                : imageUrl || ""; // Ensure it's always a string

                return (
                  <RenderedBooks
                    secureImageUrl={secureImageUrl}
                    itemData={itemData.item}
                  />
                );
              }}
            />
          </SafeAreaView>
        ) : (
          <View>
            <Text style={{ color: "yellow", marginHorizontal:"auto" }}>
              Your search history is empty
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  booklistContainer: {
    flex: 1,
    backgroundColor: Colors.customColors.gray700,
  },
  top: {
    marginTop: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.customColors.primary700,
    borderRadius: 6,
    padding: 6,
  },
  buttonLogOut: {
    backgroundColor: Colors.customColors.accent500,
    borderRadius: 6,
    padding: 6,
  },
  topText: {
    color: "white",
    fontSize: 16,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginTop: 24,
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },

  // flat list styles:
  container: {
    flex: 1,
    justifyContent: "center",
  },
  flatListContainer: {
    paddingTop: 1,
    paddingBottom: 60, // so as to have room at the bottom of my list.😁
  },
  cardClass: {
    padding: 8,
    marginBottom: 12,
    paddingBottom: 16,
  },
  innerContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headerComponentStyle: {
    marginHorizontal: "auto",
    padding: 10,
    marginTop: 6,
  },
  itemSeparatorContainer: {
    backgroundColor: "yellow",
    height: 1.5,
    width: "50%",
    marginHorizontal: "auto",
  },
  writtenBy: {
    fontSize: 12,
  },
});

{
  /* <Card style={styles.cardClass}>
                    <View style={styles.innerContainer}>
                      <View>
                        {itemData.item.imageLinks?.smallThumbnail ? (
                          <Image
                            source={{
                              // uri: itemData.item.volumeInfo.imageLinks
                              //   ?.smallThumbnail,
                              uri: secureImageUrl,
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
                      <Text style={styles.text}>
                        {itemData.item.title}
                      </Text>
                      <Text style={styles.text}>
                        <Text style={styles.writtenBy}>Written by:</Text>
                        {itemData.item.authors?.[0] ??
                          "Unknown Author"}
                      </Text>
                    </View>
                  </Card> */
}
