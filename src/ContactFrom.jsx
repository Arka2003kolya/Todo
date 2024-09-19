import { useState } from "react";

const ContactFrom = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFromSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <>
      <form onSubmit={handleFromSubmit}>
        <div>
          <h1> Contact From </h1>
          <div>
            <label htmlFor="username">
              <b>User Name</b>
            </label>
            <input
              type="text"
              name="username"
              value={user.username}
              autoComplete="off"
              onChange={handleChange}
            />
            <br />

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              autoComplete="off"
              onChange={handleChange}
            />

            <label htmlFor="message">
              <p>Message</p>
            </label>
            <input
              type="text"
              name="message"
              value={user.message}
              autoComplete="off"
              onChange={handleChange}
            />
            <br />

            <button type="submit">
              <b>Sent Message</b>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactFrom;
