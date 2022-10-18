import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
    position : fixed;
    top : 200px;
    bottom : 300px;
    width : 80vw;
    height : 40vh;

    background-color : rgba(255,255,255,0.95);
    box-shadow : 3px 3px 10px #999999;
`


const CreateModal = ({handleCreate}) => {
    return (
        <>
        <Container>
            <button className="close-btn" onClick={handleCreate}>X</button>
        </Container>
        </>
    )   
}

export default CreateModal;