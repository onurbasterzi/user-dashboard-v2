import Link from "next/link";
import { confirmDialog } from "../ui/confirm-dialog";




const ActionButtons = (props) => {
  const user = props.user;
  const tableStyle = props.sender === "table" ? "btn btn-sm btn-block" : "btn";

  
const handleDelete=()=>{
  props.onDelete(user.id)
}


function confirm() {
  //console.log('action',user.id);
  confirmDialog(
    handleDelete,
    "Delete confirmation",
    `Are you sure you want to delete ${user.name} ${user.lastname} ?`
  );
}


  return (
    <div>
      <Link href={"/users/" + user.id}>
        <a className={tableStyle + " btn-details"}>Details</a>
      </Link>
      <Link href={"/users/update/" + user.id}>
        <a className={tableStyle + " btn-update"}>Update</a>
      </Link>
      {!props.isLoading && (
        <button
          className={tableStyle + " btn-delete"}
          onClick={confirm}
        >
          Delete
        </button>
      )}
      {props.isLoading && (
        <button disabled className={tableStyle + " btn-delete"}>Delete</button>
      )}
    </div>
  );
};

export default ActionButtons;
