import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Danhba from './Screen/Danhba'
import Login from './Screen/Login'
const App =()=> {
  return (
    <View style={styles.container}>
      <Login/>
     
      

    </View>
  )
}
export default App
const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})