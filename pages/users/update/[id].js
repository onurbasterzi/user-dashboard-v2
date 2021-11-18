import UpdateUserForm from "../../../components/users/update-user-form";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_USER, GET_USER_BY_ID } from "../../api/queries";
import { useRouter } from "next/router";
import Loading from "../../../components/ui/loading";
import ErrorPage from "../../../components/ui/custom-error";

const UpdateUser = () => {
  const router = useRouter();
  const id = router.query.id;
  const {
    data,
    loading: laodingData,
    error: errorData,
  } = useQuery(GET_USER_BY_ID, { variables: { id } });


  const [updateUser, { loading, error }] = useMutation(UPDATE_USER, {
    variables: { id },
  });

  const handleSubmit = (user) => {
    updateUser({
      variables: {
        id: id,
        name: user.name,
        lastname: user.lastname,
        phone: user.phone,
        date_of_birth: user.date_of_birth,
        email: user.email,
      },
      update:()=>{
        router.push('/')
      }
    });
    
  };

  console.log(data);

  return (
    <div>
      {errorData && <ErrorPage/>}
      {laodingData && <Loading/>}
      {data && (
        <UpdateUserForm
          dataLoading={laodingData}
          dataError={errorData}
          updateLoading={loading}
          updateError={error}
          user={data}
          onUpdateUser={handleSubmit}
        />
      )}
    </div>
  );
};

export default UpdateUser;
