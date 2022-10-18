import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";


const Container = styled.div`
    display : flex;
    flex-direction : row;

    justify-content : center;
    align-items : center;


    width : 100vw;
    height : 10vh;

    

    .tab-bar {
        width : 80%;
        height : 50px;

        display : flex;
        flex-direction : row;

        justify-content : space-around;
        align-items : center;

        border-radius : 30px;
        
        
        background-color : #1d1d1d;


        p {
            color : white;
            /* border : 3px solid red; */
            /* width : 300px; */
        }

    }
`

const Menu1 = styled.div`
    color : white;
    /* width : 300%; */
    flex-grow : 1;
    height : 100%;
    margin-left : 20px;

    border-right : 1px solid #505050;
    border-bottom : ${(props) => props.props === 'home' ? '5px solid #1372ff' : 'none'};

    display : flex;
    flex-direction : column;

    justify-content : center;
    align-items : center;

    h2 {
            font-size : 18px;
            color : white;
            

            /* border : 1px solid red; */
        }

`

const Menu2 = styled.div`
    color : white;
    flex-grow : 1;
    height : 100%;


    border-right : 1px solid #505050;
    border-bottom : ${(props) => props.props === 'todo' ? '5px solid #1372ff' : 'none'};

    display : flex;
    flex-direction : column;

    justify-content : center;
    align-items : center;
`

const Menu3 = styled.div`
    color : white;
    flex-grow : 1;
    height : 100%;


    border-bottom : ${(props) => props.props === 'inprogress' ? '5px solid #1372ff' : 'none'};
    border-right : 1px solid #505050;

    display : flex;
    flex-direction : column;

    justify-content : center;
    align-items : center;
`

const Menu4 = styled.div`
    color : white;
    flex-grow : 1;
    height : 100%;
    margin-right : 20px;

    border-bottom : ${(props) => props.props === 'done' ? '5px solid #1372ff' : 'none'};

    display : flex;
    flex-direction : column;

    justify-content : center;
    align-items : center;
`



const TabBar = ( ) => {

    const [underbar, setUnderbar] = useState('home');

    const handleClick = (menu) => {
        setUnderbar(menu);
    }

    return (
        <>

            <Container>
                <div className="tab-bar">
                    
                    <Menu1 onClick={() => handleClick('home')} props = {underbar}>
                        <Link to="/" style={{textDecoration : 'none'}}>
                        <div className="title">
                            <h2>Home</h2>
                        </div>
                        </Link>
                    </Menu1>
                    <Menu2 onClick={() => handleClick('todo')} props = {underbar}>
                        <Link to="/todo" style={{textDecoration : 'none'}}>
                            <p>Todo</p>  
                        </Link>
                    </Menu2>
                    <Menu3 onClick={() => handleClick('inprogress')} props = {underbar}>
                        <Link to="/inprogress" style={{textDecoration : 'none'}}>
                            <p>In Progress</p>  
                        </Link>
                    </Menu3>
                    <Menu4 onClick={() => handleClick('done')} props = {underbar}>
                        <Link to="/done" style={{textDecoration : 'none'}}>
                            <p>Done</p>  
                        </Link>
                    </Menu4>
                </div>

                
            </Container>
        </>
    )
}

export default TabBar;