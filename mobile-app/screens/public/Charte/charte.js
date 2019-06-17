import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Axios from 'axios';

export default class Charte extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "test"
        };
    }

    componentDidMount() {
        // Axios.get('http://192.168.1.109:5000/api/v1/users/')
        Axios.get('http://192.168.1.109:5000/api/v1/users', {
            headers: { 'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLWRvZUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NTkyMzY2Mjh9.6jcK8-WPUqcpmdwnf3nbTAhmYWeNddEeYJeIoQyF9rs' }
        })
            .then(res => {
                this.setState({ text: res.data });
            })
            .catch(error => {
                this.setState({ error: error });
            });
    }

    render() {
        return (
            <View style={styles.backgroundApp}>
                <Text style={styles.Titletext}>Charte d'utilisateur</Text>

                <Text style={styles.textCharte}>
                    {/* {JSON.stringify(this.state)} */}
                    {this.state.text}
                    Une charte de réseau c’est un tout en un qui comprend :

Une carte d’identité fidèle qui décrit le réseau, sa raison sociale, le profil des membres, la couverture géographique.
EXEMPLE :

Courants Porteurs est un réseau, à vocation régionale, d’entrepreneurs : chefs d’entreprise, créateurs...
Un ordre de mission : qui définit les missions du réseau, ses objectifs en termes quantitatifs et qualitatifs. Pour First Services, il s’agit d’aider les donneurs d’ordres à trouver les meilleurs prestataires prêts à répondre à leurs besoins. Quant à Courants Porteurs, son objectif est de regrouper les compétences pour répondre à des appels d’offres.
Un règlement intérieur : qui détermine les principes et une éthique de collaboration, les droits et les devoirs des membres. Par exemple, ne pas démarcher en direct le client d’un autre adhérent ou encore choisir ses prestataires de service en priorité au sein du réseau. Le règlement peut aussi répertorier les modalités de participation : cotisation, réunions, plannings…
Un document juridique : si votre réseau est formel, il doit pouvoir produire ses statuts.
EXEMPLE :
VDN est un GIE (Groupement d’Intérêt Economique), Les 7 sens une SARL, Le Club des créateurs d’entreprises une association Loi 1901.
Un document de recrutement : qui intègre une fiche de renseignements d’adhérent (motivation de son adhésion, appartenance à d’autres réseaux) et un formulaire d’adhésion qui a valeur de contrat.
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundApp: {
        backgroundColor: '#4E4E4E', flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Titletext: {
        color: 'white',
        fontSize: 35,
        fontFamily: "Sedgwick",
    },
    textCharte: {
        color: 'white',
        fontSize: 15,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15,
        marginTop: 15,
    },
});
