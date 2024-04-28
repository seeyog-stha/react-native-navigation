import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './stackPages/Home';
import About from './stackPages/About'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* definint the routes for the screen  */}
        <Stack.Screen name="Home" component={Home} />
        {/* if no data is sent to about then initial params is displayed  */}
        <Stack.Screen name='About' component={About} initialParams={{name:"guest"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
