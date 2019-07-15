import React, { Component } from "react";
import { Content, Icon, Picker, Form } from "native-base";

const subjects = [
  'Problème technique',
  'Problème avec un participant',
  'Problème avec un sans-abris',
  'Message de soutien',
  'Autre'
]

export default class PickerTextAndItemStyleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Content >
        <Form>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" style={{ color: 'rgb(253,197,0)', marginLeft: '-80%'}} />}
            placeholder="Objet"
            placeholderStyle={{ fontWeight: 'bold', paddingLeft: 14 }}
            textStyle={{ color: 'rgb(253,197,0)' }}
            itemStyle={{
              backgroundColor: "white",
              marginLeft: 0,
              paddingLeft: 10,
            }}
            headerBackButtonTextStyle={{ color: "#fff" }}
            headerStyle={{ backgroundColor: "#2D2D2D"}}
            itemTextStyle={{ color: 'black' }}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
            style={style.dropdown}
          >
          {
            subjects.map((subject, idx) => {
              return <Picker.Item label={subject} value={subject} key={`subject-${idx}`} />
            })
          }
          </Picker>
        </Form>
      </Content>
    );
  }
}

const style = {
  dropdown: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'rgb(241,240,199)',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 30,
  }
}