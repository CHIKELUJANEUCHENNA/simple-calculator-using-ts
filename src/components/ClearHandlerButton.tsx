import React, {FC} from 'react'
import { IClearHandler,  } from '../interfaces/ButtonPads'

// interface IClearHandler {
//     value: string;
//     clearFunction: () => void;
// }

const ClearHandlerButton:FC<IClearHandler> = ({value, clearFunction}) => {
    return (
        <>
            <button className="btn" onClick={clearFunction}>
                {value}
            </button>
        </>
    )
}

export default ClearHandlerButton
