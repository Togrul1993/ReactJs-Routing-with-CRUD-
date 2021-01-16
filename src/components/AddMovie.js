import React, { Component } from 'react'
import serialize from 'form-serialize'
import { Link } from 'react-router-dom'

class AddMovie extends Component {


	addFormSubmit = (e) => {
		e.preventDefault()

		const newMovie = serialize(e.target, { bash: true })
		//console.log(newMovie)
		this.props.onNewAddMovie(newMovie)
	}

	render() {
		return (
			<div className="container">
				<form className="mt-4" onSubmit={this.addFormSubmit}>
					<div className="row d-flex justify-content-around">
						<div className="col-10 text-center">
							<h1 className="text-center mb-4">Add Movie</h1>
						</div>

						<div className="col-2">
							<Link to="/" type="button" className="btn btn-success">Home</Link>
						</div>

					</div>

					<div className="form-row">
						<div className="form-group col-md-12">
							<label htmlFor="inputName">ImageURL</label>
							<input type="text" className="form-control" name="imageURL" />
						</div>
					</div>

					<div className="form-row">
						<div className="form-group col-md-10">
							<label htmlFor="inputName">Name</label>
							<input type="text" className="form-control" name="name" />
						</div>

						<div className="form-group col-md-2">
							<label htmlFor="inputRating">Rating</label>
							<input type="text" className="form-control" name="rating" />
						</div>

					</div>

					<div className="form-row">
						<div className="form-group col-md-12">
							<label htmlFor="inputName">Overview</label>
							<textarea className="form-control" name="overview" rows="5" cols="10" />
						</div>
					</div>

					<button type="submit" className="btn btn-success w-100">Add Movie</button>
				</form>

			</div>
		)
	}
}
export default AddMovie;