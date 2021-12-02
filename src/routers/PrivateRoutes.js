import { useUser } from "../hooks/useUser"
import {Navigate, Route, Routes} from 'react-router-dom'
import { LoaderDisney } from "../pages/LoaderDisney";
import NotFound from "../pages/NotFound";

export default function PrivateRoute({ children }) {
  const { isLogged, userLogget } = useUser();
  return isLogged ? (
    children
  ) : isLogged === false ? (
    <Navigate to="/" />
  ) : (
    <>
      {userLogget === null ? (
        <Routes>
          <Route path="/:rest*" element={<NotFound />} />
        </Routes>
      ) : (
        <LoaderDisney>
          <img src="/images/logo-disney.svg" alt="Disney plus" />
        </LoaderDisney>
      )}
    </>
  );
}