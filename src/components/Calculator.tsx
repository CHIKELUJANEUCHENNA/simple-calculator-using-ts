import React, {FC} from 'react'
import { useState, useRef, useEffect } from 'react'
import MinusPlusSign from './MinusPlusSign'
import PercentageHandlerButton from './PercentageHandlerButton';
import ResultHandlerButton from './ResultHandlerButton';
import ClearHandlerButton from './ClearHandlerButton';
import BackSpaceHandlerButton from './BackSpaceHandlerButton';
import ButtonPads from './ButtonPads'

const Calculator:FC = () => {


    const buttons = ["+/-", "/", "%", "=", "9", "AC", "C", "+", "6", "7", "8", "*", "3", "4", "5", "-", "0", "1", "2", "."];

    const [result, setResult] = useState<string>("");
    const inputRef = useRef<string|any>('');
    useEffect(() => inputRef.current.focus());

    const clickHandler = (value:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        
        const myValue = value.target as HTMLElement
        console.log(myValue.innerText)
        setResult (result.concat(myValue.innerText));
    }

    const clearHandler = () => {
        setResult('');
    };

    const backspaceHandler = () => {
        setResult(result.slice(0, -1));
    }

    const resultHandler = () => {
        // eslint-disable-next-line
        setResult(eval(result).toString());
    }
    const percentageHandler = () => {
        setResult(String(parseFloat(result) / 100))
    }

    const minusPlus =()=>{
        const tracker = result.charAt(0);
        if (tracker!== '-'){
            setResult((prev) => "-" + prev )
        }else{
            setResult(result.substring(1))
        }
    }


    const button = buttons.map((item, index) => {
        if(item === "+/-") {
            return <MinusPlusSign key={index} value={item} minusPlusFunction={minusPlus}/>
        } else if (item === "%") {
            return <PercentageHandlerButton key={index} value={item} percentageFunction={percentageHandler}/>
        } else if (item === "AC") {
            return <ClearHandlerButton key={index} value={item} clearFunction={clearHandler}/>
        } else if (item === "C") {
            return <BackSpaceHandlerButton key={index} value={item} backSpaceFunction={backspaceHandler}/>
        } else if (item === "=") {
            return <ResultHandlerButton key={index} value={item} resultFunction={resultHandler}/> 
        } else {
            return <ButtonPads key={index} value={item} clickHandler={clickHandler} />
        };
    });

    return (
        <div className="main-container"> 
           <div className="display-field">
               <form>
                   <input 
                   type="text" 
                   className="input-field" 
                   value={result}
                   ref={inputRef}
                   ></input>
               </form>
           </div> 
           <div className="buttons-container color">
               {button}
           </div>
        </div>
    )
}
export default Calculator