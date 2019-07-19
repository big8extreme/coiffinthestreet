import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { connect } from 'react-redux';
import { fetchUsers } from '../stores/actions/user';
import { fetchMaraudes } from '../stores/actions/maraude';


class NavPanel extends Component {
	componentDidMount() {
		this.props.fetchUsers();
		this.props.fetchMaraudes();
	}


	render() {
		return (
			<div>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-xs-12">
						<Card title="MARAUDES" className="bg-success text-white" >
							<i className="pi pi-fw pi-calendar" ></i>
							<h2>{this.props.maraudes.length}</h2>
						</Card>
					</div>
					<div className="col-lg-6 col-md-6 col-xs-12">
						<Card title="COIFFEURS" className="bg-info text-white" >
							<i className="pi pi-fw pi-user" ></i> 	<h2>{this.props.users.length}</h2>
						</Card>
					</div>
				</div>
			</div>
		);
	};
}
const mapStateToProps = (state) => ({
	maraudes: state.maraude.maraudes,
	users: state.user.users
});

const mapDispatchToProps = {

	fetchUsers,
	fetchMaraudes
};

export default connect(mapStateToProps, mapDispatchToProps)(NavPanel);

