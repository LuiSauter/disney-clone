import { useUser } from "../hooks/useUser"
import {Navigate} from 'react-router-dom'

export default function PrivateRoute({ children }) {
  const { isLogged } = useUser();
  return isLogged ? children : <Navigate to="/" />;
}