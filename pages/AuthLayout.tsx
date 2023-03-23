import Nav from "../components/Nav";
import { Navigate } from "react-router-dom";
import { useToken } from "../hooks";

const AuthLayout = ({ children }: any) => {
  const { isLoggedIn } = useToken();

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default AuthLayout;
