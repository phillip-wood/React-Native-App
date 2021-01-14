import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import SearchResults from "../screens/2/SearchResults"
import ShoeFocus from "../screens/2/ShoeFocus"
import Home from "../screens/2/Home"
import Search from "../screens/2/Search"

const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} /> 
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen name="SearchResults" component={SearchResults} />
    <Stack.Screen name="ShoeFocus" component={ShoeFocus} />
  </Stack.Navigator>
)

export default FeedNavigator 
