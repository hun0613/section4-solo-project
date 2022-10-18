import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
    width : 100vw;
    height : 90vh;

    /* background-color : #f1f1f1; */

    display : flex;
    flex-direction : column;

    justify-content : center;
    align-items : center;

    .title {
        display : flex;
        flex-direction : column;

        justify-content : center;
        align-items : center;

        width : 300px;
        height : 50px;
        border-left : 5px solid #1372ff;
        border-right : 5px solid #1372ff;

        margin-bottom : 20px;
    
        h2 {
            font-size : 50px;
            color : #444444;
        }
    }

    h3 {
        font-size : 20px;
        color : #707070;

    }
`

const titleAnimate={
    offscreen:{x:-100, opacity:0},
    onscreen:{
    x:0,
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:1}
  }

}

const subTitleAnimate={
    offscreen:{y:-100, opacity:0},
    onscreen:{
    y:0,
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:1,
    delay : 0.5
    }
  }

}

const MainPage = () => {
    return (
        <Container>
            <motion.div 
            variants={titleAnimate}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:false, amount:0.5}}
            transition={{staggerChildren:0.5}}
            className="title">
                <h2>Todo List</h2>
            </motion.div>
            <motion.h3
            variants={subTitleAnimate}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:false, amount:0.5}}
            transition={{staggerChildren:0.5}}
            >Have a nice day!</motion.h3>
        </Container>
    )

}

export default MainPage;