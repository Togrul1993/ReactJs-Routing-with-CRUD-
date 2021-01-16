import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class SearchBar extends Component {
	render() {
		return (
			<>
				<form onSubmit={(e) => e.preventDefault()}>
					<div className="row mb-3 mt-3">
						<div className="col-9">
							<input
								onChange={this.props.searchProps}
								type="text"
								className="w-75 form-control"
								placeholder="Serach Movies"

							/>
						</div>

						<div className="col-3">
							<Link to="/add" className="btn btn-success float-right">Add Movie</Link>
						</div>
					</div>
				</form>
			</>
		)
	}
}
export default SearchBar;