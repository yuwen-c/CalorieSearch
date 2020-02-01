import React from 'react';
import CardList from '../component/CardList.js';
import Search from '../component/Search.js';
import Button from '../component/Button.js';
import Viewport from '../component/Viewport.js';
import Boundary from '../component/Boundary.js';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      foods: [],
      SearchField: ''
    }
  }
// listen to the changes of searchbox. 
  keyInFood = (event) => {
    //this.setState({SearchField: event.target.value}, () => console.log('keyInFood', this.state.SearchField));
    this.setState({SearchField: event.target.value});
    // this.setState is async function, to console the right value, we need to use callback syntax.
    }

  // fetch的function, use this api: "https://rapidapi.com/kenpi04/api/food-calorie-data-search"
  funFetch = () => {
    const foodWanted = this.state.SearchField;
    const url = 'https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=' + foodWanted;
    fetch(url, 
      {
      "method": "GET",
      "headers": {
                    "x-rapidapi-host": "food-calorie-data-search.p.rapidapi.com",
                    "x-rapidapi-key": "2da75ce1cfmsh26fa14825a18dd4p16d23bjsn59e64460077f"
                  }
      }
    )
    .then(response => {
      return response.json()
    })
    .then(result => {
      this.setState({foods: result})
    })
    .catch(err => {
      console.log(err);
    });  
  }

// CLICK button and SEARCH(do fetch)
  btnSearchFood = () => {
    console.log('btnOK', this.state.SearchField);
    this.funFetch();  
  }

// if user instead of clicking the button, presses enter => fetch the keyword
  enterSearchFood = (event) => {
    if(event.keyCode===13){
      console.log('enterSearchFood', event.keyCode, this.state.SearchField);
      this.funFetch();  
    }
  }

// Render from the beginning, loading page with "apple" fetch  
  componentDidMount(){
    fetch("https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=apple", 
          {
	        "method": "GET",
	        "headers": {
		                    "x-rapidapi-host": "food-calorie-data-search.p.rapidapi.com",
		                    "x-rapidapi-key": "2da75ce1cfmsh26fa14825a18dd4p16d23bjsn59e64460077f"
	                    }
          }
    )
    .then(response => {
	    return response.json()
    })
    .then(result => {
      this.setState({foods: result})
    })
    .catch(err => {
    	console.log(err);
    });
  }

  render(){
    if(this.state.foods.length === 0){
      return(
        <div className='tc'>
          <h1>Calorie Search</h1>
          <h2>Loading...</h2>
        </div>
      )
    }
    else{
    // compare [] with keyword of searchField
    const comparedFoods = this.state.foods.filter(food => {
      return food.shrt_desc.toLowerCase().includes(this.state.SearchField.toLowerCase())
    });


    return(
      <div className='tc'>
        <div >
            <h1>Calorie Search</h1>
            <Search onChangeP={this.keyInFood} onKeyDownP={this.enterSearchFood}/>
            <Button onClickP={this.btnSearchFood}/>
        </div>
          <Viewport>
            <Boundary>
              <CardList foodP={comparedFoods}/>
            </Boundary>
          </Viewport>
      </div>
    )
    }
  }
}

export default App;
