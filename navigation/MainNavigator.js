import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';
import PersonNavigator from './PersonNavigator';
import QuoteNavigator from './QuoteNavigator';

const Tab = createBottomTabNavigator();

export default MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Persons') {
            if (Platform.OS === 'android') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (Platform.OS === 'ios') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }
          } else if (route.name === 'Houses') {
            if (Platform.OS === 'android') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (Platform.OS === 'ios') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            }
          } else if (route.name === 'Quotes') {
            if (Platform.OS === 'android') {
              iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
            } else if (Platform.OS === 'ios') {
              iconName = focused ? 'ios-chatbubble-ellipses' : 'ios-chatbubble-ellipses-outline';
            }
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Houses" component={HomeNavigator} />
        <Tab.Screen name="Persons" component={PersonNavigator} />        
        <Tab.Screen name="Quotes" component={QuoteNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};