import { Outlet, useNavigate } from 'react-router-dom';
import { config } from '../config';
const Layout = () => {
    return (
        <div>
            <ul>
                <li>phan</li>
                <li>cuong</li>
            </ul>
            <Outlet/>
        </div>
        
    )
}
export default Layout;