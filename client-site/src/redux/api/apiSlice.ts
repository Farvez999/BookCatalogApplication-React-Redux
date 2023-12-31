import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-redux-app.vercel.app/",
    prepareHeaders: (headers) => {
      const token = Cookies.get("token");
      console.log(token);
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["addNewBook", "bookDetails", "deleteBook", "bookReview"],
  endpoints: () => ({}),
});
