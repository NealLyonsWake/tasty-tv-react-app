import Cookies from 'universal-cookie'

const checkLogin = async () => {

    //     const requestOption = {
    //     method: 'GET',
    //     credentials: 'include'
    // }

    try {
        // const res = await fetch('https://tasty-tv-api.herokuapp.com/account/welcome', requestOption)
        // const response = await res.json()
            // setLoggedIn(response.loggedIn)

            const cookie = Cookies()


            if (cookie.token) {
                
                // Save data to sessionStorage
                sessionStorage.setItem('loggedIn', true);
                const data = {
                    loggedIn: true,
                    user: cookie.token
                }
              
                // console.log(data)
                return data

            }
            else {
                // clear session storage
                sessionStorage.clear();

                const data = {
                    user: '',
                    watchList: []
                }
                // console.log(data)
                return data
            }
        
    }
    catch (err) {
        console.log('Error', err)
    }
}


export default checkLogin