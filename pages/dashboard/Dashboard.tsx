import { useUser } from "../../hooks";
import DashboardLayout from "../DashboardLayout";
import Nav from "../../components/Nav";

const Dashboard = () => {
  const { me } = useUser();

  console.log(me);

  return (
    <DashboardLayout>
      <Nav />
      <div className="bg-light p-8 rounded-xl max-w-40 text-muted">Dashboard</div>
    </DashboardLayout>
  );
};

export default Dashboard;
