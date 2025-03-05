export interface BookProps {
    books: Book[];  // Ensure it's an array of books
    isLoading: boolean;
    message: string;
}


export interface Book {
    id: string;
    volumeInfo: {
      title: string;
      authors?: string[];
      imageLinks?: {
        thumbnail?: string;
        smallThumbnail?:string
      };
    };
    [key: string]: any; // Allows extra properties so typescript wont give an error
  }

 export interface AuthState{
  isLoggedIn: boolean,
  isSuccess: boolean,
  isError: boolean,
  isLoading: boolean,
  message: string,
  user: null,
  token: string,
  }
  