import React, { Fragment } from 'react';

const Button = ({onClickP}) => {
    return(
        <Fragment>
            <input className='f5 link dim ph3 pv2 mb2 dib white bg-light-purple b--black-20 ' 
            type='submit' 
            value='send' 
            onClick={onClickP}/>
        </Fragment>
    )
}

export default Button;