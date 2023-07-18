/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import Books from "./Books";
import MainLayout from "@/layouts/MainLayout";
import { useGetBooksQuery } from "@/redux/features/book/bookApi";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

interface IBook {
  _id: string;
  email: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  reviews: [];
}

const Home = () => {
  const { data: books, isLoading, error } = useGetBooksQuery(undefined);

  console.log(books?.books);

  return (
    <div>
      <div className="mt-[20px] mb-[100px] mx-16 my-4">
        <h3 className="text-[20px] font-[500] text-left mb-[20px]">
          Recently Add New Books
        </h3>
        <div className="grid grid-cols-3 gap-x-10 gap-y-10">
          {books?.books?.map((book: IBook, i: number) => {
            return (
              <Link key={i} to={`/details/${book?._id}`}>
                <BookCard book={book} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
