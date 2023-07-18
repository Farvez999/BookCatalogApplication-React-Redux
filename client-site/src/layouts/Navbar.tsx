import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { setUser } from "@/redux/features/users/usersSlice";

const Navbar = () => {
  const { email } = useAppSelector((state) => state.users.user);
  const dispatch = useDispatch();

  const [isShowMenus, setIsShowMenus] = useState(false);
  const [isShowProfile, setIsShowProfile] = useState(false);

  const handleToggle = () => {
    // Toggle mobile menu visibility
    setIsShowMenus(!isShowMenus);
  };

  const handleToggleProfile = () => {
    setIsShowProfile(!isShowProfile);
  };

  const handleLogout = () => {
    dispatch(setUser(null));
    Cookies.remove("token");
  };

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

              <li>
                {email && (
                  <Button variant="link" asChild>
                    <Link to="/addNewBook">Add New Book</Link>
                  </Button>
                )}
              </li>
              {/*{user?.email && (
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
*/}

              {email ? (
                <li onClick={handleLogout}>
                  <a className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign Out
                  </a>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/signup">
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Sign Up
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Log In
                      </a>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
