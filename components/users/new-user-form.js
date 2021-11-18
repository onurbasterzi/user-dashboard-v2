import { useRef } from "react";


const NewUserForm = (props) => {
    console.log(props);


  const nameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const dateofBirthRef = useRef();
  const emailRef = useRef();

  const today = new Date().toISOString().split('T')[0]

  const submitHandler = (event) => {
    event.preventDefault();

    const user = {
      name: nameRef.current.value,
      lastname: lastNameRef.current.value,
      phone: phoneRef.current.value,
      date_of_birth: dateofBirthRef.current.value,
      email: emailRef.current.value,
    };

    props.onAddUser(user);
  };

  return (
    <div className="new-user">
      <h2>Add New User</h2>
      <form onSubmit={submitHandler}>
        <label>Name:</label>
        <input type="text" required ref={nameRef} />
        <label>Lastname:</label>
        <input type="text" required ref={lastNameRef} />
        <label>Date of Birth:</label>
        <input type="date" defaultValue={today} required ref={dateofBirthRef} />
        <label>Phone:</label>
        <input type="text" required ref={phoneRef} />
        <label>Email:</label>
        <input type="email" required ref={emailRef} />
        {!props.isLoading && <button className='btn btn-lg'>Add User</button>}
        {props.isLoading && <button className='btn btn-lg btn-disabled' disabled> Loading ...</button>}
      </form>
    </div>
  );
};

export default NewUserForm;
