import Link from "next/link";
const User = (props) => {
  const user = props.user.users_by_pk;
  const formattedDate = new Date(user.date_of_birth).toLocaleDateString(
    "tr-TR",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div className="user-detail" style={{ paddingBottom: "20px" }}>
      <label>Name</label>
      <h2>
        {user.name} {user.lastname}
      </h2>
      <hr />
      <label>Date of Birth</label>
      <h2>{formattedDate}</h2>
      <hr />
      <label>Phone</label>
      <h2>{user.phone}</h2>
      <hr />
      <label>Email</label>
      <h2>{user.email}</h2>
      <hr />
      <br />
      <Link href={"/users/update/" + user.id}>
        <a className='btn btn-lg'>Edit User</a>
      </Link>
    </div>
  );
};

export default User;
