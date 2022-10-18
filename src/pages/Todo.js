import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import axios from 'axios';
// import initialData from '../../data/data.json';

import CreateModal from "../components/CreateModal";


const Container = styled.div`
    width : 100vw;
    height : 90vh;

    display : flex;
    justify-content : center;
    align-items : center;

    .main-area {
        width : 80%;
        height : 90%;
        margin-top : 40px;
        background-color : #f5f5f5;
        border-radius : 30px;

        display : flex;
        flex-direction : column;
        justify-content : top;
        align-items : center;

        .title {
            margin-top : 20px;
            font-weight : 700;
            font-size : 30px;
            color : #494949;
        }

        .content-Container {
            display : flex;
            flex-direction : row;
            justify-content : center;
            align-items : center;

            /* border : 3px solid red; */
            width : 80%;
            height : 80%;
            margin-top : 15px;

            .content {
                width : 30%;
                height : 300px;

                /* border : 1px solid blue; */

                display : flex;
                flex-direction : column;
                align-items : center;

                margin-left: 10px;
                margin-right : 10px;

                box-shadow : 3px 3px 10px #bbbbbb;

                .content-title {
                    /* border : 1px solid red; */
                    width : 100%;
                    height : 50px;

                    display : flex;
                    justify-content : center;
                    align-items : center;

                    color : white;
                    font-size : 15px;
                    background: linear-gradient(18deg, rgba(0,146,201,1) 0%, rgba(152,152,152,1) 100%);
                }

                .content-description {
                    width : 100%;
                    height : 180px;

                    display : flex;
                    justify-content : center;
                    align-items : center;
                }

                #select-box {
                    width : 50%;
                    height : 30px;
                    text-align : center;

                    border : none;
                    box-shadow : 3px 3px 5px #97c1ff;
                }

                .etc {
                    width : 100%;
                    min-height : 20px;
                    /* height : auto; */
                    margin-top : 20px;

                    display : flex;
                    justify-content : center;
                    align-items : center;

                    background: linear-gradient(90deg, rgba(255,121,121,1) 0%, rgba(255,0,0,1) 100%);

                    transition : .3s ease;
                
                    cursor: pointer;
                
                    > p {
                        color : white;
                        font-size : 4px;
                    }

                    .option-btn {
                        border : none;
                        border-radius : 30px;
                        width : 50px;
                        height : 20px;
                        margin : 10px;
                        color : white;
                        /* font-weight : 900; */
                        font-size : 12px;
                        background-color : transparent;

                        box-shadow : 1px 1px 5px white;
                        /* background: linear-gradient(180deg, rgba(52,52,52,1) 0%, rgba(54,54,54,1) 100%); */

                        cursor: pointer;
                    }
                }

                

            }
        }

        .createTodo {
            width : 30%;
            height : 40px;

            border : 3px solid #1372ff;
            border-radius : 30px;

            background-color : white;

            margin-bottom : 30px;

            font-weight : 700;
            color : #464646;

            font-size : 15px;

            cursor: pointer;

            box-shadow : 3px 3px 10px #adadad;

        }
    }
            
`

const Todo = () => {

    const [option, setOption] = useState(false);
    const [list, setList] = useState('');
    const [status, setStatus] = useState('todo');

    const [modal, setModal] = useState(false);

    
    useEffect(()=> {
        axios('http://localhost:3001/list?status=todo')
        .then((res) => setList(res.data))
        .catch((err) => console.log(err));
    },[])

    console.log(list)

    // axios('http://localhost:3001/list')
    // .then((res) => setList(res.data))



    const handleOptionClick = (id) => {
        if (option){
            // heightRef.current.style.height = 20 + 'px';
            setOption(false);
        }else{
            // heightRef.current.style.height = 50 + 'px';
            setOption(id);
        }
    }

    const handleClick = () => {
        console.log('active');
    }

    const handleCreate = () => {
        setModal(!modal);
    }


    return (
        <>
        <Container>
            <div className="main-area">
                <div className="title">Todo</div>
                <div className="content-Container">
                    
                    {list && list.map(el => {
                        return (
                            <div className="content">
                                <div className="content-title">
                                    {el.title}
                                </div>
                                <div className="content-description">
                                    {el.body}
                                </div>
                                <select name="status" id="select-box" defaultValue={el.status}>
                                    <option value="todo">Todo</option>
                                    <option value="inprogress">In progress</option>
                                    <option value="done">Done</option>
                                </select>
            
                                <div className="etc" onClick={() => handleOptionClick(el.id)}>
                                    {option === el.id? 
                                    <div className="option-icons">
                                        <button className = "option-btn" onClick={handleClick}>수정</button>
                                        <button className = "option-btn" onClick={handleClick}>삭제</button>
                                    </div> 
                                    : <p>option</p>}
                                    
                                </div>

                            </div>

                        )
                    })}

                </div>
                <button className="createTodo" onClick={handleCreate}>Todo 생성하기</button>
                {modal && <CreateModal handleCreate = {handleCreate}/> }
            </div>
        </Container>
        </>
    )
}

export default Todo;