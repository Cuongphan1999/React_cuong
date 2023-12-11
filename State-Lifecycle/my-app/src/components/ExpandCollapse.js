import { Component } from 'react';
import Content from './Content';
// export default class ContentMain extends Component {

//     constructor() {
//         super();
//         this.state = { isExpand: true }
//     }

//     render() {
//         if (!this.state.isExpand) {
//             return <Content onClick={(e) => this.setState({ isExpand: true })} label="Đóng giới thiệu" />
//         }
//         return (
//             <div className='container'>
//                 <button onClick={(e) => this.setState({ isExpand: false })}>Xem giới thiệu</button>
//             </div>
//         )
//     }
    
   
// }
//cach2:
export default class ContentMain extends Component {

    constructor() {
        super();
        this.state = { isExpand: false}
    }

    render() {
        if (this.state.isExpand) {
            return <Content onClick={(e) => this.setState({ isExpand: false })} label="Đóng giới thiệu" />
        }
        return (
            <div className='container'>
                <button onClick={(e) => this.setState({ isExpand: true })}>Xem giới thiệu</button>
            </div>
        )
    }
    
   
}