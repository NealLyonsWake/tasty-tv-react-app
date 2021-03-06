const handleWatchCall = async () => {

    const loggedIn = sessionStorage.getItem('loggedIn');

    if (loggedIn) {
        const endpoint = "https://tasty-tv-api.herokuapp.com/watch/requestwatchlist"
        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            withCredentials: true,

            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json'
            }
        };
        try {
            const res = await fetch(endpoint, requestOptions)
            const response = await res.json()
            return response
        }
        catch (e) {
            console.log(e, "Error connecting to server")
        }
    }
    else {
        return []
    }
}

export default handleWatchCall