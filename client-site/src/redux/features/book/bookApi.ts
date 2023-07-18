/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "@/redux/api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "/books",
        providesTags: ["books"],
      }),
    }),
    getAllBooks: builder.query({
      query: ({ search, genre, publicationYear }) => ({
        url: "/allBooks",
        params: { search, genre, publicationYear },
        providesTags: ["addNewBook", "deleteBook"],
      }),
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: `books/addNewBook`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["addNewBook"],
    }),
    bookDetails: builder.query({
      query: (id: string) => `/books/${id}`,
      providesTags: ["bookDetails", "bookReview"],
    }),
    bookReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["bookReview"],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/update-book/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["bookDetails"],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteBook"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetAllBooksQuery,
  useBookDetailsQuery,
  useAddBookMutation,
  useBookReviewMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
