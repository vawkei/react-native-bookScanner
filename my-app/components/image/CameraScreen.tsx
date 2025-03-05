import { useCallback, useEffect, useRef, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Camera, CameraType, CameraView } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { Colors } from "@/constants/Colors";
import { ExtractTextFromImage } from "./ImageToTextApi";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AddDispatch, RootState } from "@/store/store";
// import { BOOK_FROM_GOOGLEAPI } from "@/store/books/booksIndex";
import Card from "../ui/card/Card";
import {
  useSaveBookSearchedBooksToDbMutation,
  useGoogleBooksAPIMutation,
} from "@/store/rtk/bookApi";
import { useRouter } from "expo-router";
import { Book } from "@/interfaces/interface";
import { useFocusEffect } from "@react-navigation/native";

export default function CameraScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] =
    useState(false);
  const [photo, setPhoto] = useState<any>("");
  const [facing, setFacing] = useState<CameraType>("back");
  const cameraRef = useRef<CameraView | null>(null);

  const [showButton, setShowButton] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // const { books } = useTypedSelector((state) => state.book);
  const [books,setBooks] = useState<Book[]>([]);

  const [saveBooksToStorage] = useSaveBookSearchedBooksToDbMutation();
  const [getBook, { data, error, isLoading: retrieving }] =
    useGoogleBooksAPIMutation();

  const router = useRouter();

  // first we gatta request permission
  useEffect(() => {
    const requestPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    };
    requestPermissions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setBooks([]);
      setShowButton(true);
      setIsLoading(false)
    }, [])
  );
  


  if (!hasCameraPermission) {
    return (
      <View style={styles.permissionView}>
        <Text style={styles.text}>
          Permission for camera not granted, please change this in settings
        </Text>
      </View>
    );
  }
  // if all the above works as expected then we take picture.saycheeeeeze!!!😁😁😁
  const takeImageHandler = async () => {
    setShowButton(false);
    setIsLoading(true);

    if (cameraRef.current) {
      try {
        const options = {
          quality: 0.5,
          aspect: [16, 9],
          // base64: true,
          allowsEditing: true,
        };

        const newPhoto = await cameraRef.current.takePictureAsync(options);
        if (!newPhoto?.uri) {
          console.error("Failed to capture image");
          return;
        }
        console.log("image properties:", newPhoto);
        setPhoto(newPhoto?.uri);

        const extractedText = await ExtractTextFromImage(newPhoto);
        if (!extractedText || extractedText === null) {
          console.error("No text extracted.Possibly network issue.");
          return;
        }

        console.log("Extracted text:", extractedText);
        const response = await getBook(extractedText).unwrap();
        console.log("googleBookAPIResponse:", response);
        // 👉👉googleBookAPIResponse: {"data": {"items": [[Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object]], "kind": "books#volumes", "totalItems": 2109}}👈👈

        setBooks(response?.data?.items)
        // save the response from backend to mongodb:👇👇
        const saveBooksToStorageResponse = await saveBooksToStorage(
          response?.data?.items
        );

        console.log("saveBooksToStorageResponse:",saveBooksToStorageResponse);
        if(saveBooksToStorageResponse?.data?.msg ==="Books stored successfully"){
          router.push("/(tabs)/dashboard")
        };
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "something went wrong";
        console.log("error message:", message);
      }
    }
  };

  const ItemSeparator = () => {
    return <View style={styles.itemSeparatorContainer} />;
  };

  return (
    <View style={styles.container}>
      {books?.length !== 0 ? (
        <SafeAreaView>
          <FlatList
            data={books}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={<Text>No Books Available</Text>}
            alwaysBounceVertical={true}
            // ListHeaderComponent={<Text>Books Found</Text>}
            ListHeaderComponentStyle={styles.headerComponentStyle}
            ListFooterComponent={<Text>Voke || Vawkei</Text>}
            ItemSeparatorComponent={ItemSeparator}
            contentContainerStyle={styles.flatListContainer}
            renderItem={(itemData) => {
              const imageUrl =
                itemData.item.volumeInfo.imageLinks?.smallThumbnail;

              //Ensure URL uses HTTPS
              const secureImageUrl = imageUrl?.startsWith("http://")
                ? imageUrl.replace("http://", "https://")
                : imageUrl;
              return (
                <Card style={styles.cardClass}>
                  <View style={styles.innerContainer}>
                    <View>
                      {itemData.item.volumeInfo.imageLinks?.smallThumbnail ? (
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
                      {itemData.item.volumeInfo.title}
                    </Text>
                    <Text style={styles.text}>
                      <Text style={styles.writtenBy}>Written by:</Text>
                      {itemData.item.volumeInfo.authors?.[0] ??
                        "Unknown Author"}
                    </Text>
                  </View>
                </Card>
              );
            }}
          />
        </SafeAreaView>
      ) : (
        <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
          {isLoading && <Text style={styles.pleaseWait}>Please Wait...</Text>}
          {showButton && (
            <Pressable onPress={takeImageHandler} style={styles.button}>
              <Text style={styles.text}>Take Image</Text>
            </Pressable>
          )}
        </CameraView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  flatListContainer: {
    paddingTop: 10,
    paddingBottom: 60, // so as to have room at the bottom of my list.😁
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
  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pleaseWait: {
    color: Colors.customColors.primary200,
    textAlign: "center",
    marginTop: 30,
    fontSize: 16,
  },
  permissionView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    marginTop: 36,
  },
  button: {
    marginTop: 150,
    backgroundColor: Colors.customColors.primary700,
    width: "50%",
    padding: 12,
    borderRadius: 6,
    textAlign: "center",
  },
  text: {
    color: Colors.customColors.primary200,
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
  },
  itemSeparatorContainer: {
    backgroundColor: "yellow",
    height: 1.5,
    width: "50%",
    marginHorizontal: "auto",
  },
});
