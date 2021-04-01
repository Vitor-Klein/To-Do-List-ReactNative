import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ListPage from './pages/ListPage'

const AppStack = createStackNavigator()

const Routes = () => (
  <AppStack.Navigator headerMode="float" >
    <AppStack.Screen name="ListPage" component={ListPage} />
  </AppStack.Navigator>
)

export default Routes