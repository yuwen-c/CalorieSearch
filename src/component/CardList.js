import React from 'react';
import Card from './Card';


const CardList = ({foodP}) =>{
    // if(true){  //error test
    //     throw new Error('error test');
    // }
    return(
        <div>
            {
            foodP.map(food => {     
                return (            
                    <Card 
                    key={food.ndb_no}
                    shrt_desc={food.shrt_desc} 
                    energ_kcal={food.energ_kcal}
                    />
                )
                })
            }
        </div>
    );
}

export default CardList;