import 'react-native-gesture-handler'

import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
//import { AuthProvider } from './contexts/auth'

import Routes from './src/routes'

const App = () => {

return(
  <NavigationContainer> 
      <Routes />   
 </NavigationContainer>
    
  )
 
}

export default App
