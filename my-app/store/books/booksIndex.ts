import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book, BookProps } from "@/interfaces/interface";

const initialBookState: BookProps = {
  // book:[],
  books: [],
  isLoading: false,
  message: "",
};



export const bookSlice = createSlice({
  name: "book",
  initialState: initialBookState,
  reducers: {
    BOOK_FROM_GOOGLEAPI(state, action:PayloadAction<Book[]>) {
      console.log("response from CameraScreen[redux]:", action.payload);
      state.books = action.payload;
    },
  },
});

export const { BOOK_FROM_GOOGLEAPI } = bookSlice.actions;
