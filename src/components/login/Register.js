import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './register.css'

function Register() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isRegister, setIsRegister] = useState('')
    // const [existUser, setExistUser] = useState([])


    // match from existing user
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //           const result = await Axios.get('http://localhost:3001/matchUser');
    //           setExistUser(result.data);
    //         } catch (error) {
    //           console.error('Error fetching data:', error);
    //         }
    //       };

    //      console.log(fetchData()) ; 
    // }, [setExistUser])

    // console.log(existUser)



    // register
    const Register = async () => {
        try {
            const result = await Axios.post('http://localhost:3001/register', {
                name: name,
                username: username,
                password: password
            })
            const data = result // Extract response data from the Axios result
            console.log(data);
            if (result) {
                setIsRegister('Register successfully')
                setTimeout(() => {
                    window.location.replace('/login')
                }, 3000)

            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='RegisterBox' >
            <div>

                <h3>{isRegister}</h3>
            </div>
            <div className='inputBox'> 
                <div className='passwordContainer'>
                    <label>Name</label>
                    <input type='text' onChange={(val) => setName(val.target.value)} />
                </div>
                <div className='passwordContainer' >
                    <label>Username</label>
                    <input type='text' onChange={(val) => setUsername(val.target.value)} />
                </div>
                <div className='passwordContainer' >
                    <label>Password</label>
                    <input type='text' onChange={(val) => setPassword(val.target.value)} />
                </div>
                <div className='buttonContainer'>
                    <button onClick={Register}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Register
