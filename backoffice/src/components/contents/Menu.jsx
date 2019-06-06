import React from 'react';
import { Menu } from 'primereact/menu';
import { connect } from 'react-redux';
import { logout } from '../../stores/actions/auth';
import { withRouter } from 'react-router-dom';


export class MenuDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    label: 'GENERAL',
                    items: [{ label: 'Home', icon: 'pi pi-fw pi-home', url: './' },
                    { label: 'Maraude', icon: 'pi pi-fw pi-calendar', url: '/admin/maraudes' },
                    { label: 'Coiffeur', icon: 'pi pi-fw pi-user', url: '/admin/users' },
                    { label: 'Participant', icon: 'pi pi-fw pi-users', url: './participants' }

                    ]
                },

                {
                    label: 'Partenaire??',
                    items: [

                        { label: 'Association', icon: 'pi pi-fw pi-filter' }]
                },

                {
                    label: 'Api',
                    items: [{ label: 'Documentation', icon: 'pi pi-fw pi-file', url: './api' }
                    ]
                },
                {
                    label: 'Account',
                    items: [{ label: 'Configuration', icon: 'pi pi-fw pi-cog', url: './configuration' },
                    { label: 'Sign Out', icon: 'pi pi-fw pi-power-off', command: () => { props.logout() } }]
                },
            ]
        };
    }

    render() {
        return (
            <div className="layout-menu">
                <Menu model={this.state.items} />
            </div>



        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = {
    logout
};

// @ts-ignore
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuDemo));
