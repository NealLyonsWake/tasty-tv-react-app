import Cookies from 'universal-cookie'

const checkLogin = async (token, user) => {

    //     const requestOption = {
    //     method: 'GET',
    //     credentials: 'include'
    // }

    try {
        const res = await fetch('https://tasty-tv-api.herokuapp.com/account/welcome', requestOption)
        const response = await res.json()
        setLoggedIn(response.loggedIn)


        // const cookies = new Cookies()
        // cookies.set('token', token, {
        //     httpOnly: true,
        //     path: '/',
        //     secure: true,
        //     sameSite: "none",
        //     expires: new Date(new Date().getTime() + 60 * 1000)
        // })
        // cookies.set('user', user, {
        //     httpOnly: true,
        //     path: '/',
        //     secure: true,
        //     sameSite: "none",
        //     expires: new Date(new Date().getTime() + 60 * 1000)
        // })
 

        // console.log(cookies)

        // const cookieCheck = () => {
            let data = {}
            if (response.loggedIn) {                
                // Save data to sessionStorage
                sessionStorage.setItem('loggedIn', true);
                data = {
                    loggedIn: true,
                    user: response.user
                }
                // console.log(data)
                return data
            }
            else {
                // clear session storage
                sessionStorage.clear();
                data = {
                    user: '',
                    watchList: []
                }
                // console.log(data)
            }
            // setTimeout(() => {
            //     cookieCheck()
            // }, 1000)
            console.log(data)
            return data
        }
        // cookieCheck()
    // }
    catch (err) {
        console.log('Error', err)
    }
}


export default checkLogin