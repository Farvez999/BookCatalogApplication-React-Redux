import { Button } from "@/components/ui/button";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div>
            <img
              className="h-16"
              src="https://i.pinimg.com/originals/a2/c3/34/a2c3349d65d1418ccd25fa77cba3eda9.png"
              alt="log"
            />
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/allBooks">All Books</Link>
                </Button>
              </li>

              {/* <li>
                {user?.email && <Link to="/addProduct">Add Product</Link>}
              </li>
              {user?.email && (
                <li>
                  <Link to="/reading">My ReadingList</Link>
                </li>
              )}
              {user?.email && (
                <li>
                  {" "}
                  <Link to="/wishlist">My WishList</Link>
                </li>
              )}

              <li>{!user.email && <Link to="/login">login</Link>}</li> */}
              <li>{<Link to="/signup">Signup</Link>}</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
