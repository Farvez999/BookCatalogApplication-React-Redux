/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useGetBooksQuery } from "@/redux/features/book/bookApi";

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

const Books = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data: books, isLoading, error } = useGetBooksQuery(undefined);

  return (
    <div>
      <div className="mb-[100px]">
        <h3 className="text-[20px] font-[500] text-left mb-[20px]">
          Recently Add New Books
        </h3>
        <div className="grid grid-cols-3 gap-x-10 gap-y-10">
          {books?.books?.map((book: IBook, i: number) => {
            return (
              <Link key={i} to={`/details/${book._id}`}>
                <ProductCard book={book} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Books;
