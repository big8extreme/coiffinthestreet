import React from 'react';
import { Menu } from 'primereact/menu';
import { connect } from 'react-redux';
import { logout } from '../../stores/actions/auth';
import { withRouter } from 'react-router-dom';

export class MenuLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          label: 'GENERAL',
          items: [
            { label: 'Home', icon: 'pi pi-fw pi-home', command: () => { props.history.push('/admin'); } },
            { label: 'Maraude', icon: 'pi pi-fw pi-calendar', command: () => { props.history.push('/admin/maraudes'); } },
            { label: 'Coiffeur', icon: 'pi pi-fw pi-user', command: () => { props.history.push('/admin/users'); } },
          ]
        },
        {
          label: 'Api',
          items: [{ label: 'Documentation', icon: 'pi pi-fw pi-file', command: () => { props.history.push('/admin/docapi'); } }
          ]
        },
        {
          label: 'Account',
          items: [{ label: 'Configuration', icon: 'pi pi-fw pi-cog', command: () => { props.history.push('/admin/configs'); } },
          { label: 'Sign Out', icon: 'pi pi-fw pi-power-off', command: () => { props.logout(); } }]
        },
      ]
    };
  }

  render() {
    return (
      <div className="layout-menu">
        <Menu model={this.state.items} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {
  logout
};

// @ts-ignore
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuLeft));
