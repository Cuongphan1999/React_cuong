import { useParams } from "react-router-dom";

function Product() {
    let { params } = useParams();
    return (
        <div>
            <p>id selected: {params.Product}{params.categoryID}</p>
        </div>
    )
  }
  export default Product;