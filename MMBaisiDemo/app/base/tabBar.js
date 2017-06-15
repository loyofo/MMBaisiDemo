import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';


import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeContainer from  './pages/homeContainer';
import MainContainer from  './pages/mainContainer';
import MiddleContainer from  './pages/middleContainer';

function imgNameAppend(imgString){
  return {
    './assets/img/tabbar/' + imgString
  };
}

const tabBarItems = [
  { title: '精华',
   icon: () =>  <Icon name = imgNameAppend('tabBar_essence_n') size={30} color='#333' style={{marginTop:20}}/>,
   selectedIcon: () => <Icon name = imgNameAppend('tabBar_essence_s') size={30} color='#d81e06' style={{marginTop:20}}/>,
   component: HomeContainer },
  { title: '精华',
    icon: () =>  <Icon name = imgNameAppend('tabBar_essence_n') size={30} color='#333' style={{marginTop:20}}/>,
    selectedIcon: () => <Icon name = imgNameAppend('tabBar_essence_s') size={30} color='#d81e06' style={{marginTop:20}}/>,
    component: HomeContainer },
  { title: '精华',
    icon: () =>  <Icon name = imgNameAppend('tabBar_essence_n') size={30} color='#333' style={{marginTop:20}}/>,
    selectedIcon: () => <Icon name = imgNameAppend('tabBar_essence_s') size={30} color='#d81e06' style={{marginTop:20}}/>,
    component: HomeContainer },
];



export default class tabBar extends Component {
  render() {
    return (
      <TabNavigator>
        tabBarItems.map((controller,i) => {
          

        })

      </TabNavigator>
    );
  }
}
