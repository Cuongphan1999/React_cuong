import { Link } from 'react-router-dom'
import routerWeb from '../routes/web'
const layout = () => {
    return (
        <div>
            <ul>
                <li><Link to={routerWeb.dictionary.about}> to about</Link></li>
                <li><Link to={routerWeb.dictionary.contact}>to contact</Link></li>
            </ul>
            <outlet/>
        </div>
    )
}
export default layout;