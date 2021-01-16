import React, { Component } from 'react'

export class CardFooter extends Component {
	render() {
		return (
			<>
				<div className="card-footer bg-dark">
					<button className="btn btn-outline-danger text-light">Delete</button>
					<button className="badge float-right badge-success p-2" style={{ fontSize: "16px" }}>1.1</button>
				</div>
			</>
		)
	}
}

export default CardFooter;
