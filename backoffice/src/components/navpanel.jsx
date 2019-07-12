import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { connect } from 'react-redux';
import { fetchUsers} from '../stores/actions/user';
import { fetchMaraudes} from '../stores/actions/maraude';


class NavPanel extends Component {


componentDidMount(){

this.props.fetchUsers();
this.props.fetchMaraudes();

}




	render() {

		console.log('okkkkkkkkkkkkkkooo',this.props.maraudes)
		return (
			<div>
				<div className="row small-spacing">
					<div className="col-lg-3 col-md-6 col-xs-12">
						<Card title="MARAUDES" className="bg-success text-white" >
							<i className="pi pi-fw pi-calendar" ></i> 	
							<h2>{this.props.maraudes.length}</h2>
						</Card>
					</div>
					<div className="col-lg-3 col-md-6 col-xs-12">
						<Card title="COIFFEURS" className="bg-info text-white" >
							<i className="pi pi-fw pi-user" ></i> 	<h2>{this.props.users.length}</h2>
						</Card>
					</div>
					<div className="col-lg-3 col-md-6 col-xs-12">
						<Card title="PARTICIPANTS" className="bg-danger text-white" >
								<i className="pi pi-fw pi-users" ></i> 	<h2>140</h2>
						</Card>
					</div>
					<div className="col-lg-3 col-md-6 col-xs-12">
						<Card title="PHOTOS" className="bg-warning text-white" >
							<i className="pi pi-fw pi-users" ></i> 	<h2>637</h2>
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

  