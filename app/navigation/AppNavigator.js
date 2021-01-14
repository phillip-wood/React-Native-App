import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import AccountNavigator from "./AccountNavigator"
import ListingEdit from "../screens/ListingEdit"
import FeedNavigator from "./FeedNavigator"
import NewSneakerButton from "./NewSneakerButton"
import routes from "./routes"

const Tab = createBottomTabNavigator()

const AppNavigator = (props) => (
  <Tab.Navigator>
    <Tab.Screen
      name="Search"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="magnify" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEdit}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewSneakerButton
            onPress={() => navigation.navigate(routes.LISTING_EDIT)}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Profile"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
)

export default AppNavigator
