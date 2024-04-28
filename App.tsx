import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './stackPages/Home';
import About from './stackPages/About'
import { Text, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        //add style which will applied to all screen 
      }}>
        {/* definint the routes for the screen  */}
        <Stack.Screen name="Home" component={Home} options={{
          title:"welcome home",
          headerStyle:{
            backgroundColor:"blue"
          },
          headerTintColor:"white",
          headerTitleStyle:{fontWeight:"bold"},
          headerRight:()=>(
          <TouchableOpacity><Text style={{color:"white"}}>click me </Text></TouchableOpacity>
          ),
          contentStyle: {
            backgroundColor:"lightblue"
          }
        }}/>
        {/* if no data is sent to about then initial params is displayed  */}
        <Stack.Screen name='About' component={About} initialParams={{name:"guest"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
