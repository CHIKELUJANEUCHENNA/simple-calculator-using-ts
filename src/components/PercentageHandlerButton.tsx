import React, {FC} from 'react'

interface IPercentage {
    value: string;
    percentageFunction: () => void;
}

const PercentageHandlerButton:FC<IPercentage> = ({value, percentageFunction}) => {
    return (
        <>
            <button className="btn" onClick={percentageFunction}>
                {value}
            </button>
        </>
    )
}

export default PercentageHandlerButton; 
