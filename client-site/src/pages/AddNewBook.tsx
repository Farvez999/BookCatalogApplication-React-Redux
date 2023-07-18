/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useAppSelector } from "../redux/hooks";
import { useAddBookMutation } from "../redux/features/book/bookApi";
import swal from "sweetalert";
import { useNavigate } from "react-router";

interface IBookInfo {
  email: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
  description?: string;
  reviews?: [];
}

const AddNewBook = () => {
  const navigate = useNavigate();

  const { email } = useAppSelector((state) => state.users.user);

  const [isLoad, setIsLoad] = useState(false);

  const [addBook] = useAddBookMutation();

  const [bookInfo, setBookInfo] = useState<IBookInfo>({
    email: "",
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    image: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setBookInfo({ ...bookInfo, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("key", "60eafa116db4500b945b8df0c36499b4");

      try {
        const response = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData
        );
        const imageUrl = response.data.data.url;
        setBookInfo({ ...bookInfo, image: imageUrl });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Perform book submission logic here
    if (email) {
      bookInfo.email = email;
      bookInfo.reviews = [];
    }
    setIsLoad(true);
    const response: any = await addBook(bookInfo);
    if (response?.data) {
      swal(response?.data?.message, "", "success");
      // Reset the form fields
      setBookInfo({
        email: "",
        title: "",
        author: "",
        genre: "",
        publicationDate: "",
        image: "",
        description: "",
      });
      navigate("/allBooks");
      setIsLoad(false);
    } else {
      swal("Book Added Failed", "", "error");
      setIsLoad(false);
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="text-lg font-semibold mb-3 mt-40">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={bookInfo.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="text-lg font-semibold mb-3">
              Author Name
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={bookInfo.author}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="genre" className="text-lg font-semibold mb-3">
              Genre
            </label>
            <select
              id="genre"
              name="genre"
              value={bookInfo.genre}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-black border-gray-300 rounded focus:outline-none focus:border-green-500"
              required
            >
              <option value="">Select Genre</option>
              <option value="Scary Story">Classic</option>
              <option value="Mystery">Mystery</option>
              <option value="Horror">Fiction</option>
              <option value="Fantasy Horror">Fantasy</option>
              <option value="Supernatural">Young Adult Fantasy</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="publicationDate"
              className="text-lg font-semibold mb-3"
            >
              Publication Date
            </label>
            <input
              type="date"
              id="publicationDate"
              name="publicationDate"
              value={bookInfo.publicationDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="text-lg font-semibold mb-3">
              Book Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="text-lg font-semibold mb-3">
              Book description (Optional)
            </label>
            <textarea
              id="description"
              name="description"
              value={bookInfo.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            ></textarea>
          </div>
          {isLoad ? (
            <button
              disabled
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add Book
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddNewBook;
