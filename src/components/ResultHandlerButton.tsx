import React, {FC} from 'react'

interface IResultHandler {
    value: string;
    resultFunction: () => void;
}

const ResultHandlerButton: FC<IResultHandler> = ({value, resultFunction}) => {
    return (
        <>
            <button className="btn" onClick={resultFunction}> 
                {value}
            </button>
        </>
    )
}

export default ResultHandlerButton; 
