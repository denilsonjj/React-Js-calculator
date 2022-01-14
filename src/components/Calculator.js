import React, { useState } from "react";
import "./Calculator.css"
import Container from '@mui/material/Container';
import { Box } from "@mui/system";



export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e) {
        var input = e.target.id
        setNum(num + input);
        if (num === 0) {
            setNum(input);
        } else {
            setNum(num + input)
        }
    }


    function clear() {
        setNum(0);
    }

    function porcentage() {
        setNum(num / 100);
    }

    function changeSign() {
        if (num > 0) {
            setNum(-num);
        }
        else {
            setNum(Math.abs(num));
        }
    }
    function operatorHandler(e) {
        var operatorInput = e.target.id
        setOperator(operatorInput)
        setOldNum(num)
        setNum(0)
    }

    function calculate() {
        if(operator==="/") {
              setNum(parseFloat(oldNum)/ parseFloat(num))
        } else if(operator==="x"){
              setNum(parseFloat(oldNum) * parseFloat(num))
        } else if(operator==="-"){
              setNum(parseFloat(oldNum)- parseFloat(num))   
        }else if(operator==="+"){
               setNum(parseFloat(oldNum)+ parseFloat(num));
            
        }
    }



    return (
        <div>
            <Box m={5} />
            <Container maxWidth='xs'>
                <div className="wrapper">
                    <Box m={12} />
                    <h1 className="result">{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={porcentage}>%</button>
                    <button className="orange" onClick={operatorHandler} id="/">/</button>
                    <button className="gray" onClick={inputNum} id="7">7</button>
                    <button className="gray" onClick={inputNum} id="8">8</button>
                    <button className="gray" onClick={inputNum} id="9">9</button>
                    <button className="orange" onClick={operatorHandler} id="x">X</button>
                    <button className="gray" onClick={inputNum} id="4" >4</button>
                    <button className="gray" onClick={inputNum} id="5" >5</button>
                    <button className="gray" onClick={inputNum} id="6"> 6</button>
                    <button className="orange" onClick={operatorHandler} id="-">-</button>
                    <button className="gray" onClick={inputNum} id="1">1</button>
                    <button className="gray" onClick={inputNum} id="2">2</button>
                    <button className="gray" onClick={inputNum} id="3">3</button>
                    <button className="orange" onClick={operatorHandler} id="+">+</button>
                    <button className="gray" onClick={inputNum} id="0">0</button>
                    <button className="gray" onClick={inputNum} id=".">,</button>
                    <button className="gray" style={{ visibility: "hidden" }}>,</button> {/*escondeu a "," */}
                    <button className="orange" onClick={calculate} id="=">=</button>


                </div>
            </Container>
        </div>
    )
    }

