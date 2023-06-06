import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Input";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    useEffect(validateFirstName, [firstName]);
    useEffect(validateLastName, [lastName]);
    useEffect(validateEmail, [email]);
    useEffect(validatePassword, [password]);
    useEffect(validateConfirmPassword, [confirmPassword, password]);

    function validateFirstName() {
        if (firstName.length > 0 && firstName.length < 2) {
            setFirstNameError("First Name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }

    function validateLastName() {
        if (lastName.length > 0 && lastName.length < 2) {
            setLastNameError("Last Name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }

    function validateEmail() {
        if (email.length > 0 && email.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    }

    function validatePassword() {
        if (password.length > 0 && password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }

    function validateConfirmPassword() {
        if (confirmPassword.length > 0 && confirmPassword !== password) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("");
        }
    }

    return (
        <div className="max-w-2xl grid mx-auto py-10">
            <Input
                name="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                error={firstNameError}
                label="First Name"
            />
            <Input
                name="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                error={lastNameError}
                label="Last Name"
            />
            <Input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                label="Email"
            />
            <Input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError}
                label="Password"
            />
            <Input
                name="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={confirmPasswordError}
                label="Confirm Password"
            />
        </div>
    );
}

export default App;
