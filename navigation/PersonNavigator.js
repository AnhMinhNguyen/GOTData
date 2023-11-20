import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PersonScreen from '../screens/PersonScreen';
import PersonInfoScreen from '../screens/PersonInfoScreen';

const PersonStack = createStackNavigator();

export default PersonNavigator = () => {
    return (
        <PersonStack.Navigator>
            <PersonStack.Screen name="Persons" component={PersonScreen} />
            <PersonStack.Screen name="Person Info" component={PersonInfoScreen} />
        </PersonStack.Navigator>
    )
};