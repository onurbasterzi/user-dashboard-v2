import NewUserForm from "../../components/users/new-user-form";
import { useMutation } from "@apollo/client";
import { ADD_USER, GET_USERS } from "../api/queries";
import { useRouter } from "next/router";

const NewUser = () => {
  const [addUser,{loading,error}] = useMutation(ADD_USER);
  const router=useRouter()

  const handleSubmit = (user) => {
    const uniqueId = Date.now()
      .toString()
      .substring(Date.now().toString().length - 9);
    addUser({
      variables: {
        id: uniqueId,
        name: user.name,
        lastname: user.lastname,
        phone: user.phone,
        date_of_birth: user.date_of_birth,
        email: user.email,
      },
      update: (cache, { data: { insert_users_one } }) => {
        const data = cache.readQuery({ query: GET_USERS });
        if (data) {
          console.log(data);
          data = [...data.users, insert_users_one];
          console.log(data);
          cache.writeQuery({ query: GET_USERS, data: { users: data } });
        }
        router.push('/')
      },
    });
  };

  return (
   
  <NewUserForm isLoading={loading} isError={error} onAddUser={handleSubmit} />
  
  );
};

export default NewUser;
