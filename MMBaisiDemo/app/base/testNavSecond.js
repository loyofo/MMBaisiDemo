import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import testNavFirst from './testNavFirst';
import { Navigator } from 'react-native-deprecated-custom-components';

export default class testNavSecond extends Component {

  constructor(props) {
    super(props);
    this.state = {};
}

_pressButton() {
    const { navigator } = this.props;
    if(navigator) {
        navigator.pop();
    }
}

render() {
return (
        <View style = {{justifyContent: 'center', alignItems:'center',marginTop:150,backgroundColor:'green'}}>
            <TouchableOpacity onPress={this._pressButton.bind(this)}>
                <Text>点我跳回去</Text>
            </TouchableOpacity>
            <View style = {{justifyContent: 'center', alignItems:'center',width:375,height:300,backgroundColor:'green'}}>
            </View>

        </View>
);
}

}
