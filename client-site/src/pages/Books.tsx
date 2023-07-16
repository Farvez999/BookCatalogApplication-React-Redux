/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { IBook } from "@/types/globalTypes";
import ProductCard from "./ProductCard";
import { useGetBooksQuery } from "@/redux/features/book/bookApi";

const Books = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, isLoading, error } = useGetBooksQuery(undefined);

  return (
    <div>
      <div className="col-span-9 grid grid-cols-4 gap-5 pb-10">
        {data?.data?.slice(0, 10).map((book: IBook) => (
          <ProductCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
