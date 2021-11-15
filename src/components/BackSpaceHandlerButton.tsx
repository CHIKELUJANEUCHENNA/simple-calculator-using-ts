import React, {FC} from 'react'

interface IBackSpace {
    value: string;
    backSpaceFunction: () => void
}

const BackSpaceHandlerButton:FC<IBackSpace> = ({value, backSpaceFunction}) => {
    return (
        <>
            <button onClick={backSpaceFunction} className="btn">
                {value}
            </button>
        </>
    )
}

export default BackSpaceHandlerButton;
