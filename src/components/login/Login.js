import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import Profile from '../profile/Profile';
import Axios from 'axios'
import './login.css';


function App() {
    const [user, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { name, setName } = useContext(UserContext);

    const userLogin = () => {
        try {
            const result = Axios.post('http://localhost:3001/user/login', {
                username: user,
                password: password
            })
                .then((data) => {
                    if (data) {
                        const resultData = data.data;
                        setName(resultData.username);
                        alert('Login successfully')
                        
                    }


                })

            // 
            // 

            // 
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section >
            <div className="loginContainer">
                <div className='leftContainer'>
                    <div className='img'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
                    </div>
                </div>

                <div className='rightContainer'>
                    <div className="heading">
                        <h1 className="">Sign in</h1>
                    </div>
                    <div className='userDetails'>
                        <div className='userContainer '>
                            <label className='d-block'>Username</label>
                            <input label='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='passwordContainer'>
                            <label className='d-block'>Password</label>
                            <input label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='buttonContainer'>
                            <button onClick={userLogin}>Login</button>
                        </div>

                    </div>

                    <div className="forgotContainer">

                        <a href="!#">Forgot password?</a>
                    </div>

                    <div className='register'>
                        <p className="">Don't have an account? <a href="/Register" className="">Register</a></p>
                    </div>


                </div>
            </div>
        </section>

    );
}

export default App;