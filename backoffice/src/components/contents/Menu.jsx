import React from 'react';
import {Menu} from 'primereact/menu';


  export default class MenuDemo extends React.Component {
 constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'GENERAL',
                    items: [{label: 'Home', icon: 'pi pi-fw pi-home', url: './'},
                    {label: 'Maraude', icon: 'pi pi-fw pi-calendar', url: './maraudes'},
                      {label: 'Coiffeur', icon: 'pi pi-fw pi-user', url: './coiffeurs'},
                      {label:'Participant',icon:'pi pi-fw pi-users',url: './participants'}
                
                ]
                }, 

                {
                    label: 'Partenaire??',
                    items: [
                      
                        {label:'Association',icon:'pi pi-fw pi-filter'}]
                },

                {
                    label: 'Api',
                    items: [{label: 'Documentation', icon: 'pi pi-fw pi-file', url: './api'}
                      ]
                },
                {
                    label: 'Account',
                    items: [{label: 'Configuration', icon: 'pi pi-fw pi-cog',url: './configuration' },
                            {label: 'Sign Out', icon: 'pi pi-fw pi-power-off', url: './index.html'} ]
                }
            ]
        };
    }

    render() {
        return (

            
     

                <div className="layout-menu">
                
                    <Menu model={this.state.items}/>

                    
                </div>

                
       
        )
    }
}