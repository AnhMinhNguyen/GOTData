import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import HouseInfoScreen from '../screens/HouseInfoScreen';

const HomeStack = createStackNavigator();

export default HomeNavigator = () => {
    return (
      <HomeStack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: { height: 50 },
        headerTitleStyle: {
          fontSize: 32,
          fontWeight: 'bold',
          color: 'tomato'
        }
      }}>
        <HomeStack.Screen name="Houses" component={HomeScreen} />
        <HomeStack.Screen name="House Info" component={HouseInfoScreen} />
      </HomeStack.Navigator>
    )
};