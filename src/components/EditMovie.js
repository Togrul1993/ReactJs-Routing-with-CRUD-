import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

class EditMovie extends Component {

	state = {
		name: "",
		rating: "",
		imageURL: "",
		overview: ""

	}


	async componentDidMount(movie) {
		const id = this.props.match.params.id;
		//console.log(id)
		const editData = await axios.get(`http://localhost:3002/movies/${id}`)
		//console.log(editData)
		const dataMovies = editData.data
		//console.log(data)

		this.setState({
			name: dataMovies.name,
			rating: dataMovies.rating,
			imageURL: dataMovies.imageURL,
			overview: dataMovies.overview


		})
	}




	onInputChange = (e) => {

		//console.log(e.target.name);
		//console.log(e.target.value);

		this.setState({
			[e.target.name]: e.target.value
		})
	}




	addFormSubmit = (e) => {
		e.preventDefault();


		//const name = this.state.name;
		//const rating = this.state.rating;
		//const overview = this.state.overview;
		//const imageURL = this.state.imageURL;

		const { name, rating, imageURL, overview } = this.state;

		const id = this.props.match.params.id;

		const upDatedMovie = {
			name,
			rating,
			imageURL,
			overview
		}

		this.props.EditMovie(id, upDatedMovie);

		this.props.history.push("/")
	}

	render() {
		return (
			<div className="container">
				<form className="mt-4" onSubmit={this.addFormSubmit}>
					<div className="row d-flex justify-content-around">
						<div className="col-10 text-center">
							<h1 className="text-center mb-4">Edit Movie</h1>
						</div>
						<div className="col-2">
							<Link to="/" type="button" className="btn btn-success">Home</Link>

						</div>
					</div>



					<div className="form-row">
						<div className="form-group col-md-12">
							<label htmlFor="inputName">ImageURL</label>
							<input type="text" className="form-control" name="imageURL" value={this.state.imageURL} onChange={this.onInputChange} />
						</div>
					</div>


					<div className="form-row">
						<div className="form-group col-md-10">
							<label htmlFor="inputName">Name</label>
							<input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onInputChange} />
						</div>

						<div className="form-group col-md-2">
							<label htmlFor="inputRating">Rating</label>
							<input type="text" className="form-control" name="rating" value={this.state.rating} onChange={this.onInputChange} />
						</div>

					</div>


					<div className="form-row">
						<div className="form-group col-md-12">
							<label htmlFor="inputName">Overview</label>
							<textarea className="form-control" name="overview" rows="5" cols="10" value={this.state.overview} onChange={this.onInputChange} />
						</div>
					</div>

					<button type="submit" className="btn btn-success w-100">Edit Movie</button>
				</form>

			</div>
		)
	}
}
export default EditMovie;