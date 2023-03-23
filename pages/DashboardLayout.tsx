import Aside from "../components/aside/Aside";
import { Navigate } from "react-router-dom";
import { useToken } from "../hooks";
const DashboardLayout = ({ children }: any) => {
  const { isLoggedIn } = useToken();

  if (!isLoggedIn) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="relative container-xxl flex h-full gap-x-[44px]">
      <Aside />
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
