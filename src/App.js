import React, {useState} from 'react'
import './App.css';
import ListItems from './displayList'


function App() {
  const [search, setSearch] = useState(' ');
  const [data, setData] = useState([])

  
  const listNumbers = [1,2,3,4,5,6,7,8]
  function submitHandler(e) {
    e.preventDefault()
    // console.log(search)
    const YOUR_APP_ID = "a293352b";
    const YOUR_APP_KEY ="9bc036c37df2a0dea0509bbf5978b661";
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=25`)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setData(data.hits))

    
    
}
  
  return (
    <div>
      <div className="main">
       <h1 className='heading'>Foodie Adda</h1>
      </div>
        <div className='navbar'>
          <form onSubmit={submitHandler} className='inputfield' >
            <input type='text' className='inputtext' value= {search} onChange={(e) => setSearch(e.target.value)} ></input>
            <input type='submit' className='search' value='Search'></input>
          </form>
       </div>
       <div>
       <ListItems key={listNumbers} data={data}/>
       </div>
    </div>
  );
}

export default App;
