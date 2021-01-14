import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Messages from "../screens/3/Messages"
import Profile from "../screens/3/Profile"

const Stack = createStackNavigator()

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Messages" component={Messages} />
  </Stack.Navigator>
)

export default AccountNavigator
