import { useMutation } from "@apollo/client";
import Link from "next/link";
import { DELETE_USER, GET_USERS } from "../../pages/api/queries";
import ActionButtons from "../ui/action-buttons";
const UserItem = (props) => {
  const [deleteUser, { loading, error }] = useMutation(DELETE_USER);
  const deleteHandler = (id) => {
    deleteUser({
      variables: { id: id },
      update: (cache) => {
        const data = cache.readQuery({ query: GET_USERS });
        data = data.users.filter((item) => item.id !== id);
        cache.writeQuery({ query: GET_USERS, data: { users: data } });
      },
    });
  };

  const user = props.userdata;
  return (
    <div>
      {loading && <div className='overlay-box'>Loading...</div> }
      <div className="user" key={user.id}>
        <div className="elli">
          <h3>
            {user.name} {user.lastname}
          </h3>
        </div>
        <div className="btn-group">
          <ActionButtons
            isLoading={loading}
            onDelete={deleteHandler}
            user={user}
          />
        </div>
      </div>
    </div>
  );
};

export default UserItem;
