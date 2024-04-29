import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'



export default function DashboardScreen({navigation}:any) {
  return (
    <View>
      <Text>DashboardScreen</Text>
      <Button title="toggle drawer" onPress={()=>navigation.toggleDrawer()} ></Button>
      <Button title="Setting" onPress={()=>navigation.jumpTo("Setting")}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})