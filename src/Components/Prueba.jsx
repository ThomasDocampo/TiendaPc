import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const ItemDetail = () => {
const {id} = useParams();
console.log("Id de useParams", id);
    return(
        
       <Link to="/">que onda prro {id} </Link>
    );
}
export default ItemDetail;