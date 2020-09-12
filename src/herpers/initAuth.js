
export function initAuth(props) {
    let token = localStorage.getItem("token")
    if (token) {
        let expirationDate = localStorage.getItem("expirationDate")
        let time = new Date().getTime()
        if (time > expirationDate) {
            console.log("token süresi geçmiş..")
            logout()
        }
        else {
            console.log("init calıştı else")
            let timerSecond = +expirationDate - time
            console.log(timerSecond)
            setTimeoutTimer(timerSecond)
            props.history.push("/")
        }
    }
    else {
        props.history.push("/auth")
        return false
    }
}

export const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("expirationDate")    
}
export const setTimeoutTimer = (expiresIn) => {
    setTimeout(() => {
        logout();
    }, expiresIn)
}

// export const setAuthorizationToken = (token) => {
//     if (token) {
//         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
//     }
//     else {
//         delete axios.defaults.headers.common["Authorization"];
//     }
// }
export const setLocalStorege = (response) => {
    localStorage.setItem("token", response.data.idToken)
    localStorage.setItem("expirationDate", new Date().getTime() + +response.data.expiresIn * 1000)
}