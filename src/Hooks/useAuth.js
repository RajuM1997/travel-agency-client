import { useContext } from "react";
import { AuthContext } from "../Pages/AuthContext/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
