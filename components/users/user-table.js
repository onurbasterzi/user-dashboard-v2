
import DataTable from "react-data-table-component";
import ActionButtons from "../ui/action-buttons";
import { useMutation } from "@apollo/client";
import { GET_USERS,DELETE_USER } from "../../pages/api/queries";

const UserTable = (props) => {


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

    const columns = [
        {
          name: "ID",
          selector: (row) => row.id,
          sortable: true,
        },
        {
          name: "Name",
          selector: (row) => row.name,
          sortable: true,
        },
        {
          name: "Lastname",
          selector: (row) => row.lastname,
          sortable: true,
        },
        {
          name: "Phone",
          selector: (row) => row.phone,
          sortable: true,
        },
        {
          name: "Date of Birth",
          selector: (row) => row.date_of_birth,
          sortable: true,
        },
        {
          name: "Email",
          selector: (row) => row.email,
          sortable: true,
        },
        {
          name: "Actions",
          selector: (row) => row.email,
          cell: row =>  <ActionButtons isLoading={loading} sender='table' onDelete={deleteHandler} user={row}/>,
        },
      ];

      const tableData=props.users

    return (  
      <div>
        {loading && <div className='overlay-box'>Loading...</div>}
        <DataTable
        columns={columns}
        data={tableData}
        pagination
      
      />
      </div>
    );
}
 
export default UserTable
