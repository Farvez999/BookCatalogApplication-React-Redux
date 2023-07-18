/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useDispatch } from "react-redux";
import "./App.css";
import jwt_decode, { JwtPayload } from "jwt-decode";
import Cookies from "js-cookie";
import MainLayout from "./layouts/MainLayout";
import { useEffect } from "react";
import { setUser } from "./redux/features/users/usersSlice";

interface DecodedToken extends JwtPayload {
  email: string;
}

function App() {
  const dispatch = useDispatch();

  // Retrieve the token from the cookie
  const token: string | undefined = Cookies.get("token");

  // Authenticate user info extract function
  const verifyUserToken = () => {
    if (token) {
      try {
        const decodedToken: DecodedToken = jwt_decode(token);
        // Perform any necessary checks or validations on the decoded token
        if (decodedToken && decodedToken?.email) {
          dispatch(setUser(decodedToken?.email));
        }
      } catch (error) {
        console.error("Error decoding JWT token:", error);
      }
    }
  };

  useEffect(() => {
    verifyUserToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
