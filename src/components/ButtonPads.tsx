import React, {FC, Fragment} from 'react'
import IButton from '../interfaces/ButtonPads'



const ButtonPads:FC<IButton>=({clickHandler, value}):JSX.Element=> {
    return (
        <Fragment>
            <button className="btn" value={value} onClick={clickHandler}>
                {value}
            </button>
        </Fragment>
    )
}

export default ButtonPads
