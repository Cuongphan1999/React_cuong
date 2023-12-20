import { useNavigate } from "react-router-dom";

function Category() {
    let navigate = useNavigate();
    const sendDataToProduct = event => {
        navigate(`/${event.target.value}`);
    }
    return (
        <div>
            <h2>Select a Category:</h2>
            <select defaultValue="default" onChange={e => sendDataToProduct(e)}>
                <option value='default' disabled hidden>
                    choose your Car
                </option>
                <option value="1">Honda</option>
                <option value="2">Yamaha</option>
            </select>
        </div>
    );
  }
  export default Category;