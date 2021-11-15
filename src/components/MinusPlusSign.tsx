import React, {FC} from 'react'

interface IMinusPlus {
    value: string;
    minusPlusFunction: () => void;
}

const MinusPlusSign: FC<IMinusPlus> = ({value, minusPlusFunction}) => {
    return (
        <>
            <button className="btn" onClick={minusPlusFunction}>
                {value}
            </button>
        </>
    )
}

export default MinusPlusSign; 
