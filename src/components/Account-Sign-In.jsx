import React, { useState } from 'react'
// import Cookies from 'universal-cookie'
// const { serialize } = require('cookie')


function AccountSignIn(props) {
    const [status, setStatus] = useState('')

    function handleChange(e) {
        props.event(e)
    }

    const subHeadingChange = (e) => {
        props.subHeading(e.target.name)
        e.preventDefault()
    }

    function handleLogin(loggedIn, user, token) {
        props.handleLogin(loggedIn, user, token)
    }

    const resetCredentials = () => {
        props.reset()
    }

    const login = async (e) => {

        const endpoint = "https://tasty-tv-api.herokuapp.com/account/login"

        e.preventDefault()

        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            withCredentials: true,

            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: props.un,
                password: props.pw
            })
        };
        try {
            const res = await fetch(endpoint, requestOptions)
            const response = await res.json()
            console.log(response, "It's Me!")


            if (!response.token) {
                setStatus(response.message)
            }
            else {
            //     const cookies = new Cookies()
            //     cookies.set('token', response.token, {
            //         // httpOnly: true,
            //         path: '/',
            //         secure: true,
            //         // sameSite: "none",
            //         expires: new Date(new Date().getTime() + 60 * 60 * 1000)
            //     })
            //     cookies.set('user', response.user, {
            //         // httpOnly: true,
            //         path: '/',
            //         secure: true,
            //         // sameSite: "none",
            //         expires: new Date(new Date().getTime() + 60 * 60 * 1000)
            //     })

            //     console.log(cookies)
           
                setStatus('')
                
                handleLogin(response.token ? true : false, props.un, response.token)

            }
            
        }

        catch (e) {
            console.log(e)
        }
        resetCredentials()
    }




    return (
        <div >

            <p>Welcome back.</p>

            <p><em><b>{status}</b></em></p>

            <form name="Welcome" onSubmit={login}>
                <div className="account-form-section">
                    <label for="username">Username:</label>
                    <input className="account-input" type="textbox" name="username" onChange={handleChange} value={props.un} />
                </div>
                <div className="account-form-section">
                    <label for="password">Password:</label>
                    <input className="account-input" type="password" name="password" onChange={handleChange} value={props.pw} />
                </div>
                <button className="account-button">Sign In</button>

            </form>

            <h4>Not registered?, <a href="/register" onClick={subHeadingChange} name="Sign up to enjoy!">Sign up</a></h4>
        </div>
    )
}

export default AccountSignIn