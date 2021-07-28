import {useSelector, useDispatch} from "react-redux";
import {Container} from "react-bootstrap";
import {addArticle} from "../../actions";

function Main() {
    const dispatch = useDispatch();
    dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );
    const articles = useSelector((state) => state.articles);

    console.log(articles);

    return (
        <Container>
            Hello
        </Container>
    );
}

export default Main;
