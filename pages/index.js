import UserList from "../components/users/user-list";
import UserTable from "../components/users/user-table";
import { GET_USERS } from "../pages/api/queries";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { data, loading, error } = useQuery(GET_USERS);

  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  return (
    <div className='home'>
      <h2>User List</h2>
      {loading && <div>Loading..</div>}
      {error && <div>Error..</div>}
      {data && isMobile() && <UserList users={data.users} />}
      {data && !isMobile() && <UserTable users={data.users} />}
    </div>
  );
}
