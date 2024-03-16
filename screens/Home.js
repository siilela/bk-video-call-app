import React from 'react'
import { Button, View } from 'react-native'

const Home = ({navigation}) => {
  return (
    <View><Button title="Make call" onPress={navigation.navigate("About")}/></View>
  )
}

export default Home