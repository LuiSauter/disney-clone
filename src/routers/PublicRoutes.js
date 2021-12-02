import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { LoaderDisney } from "../pages/LoaderDisney";

export default function PublicRoutes({ children }) {
  const { isLogged, userLogget} = useUser();
  return isLogged === true ? (
    <Navigate to="/home" />
  ) : userLogget === null ? (
    children
  ) : (
    <LoaderDisney>
      <img src="/images/logo-disney.svg" alt="Disney plus" />
    </LoaderDisney>
  );
}
