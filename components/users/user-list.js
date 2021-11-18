import Link from "next/link";
import UserItem from "./user-item";
const UserList = (props) => {
  return( 
    props.users.map((user) => (
    
    <UserItem
      key={user.id}
      userdata={user}
      onDelete={props.onDelete}
    />
  )));
};

export default UserList;
