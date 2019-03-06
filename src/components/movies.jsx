import React, { Component } from 'react';
import ListGroup from './common/listGroup';
import {getMovies} from  "../services/fakeMovieService";
import {getGenres} from  "../services/fakeGenreService";
import Pagination from './common/pagination';
import Paginate from '../utils/paginate';
import _ from 'lodash';
import MoviesTable from './moviesTable';

class Movies extends Component {
    state = {
        movies : [],
        genres : [],
        pageSize : 4,
        currentPage : 1,
        selectedGenre : '',
        sortColumn : {column:"title",order:"asc"}
        //counter : [1,4]
    };

    // constructor(props){
    //     super(props);
    //     //console.log("Movies contructor",this.props)
    // }
    

    componentDidMount(){
        //console.log("Movies mounted!")
        const genres = [{_id: "" ,name:"All Genres"},...getGenres()];
        this.setState({movies:getMovies(),genres})
    }

    componentDidUpdate(prevProps,prevState){
        // console.log("Update observed!");
        //console.log("prevProps",prevProps);
        console.log("prevState",prevState.sortColumn);
        

    }

    componentWillUnmount(){
       // console.log("component removed!")
    }
    
    handleDelete = (movie) => {
       //console.log(movie);
       const movies = this.state.movies.filter((data) => 
         data._id !== movie._id
        )
     //  this.setState({movies: movies}) 
     this.setState({movies})  // is same as above statement


   }

   handleLike = (movie) => {
       //console.log("liked!",movie);
       const movies = [...this.state.movies];
       const index = movies.indexOf(movie);
      // console.log("movies",movies);
       //movies[index] = {...movies[index]};  
       movies[index].liked = !movies[index].liked;

       this.setState({movies});

   }

   handlePageChange = (page) => {
    //console.log("page",page);
    this.setState({currentPage: page})
    //console.log('current page',this.state.currentPage);
   }

   handleGenreSelect = (genre) => {
   // console.log("genre",genre);
     this.setState({selectedGenre : genre,currentPage:1});
    // console.log("genreselect",this.state.selectedGenre);

   }
   //Logic - sort on header - req
   //_.orderBy(obj,[header],[asc/desc])
   handleSort =(sortColumn)=>{
     this.setState({sortColumn});
     console.log("Current state",this.state.sortColumn)
     
   }
       
    render() {
         const {length: count} = this.state.movies;
         const {pageSize,currentPage,movies,selectedGenre,sortColumn} = this.state;
         console.log("count",count);
         //console.log("Children Movies is rendered when parent app is rendered!")
         const filteredMovies = selectedGenre && selectedGenre._id ? movies.filter((movie)=>(movie.genre._id === selectedGenre._id)) : movies;

         const sortedMovies = _.orderBy(filteredMovies,[sortColumn.column],[sortColumn.order]);

         const moviesPerPage = Paginate(sortedMovies,currentPage,pageSize);
         console.log("moviesPerPage",moviesPerPage);
        if(count === 0) return(<h3> No movies in database</h3>);
        return(
            
    <div className="row">
      <div className="col-3">
         <ListGroup items={this.state.genres} selectedItem={selectedGenre} onItemSelect={this.handleGenreSelect}/>
      </div>

      <div className="col">
    <h3>There are {filteredMovies.length} movies in this database</h3>
    <MoviesTable sortColumn={sortColumn} moviesPerPage={moviesPerPage} onDelete={this.handleDelete} onSort={this.handleSort} onLike={this.handleLike}/>
  <Pagination itemsCount={filteredMovies.length} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange}/>
  </div>
  </div>
  )
            }
            
   
      

  

    
};

export default Movies;