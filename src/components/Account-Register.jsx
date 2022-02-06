

function AccountRegister(props) {


    function handleChange(e) {
        props.event(e)
    }

    const subHeadingChange = (e) => {
        props.subHeading(e.target.name)
        e.preventDefault()
    }

    const resetCredentials = () => {
        props.reset()
    }

    const register = async (e) => {

    const endpoint = "http://localhost:4000/account/register"

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
        try{
            const res = await fetch(endpoint, requestOptions)
            const response = await res.json()
            console.log(response)       
        }
    
        catch (e) {
            console.log(e,  "Error connecting to server")
        }
        
        resetCredentials()
        
    }

    
 

    return (

        <div>
            <p>Welcome to Tasty TV, a social platform for movie fans.</p>
            <p>Discover our tasty random movie recommendations to review.</p>
            <p>Post your movie reviews to the community and start a conversation.</p>
            <p>Join in with other converstaions on your favourite movies.</p>
            <p>Most of all, enjoy!</p>
            <p><i>Tasty TV Dev Team</i></p>

            <form onSubmit={register}>
                <label for="username">Username:</label>
                <input type="textbox" name="username" onChange={handleChange} value={props.un}/>

                <label for="password">Password:</label>
                <input type="password" name="password" onChange={handleChange} value={props.pw}/>

                <input type="submit" value="Register" />
            </form>

            <p>Already registered?, <a href="/login" onClick={subHeadingChange} name='Sign in'>Sign in</a></p>
        </div>
    )
}

export default AccountRegister