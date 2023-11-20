import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QuoteScreen from '../screens/QuoteScreen';

const QuoteStack = createStackNavigator();

export default QuoteNavigator = () => {
    return (
        <QuoteStack.Navigator>
            <QuoteStack.Screen name="Quotes"
            // options={{
            //     headerLeft: () => {
            //         return (<Icon name='settings-outline' type='ionicon' color={Colors.primaryBlue} size={30} containerStyle={{marginLeft: 20}} />)},
            //     headerTitleAlign: 'center',
            // }}
            component={QuoteScreen} />
        </QuoteStack.Navigator>
    )
};