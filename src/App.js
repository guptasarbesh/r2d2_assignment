import React, {Component} from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import  $ from 'jquery'


class App extends Component{
  constructor(props)
  {
    super(props)
    this.state={}
  
    this.performSearch()

  }

  performSearch(searchTerm)
  {
    console.log("Perform  search using moviedb")
    const urlString="https://api.themoviedb.org/3/search/movie?api_key=53bf6aca844a6a7dd9401056ac949d0a&language=en-US&query="+searchTerm 
    $.ajax({
      url:urlString,
      success:(searchResults)=>{
          console.log("Data fetchedd succesfully")
          const results=searchResults.results

          var movieRows=[]
          results.forEach((movie) =>{

            movie.poster_src="https://image.tmdb.org/t/p/w185"+movie.poster_path
            //console.log(movie.poster_path)
            const movieRow=<MovieRow key={movie.id} movie={movie}/>
            movieRows.push(movieRow)
          })

          this.setState({rows:movieRows})
      },
      error:(xhr,status,err)=>{
        console.log("Failed to fetched data")

        
      }
    })
 
  }
  
  searchChangeHandler(event)
  {
    console.log(event.target.value)
    const boundObject=this
    const searchTerm=event.target.value
    boundObject.performSearch(searchTerm)
  }
  render() {

    
    return (
      <div>
              
  
              <nav className="navbar navbar-expand-lg bg-dark ">
                
                <div  className="container col-lg-12">
                  <div className="company_name_header col-sm-4 ">
                  <h3 style={{
                    color:'#fff',
                    fontSize:24,
                    marginTop:'5px',
                    padding:'10px'
                  }}> R2D2 Movies Search Webapp</h3>
                  </div>
  
                  <div className="searchmovie col-lg-8">
  
                    <input style={{width:"100%",padding:"4px",borderRadius:"rounded"}} onChange={this.searchChangeHandler.bind(this)}
                    placeholder="Enter Movie Name"/>
  
                   
                  </div>
                  
                </div>
              
              
                  
                
              
                
               </nav>
  
               {this.state.rows}
  
  
      </div>
    );
  }
  
  


}
export default App;
