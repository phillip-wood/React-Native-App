import React from 'react'
import { NavigationContainer } from "@react-navigation/native"

import Screen from './app/components/Screen'

//partOne
import Welcome from './app/screens/1/Welcome'
import Login from './app/screens/1/Login'
import Register from './app/screens/1/Register'

//partTwo
import Home from './app/screens/2/Home'
import Search from './app/screens/2/Search'
import SearchResults from './app/screens/2/SearchResults'
import ShoeFocus from './app/screens/2/ShoeFocus'
import ViewImage from './app/screens/2/ViewImage'
import AppButton from './app/components/AppButton'
import ImageInput from './app/components/ImageInput'
import ImageInputList from './app/components/ImageInputList'
import ListingEdit from './app/screens/ListingEdit'
import AuthNavigator from './app/navigation/AuthNavigator'
import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator'

//partThree
// import ViewProfile from './app/screens/3/ViewProfile'

export default function App() {

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator/>
    </NavigationContainer>
  )
}