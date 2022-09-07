import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StartPage from './src/screen/StartPage'
import SecondPage from './src/screen/SecondPage'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/navigation/StackNavigation'

const App = () => {
  return (
  <NavigationContainer>
    <StackNavigation/>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})