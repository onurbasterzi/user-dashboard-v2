import Link from "next/link";
const ActionButtons = (props) => {
  const user = props.user;
  const tableStyle = props.sender === "table" ? "btn btn-sm btn-block" : "btn";
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
          onClick={() => props.onDelete(user.id)}
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
