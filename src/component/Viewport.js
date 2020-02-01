import React from 'react';

const Viewport = (propV) => {
    return(
        <div className='vh-75 bt bb bw2 overflow-x-auto'>
            {propV.children} 
            {/* box component: use children to render*/}
        </div>
    )
}

export default Viewport;