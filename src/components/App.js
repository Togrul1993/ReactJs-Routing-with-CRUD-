import React from 'react'
import axios from 'axios'
import MoveList from './MoveList'
import SearchBar from './SearchBar'
import AddMovie from './AddMovie'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditMovie from './EditMovie'


class App extends React.Component {

  state = {
    movies: [],
    search: ""
  }


  /*
    async componentDidMount() {
      const dataURL = "http://localhost:3002/movies";
      const response = await fetch(dataURL);
      console.log(response);
      const data = await response.json()
      console.log(data)
      this.setState({ movies: data })
    }
  
  */


  async componentDidMount() {
    this.getMovies()
  }



  getMovies = async () => {
    const reponse = await axios.get("http://localhost:3002/movies");
    //console.log(reponse);
    const data = reponse.data;
    //console.log(data);
    this.setState({ movies: data })
  }




  /*

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    )


    this.setState(state => ({
      movies: newMovieList
    }))

  }

*/



  /*
    //Fetch App
    deleteMovie = async (movie) => {
      const dataURL = `http://localhost:3002/movies/${movie.id}`;
      await fetch(dataURL, {
        method: "DELETE"
      })
  
      const newMovieList = this.state.movies.filter(
        m => m.id !== movie.id
      )
  
      this.setState(state => ({
        movies: newMovieList
      }))
  
    }
  */



  //Axios App
  deleteMovie = async (movie) => {

    axios.delete(`http://localhost:3002/movies/${movie.id}`)

    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    )
    this.setState(state => ({
      movies: newMovieList
    }))
  }





  searchMovies = (e) => {
    this.setState({
      search: e.target.value
    })

  }



  AddMovie = async (movie) => {
    await axios.post(`http://localhost:3002/movies/`, movie);
    this.setState(state => ({
      movies: state.movies.concat([movie])
    }))

    this.getMovies()
  }


  editMovie = async (id, upDatedMovie) => {
    await axios.put(`http://localhost:3002/movies/${id}`, upDatedMovie);
    this.getMovies()
  }



  render() {

    let searchFilter = this.state.movies.filter(

      (movie) => {

        return movie?.name?.toLowerCase().indexOf(this.state?.search?.toLowerCase()) !== -1
      }
    ).sort((a, b) => {
      return a.id < b.id ? 1 : a.id > b.id ? -1 : 0
    })

    return (
      <Router>
        <div className="container bg-danger p-4">

          <Switch>
            <Route path="/" exact render={() => (
              <>
                <div className="row  text-light">
                  <div className="col-lg-12 text-center bg-dark">
                    <h1 className="pt-3 pb-3">Movies List</h1>
                  </div>
                </div>

                <SearchBar searchProps={this.searchMovies} />

                <MoveList
                  movies={searchFilter}
                  deleteMovieProp={this.deleteMovie}
                />
              </>
            )}>

            </Route>


            <Route path="/add" render={({ history }) => (

              <AddMovie
                onNewAddMovie={(movie) => {
                  this.AddMovie(movie)
                  history.push("/")
                }}
              />
            )} />



            <Route path="/edit/:id" render={(props) => (

              <EditMovie
                {...props}
                EditMovie={(id, movie) => {
                  this.editMovie(id, movie)
                }}

              />
            )} />

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
