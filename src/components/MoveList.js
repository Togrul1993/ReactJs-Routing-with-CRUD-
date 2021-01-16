import React from 'react'
import { Link } from 'react-router-dom'


const MoveList = (props) => {


	/*const handlClick = (e) => {
		props.deleteMovieProp(props.movies)
	}     */


	const overviewTrim = (string, maxstring) => {
		if (!string) return null;
		if (string.length <= maxstring) return string;
		return `${string.substring(0, maxstring)} ...`
	}


	return (
		<>
			<div className="row d-flex">

				{
					props.movies.map((movie, i) => (

						<div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4 mt-3 d-flex" key={i}>
							<div className="card" >
								<div className="card-header p-0" style={{ height: "250px" }}>
									<img className="card-img-top" style={{ height: "250px" }} src={movie.imageURL} alt="" />
								</div>
								<div className="card-body p-1 pb-4">
									<h5 className="card-title">{overviewTrim(movie.name, 20)}</h5>
									<p className="card-text">{overviewTrim(movie.overview, 50)}</p>
								</div>

								<div className="card-footer d-flex bg-dark justify-content-between">
									<button onClick={() => props.deleteMovieProp(movie)} className="btn btn-danger text-light">Delete</button>


									<Link to={`edit/${movie.id}`} type="button" className="btn btn-primary">Edit</Link>

									<button className="badge badge-success p-2" style={{ fontSize: "14px" }}>{movie.rating}</button>
								</div>
							</div>
						</div>

					)
					)
				}
			</div>
		</>
	)
}

export default MoveList
