import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

export default function Home({navigation,route}:any) {
  // navigation and route are provided to each screen in native navigation 
  
  return (
    <View>
      <Text>Home</Text>
      <Text>{route.params?.result}</Text>
      {/* onpress navigate to the about screen and pass the value name  */}
      <Button title='go to about page' onPress={()=>navigation.navigate("About",{
        name:"suyog"
      })}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})