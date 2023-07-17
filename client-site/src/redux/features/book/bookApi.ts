import { api } from "@/redux/api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // addBook: builder.mutation({
    //   query: (data) => ({
    //     url: `/books/add-new-book`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["addNewBook"],
    // }),
    // bookReview: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/books/${id}`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["bookReview"],
    // }),
    // updateBook: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/books/update-book/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: ["bookDetails"],
    // }),
    // deleteBook: builder.mutation({
    //   query: (id: string) => ({
    //     url: `/books/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["deleteBook"],
    // }),
    getAllBooks: builder.query({
      query: ({ search, genre, publicationYear }) => ({
        url: "/allBooks",
        params: { search, genre, publicationYear },
        providesTags: ["addNewBook", "deleteBook"],
      }),
    }),
    getBooks: builder.query({
      query: () => ({
        url: "/books",
        providesTags: ["books"],
      }),
    }),
    // bookDetails: builder.query({
    //   query: (id: string) => `/books/${id}`,
    //   providesTags: ["bookDetails", "bookReview"],
    // }),
  }),
});

export const {
  useGetBooksQuery,
  // useUpdateBookMutation,
  // useAddBookMutation,
  // useDeleteBookMutation,
  useGetAllBooksQuery,
  // useBookDetailsQuery,
  // useGetRecentBooksQuery,
  // useBookReviewMutation,
} = booksApi;
