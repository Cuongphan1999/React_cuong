const userService = {

    storeUser: (user) => {
      localStorage.setItem('currentUser', JSON.stringify(user));
    },
  
    getUser: () => {
      return JSON.parse(localStorage.getItem('currentUser'))
    }
  
  }
  
  export default userService