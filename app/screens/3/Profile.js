import React from "react"
import { StyleSheet, View, FlatList } from "react-native"

import ListItemSeparator from "../../components/ListItemSeparator"
import colors from "../../config/colors"
import Icon from "../../components/Icon"
import routes from "../../navigation/routes"
import Screen from "../../components/Screen"
import UserSnip from "../../components/UserSnip"

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
]

function Profile({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <UserSnip
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          image={require("../../assets/user1.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <UserSnip
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <UserSnip
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
})

export default Profile