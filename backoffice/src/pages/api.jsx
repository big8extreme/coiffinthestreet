
import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';


export default class Api extends Component {
  render() {
    return (

          <div>
            <div className="content-section introduction">
              <div className="feature-intro">
                <h1>Panel</h1>
                <p>Panel is a grouping component providing with content toggle feature.</p>
              </div>
            </div>

            <div className="content-section implementation">

              <TabView>

                <TabPanel header="AUTHENTIFICATION">
                  <div>
                    <Fieldset legend="Application Authentification">
                      <p>L'authentification au niveau de l'application sur la version 3 est contrôlée par un paramètre de requête unique, api_key.
                         Vous pouvez demander une clé API en vous connectant à votre compte sur TMDb et en cliquant sur le lien "API" dans la barre
                         de gauche de la page de votre compte. Une fois qu'une clé vous a été attribuée, voici un exemple de demande
                         (remplaçant le texte de????? par votre propre clé d'API): https://_key=????? All Tout au long de cette documentation,
                         chaque méthode comporte un onglet "Essayez-le".
                         Cette fonctionnalité vous permettra de coller votre clé d'API (et d'autres paramètres pertinents) et de faire une demande en direct à l'API.
                    </p> </Fieldset>

                    <Fieldset legend="Utilisateur Authentification">
                      <p>Vous pouvez authentifier les utilisateurs CoiffInTheStreet dans votre application pour étendre
                        l'expérience CoiffInTheStreet au sein de votre application. Cela permettra à vos utilisateurs
                        d'effectuer des tâches telles que noter des films, conserver leurs listes de favoris
                        et leurs listes de lecture, ainsi que créer et modifier des listes personnalisées,
                        le tout tout en restant synchronisé avec leur compte sur TMDb. L'authentification de
                        l'utilisateur est contrôlée avec un paramètre de requête session_id.
                         Vous pouvez générer un identifiant de session en procédant comme suit:
                          Créer un nouveau jeton de demande Demandez à l'utilisateur d'autoriser le jeton de demande.
                           Créez un nouvel identifiant de session avec le jeton de demande athorized.
                           Pour une présentation complète de ce à quoi cela ressemble, consultez cette page.
                    </p> </Fieldset>

                    <Fieldset legend="Session Invité">
                      <p>Les sessions d'invité sont un deuxième type d'authentification d'utilisateur.
                        Ils ont des autorisations limitées car ils ne peuvent pas creer ou visionner l'adresse exacte d'une maraude.
                         La création d'une session d'invité est aussi simple que d'appeler
                         la nouvelle méthode de session d'invité. Tout comme une session
                          utilisateur entièrement autorisée, les sessions invité doivent
                           rester confidentielles car elles lient une session de votre application à un seul jeton.
                    </p> </Fieldset>

                  </div>
                </TabPanel>

                <TabPanel header="USERS">
                  <div>
                    <Fieldset legend="Ajouter un utilisateur">
                      <p><Button size="sm" label="POST" className="p-button-raised p-button-rounded" />  users/ 	</p>

                      <p>When no parameters are provided, the endpoint returns live matches (kick-off time in the last 4 hours or in the next one hour).	</p>
                    </Fieldset>


                    <Fieldset legend="Afficher tous les utilisateurs">
                      <p><Button label="GET" className="p-button-success p-button-rounded" />  users/ 	</p>
                      <p>When no parameters are provided, the endpoint returns live matches (kick-off time in the last 4 hours or in the next one hour).	</p>
                    </Fieldset>

                    <Fieldset legend="Modifier un utilisateur">
                      <p><Button label="PUT" className="p-button-warning p-button-rounded" />  users/:id/ 	</p>
                      <p>When no parameters are provided, the endpoint returns live matches (kick-off time in the last 4 hours or in the next one hour).	</p>
                    </Fieldset>

                    <Fieldset legend="Supprimer un utilisateur">
                      <p><Button label="PUT" className="p-button-danger p-button-rounded" />  users/:id/ 	</p>
                      <p>When no parameters are provided, the endpoint returns live matches (kick-off time in the last 4 hours or in the next one hour).	</p>
                    </Fieldset>
                  </div>
                </TabPanel>
                <TabPanel header="MARAUDES">
                  <div>
                    <Fieldset legend="Ajouter une maraude">
                      <p><Button size="sm" label="POST" className="p-button-raised p-button-rounded" />  maraudes/ 	</p>

                      <p>When no parameters are provided, the endpoint returns live matches (kick-off time in the last 4 hours or in the next one hour).	</p>
                    </Fieldset>


                    <Fieldset legend="Afficher toute les maraudes">
                      <p><Button label="GET" className="p-button-success p-button-rounded" />  maraudes/ 	</p>
                      <p>When no parameters are provided, the endpoint returns live matches (kick-off time in the last 4 hours or in the next one hour).	</p>
                    </Fieldset>

                    <Fieldset legend="Modifier une maraude">
                      <p><Button label="PUT" className="p-button-warning p-button-rounded" />  maraudes/:id/ 	</p>
                      <p>When no parameters are provided, the endpoint returns live matches (kick-off time in the last 4 hours or in the next one hour).	</p>
                    </Fieldset>

                    <Fieldset legend="Supprimer une maraude">
                      <p><Button label="PUT" className="p-button-danger p-button-rounded" />  maraudes/:id/ 	</p>
                      <p>When no parameters are provided, the endpoint returns live matches (kick-off time in the last 4 hours or in the next one hour).	</p>
                    </Fieldset>
                  </div>
                </TabPanel>


                <TabPanel header="PHOTOS">
                  <div>
                    <Fieldset legend="Ajouter une photo">
                      <p><Button size="sm" label="POST" className="p-button-raised p-button-rounded" />  maraudes/:id/pictures 	</p>

                      <p>When no parameters are provided, the endpoint returns live matches (kick-off time in the last 4 hours or in the next one hour).	</p>
                    </Fieldset>


                    <Fieldset legend="Afficher toute les photos">
                      <p><Button label="GET" className="p-button-success p-button-rounded" />  maraudes/:id/pictures 	</p>
                      <p>When no parameters are provided, the endpoint returns live matches (kick-off time in the last 4 hours or in the next one hour).	</p>
                    </Fieldset>

                    <Fieldset legend="Modifier une photo">
                      <p><Button label="PUT" className="p-button-warning p-button-rounded" />  maraudes/:id/pictures /:id 	</p>
                      <p>When no parameters are provided, the endpoint returns live matches (kick-off time in the last 4 hours or in the next one hour).	</p>
                    </Fieldset>

                    <Fieldset legend="Supprimer une photo">
                      <p><Button label="PUT" className="p-button-danger p-button-rounded" />  maraudes/:id/pictures /:id 	</p>
                      <p>When no parameters are provided, the endpoint returns live matches (kick-off time in the last 4 hours or in the next one hour).	</p>
                    </Fieldset>
                  </div>
                </TabPanel>


                <TabPanel header="PARTICIPANTS">
                  <div>
                    <Fieldset legend="Ajouter un participant">
                      <p><Button size="sm" label="POST" className="p-button-raised p-button-rounded" />  maraudes/:id/participant 	</p>

                      <p>When no parameters are provided, the endpoint returns live matches (kick-off time in the last 4 hours or in the next one hour).	</p>
                    </Fieldset>


                    <Fieldset legend="Afficher tous les participants">
                      <p><Button label="GET" className="p-button-success p-button-rounded" />  maraudes/:id/participant 	</p>
                      <p>When no parameters are provided, the endpoint returns live matches (kick-off time in the last 4 hours or in the next one hour).	</p>
                    </Fieldset>

                    <Fieldset legend="Modifier un participant">
                      <p><Button label="PUT" className="p-button-warning p-button-rounded" />  maraudes/:id/participant /:id 	</p>
                      <p>When no parameters are provided, the endpoint returns live matches (kick-off time in the last 4 hours or in the next one hour).	</p>
                    </Fieldset>

                    <Fieldset legend="Supprimer un participant">
                      <p><Button label="PUT" className="p-button-danger p-button-rounded" />  maraudes/:id/participant /:id 	</p>
                      <p>When no parameters are provided, the endpoint returns live matches (kick-off time in the last 4 hours or in the next one hour).	</p>
                    </Fieldset>
                  </div>
                </TabPanel>

              </TabView>

            </div>
          </div>
    
    )
  }
}


