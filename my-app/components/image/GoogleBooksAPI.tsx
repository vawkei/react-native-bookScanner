//👇👇Making the request to the frontend so as to fetch frm googleBooksApi👇👇

// import {GOOGLE_BOOKS_API_KEY} from "@env";

// export async function GoogleBooksAPI(text: any) {
//   try {
//     const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}&key=${GOOGLE_BOOKS_API_KEY}`, {
//       method: "GET",
//     });
//     const data = await response.json();
//     console.log(data);

//     return data
//   } catch (error) {
//     const message =
//       error instanceof Error ? error.message : "something went wrong";
//     console.log("response from backend:", message);
//     // response from backend: Network request failed
//   }
// };

//👆👆Making the request to the frontend so as to fetch frm googleBooksApi👆👆

//👇👇Making the request to our backend so as to fetch frm googleBooksApi👇👇

export async function GoogleBooksAPI(text: any) {
  try {
    // const response = await fetch("http://localhost:8080/api/v1/google-book-api/get-book", { this wont work[localhost] using expo go app
    const response = await fetch(
      "http://192.168.43.52:8080/api/v1/google-book-api/get-book",
      {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("data from googlebooksAPI:",data);
    return data;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log("response from backend:", message);
    // response from backend: Network request failed
  }
}

//👆👆Making the request to our backend so as to fetch frm googleBooksApi👆👆
