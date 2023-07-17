import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// interface IProduct {
//   status: boolean;
//   priceRange: number;
// }
interface IBook {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

interface BookState {
  books: IBook[];
}

const initialState: BookState = {
  books: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleStatus: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});

export const { toggleStatus, setPriceRange } = productSlice.actions;

export default productSlice.reducer;
