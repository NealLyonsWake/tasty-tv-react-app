import React from 'react'

function AccountProfile(props) {

    const signOut = async () => {

        const requestOption = {
            method: 'GET',
            credentials: 'include'
          }

        try {
            await fetch('http://localhost:4000/account/signout', requestOption).then(async (res) => {
                const response = await res.json()
                console.log(response.message)
                

            })
        }
        catch (err) {
            console.log('Error', err)
        }
    }



return (
    <div>
        <h3>{`Hello ${props.user}`}</h3>
        <p>Logged In</p>
        <button onClick={signOut}>Sign out</button>
    </div>
)
}

export default AccountProfile