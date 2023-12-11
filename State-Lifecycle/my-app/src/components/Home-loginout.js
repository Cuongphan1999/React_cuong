import { Component } from 'react';
// cach1
import LogOut from './LogoutHome';
//cach2
//import LogIn from './Logout';
class Home extends Component {
    constructor (props) {
      super(props);
      this.state = {
        isLoggedIn: false
      };
    }
   
    handleLogIn = () => {
      this.setState({ isLoggedIn: true })
      console.log(this.state.isLoggedIn)
    }
   
    handleLogOut = () => {
      this.setState({ isLoggedIn: false }) //LOGOUT

    }
    
    render () {
      const { isLoggedIn } = this.state //LOGOUT false
      if (isLoggedIn) return (<LogOut onLogOut={this.handleLogOut} />)
      return (
        <div style={{textAlign: 'center'}}>
          <div>
              <h1>Please Log in</h1>
              <button onClick={this.handleLogIn}>Log in</button>
          
          </div>
        </div>
      )
    }
  }
export default Home;
//cach 2:

// export default class Home extends Component {
//     constructor() {
//         super();
//         this.state = { isLogined: true }
//     }

//     render() {
//         if (!this.state.isLogined) { //!` là toán tử phủ định, nghĩa là nó sẽ đảo ngược giá trị
//             return <LogIn onClick={(e) => this.setState({ isLogined: true })} label="Log in" />
//         }
//         return (
//             <div className='container'>
//                 <h1>Hello</h1>
//                 <button onClick={(e) => this.setState({ isLogined: false })}>Logout</button>
//             </div>
//         )
//     }
// }
