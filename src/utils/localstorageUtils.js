export const setToken = (token) => {
    if (typeof window !== undefined) {
        localStorage.setItem('token', token)
    }
}
export const getToken = () => {
    let token ;
    if (typeof window !== undefined) {
        token = localStorage.getItem('token')
    }
    return token ? token : false
}

export const setUser = (user) => {
    if(typeof window !== undefined){
        localStorage.setItem('user',JSON.stringify(user))
    }
}

export const setRole = (role) => {
    if(typeof window !== undefined){
        localStorage.setItem('role',role)
    }
}

export const getRole = () => {
    let role;
    if(typeof window !== undefined){
     role =  localStorage.getItem('role');
    }
    return role ? role : false;
}

export const getUser = () => {

    let user;
    if(typeof window !== undefined){
        user = localStorage.getItem('user')  
        
    }
   return user;
}