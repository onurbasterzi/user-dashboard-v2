import { useRef } from "react";

const UpdateUserForm = (props) => {
  const user = props.user.users_by_pk;
  console.log(user);

  const nameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const dateofBirthRef = useRef();
  const emailRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const user = {
      name: nameRef.current.value,
      lastname: lastNameRef.current.value,
      phone: phoneRef.current.value,
      date_of_birth: dateofBirthRef.current.value,
      email: emailRef.current.value,
    };

    props.onUpdateUser(user);
  };

  return (
    <div className="new-user">
      <h2>Update User</h2>
      <form onSubmit={submitHandler}>
        <label>Name:</label>
        <input type="text" defaultValue={user.name} required ref={nameRef} />
        <label>Lastname:</label>
        <input
          type="text"
          defaultValue={user.lastname}
          required
          ref={lastNameRef}
        />
        <label>Date of Birth:</label>
        <input
          type="date"
          defaultValue={user.date_of_birth}
          required
          ref={dateofBirthRef}
        />
        <label>Phone:</label>
        <input type="text" defaultValue={user.phone} required ref={phoneRef} />
        <label>Email:</label>
        <input type="email" defaultValue={user.email} required ref={emailRef} />
        {!props.updateLoading && <button className='btn btn-lg'>Update User</button>}
        {props.updateLoading && (
          <button className="btn btn-lg btn-disabled" disabled>
            Loading ...
          </button>
        )}
        {props.updateError && <div>Error...</div>}
      </form>
    </div>
  );
};

export default UpdateUserForm;
