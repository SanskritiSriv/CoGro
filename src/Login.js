import { useState } from 'react';
import Sidebar from './Components/Sidebar';
import { Link } from 'react-router-dom';

function Login() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    

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
                    <form id='form-login' className='form-main' onSubmit={handleSubmit}>
                        <h1>Login</h1>
                    
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
                        
                        <span className='regi-end-span'>
                            <button type="submit">Login</button><br />
                            <div className='alrdy-login'>Yet not registered? <Link className='login-switch-l' to={"/register"}>Hurry!.. Click here</Link></div>
                        </span>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Login;