import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Login from "../screens/1/Login"
import Register from "../screens/1/Register"
import Welcome from "../screens/1/Welcome"

const Stack = createStackNavigator()

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
)

export default AuthNavigator
