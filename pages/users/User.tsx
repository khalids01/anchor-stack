import { useUser } from "../../hooks";
import DashboardLayout from "../DashboardLayout";
import Nav from "../../components/Nav";
import UsersList from '../../components/users/UsersList'

const Users = () => {
  const { me } = useUser();

  return (
    <DashboardLayout>
      <Nav />
      <UsersList/>
    </DashboardLayout>
  );
};

export default Users;
