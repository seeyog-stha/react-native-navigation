import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function About({route}:any) {
    // we can use navigation as a props or we can use a hook called usenavigation 
    const navigation=useNavigation() as any

    // destructuring the name send by home 
    const {name}=route.params
  return (
    <View>
      <Text>About {name}</Text>
      {/* navigate to home  */}
      <Button title="go to home pagee" onPress={()=>navigation.navigate("Home")}></Button>

      {/* update the name while clicking  */}
      <Button title="update" onPress={()=>navigation.setParams({
        name:"update suyog "
      })}></Button>

      {/* go to home with some value  */}
      <Button title="go back with data" onPress={()=>navigation.navigate("Home",{
        result:"hi there"
      })}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})