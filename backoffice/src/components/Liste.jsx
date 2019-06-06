import React, { Component } from 'react';




	export default class Flexbutton extends Component {
		render() {
		  return (

		<div>

			<div className="row small-spacing">
				<div className="col-lg-3 col-md-6 col-xs-12">
					<div className="box-content bg-success text-white">
						<div className="statistics-box with-icon">
							<p className="text text-white">	<i className="pi pi-fw pi-calendar" ></i>MARAUDES</p>
							<h2 className="counter">32</h2>
						</div>
					</div>
				</div>

				<div className="col-lg-3 col-md-6 col-xs-12">
					<div className="box-content bg-info text-white">
						<div className="statistics-box with-icon">
							<p className="text text-white">	<i className="pi pi-fw pi-user" ></i>COIFFEURS</p>
							<h2 className="counter">87</h2>
						</div>
					</div>
				</div>

				<div className="col-lg-3 col-md-6 col-xs-12">
					<div className="box-content bg-danger text-white">
						<div className="statistics-box with-icon">
							<i className="ico small fa fa-bug"></i>
							<p className="text text-white">	<i className="pi pi-fw pi-users" ></i>PARTICIPANTS</p>
							<h2 className="counter">140</h2>
						</div>
					</div>
				</div>

				<div className="col-lg-3 col-md-6 col-xs-12">
					<div className="box-content bg-warning text-white">
						<div className="statistics-box with-icon">
							<i className="ico small fa fa-usd"></i>
							<p className="text text-white">	<i className="pi pi-fw pi-filter" ></i>PHOTOS</p>
							<h2 className="counter">637</h2>
						</div>
					</div>
				</div>

			</div>
		</div>

	);
};
}
