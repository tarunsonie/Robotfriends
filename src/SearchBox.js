import React from 'react';

const SearchBox = ({searchfield, searchchange}) => {
	return (
		<div className='pa2'>
			<input className='pa2 ba bg b--green bg-lightest-blue'
			       type='Search'  
			       placeholder='search robots' 
			       onChange= { searchchange } 
			       />

		</div>	
	);		
}

export default SearchBox;