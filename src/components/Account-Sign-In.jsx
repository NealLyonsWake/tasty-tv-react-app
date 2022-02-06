import React from 'react'

function AccountSignIn(props) {

    function handleChange(e) {
        props.event(e)
    }

    const subHeadingChange = (e) => {
        props.subHeading(e.target.name)
        e.preventDefault()
    }

    function handleLogin(loggedIn, user) {
        props.handleLogin(loggedIn, user)
    }

    const resetCredentials = () => {
        props.reset()
    }

    const login = async (e) => {

        const endpoint = "http://localhost:4000/account/login"

        e.preventDefault()

        const requestOptions = {
            method: 'POST',
            credentials: 'include',
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
            console.log(response, "HELLO")
            handleLogin(response.loggedIn, response.user)
        }

        catch (e) {
            console.log(e, "Error connecting to server")
        }
        resetCredentials()
    }




    return (
        <div>

            <p>Welcome back.</p>

            <form name="Welcome" onSubmit={login}>
                <label for="username">Username:</label>
                <input type="textbox" name="username" onChange={handleChange} value={props.un}/>

                <label for="password">Password:</label>
                <input type="password" name="password" onChange={handleChange} value={props.pw} />

                <input type="submit" value="Sign In" />
            </form>

            <p>Not registered?, <a href="/register" onClick={subHeadingChange} name="Sign up to enjoy!">Sign up</a></p>
        </div>
    )
}

export default AccountSignIn