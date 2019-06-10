import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import UserList from '../components/contents/users/userlist';
import { Usernew } from '../components/contents/users/usernew';
import { Fieldset } from 'primereact/fieldset';
import { Userupdate } from '../components/contents/users/userupdate';
export default class UserPanel extends Component {
  render() {
    return (
      <div>
        <div className="content-section introduction">

          <div className="feature-intro">
            <h1>Les Coiffeurs</h1>
            <p>Mise en place d'un texte de présentation...</p>
          </div>
        </div>

        <div className="content-section implementation">
          <TabView>
            <TabPanel header="Tous les Utilisateurs">
              <UserList />
            </TabPanel>
            <TabPanel header="attente de validation">
              <div>
                <Fieldset legend="En cours">
                </Fieldset>
              </div>
            </TabPanel>
            <TabPanel header="Coiffeurs bannis">
              <div>
                <Fieldset legend="En cours">
                </Fieldset>
              </div>
            </TabPanel>
            <TabPanel id="4" header="Ajouter">
              <div>
                <Fieldset legend="Remplir les champs suivants">
                  <Usernew />
                </Fieldset>
              </div>
            </TabPanel>
            <TabPanel id="4" header="Modifier">
              <div>
                <Fieldset legend="Remplir les champs suivants">
                  <Userupdate />
                </Fieldset>
              </div>
            </TabPanel>
          </TabView>
        </div>
      </div>
    );
  }
}
