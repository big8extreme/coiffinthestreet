
import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';


export default class DocApi extends Component {
  render() {
    return (

     
       
          <div>
            <div className="content-section introduction">
              <div className="feature-intro">
                <h1>Authentification</h1>
                <p>
                De façon à pouvoir exécuter des opérations d'écriture, vous devez d'abord être authentifié et obtenir une clé d'API dans les paramètres de votre profil.

Cette clé doit être fournie à chaque appel dans l'entête HTTP X-API-KEY..</p>
              </div>
            </div>

            <div className="content-section implementation">

              <TabView>

                 <TabPanel header="USERS">
                  <div>
                    <Fieldset legend="Ajouter un utilisateur">
                      <p><Button size="sm" label="POST" className="p-button-raised p-button-rounded" />  http://localhost:3000/admin/users 	</p>

                      <p>Créez un utilisateur. 
                          Vous devez au minimum spécifier les propriétés requises pour l’utilisateur.</p>
                          <p> Nom, Prenom, Email, Mot de passe et Verification du mot de passe 	</p>
                    </Fieldset>


                    <Fieldset legend="Afficher tous les utilisateurs">
                      <p><Button label="GET" className="p-button-success p-button-rounded" /> http://localhost:3000/admin/users	</p>
                      <p>Vous pouvez lister les utilisateurs par date d'insertion</p>
                    </Fieldset>

           
                    <Fieldset legend="Modifier un utilisateur">
                      <p><Button label="PUT" className="p-button-warning p-button-rounded" /> http://localhost:3000/admin/users/:id/ 	</p>
                      <p>Nous ne proposons pas de bac à sable pour recuperer les données, faire des tests avant de les exécuter.</p>

                      <p> Mot de passe et Verification du mot de passe a retaper afin de valider les modifications.</p>
                    </Fieldset>

                    <Fieldset legend="Supprimer un utilisateur">
                      <p><Button label="PUT" className="p-button-danger p-button-rounded" />   http://localhost:3000/admin/users/:id/ 	</p>
                      <p>Les suppressions de données via l'API sont définitives (pour l'instant). 
                          Soyez conscient de ces responsabilités avant d'utiliser vos super pouvoirs.	</p>
                    </Fieldset>


                    <Fieldset legend=" Statut du retour, liste des codes">

                      <p>Chaque appel à l'API donne lieu à une réponse, retournant un code spécifique en fonction du résultat obtenu. L'analyse de ce code vous permet de vous assurer que la requête a été traitée avec succès.

Tous les codes >= 400 indiquent que la requête n'a pas été traitée avec succès par nos serveurs.</p>

<p>200: OK</p>
<p>202: L'analyse est en cours de traitement</p>
<p>204: Aucune donnée disponible ou ajoutée (la requête est bien formée, mais aucune donnée ne correspond)</p>
<p>206: La requête est bien traité mais le résultat n'est pas complet : L'analyse n'est pas complète (certaines bonnes pratiques sont manquantes, par exemple) ou tous les ajouts n'ont pas pu être effectués (pour les événements par exemple)</p>
<p>400: Paramètre manquant, ou valeur incorrecte</p>
<p>401: Authentification nécessaire (jeton non précisé ou invalide)</p>
<p>403: Action non autorisée (crédits épuisés, URL non autorisée, etc)</p>
<p>404: Page inaccessible (URL inconnue / impossible d'accéder à l'adresse)</p>
<p>406: Le JSON indiqué en données POST n'est pas valide</p>
<p>408: Dépassement du temps maximal autorisé pour l'analyse</p>
<p>417: La dernière analyse de la surveillance automatique ne s\'est pas déroulée correctement</p>
<p>500: Erreur inconnue, contactez-nous</p>
<p>503: L'API est momentanément indisponible, réessayez dans quelques minutes	</p>
                    </Fieldset>



                   














                  </div>
                </TabPanel>





              </TabView>

            </div>
          </div>
 
   
    )
  }
}

