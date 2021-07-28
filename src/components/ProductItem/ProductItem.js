import {Card, Badge, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./ProductItem.css";
import {Basket} from "react-bootstrap-icons";

const ProductItem = ({product}) => {
    const {id, title, description, price, image, category} = product;
    return (
        <div className="products__item">
            <Link to={`/products/${id}`} className="card">
                <Card.Img className="p-3" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>

                    <Badge className="mb-2" bg="secondary">{price} руб.</Badge>

                    <Button className="d-block" variant="primary"><Basket /></Button>

                </Card.Body>
            </Link>
        </div>
    );
};

export default ProductItem;
