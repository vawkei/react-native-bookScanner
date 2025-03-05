//👇👇👇======================= number 1================================👇👇👇
// import recognizeText from "@react-native-ml-kit/text-recognition";

// export const ExtractTextFromImage = async (imageUri: any) => {
//   try {
//     const result = await recognizeText.recognize(imageUri);
//     console.log("Extracted text:", result.text);
//     return result.text;
//   } catch (error) {
//     console.error("OCR error:", error);
//     return null;
//   }
// };

//👇👇👇======================= number 2================================👇👇👇

import { API_KEY } from "@env";
// import { CameraCapturedPicture } from "expo-camera";

export const ExtractTextFromImage = async (file: any) => {
  let myHeaders = new Headers();
  myHeaders.append(
    "apikey",

    // ADDD YOUR API KEY HERE
    API_KEY
  );
  myHeaders.append("Content-Type", "multipart/form-data");

  let raw = file;

  let requestOptions = {
    method: "POST",
    redirect: "follow" as RequestRedirect,
    headers: myHeaders,
    body: raw,
  };
  // Send a POST request to the OCR API

  try {
    const response = await fetch(
      "https://api.apilayer.com/image_to_text/upload",
      requestOptions
    );

    const remainingLimit = response.headers.get("X-RateLimit-Remaining-Month");    const data = await response.json();
    console.log("OCR Result:", data, "Remaining Requests:",remainingLimit);
    //👉👉 OCR Result: {"all_text": "MOTION
    //   PICTURE
    //   THE
    //   DAVINCI
    //   CODE
    //   THE #1 WORLDWIDE BESTSELLER", "annotations": ["MOTION", "PICTURE", "THE", "DAVINCI", "CODE", "THE", "#", "1", "WORLDWIDE", "BESTSELLER"], "lang": "en"}👈👈


    return data.all_text || "No text found";
  } catch (error) {
    console.error("OCR error:", error);
    return null;
  }
};







