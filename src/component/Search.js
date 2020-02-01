import React from 'react';

const Search = ({onChangeP, onKeyDownP}) => {
    return(
        <div className='pb3 tc'>
            <input 
            className='pa2' 
            type='text' 
            placeholder='Search food' 
            name='food'
            onChange={onChangeP}
            onKeyUp={onKeyDownP}/>
        </div>
    )
}

export default Search;