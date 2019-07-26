import * as React from 'react';
import { View, StyleSheet, ScrollView, Linking } from "react-native";
import { ListItem, Card } from "react-native-elements";
import { SocialIcon } from 'react-native-elements';
const linkedinLogo = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDExMi4xOTYgMTEyLjE5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTEyLjE5NiAxMTIuMTk2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiMwMDdBQjk7IiBjeD0iNTYuMDk4IiBjeT0iNTYuMDk3IiByPSI1Ni4wOTgiLz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGMUYyRjI7IiBkPSJNODkuNjE2LDYwLjYxMXYyMy4xMjhINzYuMjA3VjYyLjE2MWMwLTUuNDE4LTEuOTM2LTkuMTE4LTYuNzkxLTkuMTE4ICAgIGMtMy43MDUsMC01LjkwNiwyLjQ5MS02Ljg3OCw0LjkwM2MtMC4zNTMsMC44NjItMC40NDQsMi4wNTktMC40NDQsMy4yNjh2MjIuNTI0SDQ4LjY4NGMwLDAsMC4xOC0zNi41NDYsMC00MC4zMjloMTMuNDExdjUuNzE1ICAgIGMtMC4wMjcsMC4wNDUtMC4wNjUsMC4wODktMC4wODksMC4xMzJoMC4wODl2LTAuMTMyYzEuNzgyLTIuNzQyLDQuOTYtNi42NjIsMTIuMDg1LTYuNjYyICAgIEM4My4wMDIsNDIuNDYyLDg5LjYxNiw0OC4yMjYsODkuNjE2LDYwLjYxMUw4OS42MTYsNjAuNjExeiBNMzQuNjU2LDIzLjk2OWMtNC41ODcsMC03LjU4OCwzLjAxMS03LjU4OCw2Ljk2NyAgICBjMCwzLjg3MiwyLjkxNCw2Ljk3LDcuNDEyLDYuOTdoMC4wODdjNC42NzcsMCw3LjU4NS0zLjA5OCw3LjU4NS02Ljk3QzQyLjA2MywyNi45OCwzOS4yNDQsMjMuOTY5LDM0LjY1NiwyMy45NjlMMzQuNjU2LDIzLjk2OXogICAgIE0yNy44NjUsODMuNzM5SDQxLjI3VjQzLjQwOUgyNy44NjVWODMuNzM5eiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
export default class ThirdScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valx: 0 };
  }
  render() {
    const list = [
      {
        name: "David MARIE",
        avatar_url: "https://media.licdn.com/dms/image/C5603AQHuGDd5FQt73A/profile-displayphoto-shrink_200_200/0?e=1569456000&v=beta&t=2BKUPuVF37nU8TvYSOyu5JsMhqAxzUSPNodlZJA-IRs",
        subtitle: "Lead developer",
        icon: linkedinLogo,
        uri: 'https://www.linkedin.com/in/david-marie-71a260136/'
      },
      {
        name: "Radouane BOUKERCHE",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557754105/ah89cp0vsrxtgioukxrm.png",
        subtitle: "Web developer fullstack JS",
        icon: linkedinLogo,
        uri: 'https://www.linkedin.com/in/radouane-boukerche/'
      },
      {
        name: "Djamel AMMOUR",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1556907444/vcz3fxawxwxscmu7t7gl.png",
        subtitle: "Web developer fullstack JS",
        uri: 'https://www.linkedin.com/in/djamelammour/'
      },
      {
        name: "Hafid BENAMAR",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557927153/auyjgpekylappihrymnt.png",
        subtitle: "Web developer fullstack JS",
        uri: 'https://www.linkedin.com/in/hafid-benamar/'
      },
      {
        name: "Stephane URTH ",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557925944/om4hgftns6vld2try9a1.png",
        subtitle: "Web developer fullstack JS",
        uri: 'https://www.linkedin.com/in/stephaneurth/'
      },
      {
        name: "Bastien ALESSANDRI",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557849649/ddtt2fdh7tyzlkngfqax.png",
        subtitle: "Web developer fullstack JS",
        uri: 'https://www.linkedin.com/in/bastienalessandri/'
      },
      {
        name: "Damien CASTELLO",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557993798/glspwtmqdnpjtdigv0mm.png",
        subtitle: "Web developer fullstack JS",
        uri: 'https://www.linkedin.com/in/castello-damien/'
      },
      {
        name: "Jérémy ORTUNO",
        avatar_url: "https://avatars2.githubusercontent.com/u/45937038?s=400&v=4",
        subtitle: "Web developer fullstack JS",
        uri: 'https://www.linkedin.com/in/jeremy-ortuno/'
      },
      {
        name: "Sarah CABRAL",
        avatar_url: "http://res.cloudinary.com/david-wcs/image/upload/v1557861070/qg6tzvbictdcdp1zu16h.png",
        subtitle: "Web developer fullstack JS",
        uri: 'https://www.linkedin.com/in/sarahcabral13/'
      }


    ];
    return (
      <React.Fragment>
        <View style={styles.container}>
          {
            <Card >
              {
                list.map((l, i) => (
                  <View key={i}>
                    <ListItem
                      leftAvatar={{ source: { uri: l.avatar_url } }}
                      key={i}
                      title={l.name}
                      subtitle={`Last Practiced: ${l.subtitle}`}
                      rightIcon={<SocialIcon type='linkedin' light
                      />}
                      onPress={() => Linking.openURL(l.uri)}
                    />
                  </View>
                ))
              }
            </Card>
          }
        </View>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D2D2D',
  },
});