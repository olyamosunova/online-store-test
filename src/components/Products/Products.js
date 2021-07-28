import {useSelector} from "react-redux";
import {Container, Row, Col} from "react-bootstrap";
import Loader from "../Loader/Loader";
import ProductItem from "../ProductItem/ProductItem";

const Products = () => {
    const products = useSelector((state) => state.products);
    const categories = useSelector((state) => state.productCategories);

    console.log(categories);

    return (
        <Container className="py-5">
            <h1 className="mb-5">Products List</h1>

            <div>
                <div>
                    <p>Сортировка по:</p>

                    <button>цене</button>
                    <button>названию</button>
                </div>

                {categories && categories.length ?
                    <div>
                        <p>Категория товара:</p>

                        <select>
                            {categories.map(category => {
                                return (
                                    <option value={category} key={category}>{category}</option>
                                );
                            })}

                        </select>
                    </div>
                    : null
                }
            </div>

            {products && products.length ?
                <Row className="products">
                    {products.map(product => {
                        return (
                            <Col className="col-3 p-2" key={product.id}>
                                <ProductItem product={product} />
                            </Col>
                        );
                    })}
                </Row> :
                <Loader />
            }

        </Container>
    );
};

export default Products;
