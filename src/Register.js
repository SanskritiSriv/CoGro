import { useState } from 'react';
import Sidebar from './Components/Sidebar';
import { Link } from 'react-router-dom';

function Register() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [instagram, setInstagram] = useState("");
    const [mobile, setMobile] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [interests,setInterests] = useState("");
    function validateForm() {

        //checking if the value is entered
        if (firstname.length == 0) {
            alert('Invalid Form, please enter First Name')
            return
        }
        if (lastname.length == 0) {
            alert('Invalid Form, please enter Last Name')
            return
        }
        if (email.length == 0) {
            alert('Invalid Form, please enter Email Address')
            return
        }
        if (password.length < 8) {
            alert('Invalid Form, Password must contain at least 8 digits')
            return
        }

        //count each type of characters
        let cUpper = 0;
        let cLower = 0;
        let cDigits = 0;
        let cSpecial = 0;

        for (let i = 0; i < password.length; i++) {
            const sChars = [
                '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', '{', ']', '}', ':', ';', '<', '>',
            ]

            if (sChars.includes(password[i])) {
                cSpecial++
            }
            else if (!isNaN(password[i] * 1)) {
                cDigits++
            }
            else {
                if (password[i] == password[i].toUpperCase())
                    cUpper++
                if (password[i] == password[i].toLowerCase())
                    cLower++
            }
        }

        if (cUpper == 0) {
            alert("Invalid Form, lower case bhi dalo na bhai")
            return
        }
        if (cLower == 0) {
            alert("Invalid Form, lower case bhi dalo na bhai")
            return
        }
        if (cSpecial == 0) {
            alert("Invalid Form, lower case bhi dalo na bhai")
            return
        }
        if (cDigits == 0) {
            alert("Invalid Form, lower case bhi dalo na bhai")
            return
        }

        alert("VALID")
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        alert('User registered successfully');
    };

    return (
        <div className="reg">
            <Sidebar />
            <div className='app regi'>
                <div className='form'>
                    <div className='regi-image'></div>
                    <form className='form-main' onSubmit={handleSubmit}>
                        <h1>Registration</h1>
                        <input
                            type="text"
                            name="fname"
                            placeholder="First name"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            name="lname"
                            placeholder="Last name"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        /><input
                            type="text"
                            name="instagram"
                            placeholder="Instagram Handle"
                            value={instagram}
                            onChange={(e) => setInstagram(e.target.value)}
                            required
                        />
                        <input
                            type="text-area"
                            name="interests"
                            placeholder="Your Description in around 100 words"
                            value={interests}
                            onChange={(e) => setInterests(e.target.value)}
                            required
                        />
                        <span className='regi-end-span'>
                            <button type="submit">Register</button><br />
                            <div className='alrdy-login'>Already in? <Link className='login-switch-l' to={"/login"}>Then Login</Link></div>
                        </span>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Register;