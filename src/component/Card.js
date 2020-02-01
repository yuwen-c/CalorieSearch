import React from 'react';

const Card = ({shrt_desc, energ_kcal}) => {
    //const {shrt_desc, energ_kcal}=foodP;
    return(

		<div className = 'tc bg-lightest-blue dib br3 pa3 ma2 grow ba shadow-5 hidden'>
		 	<article className="center mw5 mw6-ns hidden ba mv4">
				<h2 className = 'f4 bg-silver mv0 pv2 ph3'>{shrt_desc}</h2>
				<div>
					<p>{energ_kcal} Kcal/ 100g</p>
				</div>
			</article>	
		</div>
    )
}

export default Card;


