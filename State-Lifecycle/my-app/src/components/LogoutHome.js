import React from 'react';
class LogOut extends React.Component {
    render () {
        return (
          <div style={{textAlign: 'center'}}>
            <div>
                <h1>Welcome</h1>
                <button onClick={this.props.onLogOut}>Log out</button>
            </div>
          </div>
        )
      }
    }

export default LogOut;
// import React from 'react';
// class LogIn extends React.Component {
//     constructor(props) {
//         super();
//     }
//     render () {
//         return (
//             <div style={{textAlign: 'center'}}>
//             <h1>Welcome cuong</h1>
//             <button onClick={this.props.onLogIn}>{this.props.label}</button>
//         </div>
//         )
//     }
// }
// export default LogIn;
