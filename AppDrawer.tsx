import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import DashboardScreen from './DashboardScreen/DashboardScreen'
import Setting from './DashboardScreen/Setting'

const Drawer =createDrawerNavigator()
export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={DashboardScreen} options={{
                title:"my dashboard",
                drawerLabel:"kasko dashboard",
                drawerActiveTintColor:"red",
                drawerActiveBackgroundColor:"green",
                drawerContentStyle:{
                    backgroundColor:"pink"
                }
            }}/>
            <Drawer.Screen name="Setting" component={Setting}/>
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})