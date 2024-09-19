import "./RagistrationFrom.css";
import { useState } from "react";

export const RegistrationFormReact = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user); 
    };

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="First">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>

                    <div className="MainDiv">
                        <label htmlFor="firstName">
                            <b>First Name</b>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={user.firstName}
                            onChange={handleInputChange}
                            placeholder="Enter first name"
                            required
                        /><br />

                        <label htmlFor="lastName">
                            <b>Last Name</b>
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleInputChange}
                            placeholder="Enter last name"
                            required
                        /><br />

                        <label htmlFor="email">
                            <b>Email</b>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                            placeholder="Enter email"
                            required
                        /><br />

                        <label htmlFor="password">
                            <b>Password</b>
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleInputChange}
                            placeholder="Enter password"
                            required
                        /><br />

                        <label htmlFor="phoneNumber">
                            <b>Phone Number</b>
                        </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={user.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="9876543210"
                            required
                        />
                    </div>
                    <p>
                        By creating an account you agree to our
                        <a href="#" style={{ color: "dodgerblue" }}>
                            Terms & Privacy
                        </a>
                    </p>
                    <div className="ButtonDiv">
                        <button type="submit">Sign Up</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default RegistrationFormReact;
