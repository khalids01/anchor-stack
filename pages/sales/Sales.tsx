import { useUser } from "../../hooks";
import DashboardLayout from "../DashboardLayout";
import Nav from "../../components/Nav";

const Sales = () => {
  const { me } = useUser();

  return (
    <DashboardLayout>
      <Nav />
      <div className="bg-light p-8 rounded-xl max-w-40 text-muted">Sales</div>

    </DashboardLayout>
  );
};

export default Sales;
