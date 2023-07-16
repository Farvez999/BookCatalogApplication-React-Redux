/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { IBook } from "@/types/globalTypes";

interface IProps {
  product: IBook;
}

const ProductCard = ({ book }: IBook) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  console.log(book.publication_date);
  return (
    <div>
      <div className="rounded-2xl h-[280px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2 mt-20 mx-10">
        {/* <Link to={`/product-details/${book._id}`} className="w-full"> */}

        <h1 className="text-xl font-semibold">{book?.title}</h1>
        {/* </Link> */}
        <p>Author: {book?.author}</p>
        <p className="text-sm">Genre: {book?.genre}</p>
        <p className="text-sm">Publication Date: {book?.publication_date}</p>
        {/* <Button variant="default" onClick={() => handleAddProduct(product)}>
          Add to cart
        </Button> */}
      </div>
    </div>
  );
};

export default ProductCard;
