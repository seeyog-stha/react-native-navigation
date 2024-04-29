import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Course from './TabScreen/Course'
import Profile from './TabScreen/Profile'
import Icons from './Icons'
import { AboutStack } from './AppStack'

const Tab=createBottomTabNavigator()

export default function App() {
  return (
   <NavigationContainer>
        <Tab.Navigator screenOptions={{
            // tabBarLabelPosition:"beside-icon"
            tabBarLabelPosition:"below-icon",
            tabBarShowLabel:true,
            tabBarActiveTintColor:"purple",
            tabBarInactiveTintColor:"orange",
        }}>
           < Tab.Screen name="Course" component={Course}
           options={{
            tabBarLabel:"my course",
            tabBarIcon:({color})=><Icons name="circle" color={color}/>,  
            tabBarBadge:4          
        }}
        
           />
           < Tab.Screen name="Profile" component={Profile}/>
           < Tab.Screen name="About stack" component={AboutStack} options={{headerShown:false}}/>
        </Tab.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})