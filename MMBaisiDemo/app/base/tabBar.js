import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';


import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeContainer from '../pages/home/homeContainer';


function imgNameAppend(imgString){
  console.log('----','./assets/img/tabbar/${imgString}');
  return   './assets/img/tabbar/${imgString}'
}

const tabBarItems = [
  { title: '精华',
   icon: () =>  <Icon name = "../../assets/image/tabbar/tabBar_essence_n.png" size={30} color='#333' style={{marginTop:20}}/>,
   selectedIcon: () => <Icon name = "../../assets/image/tabbar/tabBar_essence_s.png" size={30} color='#d81e06' style={{marginTop:20}}/>,
   component: HomeContainer },
  { title: '精华',
    icon: () =>  <Icon name = 'tabBar_essence_n' size={30} color='#333' style={{marginTop:20}}/>,
    selectedIcon: () => <Icon name = 'tabBar_essence_s' size={30} color='#d81e06' style={{marginTop:20}}/>,
    component: HomeContainer },
  { title: '精华',
    icon: () =>  <Icon name = 'tabBar_essence_n' size={30} color='#333' style={{marginTop:20}}/>,
    selectedIcon: () => <Icon name = 'tabBar_essence_s' size={30} color='#d81e06' style={{marginTop:20}}/>,
    component: HomeContainer },
];



export default class tabBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab : tabBarItems[0].title,
    };
  }
  render(){
      return(
          <TabNavigator tabBarStyle={{height:49}}>
              {
                  tabBarItems.map((controller,i) => {
                      let Component = controller.component;
                      return(
                          <TabNavigator.Item
                              key={i}
                              selected = {this.state.selectedTab === controller.title}
                              title = {controller.title}
                              renderIcon = {controller.icon}
                              renderSelectedIcon = {controller.selectedIcon}
                              onPress={() => this.setState({selectedTab:controller.title})}
                              titleStyle={{color:'#333',fontSize:12}}
                              selectedTitleStyle={{color:'rgb(251,33,33)'}}
                              allowFontScaling={true}
                          >
                              <Component navigator = {this.props.navigator} {...this.props} />
                          </TabNavigator.Item>
                      )
                  })
              }
          </TabNavigator>
      )
  }

}
