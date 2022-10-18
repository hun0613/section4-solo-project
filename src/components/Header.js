import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width : 100vw;
    height : 10vh;

    position : fixed;

    display : flex;
    
    align-items : center;
    justify-content : left;
    .title {


        display : flex;
        flex-direction : column;

        justify-content : center;
        align-items : center;

        width : 120px;
        height : 30px;
        border-left : 5px solid #1372ff;
        border-right : 5px solid #1372ff;

        margin-bottom : 20px;
        margin-top : 20px;
        margin-left : 20px;
    
        h2 {
            font-size : 18px;
            color : #444444;
        }
    }
`

const Header = ({HeaderClick}) => {
    return (
        <Container>
            <Link to="/" style={{textDecoration : 'none'}}>
                <div className="title" onClick={HeaderClick}>
                    <h2>Todo List</h2>
                </div>
            </Link>
        </Container>
    )
}


export default Header;