import { RiFacebookBoxFill, RiInstagramLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-green-200 text-black p-20">
      <div className="flex justify-between">
        <div>
          <img
            className="h-20"
            src="https://i.pinimg.com/originals/a2/c3/34/a2c3349d65d1418ccd25fa77cba3eda9.png"
            alt="Logo"
          />
          <p className="w-80">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            adipisci, voluptatibus recusandae molestias vel voluptatem doloribus
            fugit nemo est officia nisi exercitationem ipsam.
          </p>
        </div>
        <div className="flex gap-20">
          <ul className="space-y-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allBooks">All Books</Link>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-2 text-2xl">
          <RiFacebookBoxFill />
          <RiInstagramLine />
        </div>
      </div>
      <div className="flex w-full mt-20 gap-5">
        <p>Privacy Policy</p>
        <p>Terms & Condition</p>
        <p className="ml-auto"> &#169; Book Self 2023</p>
      </div>
    </div>
  );
};

export default Footer;
