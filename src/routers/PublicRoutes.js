import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function PublicRoutes({ children }) {
  const { isLogged } = useUser();
  return !isLogged ? <Navigate to="/home" /> : children;
}
