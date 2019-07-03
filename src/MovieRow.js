import React from 'react'

class MovieRow extends React.Component{
    render()
    {
        return <div className="container-fluid"  key={this.props.movie.id}>
      
        <div className="row col-sm-12">
        <div className="col-sm-4">
            
            <img className="card-img-top" height="225px"width="50" alt="poster" src={this.props.movie.poster_src}/>
      </div>    

      <div className="col-sm-8">
      
              <h3> {this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
           
      </div>
        </div>
        

    
  </div>

    }
}

export default MovieRow