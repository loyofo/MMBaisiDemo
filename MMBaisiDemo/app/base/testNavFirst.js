import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import testNavSecond from './testNavSecond';
import { Navigator } from 'react-native-deprecated-custom-components';


export default class testNavFirst extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  _pressButton() {
    const { navigator } = this.props;
    if(navigator) {
        navigator.push({
            name: 'testNavSecond',
            component: testNavSecond,
        })
        console.log('success');
    }else {
      console.log('fail');
    }
  }

  render() {
    return (
      <View style = {{justifyContent: 'center', alignItems:'center',marginTop:150,backgroundColor:'orange'}}>
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
          <Text>点我跳转</Text>
        </TouchableOpacity>
        <View style = {{justifyContent: 'center', alignItems:'center',width:375,height:300,backgroundColor:'orange'}}>
        </View>

      </View>
    );
  }
}
