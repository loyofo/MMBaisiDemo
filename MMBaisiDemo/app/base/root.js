import React, { Component } from 'react';

import {
  Text,
  View,
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';


import TabBar from './tabBar';
import TestNavFirst from './testNavFirst';

export default class root extends Component {


  render() {
    return (
      /*
      <Navigator
        initialRoute={{ name: 'TestNavFirst', component: TestNavFirst }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.PushFromRight;
          }
        }
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }
      }
      />
      */

      <View style = {{flex : 1,backgroundColor : '#F5FCFF'}}>
          <Navigator
            initialRoute = {{name: 'TabBar',component : TabBar}}
            style = {{height: 64}}
            configureScene = {(route) => {
              if (route.sceneConfig) {
                  return route.sceneConfig
                }
              return  Navigator.SceneConfigs.PushFromRight;
              }
            }
           renderScene = {(route,navigator) => {
                let Component = route.component;
                return (
                  <Component navigator = {navigator} route = {route}{...route.passProps}/>
                )
             }
           }

          />


      </View>

    );
  }
}
