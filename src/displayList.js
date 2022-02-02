import Recat, {useState} from 'react'

const ListItems = ({data}) => {
    return(
        <div className='list'>
            {data.map(data => 
                
                <div className='child1'>
                    <img src={data.recipe.image}></img>

                    <div >
                        <h2 className='label'>{data.recipe.label}</h2>

                     <div className='child2'>
                       <h5>CuisineType: {data.recipe.cuisineType}</h5>
                       <h5>Calories: {Math.round(data.recipe.calories)}</h5>
                       <h5>DietLabels:  {data.recipe.dietLabels}</h5>  
                       {/* <button className='btn'>Order Now</button>   */}
                     </div>   
                        
                    </div>
                    
                </div>

                
                )}
        </div>
    )
}

export default ListItems